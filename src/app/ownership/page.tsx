import type { Metadata } from "next";
import { LogoMark } from "@/components/logo";
import { Container, Eyebrow, Index, SectionHeader } from "@/components/primitives";
import { ClosingCTA } from "@/components/bands";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "The Ownership Model",
  description:
    "Why every system we build is handed over outright. The code, the data, the documentation, and the infrastructure belong to you, and the contract says so.",
  alternates: { canonical: "/ownership" },
};

const subhead =
  "Most of the software industry is structured around the opposite idea. Here is why we broke from it.";

// The argument. Outline section 3.4, passages verbatim.
const passages = [
  {
    heading: "The rental economy has a ceiling.",
    body: "Every SaaS subscription is a bet that the vendor's roadmap will keep matching your business. Sometimes it does. Often you end up paying more each year for software that fits a little worse each year, because it was built for their average customer and you are not average.",
  },
  {
    heading: "Advice without execution is half a product.",
    body: "The consulting industry produces genuinely good analysis and then stops at the moment of greatest value. The deck describes the system you need. Someone still has to build it, and that someone is usually nobody.",
  },
  {
    heading: "What ownership actually means here.",
    body: "When an engagement ends, you hold the code, the data, the documentation, and the infrastructure. Run it forever without us. Hire anyone you like to extend it. Audit every line. We keep our internal tooling and methods, you keep everything we shipped for you, and that line is written explicitly into every contract so there is never a question.",
  },
  {
    heading: "Why this is good business for us too.",
    body: "A vendor who locks you in only has to be good once, at the sale. We have to be good every time, because the only thing keeping a client with us is that we keep being worth it. We think that produces better software, and we know it produces better relationships.",
  },
];

const faqs = [
  {
    question: "What exactly do we own when the build is done?",
    answer:
      "Everything we shipped. The source code, the data and the pipelines that move it, the documentation, and the infrastructure it runs on, transferred to accounts you control. The contract names each of these in plain language, so ownership is a clause you can point to rather than a promise you have to remember.",
  },
  {
    question: "What happens if we never want to talk to you again after handover?",
    answer:
      "Nothing breaks. The system runs without us, on your infrastructure, under your accounts. The documentation is written assuming we are not in the room, so your team or any developer you hire can operate and extend it. We would rather earn the next call than make it mandatory.",
  },
  {
    question: "What do you keep?",
    answer:
      "Our internal scaffolding. The diagnostic methods, the templates, and the tooling we use to build across clients stay ours, and they get sharper with every engagement. Everything we ship for you, the code, the data, the documentation, stays yours. That line is written into every contract so there is never a question.",
  },
  {
    question: "Who maintains it?",
    answer:
      "Every build includes a support window, so the first weeks of real use are covered. After that, support is an optional retainer. Think of it as insurance tied to an asset you own, not a license that holds it hostage. Take it, skip it, or leave it whenever you want, and the system keeps running either way.",
  },
  {
    question: "Can our own developers work on it?",
    answer:
      "Yes, and we plan for it. We build with widely used, well-documented technology, and the handover documentation is written assuming your developers will extend the system without us. Plenty of clients run the asset entirely in-house after handover. That is the model working, not a problem to solve.",
  },
];

// Local mirror of the service-page SectionRow, widened for display-2 headings.
function Passage({
  index,
  heading,
  body,
}: {
  index: number;
  heading: string;
  body: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-x-16 gap-y-7 border-t border-ink/20 py-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:py-20">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <Index n={index} />
        <h3 className="display-2 mt-4 max-w-md">{heading}</h3>
      </div>
      <p className="body-lg max-w-2xl text-ink/75 lg:pt-1">{body}</p>
    </div>
  );
}

export default function OwnershipPage() {
  return (
    <>
      {/* Hero. The only page that opens dark. */}
      <section
        aria-labelledby="ownership-title"
        className="relative overflow-hidden bg-ink text-paper"
      >
        <LogoMark
          width={560}
          className="pointer-events-none absolute -bottom-24 -right-16 text-paper/5"
        />
        <Container className="relative pb-24 pt-20 lg:pb-36 lg:pt-28">
          <Eyebrow dark lime>
            The Ownership Model
          </Eyebrow>
          <h1 id="ownership-title" className="display-hero mt-8">
            Build it.
            <br />
            <span className="text-lime">You own it.</span>
          </h1>
          <p className="body-lg mt-9 max-w-xl text-paper/65">{subhead}</p>
        </Container>
      </section>

      {/* The argument */}
      <section aria-labelledby="argument-title">
        <h2 id="argument-title" className="sr-only">
          The argument
        </h2>
        <Container className="pt-10 lg:pt-14">
          {passages.map((passage, i) => (
            <Reveal key={passage.heading}>
              <Passage
                index={i + 1}
                heading={passage.heading}
                body={passage.body}
              />
            </Reveal>
          ))}
        </Container>
      </section>

      {/* The practical FAQ */}
      <section
        aria-labelledby="faq-title"
        className="mt-20 border-t border-ink/15 lg:mt-28"
      >
        <Container className="py-24 lg:py-32">
          <Reveal>
            <SectionHeader
              eyebrow="The practical questions"
              title={<span id="faq-title">Fair questions, plain answers</span>}
            />
          </Reveal>
          <div className="mt-14 border-b border-ink/20">
            {faqs.map((faq, i) => (
              <details key={faq.question} className="group border-t border-ink/20">
                <summary className="flex cursor-pointer list-none items-baseline gap-4 py-7 transition-all duration-300 hover:bg-ink hover:px-5 hover:text-paper lg:py-8 [&::-webkit-details-marker]:hidden">
                  <span className="w-12 shrink-0 sm:w-16">
                    <Index n={i + 1} />
                  </span>
                  <h3 className="display-3 flex-1 pr-2">{faq.question}</h3>
                  <span
                    aria-hidden="true"
                    className="inline-block select-none font-display text-2xl font-medium leading-none transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="pb-10 sm:pl-20 lg:pb-12">
                  <p className="body-lg max-w-2xl text-ink/70">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <ClosingCTA />
    </>
  );
}
