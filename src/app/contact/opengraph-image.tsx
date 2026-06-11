import { brandOgImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Start a conversation with Dialed Intelligence. Bring us the problem.";

export default async function Image() {
  return brandOgImage({
    eyebrow: "Start a conversation",
    title: "Bring us the problem.",
  });
}
