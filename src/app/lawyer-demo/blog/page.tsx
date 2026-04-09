import type { Metadata } from "next";
import Link from "next/link";

import { LawFirmBreadcrumbs } from "@/components/law-firm/LawFirmBreadcrumbs";
import { LawFirmPageHero } from "@/components/law-firm/LawFirmPageHero";
import { BLOG_POSTS } from "@/lib/law-firm/content";
import { FIRM } from "@/lib/law-firm/firm";
import { lawMetadata } from "@/lib/law-firm/seo";
import { LAW_FIRM_BASE } from "@/lib/law-firm/site";

export const metadata: Metadata = lawMetadata({
  title: "Legal Insights & Articles",
  description: `Articles on injury, criminal defense, family law, and immigration from ${FIRM.name}. Educational only—not legal advice.`,
  path: "/blog",
});

export default function BlogPage() {
  return (
    <main>
      <LawFirmPageHero
        eyebrow="Insights"
        title="Practical guidance for high-stress legal moments"
        subtitle="Long-tail education for Charlotte-area readers—paired with individualized counsel when you are ready."
        dark={false}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <LawFirmBreadcrumbs items={[{ label: "Blog" }]} />
        <ul className="space-y-10">
          {BLOG_POSTS.map((post) => (
            <li
              key={post.slug}
              className="border-b border-slate-200 pb-10 last:border-0 last:pb-0"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-law-gold-dark">
                {post.category} · {post.date}
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-law-navy-950">
                <Link
                  href={`${LAW_FIRM_BASE}/blog/${post.slug}`}
                  className="hover:text-law-navy-700 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed">{post.excerpt}</p>
              <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
                <span>{post.readTime}</span>
                <Link
                  href={`${LAW_FIRM_BASE}/blog/${post.slug}`}
                  className="font-semibold text-law-navy-900 hover:underline"
                >
                  Read article
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
