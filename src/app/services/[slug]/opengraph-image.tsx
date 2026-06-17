import { services, getService } from "@/lib/services";
import { brandOgImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "A Dialed Intelligence service, built in weeks and owned by you.";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  return brandOgImage({
    eyebrow: service?.title ?? "Services",
    title: service?.headline ?? "Every system here starts as a question worth answering.",
  });
}
