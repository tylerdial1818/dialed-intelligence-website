# Brand webfonts (active)

The R5 brand type system is licensed and self-hosted. This folder holds the
**WOFF2** files the site serves, loaded by the `@font-face` block at the top of
`src/app/globals.css` and mapped to roles in `@theme`:

- **Headlines, hero, and body** -> `Helvetica Neue LT Std`, **regular width**,
  via `--font-display` and `--font-sans`
- **Labels, dates, data** -> `Helvetica Monospaced Pro`, via `--font-mono`

Each family lists the system Helvetica stack as a fallback while the webfont
loads (`font-display: swap`).

Note on width: the brand book also offers an **Extended** cut for headlines. It
is available in the source library but intentionally not used; the regular width
is preferred. To use it, convert the `*Ex`/`*ExO` OTFs to WOFF2, add a
`Helvetica Neue LT Std Ext` `@font-face` set, and point `--font-display` at it.

## Where the sources live

The licensed **OTF** originals (the full Helvetica Neue LT super-family plus
Helvetica Monospaced Pro) are kept in `fonts-src/DI_Fonts/` at the repo root.
That folder is **not** under `public/`, so it is not web-served or deployed; it
is the source of truth for regenerating or adding weights.

## Files served here (7)

`HelveticaNeueLTStd-Roman` (400), `-It` (400 italic), `-Md` (500), `-MdIt`
(500 italic), `-Bd` (700), `-BdIt` (700 italic), and `HelveticaMonospacedPro-Rg`
(400).

## Adding or regenerating a weight

Convert the OTF source to WOFF2 with fonttools, then add an `@font-face` rule in
`globals.css`:

```bash
pip install fonttools brotli
python3 -c "from fontTools.ttLib import TTFont; f=TTFont('fonts-src/DI_Fonts/HelveticaNeueLTStd-Bd.otf'); f.flavor='woff2'; f.save('public/fonts/HelveticaNeueLTStd-Bd.woff2')"
```

## Note on the social cards

The OG image generator (`src/lib/og.tsx`) renders server-side with Satori, which
needs OTF/TTF buffers (not WOFF2). It bundles two OTFs in `src/lib/og-fonts/`
(`HelveticaNeueLTStd-Md` for the title and footer, `HelveticaMonospacedPro-Rg`
for the eyebrow and url), copied from `fonts-src/DI_Fonts`. Independent of this
folder.
