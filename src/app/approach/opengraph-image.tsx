import { brandOgImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt =
  "How Dialed Intelligence works. A process designed so you can stop at any point and still be glad you started.";

export default async function Image() {
  return brandOgImage({
    eyebrow: "How we work",
    title:
      "A process designed so you can stop at any point and still be glad you started.",
  });
}
