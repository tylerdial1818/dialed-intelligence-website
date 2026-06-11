import type { Metadata } from "next";
import { Container, Eyebrow, Index } from "@/components/primitives";
import { Reveal } from "@/components/reveal";
import { Scheduler } from "@/components/scheduler";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Start a Conversation",
  description:
    "The first conversation is a free working session. One hour, no deck, no pitch. We map your most expensive operational time-sinks.",
};

const subhead =
  "The first conversation is a free working session. One hour, no deck, no pitch. We map your most expensive operational time-sinks and you leave with something useful whether or not we ever talk again.";

const whoWeWorkWith =
  "We work with companies doing roughly $2.5M to $25M in revenue, typically owner-led or PE-backed. If that is not you, reach out anyway. We will tell you quickly and honestly whether we are the right fit, and point you somewhere better if we are not.";

const nextSteps = [
  "A one hour working session, free",
  "A costed plan if we both see something worth building",
];

export default function ContactPage() {
  return (
    <>
      <section aria-labelledby="contact-title">
        <Container className="pb-24 pt-16 lg:pb-32 lg:pt-24">
          <div className="grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
            <Reveal>
              <Eyebrow>Start a conversation</Eyebrow>
              <h1
                id="contact-title"
                className="mt-8 font-display text-[clamp(2.6rem,6vw,4.75rem)] font-medium leading-[0.97] tracking-[-0.035em] text-balance"
              >
                Bring us the problem.
              </h1>
              <p className="body-lg mt-8 max-w-xl text-ink/75">{subhead}</p>

              <div className="mt-12 rounded-[5px] border border-ink/15 bg-paper-2 p-7 sm:p-8">
                <p className="label-mono-sm text-ink/70">Who we work with</p>
                <p className="body-md mt-4 text-ink/70">{whoWeWorkWith}</p>
              </div>

              <div className="mt-10">
                <p className="label-mono-sm text-ink/70">What happens next</p>
                <ul className="mt-4 border-t border-ink/15">
                  {nextSteps.map((step, i) => (
                    <li
                      key={step}
                      className="flex items-baseline gap-5 border-b border-ink/15 py-4"
                    >
                      <Index n={i + 1} />
                      <span className="body-md text-ink/75">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="space-y-8">
                <Scheduler />
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="contact-email-title"
        className="border-t border-ink/15"
      >
        <Container className="py-10 lg:py-12">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
            <h2 id="contact-email-title" className="label-mono text-ink/70">
              Prefer email
            </h2>
            <a
              href={`mailto:${site.email}`}
              className="label-mono text-ink transition-colors hover:text-blue"
            >
              {site.email}{" "}
              <span aria-hidden="true" className="font-sans">
                &#8599;
              </span>
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
