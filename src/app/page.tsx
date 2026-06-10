import Link from "next/link";
import { LogoMark } from "@/components/logo";
import { Container, Eyebrow, SectionHeader } from "@/components/primitives";
import { CTA, TextLink } from "@/components/cta";
import { ClosingCTA, OwnershipBand, ProcessStrip, Marquee } from "@/components/bands";
import { Reveal } from "@/components/reveal";

const heroProofPoints = [
  "Fixed price builds",
  "Working software in three to eight weeks",
  "No recurring license, ever",
];

const marqueeItems = [
  "OPERATIONS AUTOMATION",
  "UNIFIED DATA SYSTEMS",
  "AI AGENTS",
  "INVENTORY INTELLIGENCE",
  "DYNAMIC PRICING",
  "WORKFLOW PLATFORMS",
  "HUMAN IN THE LOOP",
  "FIXED PRICE BUILDS",
];

// Card copy is specified in the outline's Home section and is independent
// of the service detail content files.
const serviceCards = [
  {
    href: "/services/operations-automation",
    title: "Operations Automation",
    desc: "Repetitive work between your systems, handled by agents your team supervises.",
  },
  {
    href: "/services/data-systems",
    title: "Unified Data Systems",
    desc: "Every source of truth in one place. Ask your business plain-English questions and trust the answers.",
  },
  {
    href: "/services/automation-platform",
    title: "Your Own Automation Platform",
    desc: "A workflow automation platform deployed on your infrastructure, under your brand, with no per-seat license ever.",
  },
  {
    href: "/services/inventory",
    title: "Inventory Intelligence",
    desc: "Reorder logic built around how your business actually works, not a template.",
  },
  {
    href: "/services/pricing",
    title: "Dynamic Pricing",
    desc: "Margin recovery across the long tail of your catalog, driven by real demand modeling.",
  },
];

const disciplines = [
  "Econometrics",
  "Investment banking",
  "Management consulting",
  "Production AI engineering",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-title">
        <Container className="pb-14 pt-16 lg:pb-16 lg:pt-24">
          <Eyebrow>Custom data systems, AI agents, and automation</Eyebrow>
          <div className="mt-9 grid grid-cols-1 items-end gap-12 lg:grid-cols-[minmax(0,1fr)_270px]">
            <div>
              <h1
                id="hero-title"
                className="font-display text-[clamp(2.6rem,6.4vw,5.5rem)] font-semibold leading-[0.97] tracking-[-0.035em] text-balance"
              >
                We build the software your business is missing.{" "}
                <em className="text-blue">You own every line of it.</em>
              </h1>
              <p className="body-lg mt-8 max-w-xl text-ink/65">
                Dialed Intelligence designs and builds custom data systems, AI
                agents, and automation for companies that are done renting
                software and done paying for advice nobody executes.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
                <CTA href="/contact" event="cta_book_session">
                  Book a Working Session
                </CTA>
                <TextLink href="/services">See the work we do</TextLink>
              </div>
            </div>
            <div className="hidden justify-end lg:flex">
              <LogoMark width={250} className="text-ink" />
            </div>
          </div>
          <ul className="mt-14 flex flex-wrap gap-x-10 gap-y-3 border-t border-ink/15 pt-6 lg:mt-16">
            {heroProofPoints.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <span aria-hidden="true" className="size-[6px] bg-blue" />
                <span className="label-mono-sm text-ink/60">{point}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Marquee items={marqueeItems} />

      {/* The triangulation */}
      <section aria-labelledby="third-option-title">
        <Container className="py-24 lg:py-32">
          <Reveal>
            <SectionHeader
              eyebrow="A third option"
              title={
                <span id="third-option-title">
                  Two familiar models. Each does half the job.
                </span>
              }
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
            <Reveal className="flex">
              <article className="flex flex-col rounded-[5px] border border-ink/15 bg-paper-2 p-8 lg:p-10">
                <span className="font-mono text-sm text-blue">[01]</span>
                <h3 className="display-3 mt-14 lg:mt-20">
                  Consultancies analyze.
                </h3>
                <p className="body-md mt-4 text-ink/65">
                  They map your problems with real rigor, then hand you a deck
                  and a recommendation. Execution is left to you.
                </p>
              </article>
            </Reveal>
            <Reveal delay={80} className="flex">
              <article className="flex flex-col rounded-[5px] border border-ink/15 bg-paper-2 p-8 lg:p-10">
                <span className="font-mono text-sm text-blue">[02]</span>
                <h3 className="display-3 mt-14 lg:mt-20">
                  Software companies productize.
                </h3>
                <p className="body-md mt-4 text-ink/65">
                  They ship working tools built for their average customer. You
                  rent access forever and adapt your business to their roadmap.
                </p>
              </article>
            </Reveal>
            <Reveal delay={160} className="flex">
              <article className="relative flex flex-col overflow-hidden rounded-[5px] bg-ink p-8 text-paper lg:p-10">
                <LogoMark
                  width={220}
                  className="pointer-events-none absolute -bottom-12 -right-10 text-paper/6"
                />
                <span className="font-mono text-sm text-lime">[03]</span>
                <h3 className="display-3 relative mt-14 lg:mt-20">
                  We do both halves.
                </h3>
                <p className="body-md relative mt-4 text-paper/70">
                  We diagnose your operation like a strategy firm, then build
                  the exact system the diagnosis calls for. When we hand it
                  over, it is yours. The code, the data, the asset.
                </p>
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* What we build */}
      <section aria-labelledby="what-we-build-title" className="border-t border-ink/15">
        <Container className="py-24 lg:py-32">
          <Reveal>
            <SectionHeader
              eyebrow="What we build"
              title={<span id="what-we-build-title">Five systems, one standard</span>}
              right={<TextLink href="/services">The full services picture</TextLink>}
            />
          </Reveal>
          <div className="mt-14 border-t border-ink/20">
            {serviceCards.map((card, i) => (
              <Reveal key={card.href} delay={i * 60}>
                <Link
                  href={card.href}
                  className="group grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2 border-b border-ink/20 py-7 transition-all duration-300 hover:bg-ink hover:px-6 hover:text-paper sm:grid-cols-[64px_minmax(0,1.1fr)_minmax(0,1fr)_40px] sm:gap-8"
                >
                  <span className="font-mono text-sm text-blue sm:col-start-1">
                    [{String(i + 1).padStart(2, "0")}]
                  </span>
                  <h3 className="display-2 col-span-2 sm:col-span-1">
                    {card.title}
                  </h3>
                  <p className="body-md col-span-2 text-ink/60 group-hover:text-paper/65 sm:col-span-1">
                    {card.desc}
                  </p>
                  <span
                    aria-hidden="true"
                    className="hidden text-right font-display text-2xl sm:block"
                  >
                    &#8599;
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <OwnershipBand />

      {/* How an engagement works */}
      <section aria-labelledby="engagement-title">
        <Container className="py-24 lg:py-32">
          <Reveal>
            <SectionHeader
              eyebrow="How an engagement works"
              title={
                <span id="engagement-title">
                  Useful at every step, even the free one
                </span>
              }
              right={<TextLink href="/approach">Our approach in full</TextLink>}
            />
          </Reveal>
          <div className="mt-14">
            <ProcessStrip />
          </div>
        </Container>
      </section>

      {/* Credibility strip. Becomes result cards with hard numbers as case
          studies land. Keep the section shell when swapping content. */}
      <section aria-labelledby="credibility-title" className="border-t border-ink/15">
        <Container className="py-24 lg:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
            <Reveal>
              <Eyebrow>Who does the work</Eyebrow>
              <h2 id="credibility-title" className="display-2 mt-6 max-w-2xl text-balance">
                Built by practitioners with backgrounds in econometrics,
                investment banking, management consulting, and production AI
                engineering.
              </h2>
              <p className="body-lg mt-6 max-w-xl text-ink/65">
                We have shipped multi-agent systems, unified data platforms,
                and automation for organizations from research consultancies
                to PE-backed operators.
              </p>
              <div className="mt-8">
                <TextLink href="/about">Where the firm comes from</TextLink>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <ul className="border-t border-ink/20">
                {disciplines.map((d, i) => (
                  <li
                    key={d}
                    className="flex items-baseline gap-5 border-b border-ink/20 py-5"
                  >
                    <span className="font-mono text-sm text-blue">
                      [{String(i + 1).padStart(2, "0")}]
                    </span>
                    <span className="font-display text-xl font-medium tracking-tight">
                      {d}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <ClosingCTA />
    </>
  );
}
