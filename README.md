# Dialed Intelligence — Website

Marketing site for Dialed Intelligence, a firm that designs and builds custom
data systems, AI agents, and automation that clients own outright.
Live at [dialedintelligence.com](https://dialedintelligence.com).

Built with Next.js 16 (App Router, static generation), React 19, Tailwind CSS 4,
and TypeScript. Content for the Insights section is markdown in
`content/insights/`. Deployed on Vercel.

---

## Commands

```bash
npm install        # install dependencies
npm run dev        # dev server at http://localhost:3000
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
npm run build      # production build (the primary gate)
```

Full-page screenshots of every route (requires a running dev server):

```bash
node scripts/screenshot.mjs http://localhost:3000 /tmp/di-screenshots
```

---

## Structure

```
src/app/                 routes, one folder per page in the sitemap
src/app/services/[slug]  the five service detail pages (one template, content props)
src/app/api/contact      contact form handler
src/components/          shared chrome and section bands
src/lib/site.ts          site-wide config (email, scheduler URL, LinkedIn)
src/lib/services/        service page content, one file per service
src/lib/og-fonts/        TTFs used only for Open Graph image generation
content/insights/        markdown posts (frontmatter: title, summary, date)
```

## Brand system

| Token | Value | Use |
|---|---|---|
| `ink` | `#2D2A2B` | text, dark sections |
| `paper` | `#E6E6E4` | page background |
| `paper-2` | `#F4F4F2` | cards on paper |
| `blue` | `#346AEA` | accent, links, CTAs, indices |
| `lime` | `#CDDD3C` | rare highlight, CTA band and dark-surface accents only |

Type: Space Grotesk (display), Hanken Grotesk (body), Space Mono (labels,
indices). Utilities `display-hero/1/2/3`, `label-mono`, `body-lg/md` are
defined in `src/app/globals.css`.

## Content rules

All rendered copy follows the binding rules in `CLAUDE.md` (no em-dashes,
semicolons, or colons in copy, banned vocabulary, sentence-case headlines,
concrete numbers). The source of truth for page copy is the outline document
kept one directory above this repo.

## Configuration

Set these in Vercel (all optional, the site works without them):

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SCHEDULER_URL` | Calendly (or equivalent) embed on /contact |
| `RESEND_API_KEY` | email delivery for the contact form |
| `CONTACT_TO_EMAIL` | where form submissions are sent |
| `CONTACT_FROM_EMAIL` | verified sender for form notifications |

Before launch, update the LinkedIn URL in `src/lib/site.ts` and supply a
founder photo for the About page.

## Publishing an insight

Add a markdown file to `content/insights/` with `title`, `summary`, and
`date` frontmatter. The index, post page, reading time, sitemap, and metadata
are generated from it at build time. Mind the copy rules, they apply to posts.
