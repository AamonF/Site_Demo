import Link from "next/link";
import { FileDown } from "lucide-react";

import { FIRM } from "@/lib/law-firm/firm";
import { LAW_FIRM_BASE } from "@/lib/law-firm/site";

export function LawFirmResourceGuide() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-law-navy-900 via-law-navy-950 to-law-navy-900 border-y border-law-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex items-start gap-5">
          <div className="h-14 w-14 rounded-xl bg-law-gold/12 border border-law-gold/28 flex items-center justify-center shrink-0 shadow-inner">
            <FileDown className="w-7 h-7 text-law-gold-light" aria-hidden />
          </div>
          <div>
            <p className="text-law-gold-light/90 text-[11px] font-semibold uppercase tracking-[0.22em] mb-2">
              Charlotte drivers
            </p>
            <h2 className="text-white text-xl sm:text-2xl font-semibold tracking-tight">
              After a crash on I-77, I-485, or surface streets
            </h2>
            <p className="mt-3 text-slate-400 text-sm leading-relaxed max-w-xl font-light">
              A practical checklist for injury scenes in {FIRM.county}—evidence, medical
              documentation, and insurer conversations. PDF placeholder for download.
            </p>
          </div>
        </div>
        <Link
          href={`${LAW_FIRM_BASE}/contact`}
          className="shrink-0 inline-flex items-center justify-center rounded-lg bg-law-gold px-8 py-3.5 text-sm font-semibold text-law-navy-950 hover:bg-[#d4b23a] transition-colors"
        >
          Request the guide
        </Link>
      </div>
    </section>
  );
}
