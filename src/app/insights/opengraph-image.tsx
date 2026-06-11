import { brandOgImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt =
  "Dialed Intelligence insights. Thinking that survives contact with production.";

export default async function Image() {
  return brandOgImage({
    eyebrow: "Insights",
    title: "Thinking that survives contact with production.",
  });
}
