import type { Metadata } from "next";
import { services } from "@/lib/services";
import { Container, Eyebrow, Index } from "@/components/primitives";
import { TextLink } from "@/components/cta";
import { ClosingCTA } from "@/components/bands";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Five areas cover most of what we are asked to build. Every engagement starts from a named problem and ends with working software you own.",
  alternates: { canonical: "/services" },
};

const intro =
  "Every engagement starts from a named problem and ends with working software you own. These five areas cover most of what we are asked to build. If your problem does not fit neatly into one of them, that is usually a sign it is interesting. Bring it to a working session.";

const architectureQuote =
  "Most clients start with one painful workflow or one unanswerable question. The systems compound from there. Agents work better on unified data. Pricing works better with live inventory. Everything works better when you own the whole stack and nothing is fighting a vendor's API limits.";

const diagramModules = [
  "Operations automation",
  "Inventory intelligence",
  "Dynamic pricing",
];

/**
 * Architecture sketch built from bordered blocks and hairlines only.
 * The data system is the foundation, the three modules sit on top of it,
 * and the automation platform is the chassis the client's team drives.
 */
function ArchitectureDiagram() {
  return (
    <figure>
      <div className="rounded-[5px] border border-ink/20 bg-paper-2/40 p-5 sm:p-8">
        {/* Chassis */}
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 rounded-[2px] border border-ink/20 bg-paper-2 px-4 py-4 sm:px-5">
          <span className="flex items-center gap-3">
            <span aria-hidden="true" className="size-[7px] shrink-0 bg-blue" />
            <span className="label-mono-sm text-ink">
              Your own automation platform
            </span>
          </span>
          <span className="label-mono-sm text-ink/70">Driven by your team</span>
        </div>

        {/* Connectors, chassis to modules */}
        <div aria-hidden="true" className="grid grid-cols-3">
          <span className="mx-auto h-6 w-px bg-ink/25" />
          <span className="mx-auto h-6 w-px bg-ink/25" />
          <span className="mx-auto h-6 w-px bg-ink/25" />
        </div>

        {/* Modules */}
        <ul className="grid grid-cols-3 gap-2 sm:gap-3">
          {diagramModules.map((label) => (
            <li
              key={label}
              className="flex min-h-[104px] flex-col justify-between gap-4 rounded-[2px] border border-ink/20 bg-paper-2 p-3 sm:min-h-[120px] sm:p-4"
            >
              <span aria-hidden="true" className="size-[7px] bg-blue" />
              <span className="label-mono-sm text-ink">{label}</span>
            </li>
          ))}
        </ul>

        {/* Connectors, modules to foundation */}
        <div aria-hidden="true" className="grid grid-cols-3">
          <span className="mx-auto h-6 w-px bg-ink/25" />
          <span className="mx-auto h-6 w-px bg-ink/25" />
          <span className="mx-auto h-6 w-px bg-ink/25" />
        </div>

        {/* Foundation */}
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 rounded-[2px] bg-ink px-4 py-5 text-paper sm:px-5">
          <span className="flex items-center gap-3">
            <span aria-hidden="true" className="size-[7px] shrink-0 bg-lime" />
            <span className="label-mono-sm">Unified data systems</span>
          </span>
          <span className="label-mono-sm text-paper/60">The foundation</span>
        </div>
      </div>
      <figcaption className="label-mono-sm mt-4 text-ink/70">
        Every module reads from the same foundation, and you own every layer.
      </figcaption>
    </figure>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section aria-labelledby="services-title">
        <Container className="pb-16 pt-16 lg:pb-20 lg:pt-24">
          <Eyebrow>Services</Eyebrow>
          <h1
            id="services-title"
            className="mt-8 max-w-4xl font-display text-[clamp(2.4rem,5.4vw,4.75rem)] font-medium leading-[0.97] tracking-[-0.035em] text-balance"
          >
            We build the systems your operation is missing.
          </h1>
          <p className="body-lg mt-8 max-w-2xl text-ink/75">{intro}</p>
        </Container>
      </section>

      {/* The architecture story */}
      <section aria-labelledby="architecture-title" className="border-t border-ink/15">
        <Container className="py-24 lg:py-32">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-20">
            <Reveal>
              <Eyebrow>How the systems fit</Eyebrow>
              <h2 id="architecture-title" className="display-2 mt-6 max-w-xl">
                The data system is the foundation. Everything else compounds on
                top of it.
              </h2>
              <p className="body-lg mt-6 max-w-xl text-ink/70">
                {architectureQuote}
              </p>
            </Reveal>
            <Reveal delay={100}>
              <ArchitectureDiagram />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Five service blocks */}
      <section aria-labelledby="service-list-title" className="border-t border-ink/15">
        <Container className="py-24 lg:py-32">
          <Reveal>
            <Eyebrow>Five service areas</Eyebrow>
            <h2 id="service-list-title" className="display-1 mt-5 max-w-3xl">
              Each one starts from a named problem
            </h2>
          </Reveal>
          <div className="mt-14 border-t border-ink/20">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 60}>
                <article
                  aria-labelledby={`service-row-${service.slug}`}
                  className="grid grid-cols-1 gap-x-10 gap-y-6 border-b border-ink/20 py-12 transition-colors duration-300 hover:bg-paper-2 lg:grid-cols-[64px_minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-x-14"
                >
                  <Index n={service.index} />
                  <div>
                    <h3 id={`service-row-${service.slug}`} className="display-2">
                      {service.title}
                    </h3>
                    <p className="label-mono-sm mt-4 text-ink/70">
                      Typical engagement {service.engagement.duration.toLowerCase()}
                    </p>
                  </div>
                  <div>
                    <p className="body-lg max-w-2xl text-ink/80">
                      {service.problemStatement}
                    </p>
                    <p className="body-md mt-3 max-w-2xl text-ink/70">
                      {service.card}
                    </p>
                    <div className="mt-6">
                      <TextLink href={`/services/${service.slug}`}>
                        Read the full picture
                      </TextLink>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ClosingCTA />
    </>
  );
}
