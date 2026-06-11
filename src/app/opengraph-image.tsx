import { brandOgImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt =
  "Dialed Intelligence. We build the software your business is missing. You own every line of it.";

export default async function Image() {
  return brandOgImage({
    eyebrow: "Custom systems. Built in weeks. Owned by you.",
    title:
      "We build the software your business is missing. You own every line of it.",
  });
}
