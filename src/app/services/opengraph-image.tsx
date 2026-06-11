import { brandOgImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt =
  "Dialed Intelligence services. We build the systems your operation is missing.";

export default async function Image() {
  return brandOgImage({
    eyebrow: "Services",
    title: "We build the systems your operation is missing.",
  });
}
