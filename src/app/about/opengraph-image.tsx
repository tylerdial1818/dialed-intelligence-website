import { brandOgImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt =
  "About Dialed Intelligence. Built by people who measure before they build.";

export default async function Image() {
  return brandOgImage({
    eyebrow: "About",
    title: "Built by people who measure before they build.",
  });
}
