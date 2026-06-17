import { brandOgImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt =
  "Dialed Intelligence. We find your most valuable question and build the AI that answers it.";

export default async function Image() {
  return brandOgImage({
    eyebrow: "Strategy that ends in a running system. Owned by you.",
    title:
      "We find your most valuable question and build the AI that answers it.",
  });
}
