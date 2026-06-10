#!/bin/bash
# Pre-bash guardrail hook
# Claude Code passes hook input as JSON on stdin:
#   {"tool_name":"Bash","tool_input":{"command":"..."}}
# Exit 2 = block the command and show the stderr message to Claude
# Exit 0 = allow

INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command // empty' 2>/dev/null)

# If we could not parse a command, allow rather than break every Bash call
if [ -z "$COMMAND" ]; then
  exit 0
fi

# Block output redirection to sensitive paths
if echo "$COMMAND" | grep -qE ">\s*\.env|>\s*secrets/|>\s*credentials/"; then
  echo "BLOCKED: Output redirection to a sensitive path is not allowed." >&2
  exit 2
fi

# Block cp/mv targeting sensitive paths
if echo "$COMMAND" | grep -qE "(cp|mv)\s+.*\s+\.env|( cp| mv)\s+.*\s+secrets/|( cp| mv)\s+.*\s+credentials/"; then
  echo "BLOCKED: Copying or moving files to sensitive paths is not allowed." >&2
  exit 2
fi

# Block production deploys — vercel --prod, promote, rollback are human-triggered only.
# (Deliberately narrow: a bare word like "production" in a commit message must not trip this.)
if echo "$COMMAND" | grep -qE "vercel\s+.*--prod|--prod\b.*vercel|vercel\s+(promote|rollback)"; then
  echo "BLOCKED: Production deploys are human-triggered only. Preview deploys (vercel) are fine." >&2
  exit 2
fi

# curl/wget: allow localhost smoke tests, block external fetches
if echo "$COMMAND" | grep -qE "\b(curl|wget)\b" && ! echo "$COMMAND" | grep -qE "\b(curl|wget)\b[^|;&]*(localhost|127\.0\.0\.1)"; then
  echo "BLOCKED: curl/wget to external URLs is not allowed. localhost is fine." >&2
  exit 2
fi

# Allow --force-with-lease explicitly, block all other force pushes
if echo "$COMMAND" | grep -qE "git push.*--force-with-lease"; then
  : # allowed, fall through to logging
elif echo "$COMMAND" | grep -qE "git push.*--force|git push.*\s-[a-zA-Z]*f"; then
  echo "BLOCKED: Force push is not allowed. Use --force-with-lease if necessary and confirm with the user." >&2
  exit 2
fi

# Block direct pushes to main or master (anchored to end of command or followed by space)
if echo "$COMMAND" | grep -qE "git push\s+\S+\s+(main|master)(\s|$)"; then
  echo "BLOCKED: Direct push to main/master is not allowed. Open a PR instead." >&2
  exit 2
fi

# Block recursive deletion
if echo "$COMMAND" | grep -qE "rm\s+-[a-zA-Z]*r[a-zA-Z]*f|rm\s+-[a-zA-Z]*f[a-zA-Z]*r"; then
  echo "BLOCKED: Recursive deletion is not permitted. Remove files individually or ask the user to perform deletion." >&2
  exit 2
fi

# Log all bash commands for audit trail
echo "[$(date -u +%Y-%m-%dT%H:%M:%SZ)] CMD: $COMMAND" >> .claude/audit.log

exit 0
