# Dialed Intelligence Website

## Project Overview
Marketing website for Dialed Intelligence, a firm that builds custom internal
software (data systems, AI agents, automation) that clients own outright.
Static-first Next.js site, eleven pages, copy-driven. The brand voice and
page-by-page copy are the product here as much as the code.

**Source of truth for all content:** `../dialed-intelligence-website-outline.md`
(one directory above the repo root, intentionally not tracked in git).
Read it before building or editing any page. It contains the sitemap, draft
copy written to final-copy standard, and binding copy rules. Never invent
copy that contradicts it.

## Tech Stack
- Language: TypeScript 5 / Node 20+
- Framework: Next.js 16 (App Router, static generation) + React 19
- Styling: Tailwind CSS 4
- Content: Markdown files in `content/insights/` for the Insights section
- Testing: `npm run build` is the primary gate (static site). Add vitest only when logic warrants it.
- Linting: ESLint 9 (eslint-config-next) + `npm run typecheck`
- Hosting: Vercel (dialedintelligence.com)

## Directory Structure
- src/app/          routes (App Router) — one folder per page in the sitemap
- src/components/   shared components (CTA block, ownership band, process strip, service page template)
- src/lib/          utilities, markdown loading for insights
- content/insights/ markdown posts for /insights
- public/           static assets, OG images
- .claude/          agent configuration (DO NOT modify during development sessions)

## Sitemap (all v1 routes)
`/`, `/services`, `/services/data-systems`, `/services/operations-automation`,
`/services/automation-platform`, `/services/inventory`, `/services/pricing`,
`/ownership`, `/approach`, `/about`, `/insights`, `/contact`
Plus `sitemap.xml` and `robots.txt`.

## Commands
- Install deps:     npm install
- Dev server:       npm run dev        (http://localhost:3000)
- Lint:             npm run lint
- Typecheck:        npm run typecheck
- Production build: npm run build      (the smoke test — must pass before any commit)
- Environment check: bash init.sh

## Binding Copy Rules (from the outline, enforced by hook)
These apply to ALL rendered copy: headlines, body, buttons, alt text, meta
descriptions, OG text. Violations are flagged by `.claude/hooks/copy-rules-check.sh`.

1. **No em-dashes, semicolons, or colons in rendered copy.** Restructure the
   sentence. Periods and commas only.
2. **Banned vocabulary:** solutions, consulting (as a noun for what we sell),
   leverage, unlock, seamless, cutting-edge, empower, transform, revolutionize,
   synergy, end-to-end, best-in-class, "in today's fast-paced world",
   "AI-powered" as a standalone selling point.
3. **Never name Activepieces** or any white-labeled component, anywhere.
4. No AI-tells: "it's not just X, it's Y", "in a world where", rule-of-three
   adjective stacks, LinkedIn-thinkpiece openers.
5. Numbers concrete and specific: "twenty hours a week", "three to eight weeks",
   "$2.5M to $25M".
6. Buttons say what happens: "Book a Working Session", never "Get Started".
7. Sentence case headlines. Exception: "Build it. You own it."
8. "Build it, you own it" (or "Build it. You own it.") appears at least once
   on every page.
9. No pricing anywhere in v1. Durations are fine.
10. The site speaks as a firm: always "we", never "I".

## Design Constraints
- Static-first, minimal client JS, fast LCP. Server components by default;
  `"use client"` only where interactivity demands it.
- Accessibility floor: visible focus states, sufficient contrast,
  prefers-reduced-motion respected, semantic landmarks.
- Unique title + meta description per page (no colons in them either).
- Service detail pages are ONE shared template fed by content props.
  Reusable components: CTA block, ownership statement band, four-step
  process strip.

## Workflow Sequence
Each feature follows this pipeline. Do not skip steps.

1. **frontend-dev** (or **backend-dev** for the contact form API) implements on a feature branch and commits
2. **copy-editor** reviews all rendered copy against the Binding Copy Rules and the outline (read-only)
3. **qa-agent** verifies acceptance criteria from feature_list.json and updates it
4. **code-reviewer** reviews the diff (read-only)
   - Must Fix items → loop back to the implementing agent
5. **security-reviewer** audits before PR (read-only) — mainly the contact form route and any headers/config
6. Open a PR. GitHub Actions runs lint, secret scan, and the production build
7. After CI passes and reviews are clean, merge with `gh pr merge --squash --delete-branch`

## Agent Domain Routing
- frontend-dev: pages, components, styling, markdown rendering — most of the work here
- backend-dev: the contact form route handler (validation, spam protection, email delivery), sitemap/robots generation
- copy-editor: reviews rendered copy against the outline and the Binding Copy Rules (read-only)
- qa-agent: verifies features against feature_list.json acceptance steps
- code-reviewer: post-implementation quality review (read-only)
- security-reviewer: security audit before PRs (read-only)

When implementing features that span multiple domains, spawn parallel agents
for independent work. Run sequentially when tasks depend on each other.

## Parallelism Rules
Run agents in parallel when tasks are in independent domains.
Run agents sequentially when:
- Task B depends on output from Task A
- Tasks touch the same files
- One task is a review of another's output
Build shared components BEFORE the pages that consume them.

## Definition of Done
A feature is complete ONLY when ALL of the following are true:
1. `npm run lint` passes with zero warnings
2. `npm run typecheck` passes
3. `npm run build` succeeds (static generation completes for every route)
4. Copy matches the outline and violates none of the Binding Copy Rules
5. No secrets or credentials appear in any diff
6. feature_list.json shows "passes": true for the feature
7. code-reviewer reports no Must Fix items
8. security-reviewer reports no CRITICAL findings
9. A descriptive commit has been written
10. claude-progress.txt has been updated

## Forbidden Operations (all agents)
- rm -rf on any path
- Direct commits to main branch
- Writing to .env files or any secrets directory
- Deploying to production (`vercel --prod`) — human-triggered only
- Naming Activepieces or any white-labeled vendor in any file that ships

## Context Management
- Run /compact when context reaches approximately 50 percent
- Each agent session must end with a claude-progress.txt update
- Run /clear before switching to an unrelated task mid-session
