import { brandOgImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt =
  "Dialed Intelligence. We find what is costing you most, then build the system that fixes it.";

export default async function Image() {
  return brandOgImage({
    eyebrow: "Strategy that ends in a running system. Owned by you.",
    title:
      "We find what is costing you most, then build the system that fixes it.",
  });
}
