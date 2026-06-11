import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatPostDate } from "@/lib/insights";
import { Container, Eyebrow } from "@/components/primitives";
import { ClosingCTA } from "@/components/bands";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Working positions from Dialed Intelligence on owned software, automation that cannot spend money, and the prices your catalog never gets.",
  alternates: { canonical: "/insights" },
};

const standfirst =
  "We think a firm should put its positions in writing before it asks for your trust. These essays are ours, written from systems in production rather than from a content calendar.";

export default function InsightsPage() {
  const posts = getAllPosts();

  return (
    <>
      <section aria-labelledby="insights-title">
        <Container className="pb-24 pt-16 lg:pb-32 lg:pt-24">
          <Eyebrow>Insights</Eyebrow>
          <h1
            id="insights-title"
            className="mt-8 max-w-4xl font-display text-[clamp(2.2rem,4.8vw,4.25rem)] font-medium leading-[1.02] tracking-[-0.03em] text-balance"
          >
            Thinking that survives contact with production.
          </h1>
          <p className="body-lg mt-8 max-w-2xl text-ink/75">{standfirst}</p>

          <div className="mt-16 flex items-baseline justify-between lg:mt-20">
            <span className="label-mono-sm text-ink/70">All essays</span>
            <span className="font-mono text-sm text-blue">
              [{String(posts.length).padStart(2, "0")}]
            </span>
          </div>
          <div className="mt-4 border-t border-ink/20">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 60}>
                <Link
                  href={`/insights/${post.slug}`}
                  className="group grid grid-cols-1 gap-x-8 gap-y-3 border-b border-ink/20 py-9 transition-all duration-300 hover:bg-ink hover:px-6 hover:text-paper sm:grid-cols-[150px_minmax(0,1.1fr)_minmax(0,1fr)_40px] sm:items-baseline"
                >
                  <span className="flex gap-x-4 label-mono-sm text-ink/70 group-hover:text-paper/65 sm:flex-col sm:gap-y-1.5">
                    <span>{formatPostDate(post.date)}</span>
                    <span>{post.readingTime}</span>
                  </span>
                  <h2 className="display-2">{post.title}</h2>
                  <p className="body-md text-ink/70 group-hover:text-paper/65">
                    {post.summary}
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

      <ClosingCTA />
    </>
  );
}
