import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

/**
 * Shared OG image builder. Every opengraph-image.tsx route calls
 * brandOgImage with a page-specific eyebrow and title.
 *
 * Future addition. Per-post OG images for /insights/[slug]. Posts
 * currently inherit the /insights image through the route tree, which
 * is acceptable at v1.
 */

export const ogSize = { width: 1200, height: 630 };

// The D-mark path, copied verbatim from src/components/logo.tsx so this
// module stays self-contained for the image runtime.
const MARK_PATH =
  "M18 0 L80 0 A50 50 0 0 1 80 100 L18 100 A18 18 0 0 1 0 82 L0 18 A18 18 0 0 1 18 0 Z M56 0 L68 0 L68 44 L130 44 L130 56 L68 56 L68 100 L56 100 L56 56 L0 56 L0 44 L56 44 Z";

const INK = "#2D2A2B";
const PAPER = "#E6E6E4";
const BLUE = "#346AEA";
const LIME = "#CDDD3C";

async function loadFonts() {
  const dir = path.join(process.cwd(), "src", "lib", "og-fonts");
  const [montreal, mono] = await Promise.all([
    readFile(path.join(process.cwd(), "src", "fonts", "PPNeueMontreal-Medium.otf")),
    readFile(path.join(dir, "space-mono-v17-latin-regular.ttf")),
  ]);
  return [
    {
      name: "PP Neue Montreal",
      data: montreal,
      weight: 500 as const,
      style: "normal" as const,
    },
    {
      name: "Space Mono",
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
            height={55}
            viewBox="0 0 130 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fillRule="evenodd" fill={BLUE} d={MARK_PATH} />
          </svg>
          <div
            style={{
              display: "flex",
              fontFamily: "Space Mono",
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
            fontFamily: "PP Neue Montreal",
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
              fontFamily: "PP Neue Montreal",
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
              fontFamily: "Space Mono",
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
