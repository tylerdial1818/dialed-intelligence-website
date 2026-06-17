import { brandOgImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt =
  "Dialed Intelligence services. Each system starts as a question worth answering.";

export default async function Image() {
  return brandOgImage({
    eyebrow: "Services",
    title: "Every system here starts as a question worth answering.",
  });
}
