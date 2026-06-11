import type { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import {
  getAllPosts,
  getPost,
  formatPostMonth,
} from "@/lib/insights";
import { Container, Eyebrow } from "@/components/primitives";
import { TextLink } from "@/components/cta";
import { ClosingCTA } from "@/components/bands";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

function postExists(slug: string) {
  return fs.existsSync(
    path.join(process.cwd(), "content", "insights", `${slug}.md`),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!postExists(slug)) return {};
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/insights/${post.slug}` },
  };
}

export default async function InsightPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!postExists(slug)) notFound();
  const post = await getPost(slug);

  return (
    <>
      <section aria-labelledby="post-title">
        <Container className="pb-24 pt-16 lg:pb-32 lg:pt-24">
          <article className="mx-auto max-w-2xl">
            <header>
              <Eyebrow>Insights</Eyebrow>
              <h1 id="post-title" className="display-1 mt-7">
                {post.title}
              </h1>
              <div className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-ink/15 py-4 label-mono-sm text-ink/70">
                <span>{formatPostMonth(post.date)}</span>
                <span aria-hidden="true" className="text-[0.6rem] text-blue">
                  &#9670;
                </span>
                <span>{post.readingTime}</span>
                <span aria-hidden="true" className="text-[0.6rem] text-blue">
                  &#9670;
                </span>
                <span>By Dialed Intelligence</span>
              </div>
            </header>
            <div
              className="prose-di mt-12"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <footer className="mt-16 border-t border-ink/15 pt-8">
              <TextLink href="/insights">All insights</TextLink>
            </footer>
          </article>
        </Container>
      </section>

      <ClosingCTA />
    </>
  );
}
