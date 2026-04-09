import type { MetadataRoute } from "next";

import { BLOG_POSTS } from "@/lib/law-firm/content";
import { getAllPracticePages } from "@/lib/law-firm/practice-registry";
import { LAW_FIRM_BASE, SITE_ORIGIN } from "@/lib/law-firm/site";

const base = `${SITE_ORIGIN}${LAW_FIRM_BASE}`;

const staticPaths = [
  "",
  "/about",
  "/team",
  "/practice-areas",
  "/results",
  "/testimonials",
  "/faq",
  "/blog",
  "/contact",
  "/locations",
  "/financing",
  "/free-consultation",
  "/privacy",
  "/disclaimer",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date("2026-04-09");

  const entries: MetadataRoute.Sitemap = [
    { url: SITE_ORIGIN, lastModified: lastMod, changeFrequency: "weekly", priority: 1 },
    ...staticPaths.map((p) => ({
      url: `${base}${p}`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 0.9 : 0.7,
    })),
    ...getAllPracticePages().map((a) => ({
      url: `${base}/practice-areas/${a.path}`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
    ...BLOG_POSTS.map((b) => ({
      url: `${base}/blog/${b.slug}`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.55,
    })),
  ];

  return entries;
}
