import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { MARK_PATH, MARK_VIEWBOX } from "@/lib/brand";

/**
 * Shared OG image builder. Every opengraph-image.tsx route calls
 * brandOgImage with a page-specific eyebrow and title.
 *
 * Future addition. Per-post OG images for /insights/[slug]. Posts
 * currently inherit the /insights image through the route tree, which
 * is acceptable at v1.
 */

export const ogSize = { width: 1200, height: 630 };

// The official iD mark comes from the shared brand module so the social cards
// never drift from the header, footer, and favicon.

const INK = "#2D2A2B";
const PAPER = "#E9E9EA";
const BLUE = "#346AEA";
const LIME = "#CDDD3C";

// The real R5 brand fonts, bundled for the image runtime (which has no system
// fonts). Copied from fonts-src/DI_Fonts into og-fonts. The title and footer
// label use Helvetica Neue LT regular width; the eyebrow and url use Helvetica
// Monospaced Pro.
async function loadFonts() {
  const dir = path.join(process.cwd(), "src", "lib", "og-fonts");
  const [sans, mono] = await Promise.all([
    readFile(path.join(dir, "HelveticaNeueLTStd-Md.otf")),
    readFile(path.join(dir, "HelveticaMonospacedPro-Rg.otf")),
  ]);
  return [
    {
      name: "Helvetica Neue LT Std",
      data: sans,
      weight: 500 as const,
      style: "normal" as const,
    },
    {
      name: "Helvetica Monospaced Pro",
      data: mono,
      weight: 400 as const,
      style: "normal" as const,
    },
  ];
}

export async function brandOgImage({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  const fonts = await loadFonts();
  const titleSize = title.length > 60 ? 56 : 76;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: INK,
          padding: "64px 72px 56px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <svg
            width={72}
            height={58}
            viewBox={MARK_VIEWBOX}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill={BLUE} d={MARK_PATH} />
          </svg>
          <div
            style={{
              display: "flex",
              fontFamily: "Helvetica Monospaced Pro",
              fontSize: 24,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: LIME,
            }}
          >
            {eyebrow}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Helvetica Neue LT Std",
            fontWeight: 500,
            fontSize: titleSize,
            lineHeight: 1.02,
            letterSpacing: -2,
            color: PAPER,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(230,230,228,0.25)",
            paddingTop: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "Helvetica Neue LT Std",
              fontWeight: 500,
              fontSize: 26,
              color: PAPER,
            }}
          >
            Dialed Intelligence
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Helvetica Monospaced Pro",
              fontSize: 22,
              color: "rgba(230,230,228,0.6)",
            }}
          >
            dialedintelligence.com
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts,
    },
  );
}
