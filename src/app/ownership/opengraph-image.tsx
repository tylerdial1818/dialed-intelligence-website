import { brandOgImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "The Dialed Intelligence ownership model. Build it. You own it.";

export default async function Image() {
  return brandOgImage({
    eyebrow: "The Ownership Model",
    title: "Build it. You own it.",
  });
}
