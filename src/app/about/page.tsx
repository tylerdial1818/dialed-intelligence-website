import type { Metadata } from "next";
import { LogoMark } from "@/components/logo";
import { Container, Eyebrow, Index, SectionHeader } from "@/components/primitives";
import { TextLink } from "@/components/cta";
import { ClosingCTA } from "@/components/bands";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

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

// Outline section 3.6, founder bio draft, verbatim.
const founderBio =
  "Tyler Dial founded Dialed Intelligence after a career spanning economics research, investment banking, and AI engineering for consulting firms serving private equity and hedge funds. He holds a Master of Science in Data Science from Northwestern University and speaks regularly on AI engineering for quantitative practitioners.";

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

      {/* Founder */}
      <section aria-labelledby="founder-name" className="bg-ink text-paper">
        <Container className="py-24 lg:py-32">
          <Eyebrow dark lime>
            Founder
          </Eyebrow>
          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-20">
            {/* A real photo of Tyler replaces this typographic panel when supplied. */}
            <Reveal className="flex">
              <div className="flex min-h-[320px] w-full flex-col justify-between rounded-[5px] border border-paper/20 bg-ink-2 p-8 lg:min-h-[420px] lg:p-10">
                <LogoMark width={170} className="text-lime" />
                <div className="flex items-end justify-between gap-6">
                  <span className="font-mono text-3xl text-paper/80">TD</span>
                  <span className="label-mono-sm text-right text-paper/55">
                    Founder, Dialed Intelligence
                  </span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 id="founder-name" className="display-2">
                Tyler Dial
              </h2>
              <p className="body-lg mt-6 max-w-2xl text-paper/70">{founderBio}</p>
              <div className="mt-8">
                <TextLink href={site.linkedin} dark>
                  Find Tyler on LinkedIn
                </TextLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <div className="pt-20 lg:pt-28">
        <ClosingCTA />
      </div>
    </>
  );
}
