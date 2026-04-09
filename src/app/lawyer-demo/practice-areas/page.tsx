import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass } from "lucide-react";

import { LawFirmBreadcrumbs } from "@/components/law-firm/LawFirmBreadcrumbs";
import { LawFirmConsultationForm } from "@/components/law-firm/LawFirmConsultationForm";
import { LawFirmPageHero } from "@/components/law-firm/LawFirmPageHero";
import { FIRM } from "@/lib/law-firm/firm";
import {
  getChildPracticePages,
  getParentPracticePages,
  practiceDetailUrl,
} from "@/lib/law-firm/practice-registry";
import { lawMetadata } from "@/lib/law-firm/seo";
import { LAW_FIRM_BASE } from "@/lib/law-firm/site";

export const metadata: Metadata = lawMetadata({
  title: "Practice Areas",
  description: `${FIRM.name} serves ${FIRM.city} with dedicated counsel for personal injury, criminal defense, family law, and immigration—including car and truck accidents, DUI, divorce, custody, green cards, and naturalization.`,
  path: "/practice-areas",
});

export default function PracticeAreasPage() {
  const parents = getParentPracticePages();

  return (
    <main>
      <LawFirmPageHero
        eyebrow="Practice areas"
        title="Serious legal matters. Dedicated counsel. One firm."
        subtitle={`Explore our ${FIRM.city} practice hubs—each built as its own intake funnel with service-specific FAQs, local guidance, and a direct path to consultation.`}
        dark={false}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <LawFirmBreadcrumbs items={[{ label: "Practice Areas" }]} />
      </div>

      <section className="py-12 md:py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600 leading-relaxed text-lg">
            Not sure where you fit? Start with the category closest to your situation—then drill into the
            specific page that matches your case type. Every page is written to rank independently and
            convert thoughtfully—not as generic filler.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 md:space-y-28">
          {parents.map((parent) => {
            const children = getChildPracticePages(parent.segment);
            return (
              <div key={parent.path}>
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
                  <div className="max-w-2xl">
                    <p className="text-law-gold-dark font-semibold text-xs uppercase tracking-[0.28em] mb-3">
                      {parent.name}
                    </p>
                    <h2 className="text-law-navy-950 text-2xl sm:text-3xl font-semibold tracking-tight leading-tight">
                      {parent.shortDescription}
                    </h2>
                  </div>
                  <Link
                    href={practiceDetailUrl(parent.path)}
                    className="inline-flex items-center gap-2 shrink-0 rounded-xl bg-law-navy-900 text-white px-6 py-3.5 text-sm font-semibold hover:bg-law-navy-800 transition-colors shadow-lg shadow-law-navy-950/20"
                  >
                    {parent.name} overview
                    <ArrowUpRight className="w-4 h-4" aria-hidden />
                  </Link>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                  {children.map((c) => (
                    <Link
                      key={c.path}
                      href={practiceDetailUrl(c.path)}
                      className="group flex flex-col rounded-[1.15rem] border border-slate-200/90 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-law-gold/30 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <div className="relative h-36 overflow-hidden">
                        <Image
                          src={c.image}
                          alt={c.imageAlt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                          sizes="(max-width: 768px) 100vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-law-navy-950/80 to-transparent" />
                        <span className="absolute bottom-3 left-4 right-4 text-white font-semibold text-[15px] leading-snug">
                          {c.name}
                        </span>
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <p className="text-sm text-slate-600 leading-relaxed flex-1 line-clamp-4">
                          {c.shortDescription}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-law-gold-dark group-hover:gap-2 transition-all">
                          {c.cardCta}
                          <ArrowUpRight className="w-4 h-4" aria-hidden />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 md:py-24 bg-law-navy-950 text-white border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="shrink-0 w-14 h-14 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
              <Compass className="w-7 h-7 text-law-gold-light" aria-hidden />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Not sure which practice fits?</h2>
              <p className="mt-3 text-slate-400 leading-relaxed max-w-2xl">
                Tell us what happened in plain language—our intake team routes urgent criminal and injury
                matters first, then connects you with the attorney group best suited to your goals. No
                obligation from this request alone.
              </p>
              <Link
                href={`${LAW_FIRM_BASE}/free-consultation`}
                className="mt-6 inline-flex items-center gap-2 text-law-gold-light font-semibold hover:text-white"
              >
                Start a free consultation
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-law-navy-950 text-center">Request a consultation</h2>
          <p className="mt-3 text-center text-slate-600 text-sm">
            Choose the closest practice area—we will confirm scope before you meet with an attorney.
          </p>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/80 p-6 sm:p-8 shadow-inner">
            <LawFirmConsultationForm id="hub-practice-form" compact />
          </div>
        </div>
      </section>
    </main>
  );
}
