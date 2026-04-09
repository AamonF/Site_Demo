import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { LawFirmBreadcrumbs } from "@/components/law-firm/LawFirmBreadcrumbs";
import { BLOG_POSTS, getBlogBySlug } from "@/lib/law-firm/content";
import { lawMetadata } from "@/lib/law-firm/seo";
import { LAW_FIRM_BASE } from "@/lib/law-firm/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};
  return lawMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
  });
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  return (
    <main>
      <article className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 md:pt-20 pb-6">
          <LawFirmBreadcrumbs
            items={[
              { label: "Blog", href: `${LAW_FIRM_BASE}/blog` },
              { label: post.title.slice(0, 48) + (post.title.length > 48 ? "…" : "") },
            ]}
          />
          <p className="text-xs font-semibold uppercase tracking-wider text-law-gold-dark">
            {post.category} · {post.date} · {post.readTime}
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl font-semibold text-law-navy-950 leading-tight text-balance">
            {post.title}
          </h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">{post.excerpt}</p>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-6 text-slate-700 leading-relaxed text-lg">
          {post.body.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
        <div className="border-t border-slate-200 bg-slate-50 py-12">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-sm text-slate-600">
              This article is educational and not legal advice for your specific situation.
            </p>
            <Link
              href={`${LAW_FIRM_BASE}/free-consultation`}
              className="inline-flex mt-6 rounded-lg bg-law-navy-900 text-white px-8 py-3.5 text-sm font-semibold hover:bg-law-navy-800"
            >
              Book a consultation
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
