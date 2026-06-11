import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const postsDirectory = path.join(process.cwd(), "content", "insights");

export type PostMeta = {
  slug: string;
  title: string;
  summary: string;
  /** ISO date string, e.g. "2026-05-19" */
  date: string;
  /** e.g. "6 min read" */
  readingTime: string;
};

export type Post = PostMeta & {
  /** Rendered HTML body */
  html: string;
};

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/** "2026-05-19" -> "May 19, 2026" */
export function formatPostDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[(m ?? 1) - 1]} ${d}, ${y}`;
}

/** "2026-05-19" -> "May 2026" */
export function formatPostMonth(iso: string): string {
  const [y, m] = iso.split("-").map(Number);
  return `${MONTHS[(m ?? 1) - 1]} ${y}`;
}

function computeReadingTime(body: string): string {
  const words = body.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return `${minutes} min read`;
}

/** gray-matter parses unquoted YAML dates as Date objects. Normalize either form. */
function normalizeDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value ?? "");
}

function readPostFile(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: String(data.title ?? slug),
    summary: String(data.summary ?? ""),
    date: normalizeDate(data.date),
    readingTime: computeReadingTime(content),
    content,
  };
}

/** All posts, newest first. Metadata only, no HTML conversion. */
export function getAllPosts(): PostMeta[] {
  const files = fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"));
  return files
    .map((file) => {
      const post = readPostFile(file.replace(/\.md$/, ""));
      return {
        slug: post.slug,
        title: post.title,
        summary: post.summary,
        date: post.date,
        readingTime: post.readingTime,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

/** A single post with its markdown body rendered to HTML. */
export async function getPost(slug: string): Promise<Post> {
  const { content, ...meta } = readPostFile(slug);
  const processed = await remark().use(remarkHtml).process(content);
  return { ...meta, html: processed.toString() };
}
