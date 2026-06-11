import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";
import { services } from "@/lib/services";

const BASE_URL = "https://dialedintelligence.com";

/**
 * Insights posts are discovered from markdown filenames directly so this
 * file stays decoupled from the insights lib. The content directory may
 * not exist yet, so guard and return no posts if it is absent.
 */
function insightSlugs(): string[] {
  const dir = path.join(process.cwd(), "content", "insights");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const core: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...services.map((s) => ({
      url: `${BASE_URL}/services/${s.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${BASE_URL}/ownership`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/approach`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/insights`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const posts: MetadataRoute.Sitemap = insightSlugs().map((slug) => ({
    url: `${BASE_URL}/insights/${slug}`,
    lastModified,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...core, ...posts];
}
