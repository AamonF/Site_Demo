import Link from "next/link";

import { SEO_LONGFORM_HOME } from "@/lib/law-firm/content";
import { getParentPracticePages, practiceDetailUrl } from "@/lib/law-firm/practice-registry";
import { FIRM } from "@/lib/law-firm/firm";
import { LAW_FIRM_BASE } from "@/lib/law-firm/site";

export function LawFirmSeoContent() {
  const areas = getParentPracticePages();

  return (
    <section className="py-24 md:py-28 bg-[#f4f5f8] border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="max-w-none">
          <p className="text-law-gold-dark font-semibold text-xs uppercase tracking-[0.28em] mb-4">
            Local counsel
          </p>
          <h2 className="text-law-navy-950 text-[1.85rem] sm:text-3xl md:text-[2.15rem] font-semibold tracking-tight leading-tight text-balance">
            {SEO_LONGFORM_HOME.heading}
          </h2>
          <div className="mt-10 space-y-7 text-slate-600 leading-[1.8] text-[17px] font-light">
            {SEO_LONGFORM_HOME.paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </article>

        <aside className="mt-14 md:mt-16 rounded-[1.15rem] border border-slate-200/90 bg-white p-8 md:p-10 shadow-[0_16px_48px_-28px_rgba(15,23,42,0.2)]">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 mb-6">
            Practice guides · {FIRM.city}
          </h3>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-[15px]">
            {areas.map((a) => (
              <li key={a.path} className="border-b border-slate-100 pb-4 last:border-0 sm:last:border-b sm:border-slate-100">
                <Link
                  href={practiceDetailUrl(a.path)}
                  className="text-law-navy-900 font-medium hover:text-law-gold-dark transition-colors underline-offset-4 hover:underline"
                >
                  {a.name}
                </Link>
                <span className="block text-[13px] text-slate-500 mt-1 font-light">
                  Counsel for {FIRM.county} & the Charlotte metro
                </span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
