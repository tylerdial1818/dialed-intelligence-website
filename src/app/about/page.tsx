import type { Metadata } from "next";
import { Container, Eyebrow, Index, SectionHeader } from "@/components/primitives";
import { ClosingCTA } from "@/components/bands";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "The firm behind Dialed Intelligence. We quantify the problem like an economist, scope it like a banker, and ship it like an engineer.",
  alternates: { canonical: "/about" },
};

// Outline section 3.6, the firm's story, verbatim.
const storyParagraphs = [
  "Dialed Intelligence was founded on a specific frustration. The people best at diagnosing business problems rarely build anything, and the people building software rarely sit with the business problem long enough to understand it. The interesting work, and the real value, lives in the gap.",
  "Our background spans econometrics and causal inference, investment banking, management consulting for research organizations and private equity portfolio companies, and production AI engineering. That combination is the firm's method in miniature. Quantify the problem like an economist, scope it like a banker, and ship it like an engineer.",
  "We build with modern AI where it genuinely helps and with boring, proven methods where those are honestly better. Clients hire us for the judgment to know which is which.",
];

// Outline section 3.6, principles, verbatim.
const principles = [
  {
    title: "Measurement before machinery.",
    body: "If we cannot quantify the problem, we are not ready to build the system.",
  },
  {
    title: "Deterministic where it counts.",
    body: "AI reads, drafts, and forecasts. Humans and explicit rules decide and spend.",
  },
  {
    title: "Honest scoping.",
    body: "If off-the-shelf software solves your problem, the diagnostic will tell you to buy it.",
  },
  {
    title: "Ownership without asterisks.",
    body: "What we ship is yours, and the contract says so in plain language.",
  },
];

/** Local mirror of the service-page editorial two-column row. */
function SectionRow({
  label,
  index,
  headingId,
  children,
}: {
  label: string;
  index: string;
  headingId: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 border-t border-ink/20 py-14 lg:grid-cols-[280px_minmax(0,1fr)] lg:py-20">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <Index n={index} />
        <h2 id={headingId} className="display-3 mt-3">
          {label}
        </h2>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section aria-labelledby="about-title">
        <Container className="pb-16 pt-16 lg:pb-20 lg:pt-24">
          <Eyebrow>About the firm</Eyebrow>
          <h1
            id="about-title"
            className="mt-8 max-w-5xl font-display text-[clamp(2.2rem,4.8vw,4.25rem)] font-medium leading-[1.02] tracking-[-0.03em] text-balance"
          >
            Built by people who measure before they build.
          </h1>
        </Container>
      </section>

      {/* The firm's story */}
      <section aria-labelledby="story-title">
        <Container>
          <Reveal>
            <SectionRow label="Where we come from" index="01" headingId="story-title">
              <div className="max-w-2xl space-y-6">
                {storyParagraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="body-lg text-ink/75">
                    {p}
                  </p>
                ))}
              </div>
            </SectionRow>
          </Reveal>
        </Container>
      </section>

      {/* Principles */}
      <section aria-labelledby="principles-title" className="border-t border-ink/15">
        <Container className="py-24 lg:py-32">
          <Reveal>
            <SectionHeader
              eyebrow="Principles"
              title={
                <span id="principles-title">
                  Four principles, applied to every build
                </span>
              }
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 80} className="flex">
                <div
                  className={`flex w-full flex-col border-t border-ink/20 py-10 lg:py-12 ${
                    i % 2 === 1 ? "sm:border-l sm:border-ink/20 sm:pl-10" : "sm:pr-10"
                  }`}
                >
                  <Index n={i + 1} />
                  <h3 className="display-3 mt-12 lg:mt-16">{p.title}</h3>
                  <p className="body-md mt-4 max-w-md text-ink/75">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* The firm */}
      <section aria-labelledby="firm-title" className="border-t border-ink/15">
        <Container className="py-24 lg:py-32">
          <Reveal>
            <div className="max-w-3xl">
              <Eyebrow>The firm</Eyebrow>
              <h2 id="firm-title" className="display-1 mt-5">
                Small by design, deep by necessity.
              </h2>
              <p className="body-lg mt-6 max-w-2xl text-ink/75">
                Dialed Intelligence stays deliberately small so the people who
                diagnose your problem are the people who build the solution.
                Nothing gets lost in a handoff between a strategy team and a
                delivery team, because there is no handoff. You work with the
                firm from the first question to the running system.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <ClosingCTA />
    </>
  );
}
