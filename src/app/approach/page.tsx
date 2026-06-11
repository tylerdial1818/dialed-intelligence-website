import type { Metadata } from "next";
import { LogoMark } from "@/components/logo";
import { Container, Eyebrow, Index, SectionHeader } from "@/components/primitives";
import { ClosingCTA } from "@/components/bands";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Four bounded stages. A free working session, a fixed-fee diagnostic, a fixed-price build in three to eight weeks, and a handover where you own everything.",
  alternates: { canonical: "/approach" },
};

// Stage bodies are outline copy, section 3.5, verbatim.
const stages = [
  {
    n: "01",
    name: "The Working Session",
    body: "One hour, free, and not a sales call. We sit with you and map where your operation actually loses time and money. We ask the questions your last vendor did not. You leave with at least one observation worth having, whether or not we ever speak again. If we do not think we can help, we will say so in the room.",
    walkAway: "At least one observation worth having",
    duration: "One hour, free",
  },
  {
    n: "02",
    name: "The Diagnostic",
    body: "A short fixed-fee engagement, typically one to two weeks. We get into your systems and your numbers and produce a decision-ready plan. The problem mapped and quantified in dollars and hours. The proposed system described in plain terms. A fixed build price, a timeline, and the expected return. The fee is fully credited against the build if you proceed within sixty days, so the diagnostic costs nothing for clients who move forward. If the honest answer is that you should buy something off the shelf instead, the plan will say so.",
    walkAway: "A costed, decision-ready plan",
    duration: "One to two weeks, fee fully credited against the build within sixty days",
  },
  {
    n: "03",
    name: "The Build",
    body: "Fixed price, fixed scope, typically three to eight weeks depending on the system. You see working software early, not a reveal at the end. Larger builds are phased so each phase delivers something usable and each phase is priced before it starts.",
    walkAway: "Working software early, something usable at the end of every phase",
    duration: "Three to eight weeks, fixed price and fixed scope",
  },
  {
    n: "04",
    name: "Handover and Support",
    body: "You receive the system, the source code, the documentation, and a complete walkthrough. Every build includes a support window so the first weeks of real use are covered. After that, support is optional. A light tier keeps the system healthy with guaranteed response times. A heavier tier evolves it as your business changes. Both are services tied to your asset. Neither is a license, and you can leave either whenever you want.",
    walkAway: "The system, the source code, the documentation, and a complete walkthrough",
    duration: "A support window with every build, optional tiers after that",
  },
];

// "What we are not" statements are outline copy, section 3.5, verbatim.
const notStatements = [
  {
    opener: "We are not a staffing agency.",
    rest: "You are not renting hours, you are buying a result at a fixed price.",
  },
  {
    opener: "We are not a software vendor.",
    rest: "Nothing we deliver carries a recurring license, ever.",
  },
  {
    opener: "We are not a typical consultancy.",
    rest: "The engagement does not end with a recommendation. It ends with the recommendation running in production.",
  },
];

const headerSubhead =
  "Every stage is bounded, ends with something you keep, and never commits you to the next one. Here is exactly what happens between the first hour and the day we hand over the keys.";

function StageBlock({
  stage,
  flip = false,
  dark = false,
}: {
  stage: (typeof stages)[number];
  flip?: boolean;
  dark?: boolean;
}) {
  const titleId = `stage-${stage.n}-title`;
  const accent = dark ? "text-lime" : "text-blue";
  const muted = dark ? "text-paper/60" : "text-ink/70";
  const bodyTone = dark ? "text-paper/70" : "text-ink/70";
  const hairline = dark ? "border-paper/20" : "border-ink/20";

  return (
    <section
      aria-labelledby={titleId}
      className={
        dark
          ? "relative overflow-hidden bg-ink text-paper"
          : "border-t border-ink/15"
      }
    >
      {dark && (
        <LogoMark
          width={520}
          className="pointer-events-none absolute -bottom-28 -right-20 hidden text-paper/4 lg:block"
        />
      )}
      <Container className={dark ? "py-20 lg:py-28" : "py-16 lg:py-20"}>
        <Reveal>
          <div className="grid grid-cols-1 items-start gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
            <div className={flip ? "lg:order-2" : ""}>
              <span
                aria-hidden="true"
                className={`block select-none font-display text-[6rem] font-semibold leading-[0.8] tracking-[-0.04em] sm:text-[8rem] lg:text-[10rem] ${
                  dark ? "text-paper/10" : "text-ink/10"
                }`}
              >
                {stage.n}
              </span>
              <p className={`label-mono-sm mt-7 ${accent}`}>
                Stage {stage.n} of 04
              </p>
              <h2 id={titleId} className="display-1 mt-3">
                {stage.name}
              </h2>
              {dark && (
                <p className="label-mono mt-8 text-lime">
                  [ Build it. You own it. ]
                </p>
              )}
            </div>
            <div className={flip ? "lg:order-1" : ""}>
              <p className={`label-mono ${muted}`}>What happens</p>
              <p className={`body-lg mt-5 max-w-2xl ${bodyTone}`}>
                {stage.body}
              </p>
              <dl
                className={`mt-10 grid grid-cols-1 gap-x-12 gap-y-8 border-t pt-7 sm:grid-cols-2 ${hairline}`}
              >
                <div>
                  <dt className={`label-mono-sm ${muted}`}>
                    You walk away with
                  </dt>
                  <dd className="mt-3 font-display text-lg font-medium leading-snug tracking-tight">
                    {stage.walkAway}
                  </dd>
                </div>
                <div>
                  <dt className={`label-mono-sm ${muted}`}>How long it takes</dt>
                  <dd className="mt-3 font-display text-lg font-medium leading-snug tracking-tight">
                    {stage.duration}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default function ApproachPage() {
  return (
    <>
      {/* Header */}
      <section aria-labelledby="approach-title">
        <Container className="pb-16 pt-16 lg:pb-20 lg:pt-24">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Eyebrow>How we work</Eyebrow>
            <span className="label-mono-sm text-ink/70">
              Four stages, in depth
            </span>
          </div>
          <h1
            id="approach-title"
            className="mt-8 max-w-4xl font-display text-[clamp(2.3rem,4.6vw,4rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-balance"
          >
            A process designed so you can stop at any point and still be glad
            you started.
          </h1>
          <p className="body-lg mt-8 max-w-2xl text-ink/75">{headerSubhead}</p>
        </Container>
      </section>

      {/* The four stages. Stage 4 closes the sequence on ink. */}
      <StageBlock stage={stages[0]} />
      <StageBlock stage={stages[1]} flip />
      <StageBlock stage={stages[2]} />
      <StageBlock stage={stages[3]} flip dark />

      {/* What we are not */}
      <section aria-labelledby="what-we-are-not-title">
        <Container className="py-24 lg:py-32">
          <Reveal>
            <SectionHeader
              eyebrow="For the record"
              title={<span id="what-we-are-not-title">What we are not</span>}
            />
          </Reveal>
          <div className="mt-14 border-t border-ink/20">
            {notStatements.map((item, i) => (
              <Reveal key={item.opener} delay={i * 60}>
                <div className="grid grid-cols-1 items-baseline gap-x-8 gap-y-3 border-b border-ink/20 py-8 sm:grid-cols-[64px_minmax(0,1fr)_minmax(0,1.2fr)] lg:py-10">
                  <Index n={i + 1} />
                  <h3 className="display-3">{item.opener}</h3>
                  <p className="body-md max-w-xl text-ink/75">{item.rest}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ClosingCTA />
    </>
  );
}
