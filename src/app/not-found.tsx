import type { Metadata } from "next";
import { LogoMark } from "@/components/logo";
import { Container, Index } from "@/components/primitives";
import { CTA, TextLink } from "@/components/cta";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "This page does not exist. The address may have changed, or it never shipped.",
};

export default function NotFound() {
  return (
    <section aria-labelledby="not-found-title" className="relative overflow-hidden">
      <LogoMark
        width={480}
        className="pointer-events-none absolute -right-12 top-24 hidden text-ink/5 lg:block"
      />
      <Container className="relative py-32">
        <Index n="404" />
        <h1 id="not-found-title" className="display-hero mt-6 max-w-3xl">
          This page does not exist.
        </h1>
        <p className="body-lg mt-8 max-w-xl text-ink/75">
          The address may have changed, or it never shipped.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
          <CTA href="/">Back to the home page</CTA>
          <TextLink href="/contact">Start a conversation</TextLink>
        </div>
      </Container>
    </section>
  );
}
