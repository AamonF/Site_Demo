import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { PracticeAreaPage } from "@/lib/law-firm/types";
import { BLOG_POSTS, caseResultsForTags } from "@/lib/law-firm/content";
import { FIRM } from "@/lib/law-firm/firm";
import { breadcrumbJsonLd } from "@/lib/law-firm/jsonld";
import { practiceParentPageTitles } from "@/lib/law-firm/practice-titles";
import { getChildPracticePages, getParentPracticePages, practiceDetailUrl } from "@/lib/law-firm/practice-registry";
import { LAW_FIRM_BASE } from "@/lib/law-firm/site";

import { LawFirmBreadcrumbs } from "./LawFirmBreadcrumbs";
import { LawFirmConsultationForm } from "./LawFirmConsultationForm";
import { LawFirmFAQAccordion } from "./LawFirmFAQAccordion";
import { LawFirmPracticeMidCta } from "./LawFirmPracticeMidCta";
import { LawFirmPracticeResults } from "./LawFirmPracticeResults";

type Props = { area: PracticeAreaPage };

const DEFAULT_RESULTS_INTRO =
  "Illustrative summaries for advertising purposes only. Prior results do not guarantee similar outcomes.";

export function LawFirmParentPracticeTemplate({ area }: Props) {
  const children = getChildPracticePages(area.segment);
  const otherParents = getParentPracticePages().filter((p) => p.path !== area.path);
  const results = caseResultsForTags(area.caseResultTags);
  const articles = BLOG_POSTS.filter((b) => area.relatedBlogSlugs?.includes(b.slug)).slice(0, 3);
  const fallbackArticles = articles.length ? articles : BLOG_POSTS.slice(0, 3);
  const t = practiceParentPageTitles(area);
  const sh = area.sectionHeadings ?? {};
  const primaryCta = area.heroCtas?.primary ?? "Book free consultation";
  const secondaryCta = area.heroCtas?.secondary ?? `Call ${FIRM.phoneDisplay}`;
  const closing = area.closingCta;

  const crumbs = [
    { label: "Practice Areas", href: `${LAW_FIRM_BASE}/practice-areas` },
    { label: area.name },
  ];

  const faqSchema = area.faqs.map((f) => ({ question: f.question, answer: f.answer }));

  const bcItems = [
    { name: "Practice Areas", path: "/practice-areas" },
    { name: area.name, path: `/practice-areas/${area.path}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqSchema.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(bcItems)) }}
      />

      <section className="relative bg-law-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={area.image}
            alt=""
            fill
            className="object-cover opacity-25"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-law-navy-950 via-law-navy-950/95 to-law-navy-900/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <LawFirmBreadcrumbs items={crumbs} />
          <p className="text-law-gold-light font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            {FIRM.cityWithState} · Practice hub
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold max-w-4xl leading-tight text-balance">
            {area.heroTitle}
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-3xl leading-relaxed">{area.heroSubtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`${LAW_FIRM_BASE}/free-consultation`}
              className="inline-flex items-center justify-center rounded-lg bg-law-gold px-6 py-3.5 text-sm font-semibold text-law-navy-950 hover:bg-[#d4b23a]"
            >
              {primaryCta}
            </Link>
            <a
              href={`tel:${FIRM.phoneTel.replace(/\D/g, "")}`}
              className="inline-flex items-center justify-center rounded-lg border border-white/25 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              {secondaryCta}
            </a>
          </div>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-law-navy-950" id="overview">
              {t.overview}
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-lg">{area.overview}</p>
          </div>

          <div
            className="mt-10 max-w-3xl rounded-2xl border border-slate-200 bg-slate-50/80 px-6 py-7"
            id="pain"
          >
            <h3 className="text-lg font-semibold text-law-navy-950">
              {area.sectionHeadings?.painPoints ?? "What usually brings people to us"}
            </h3>
            <ul className="mt-4 space-y-3 text-slate-600 text-[15px] leading-relaxed">
              {area.painPoints.map((p) => (
                <li key={p.slice(0, 48)} className="flex gap-3">
                  <span className="text-law-gold-dark font-bold shrink-0">—</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-law-navy-950 mb-2" id="subs">
              {t.childHub}
            </h2>
            <p className="text-slate-600 max-w-3xl mb-10">
              Each link opens a dedicated page with matter-specific FAQs and intake routing—not recycled
              boilerplate.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
              {children.map((c) => (
                <Link
                  key={c.path}
                  href={practiceDetailUrl(c.path)}
                  className="group flex flex-col rounded-2xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-law-gold/35 hover:shadow-xl hover:shadow-slate-200/60 overflow-hidden transition-all duration-300"
                >
                  <div className="relative h-44">
                    <Image
                      src={c.image}
                      alt={c.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-law-navy-950/90 via-law-navy-950/25 to-transparent" />
                    <span className="absolute bottom-4 left-5 text-white font-semibold text-lg leading-tight pr-4">
                      {c.name}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-slate-600 text-sm leading-relaxed flex-1">{c.shortDescription}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-law-gold-dark group-hover:gap-2 transition-all">
                      {c.cardCta}
                      <ArrowUpRight className="w-4 h-4" aria-hidden />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {area.midCta && <LawFirmPracticeMidCta title={area.midCta.title} subtitle={area.midCta.subtitle} />}

          <h2 className="mt-16 text-2xl font-semibold text-law-navy-950" id="situations">
            {t.situations}
          </h2>
          <ul className="mt-4 space-y-3 text-slate-600 max-w-3xl">
            {area.examples.map((ex) => (
              <li key={ex} className="flex gap-3">
                <span className="text-law-gold font-bold shrink-0">·</span>
                <span>{ex}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 text-2xl font-semibold text-law-navy-950">{t.whyMatters}</h2>
          <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">{area.whyMatters}</p>

          <h2 className="mt-12 text-2xl font-semibold text-law-navy-950" id="why-firm">
            {t.whyFirm}
          </h2>
          <ul className="mt-4 space-y-3 max-w-3xl">
            {area.whyFirm.map((w) => (
              <li
                key={w}
                className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-700"
              >
                {w}
              </li>
            ))}
          </ul>

          <div className="mt-12 rounded-2xl border border-law-gold/30 bg-law-navy-950 p-8 text-white" id="team">
            <h2 className="text-xl font-semibold">{t.attorney}</h2>
            <p className="mt-3 text-slate-300 leading-relaxed">{area.attorneyNote}</p>
          </div>

          <div className="mt-14" id="results">
            <LawFirmPracticeResults
              results={results}
              heading={sh.results ?? t.results}
              intro={sh.resultsIntro ?? DEFAULT_RESULTS_INTRO}
            />
          </div>

          {closing && <LawFirmPracticeMidCta title={closing.title} subtitle={closing.subtitle} />}

          <h2 className="mt-14 text-2xl font-semibold text-law-navy-950" id="faq">
            {t.faq}
          </h2>
          <div className="mt-6 max-w-3xl">
            <LawFirmFAQAccordion items={area.faqs.map((f) => ({ question: f.question, answer: f.answer }))} />
          </div>

          <div className="mt-14 max-w-none">
            <h2 className="text-2xl font-semibold text-law-navy-950">{t.local}</h2>
            <div
              className="mt-4 text-slate-600 leading-relaxed space-y-4 max-w-3xl [&_strong]:text-law-navy-900 [&_p+p]:mt-4"
              dangerouslySetInnerHTML={{ __html: area.localSeoHtml }}
            />
          </div>

          <h2 className="mt-12 text-2xl font-semibold text-law-navy-950" id="resources">
            {t.resources}
          </h2>
          <ul className="mt-4 space-y-3 max-w-3xl">
            {fallbackArticles.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`${LAW_FIRM_BASE}/blog/${a.slug}`}
                  className="text-law-navy-800 hover:text-law-gold-dark font-medium"
                >
                  {a.title}
                </Link>
                <span className="text-slate-400 text-sm ml-2">({a.category})</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 text-2xl font-semibold text-law-navy-950">{t.related}</h2>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3 max-w-4xl">
            {otherParents.map((p) => (
              <li key={p.path}>
                <Link
                  href={practiceDetailUrl(p.path)}
                  className="text-law-navy-800 font-medium hover:text-law-gold-dark underline-offset-4 hover:underline"
                >
                  {p.name}
                </Link>
                <span className="block text-sm text-slate-500 mt-0.5">
                  {p.shortDescription.length > 100
                    ? `${p.shortDescription.slice(0, 100)}…`
                    : p.shortDescription}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <section className="border-t border-slate-200 bg-slate-50 py-16" id="contact">
          <div className="max-w-xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-semibold text-law-navy-950 text-center">
              {area.formHeadline ?? "Request a confidential consultation"}
            </h2>
            <p className="mt-3 text-center text-slate-600 text-sm">
              {area.formIntro ??
                `Select “${area.name}” as case type so intake routes to the right team.`}
            </p>
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <LawFirmConsultationForm id={`parent-${area.segment}-form`} compact defaultPracticePath={area.path} />
            </div>
            <p className="mt-6 text-xs text-slate-500 text-center leading-relaxed">
              Submission does not create an attorney-client relationship. No fee unless and until
              agreed in writing for your matter type.
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
