import { LogoMark } from "./logo";
import { Container, Eyebrow } from "./primitives";
import { CTA, TextLink } from "./cta";
import { ctaHref, ctaLabel } from "@/lib/site";

/**
 * Closing CTA band. Lime, high contrast, used at the bottom of every page.
 */
export function ClosingCTA({
  eyebrow = "The first step",
  title = "Bring us your most annoying operational problem.",
  body = "The first hour is free, it is a working session rather than a sales call, and you will leave with something useful either way.",
  event = "cta_book_session",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  event?: string;
}) {
  return (
    <section aria-labelledby="closing-cta-title">
      <Container className="pb-20 pt-4 lg:pb-28">
        <div className="relative overflow-hidden rounded-md bg-lime px-7 py-14 text-ink sm:px-12 sm:py-16 lg:px-20 lg:py-24">
          <LogoMark
            width={460}
            className="pointer-events-none absolute -bottom-24 -right-16 text-ink/8"
          />
          <div className="relative max-w-2xl">
            <span className="label-mono text-ink/70">[ {eyebrow} ]</span>
            <h2
              id="closing-cta-title"
              className="mt-5 font-display text-[clamp(2.2rem,5vw,4.25rem)] font-medium leading-[0.98] tracking-[-0.03em] text-balance"
            >
              {title}
            </h2>
            <p className="body-lg mt-6 max-w-xl text-ink/75">{body}</p>
            <div className="mt-9">
              <CTA href={ctaHref} variant="ink" event={event}>
                {ctaLabel}
              </CTA>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * The ownership brand moment. Full-width ink band.
 */
export function OwnershipBand({
  showLink = true,
}: {
  showLink?: boolean;
}) {
  return (
    <section aria-labelledby="ownership-band-title" className="bg-ink text-paper">
      <Container className="py-24 lg:py-36">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <Eyebrow dark lime>
              The deal, in four words
            </Eyebrow>
            <h2
              id="ownership-band-title"
              className="mt-7 font-display text-[clamp(3rem,8vw,7rem)] font-medium leading-[0.95] tracking-[-0.035em]"
            >
              Build it.
              <br />
              <span className="text-lime">You own it.</span>
            </h2>
          </div>
          <div className="max-w-md lg:justify-self-end">
            <p className="body-lg text-paper/65">
              No seats. No recurring license. No platform to learn. We build
              the system, we hand you the keys, and we are only in your stack
              for as long as you want us there.
            </p>
            {showLink && (
              <div className="mt-8">
                <TextLink href="/ownership" dark>
                  Why we work this way
                </TextLink>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

const processSteps = [
  {
    title: "Working session",
    duration: "One hour, free",
    body: "A free hour where we map your most expensive operational time-sinks. You leave with at least one useful observation whether or not we ever talk again.",
  },
  {
    title: "Diagnostic",
    duration: "One to two weeks",
    body: "A short fixed-fee engagement that produces a costed, decision-ready plan. The problem quantified, the system described in plain terms, a fixed price and timeline, the expected return.",
  },
  {
    title: "Build",
    duration: "Three to eight weeks",
    body: "Fixed price, fixed scope. You see working software early and often, not a reveal at the end.",
  },
  {
    title: "Handover and support",
    duration: "Yours from day one",
    body: "You own the delivered system. Optional support keeps it healthy without ever becoming a subscription you resent.",
  },
];

/**
 * The four-step engagement strip, used on Home and referenced site-wide.
 */
export function ProcessStrip({ dark = false }: { dark?: boolean }) {
  return (
    <ol className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
      {processSteps.map((step, i) => (
        <li
          key={step.title}
          className={`flex flex-col border-t px-0 py-8 sm:pr-8 xl:min-h-[300px] ${
            dark ? "border-paper/20" : "border-ink/20"
          }`}
        >
          <span className="font-mono text-sm text-blue">
            [{String(i + 1).padStart(2, "0")}]
          </span>
          <h3 className="display-3 mt-5">{step.title}</h3>
          <p
            className={`label-mono-sm mt-2 ${dark ? "text-paper/60" : "text-ink/70"}`}
          >
            {step.duration}
          </p>
          <p
            className={`body-md mt-4 max-w-sm ${dark ? "text-paper/60" : "text-ink/75"}`}
          >
            {step.body}
          </p>
        </li>
      ))}
    </ol>
  );
}

/**
 * Capabilities marquee strip. Decorative, duplicated content is aria-hidden,
 * animation disabled under prefers-reduced-motion.
 */
export function Marquee({ items }: { items: string[] }) {
  const row = (hidden: boolean) => (
    <div
      className="flex items-center"
      aria-hidden={hidden || undefined}
    >
      {items.map((item, i) => (
        <span
          key={`${item}-${i}`}
          className="flex items-center whitespace-nowrap pr-9 font-display text-[1.4rem] font-medium tracking-tight text-ink"
        >
          {item}
          <span aria-hidden="true" className="ml-9 text-[0.9rem] text-blue">
            &#9670;
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden border-y border-ink/15 py-4">
      <div className="di-marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
