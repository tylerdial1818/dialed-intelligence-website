#!/bin/bash
# Copy-rules guardrail hook (PostToolUse on Write|Edit)
# Enforces the deterministic subset of the site's binding copy rules
# (see CLAUDE.md "Binding Copy Rules" and the outline, Section 4).
# The judgment-laden rules (colons in prose, AI-tells, voice) belong to
# the copy-editor agent — this hook only flags what grep can prove.
#
# Exit 2 = hard violation, message fed back to Claude to fix immediately
# Exit 0 = clean or warnings only

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_response.filePath // .tool_input.file_path // empty' 2>/dev/null)

[ -z "$FILE_PATH" ] && exit 0
[ ! -f "$FILE_PATH" ] && exit 0

# Only police files that contain rendered site copy
case "$FILE_PATH" in
  */src/app/*.tsx|*/src/components/*.tsx|*/content/*.md|*/content/*.mdx) ;;
  *) exit 0 ;;
esac

ERRORS=""
WARNINGS=""

# HARD RULE: never name the white-labeled platform, in any file, ever
if grep -qiE "activepieces" "$FILE_PATH"; then
  ERRORS="${ERRORS}VIOLATION: '$FILE_PATH' names the white-labeled platform. This must never appear anywhere on the site. Remove it now.\n"
fi

# HARD RULE: no em-dashes in rendered copy (almost never legitimate in code either)
if grep -q "—" "$FILE_PATH"; then
  ERRORS="${ERRORS}VIOLATION: em-dash found in '$FILE_PATH'. Binding copy rule 1 forbids em-dashes in rendered copy. Restructure the sentence with periods and commas.\n"
fi

# Banned vocabulary (word-boundary, case-insensitive).
# 'transform' is checked only in markdown — in .tsx it collides with CSS/Tailwind.
BANNED_COMMON="solutions|leverage|unlock|seamless|cutting-edge|empower|revolutionize|synergy|end-to-end|best-in-class|AI-powered"
if echo "$FILE_PATH" | grep -qE "\.(md|mdx)$"; then
  BANNED="${BANNED_COMMON}|transform"
  # Markdown is pure copy, so punctuation rules apply to the whole file
  if grep -q ";" "$FILE_PATH"; then
    WARNINGS="${WARNINGS}WARNING: semicolon found in markdown copy '$FILE_PATH'. Binding copy rule 1 forbids semicolons in rendered copy.\n"
  fi
else
  BANNED="$BANNED_COMMON"
fi

MATCHES=$(grep -oiE "\b(${BANNED})\b" "$FILE_PATH" 2>/dev/null | sort -u | tr '\n' ' ')
if [ -n "$MATCHES" ]; then
  WARNINGS="${WARNINGS}WARNING: banned vocabulary in '$FILE_PATH': ${MATCHES}. See CLAUDE.md Binding Copy Rules. If these words appear in code identifiers rather than rendered copy, ignore this warning.\n"
fi

if [ -n "$ERRORS" ]; then
  printf "%b" "$ERRORS" >&2
  [ -n "$WARNINGS" ] && printf "%b" "$WARNINGS" >&2
  echo "[$(date -u +%Y-%m-%dT%H:%M:%SZ)] COPY_RULES_BLOCK: $FILE_PATH" >> .claude/audit.log
  exit 2
fi

if [ -n "$WARNINGS" ]; then
  printf "%b" "$WARNINGS" >&2
fi

exit 0
