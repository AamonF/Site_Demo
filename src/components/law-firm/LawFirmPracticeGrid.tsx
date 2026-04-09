import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { getChildPracticePages, getParentPracticePages, practiceDetailUrl } from "@/lib/law-firm/practice-registry";
import { LAW_FIRM_BASE } from "@/lib/law-firm/site";

export function LawFirmPracticeGrid() {
  const parents = getParentPracticePages();

  return (
    <section
      id="practice-areas"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="practice-areas-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 md:mb-16">
          <p className="text-law-gold-dark font-semibold text-xs uppercase tracking-[0.28em] mb-4">
            Multi-practice advocacy
          </p>
          <h2
            id="practice-areas-heading"
            className="text-law-navy-950 text-[1.85rem] sm:text-3xl md:text-[2.35rem] font-semibold tracking-tight leading-tight text-balance"
          >
            Practice hubs built like real intake funnels—not a single generic services list
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-[1.75] font-light">
            Each category opens into dedicated pages for specific case types—so you see relevant FAQs,
            representative outcomes, and CTAs without wading through irrelevant practice groups.
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {parents.map((parent) => {
            const children = getChildPracticePages(parent.segment);
            return (
              <div
                key={parent.path}
                className="rounded-[1.35rem] border border-slate-200/90 bg-slate-50/40 overflow-hidden shadow-[0_4px_32px_-16px_rgba(15,23,42,0.1)]"
              >
                <div className="grid lg:grid-cols-[280px_1fr] gap-0">
                  <Link
                    href={practiceDetailUrl(parent.path)}
                    className="relative min-h-[200px] lg:min-h-full group block"
                  >
                    <Image
                      src={parent.image}
                      alt={parent.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 280px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-law-navy-950/95 via-law-navy-950/55 to-law-navy-950/25" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
                      <p className="text-law-gold-light text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                        Practice hub
                      </p>
                      <h3 className="text-white text-xl font-semibold leading-snug group-hover:text-law-gold-light transition-colors">
                        {parent.name}
                      </h3>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white/90">
                        Open overview
                        <ArrowUpRight className="w-4 h-4" aria-hidden />
                      </span>
                    </div>
                  </Link>

                  <div className="p-6 sm:p-8 lg:p-10 bg-white/80">
                    <p className="text-slate-600 leading-relaxed mb-6">{parent.shortDescription}</p>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {children.map((c) => (
                        <li key={c.path}>
                          <Link
                            href={practiceDetailUrl(c.path)}
                            className="flex items-start gap-2 rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm font-medium text-law-navy-900 hover:border-law-gold/40 hover:bg-slate-50/80 transition-colors group/link"
                          >
                            <span className="text-law-gold mt-0.5">→</span>
                            <span className="leading-snug">
                              {c.name}
                              <span className="block text-[12px] font-normal text-slate-500 mt-0.5 line-clamp-2">
                                {c.shortDescription}
                              </span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Link
                        href={`${LAW_FIRM_BASE}/practice-areas`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-law-navy-900 hover:text-law-gold-dark"
                      >
                        Browse all practice areas
                        <ArrowUpRight className="w-4 h-4" aria-hidden />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
