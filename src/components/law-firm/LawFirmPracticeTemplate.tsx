import Image from "next/image";
import Link from "next/link";

import type { PracticeAreaPage } from "@/lib/law-firm/types";
import { BLOG_POSTS, caseResultsForTags, getRelatedPracticeAreas } from "@/lib/law-firm/content";
import { FIRM } from "@/lib/law-firm/firm";
import { practiceChildPageTitles } from "@/lib/law-firm/practice-titles";
import { breadcrumbJsonLd } from "@/lib/law-firm/jsonld";
import { getPracticePageByPath, practiceDetailUrl } from "@/lib/law-firm/practice-registry";
import { LAW_FIRM_BASE } from "@/lib/law-firm/site";

import { LawFirmBreadcrumbs } from "./LawFirmBreadcrumbs";
import { LawFirmConsultationForm } from "./LawFirmConsultationForm";
import { LawFirmFAQAccordion } from "./LawFirmFAQAccordion";
import { LawFirmPracticeMidCta } from "./LawFirmPracticeMidCta";
import { LawFirmPracticeQuickNav } from "./LawFirmPracticeQuickNav";
import { LawFirmPracticeResults } from "./LawFirmPracticeResults";

type Props = { area: PracticeAreaPage };

const DEFAULT_RESULTS_INTRO =
  "Illustrative summaries for advertising purposes only. Prior results do not guarantee similar outcomes; every matter depends on facts and law.";

export function LawFirmPracticeTemplate({ area }: Props) {
  const parent = area.parentSegment ? getPracticePageByPath(area.parentSegment) : undefined;
  const related = getRelatedPracticeAreas(area.relatedPaths);
  const results = caseResultsForTags(area.caseResultTags);
  const articles = BLOG_POSTS.filter((b) => area.relatedBlogSlugs?.includes(b.slug));
  const articleList = articles.length ? articles : BLOG_POSTS.slice(0, 3);
  const t = practiceChildPageTitles(area);
  const sh = area.sectionHeadings ?? {};
  const primaryCta = area.heroCtas?.primary ?? "Book free consultation";
  const secondaryCta = area.heroCtas?.secondary ?? `Call now · ${FIRM.phoneDisplay}`;
  const closing = area.closingCta ?? {
    title: `Talk through your ${area.name.toLowerCase()} situation`,
    subtitle: `We’ll triage urgency and next steps—most first conversations are complimentary for eligible matters in ${FIRM.city}.`,
  };

  const quickLinks = [
    { href: "#overview", label: t.overview },
    { href: "#pain", label: t.painPoints },
    { href: "#situations", label: t.situations },
    { href: "#why-matters", label: t.whyMatters },
    { href: "#why-firm", label: t.whyFirm },
    { href: "#team", label: t.attorney },
    { href: "#results", label: t.results },
    { href: "#faq", label: t.faq },
    { href: "#local", label: t.local },
    { href: "#resources", label: t.resources },
    { href: "#contact", label: "Intake" },
  ];

  const faqSchema = area.faqs.map((f) => ({ question: f.question, answer: f.answer }));

  const crumbItems = [
    { label: "Practice Areas", href: `${LAW_FIRM_BASE}/practice-areas` },
    ...(parent
      ? [{ label: parent.name, href: practiceDetailUrl(parent.path) } as const]
      : []),
    { label: area.name },
  ];

  const bcLd = [
    { name: "Practice Areas", path: "/practice-areas" },
    ...(parent ? [{ name: parent.name, path: `/practice-areas/${parent.path}` }] : []),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(bcLd)) }}
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
          <LawFirmBreadcrumbs items={crumbItems} />
          <p className="text-law-gold-light font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            {FIRM.cityWithState}
            {parent ? ` · ${parent.name}` : ""}
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
          <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_15.5rem] xl:gap-12 xl:items-start">
            <div className="min-w-0">
              <h2 className="text-2xl font-semibold text-law-navy-950 scroll-mt-28" id="overview">
                {t.overview}
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed text-lg">{area.overview}</p>

              <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50/80 px-6 py-7 scroll-mt-28" id="pain">
                <h3 className="text-lg font-semibold text-law-navy-950">{t.painPoints}</h3>
                <ul className="mt-4 space-y-3 text-slate-600 text-[15px] leading-relaxed">
                  {area.painPoints.map((p) => (
                    <li key={p.slice(0, 48)} className="flex gap-3">
                      <span className="text-law-gold-dark font-bold shrink-0">—</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {area.midCta && (
                <LawFirmPracticeMidCta title={area.midCta.title} subtitle={area.midCta.subtitle} />
              )}

              <h2 className="mt-12 text-2xl font-semibold text-law-navy-950 scroll-mt-28" id="situations">
                {t.situations}
              </h2>
              <ul className="mt-4 space-y-3 text-slate-600">
                {area.examples.map((ex) => (
                  <li key={ex} className="flex gap-3">
                    <span className="text-law-gold font-bold shrink-0">·</span>
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>

              <h2 className="mt-12 text-2xl font-semibold text-law-navy-950 scroll-mt-28" id="why-matters">
                {t.whyMatters}
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">{area.whyMatters}</p>

              <h2 className="mt-12 text-2xl font-semibold text-law-navy-950 scroll-mt-28" id="why-firm">
                {t.whyFirm}
              </h2>
              <ul className="mt-4 space-y-3">
                {area.whyFirm.map((w) => (
                  <li
                    key={w}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-700"
                  >
                    {w}
                  </li>
                ))}
              </ul>

              <div
                className="mt-12 rounded-2xl border border-law-gold/30 bg-law-navy-950 p-8 text-white scroll-mt-28"
                id="team"
              >
                <h2 className="text-xl font-semibold">{t.attorney}</h2>
                <p className="mt-3 text-slate-300 leading-relaxed">{area.attorneyNote}</p>
              </div>

              <div className="mt-14 scroll-mt-28" id="results">
                <LawFirmPracticeResults
                  results={results}
                  heading={sh.results ?? t.results}
                  intro={sh.resultsIntro ?? DEFAULT_RESULTS_INTRO}
                />
              </div>

              <LawFirmPracticeMidCta title={closing.title} subtitle={closing.subtitle} />

              <h2 className="mt-14 text-2xl font-semibold text-law-navy-950 scroll-mt-28" id="faq">
                {t.faq}
              </h2>
              <div className="mt-6">
                <LawFirmFAQAccordion
                  items={area.faqs.map((f) => ({ question: f.question, answer: f.answer }))}
                />
              </div>

              <div className="mt-14 max-w-none scroll-mt-28" id="local">
                <h2 className="text-2xl font-semibold text-law-navy-950">{t.local}</h2>
                <div
                  className="mt-4 text-slate-600 leading-relaxed space-y-4 [&_strong]:text-law-navy-900 [&_p+p]:mt-4"
                  dangerouslySetInnerHTML={{ __html: area.localSeoHtml }}
                />
              </div>

              <h2 className="mt-12 text-2xl font-semibold text-law-navy-950 scroll-mt-28" id="resources">
                {t.resources}
              </h2>
              <ul className="mt-4 space-y-3">
                {articleList.map((a) => (
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
              <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                {related.map((r) => (
                  <li key={r.path}>
                    <Link
                      href={practiceDetailUrl(r.path)}
                      className="text-law-navy-800 font-medium hover:text-law-gold-dark underline-offset-4 hover:underline"
                    >
                      {r.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <LawFirmPracticeQuickNav links={quickLinks} />
          </div>
        </div>

        <section className="border-t border-slate-200 bg-slate-50 py-16" id="contact">
          <div className="max-w-xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-semibold text-law-navy-950 text-center">
              {area.formHeadline ?? "Start with a confidential consultation"}
            </h2>
            <p className="mt-3 text-center text-slate-600 text-sm">
              {area.formIntro ??
                `Case type defaults to ${area.name}. Adjust the dropdown if your situation spans multiple topics.`}
            </p>
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <LawFirmConsultationForm
                id={`practice-${area.path.replace(/\//g, "-")}-form`}
                compact
                defaultPracticePath={area.path}
              />
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
