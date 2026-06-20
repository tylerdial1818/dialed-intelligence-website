import Link from "next/link";
import { LogoMark } from "@/components/logo";
import { Container, Eyebrow, SectionHeader } from "@/components/primitives";
import { CTA, TextLink } from "@/components/cta";
import { ClosingCTA, OwnershipBand, ProcessStrip, Marquee } from "@/components/bands";
import { Reveal } from "@/components/reveal";

const heroProofPoints = [
  "The problem found in your first hour",
  "A working system in weeks",
  "You own it outright, no recurring license",
];

const marqueeItems = [
  "DECISION SYSTEMS",
  "UNIFIED DATA SYSTEMS",
  "AI AGENTS",
  "DEMAND FORECASTING",
  "MARGIN RECOVERY",
  "OPERATIONS COPILOTS",
  "HUMAN IN THE LOOP",
];

// Card copy leads with the question each system answers. Independent of the
// service detail content files.
const serviceCards = [
  {
    href: "/services/operations-automation",
    title: "Operations Automation",
    desc: "Where is repetitive work eating my best people? Operations automation handles the work between your systems, supervised by your team.",
  },
  {
    href: "/services/data-systems",
    title: "Unified Data Systems",
    desc: "What is actually true across my business right now? Every source of truth in one place, answerable in plain English, trustworthy enough to act on.",
  },
  {
    href: "/services/automation-platform",
    title: "Your Own Automation Platform",
    desc: "Why am I renting my own workflows? A workflow automation platform on your infrastructure, under your brand, with no per-seat license ever.",
  },
  {
    href: "/services/inventory",
    title: "Inventory Intelligence",
    desc: "What should I reorder, and when? Reorder logic built around how your business actually works, not a template.",
  },
  {
    href: "/services/pricing",
    title: "Dynamic Pricing",
    desc: "Where is margin quietly leaking? Margin recovery across the long tail of your catalog, driven by real demand modeling.",
  },
];

const disciplines = [
  "Econometrics",
  "Investment banking",
  "Management consulting",
  "Production AI engineering",
];

// DRAFT engagement vignettes, pending Tyler's approval before they ship.
// These describe real engagement shapes with no client names attached and no
// metrics claimed yet. Add a `metric` string to any entry to surface a
// quantified result. The card renders the metric only when it is present, so
// the layout does not change when numbers are filled in later.
type Engagement = {
  client: string;
  problem: string;
  system: string;
  outcome: string;
  metric?: string;
};

const engagements: Engagement[] = [
  {
    client: "PE-backed skilled-nursing operator",
    problem:
      "Compliance gaps in MDS and PDPM documentation kept surfacing after submission, when they were expensive to fix.",
    system:
      "A documentation system that reads each record and flags the gaps before anything is filed.",
    outcome: "Reviewers catch problems while they are still cheap to correct.",
  },
  {
    client: "Public-sector data engagement",
    problem:
      "Divisions held data that could never be reconciled across the organization.",
    system:
      "A unified data layer that makes every division answerable from one place.",
    outcome: "Leadership works from one version of the truth instead of five.",
  },
  {
    client: "Research consultancy",
    problem:
      "Lead intelligence sat scattered across many sources and got sorted by hand.",
    system:
      "A multi-agent system that pulls those sources together and classifies leads automatically.",
    outcome: "Analysts spend their hours on judgment, not collection.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-title">
        <Container className="pb-14 pt-16 lg:pb-16 lg:pt-24">
          <Eyebrow>Strategy that ends in a running system</Eyebrow>
          <div className="mt-9 grid grid-cols-1 items-end gap-12 lg:grid-cols-[minmax(0,1fr)_270px]">
            <div>
              <h1
                id="hero-title"
                className="font-display text-[clamp(2.6rem,6.4vw,5.5rem)] font-medium leading-[0.97] tracking-[-0.035em] text-balance"
              >
                We find what is costing you most, then{" "}
                <em className="text-blue">
                  build the system that fixes it.
                </em>
              </h1>
              <p className="body-lg mt-8 max-w-xl text-ink/75">
                Strategy and engineering in one firm. We diagnose the problem,
                build the AI that solves it, and hand it over. You own it
                outright.
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
                <span className="label-mono-sm text-ink/70">{point}</span>
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
              eyebrow="How this usually goes"
              title={
                <span id="third-option-title">
                  Three familiar paths. Each stops short of a system you own.
                </span>
              }
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
            <Reveal className="flex">
              <article className="flex flex-col rounded-[5px] border border-ink/15 bg-paper-2 p-8 lg:p-10">
                <span className="font-mono text-sm text-blue">[01]</span>
                <h3 className="display-3 mt-14 lg:mt-20">
                  Consultancies analyze.
                </h3>
                <p className="body-md mt-4 text-ink/75">
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
                <p className="body-md mt-4 text-ink/75">
                  They ship working tools built for their average customer. You
                  rent access forever and adapt your business to their roadmap.
                </p>
              </article>
            </Reveal>
            <Reveal delay={160} className="flex">
              <article className="flex flex-col rounded-[5px] border border-ink/15 bg-paper-2 p-8 lg:p-10">
                <span className="font-mono text-sm text-blue">[03]</span>
                <h3 className="display-3 mt-14 lg:mt-20">
                  The best engineers embed elsewhere.
                </h3>
                <p className="body-md mt-4 text-ink/75">
                  Elite teams will put engineers inside a business and build
                  exactly what it needs. That model is real. It is also
                  reserved for enterprises many times your size, priced for
                  them, and the system it builds is never yours to keep.
                </p>
              </article>
            </Reveal>
            <Reveal delay={240} className="flex">
              <article className="relative flex flex-col overflow-hidden rounded-[5px] bg-ink p-8 text-paper lg:p-10">
                <LogoMark
                  width={220}
                  className="pointer-events-none absolute -bottom-12 -right-10 text-paper/6"
                />
                <span className="font-mono text-sm text-lime">[04]</span>
                <h3 className="display-3 relative mt-14 lg:mt-20">
                  We do both halves.
                </h3>
                <p className="body-md relative mt-4 text-paper/70">
                  We bring that caliber of embedded engineering, sized for a
                  business doing 5 to 30 million in revenue and set at a fixed
                  price you agree to up front. We find the single problem worth
                  the most to solve, build the AI system that solves it, and
                  hand it over. The code, the data, the asset. Yours.
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
              title={<span id="what-we-build-title">{'What "solved" looks like'}</span>}
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
                  <p className="body-md col-span-2 text-ink/70 group-hover:text-paper/65 sm:col-span-1">
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

      {/* Proof strip. DRAFT vignettes pending Tyler's approval (content lives
          in the `engagements` array above). The optional `metric` renders only
          when present, so quantified results can drop in without layout change. */}
      <section aria-labelledby="proof-title" className="border-t border-ink/15">
        <Container className="py-24 lg:py-32">
          <Reveal>
            <SectionHeader
              eyebrow="In the field"
              title={
                <span id="proof-title">Systems we built and handed over.</span>
              }
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {engagements.map((v, i) => (
              <Reveal key={v.client} delay={i * 80} className="flex">
                <article className="flex w-full flex-col rounded-[5px] border border-ink/15 bg-paper-2 p-8 lg:p-10">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-sm text-blue">
                      [{String(i + 1).padStart(2, "0")}]
                    </span>
                    {v.metric && (
                      <span className="text-right font-display text-2xl font-medium leading-none tracking-tight text-blue">
                        {v.metric}
                      </span>
                    )}
                  </div>
                  <p className="label-mono-sm mt-10 text-ink/70">{v.client}</p>
                  <p className="body-md mt-5 text-ink/75">
                    <span className="text-ink">The problem. </span>
                    {v.problem}
                  </p>
                  <p className="body-md mt-3 text-ink/75">
                    <span className="text-ink">What we built. </span>
                    {v.system}
                  </p>
                  <p className="body-md mt-3 text-ink/75">
                    <span className="text-ink">The result. </span>
                    {v.outcome}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <OwnershipBand />

      {/* Consulting on-ramp */}
      <section aria-labelledby="consulting-onramp-title" className="border-t border-ink/15">
        <Container className="py-24 lg:py-32">
          <Reveal>
            <div className="max-w-3xl">
              <Eyebrow>Consulting, if that is all you need</Eyebrow>
              <h2 id="consulting-onramp-title" className="display-1 mt-5">
                Not ready to build? Start with the thinking.
              </h2>
              <p className="body-lg mt-6 max-w-2xl text-ink/75">
                Some engagements stay advisory. We map where AI creates real
                value in your operation, rank it by return, and hand you a plan
                you could take anywhere. Most clients ask us to build it. You do
                not have to.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

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
                Built by practitioners who ship production AI systems, with
                backgrounds in econometrics, investment banking, and management
                consulting.
              </h2>
              <p className="body-lg mt-6 max-w-xl text-ink/75">
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
