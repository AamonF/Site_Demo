import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { FIRM } from "@/lib/law-firm/firm";
import { LAW_FIRM_BASE } from "@/lib/law-firm/site";

type Props = {
  variant?: "light" | "dark";
};

export function LawFirmInlineCTA({ variant = "light" }: Props) {
  const dark = variant === "dark";
  return (
    <aside
      className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ${
        dark
          ? "py-12 md:py-14 rounded-2xl border border-white/10 bg-gradient-to-br from-law-navy-900/90 to-law-navy-950 text-white shadow-xl shadow-black/30"
          : "py-10 md:py-12 rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-50 to-white text-law-navy-950 shadow-lg shadow-slate-200/60"
      }`}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 px-6 sm:px-10">
        <div className="max-w-xl">
          <p
            className={`text-xs font-semibold uppercase tracking-[0.2em] mb-2 ${
              dark ? "text-law-gold-light" : "text-law-gold-dark"
            }`}
          >
            Charlotte & Mecklenburg County
          </p>
          <p className={`text-lg sm:text-xl font-semibold leading-snug ${dark ? "text-white" : ""}`}>
            Ready for a candid assessment? Same-day intake review when capacity allows.
          </p>
          <p
            className={`mt-2 text-sm leading-relaxed ${
              dark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            No fee for the initial conversation on most matters. Speak with a person—not an
            endless phone tree.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <Link
            href={`${LAW_FIRM_BASE}/free-consultation`}
            className={`inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold transition-colors ${
              dark
                ? "bg-law-gold text-law-navy-950 hover:bg-[#d4b23a]"
                : "bg-law-navy-900 text-white hover:bg-law-navy-800"
            }`}
          >
            Book consultation
            <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>
          <a
            href={`tel:${FIRM.phoneTel.replace(/\D/g, "")}`}
            className={`inline-flex items-center justify-center gap-2 rounded-xl border px-7 py-3.5 text-sm font-semibold transition-colors ${
              dark
                ? "border-white/25 text-white hover:bg-white/10"
                : "border-law-navy-900/20 text-law-navy-900 hover:border-law-gold/50"
            }`}
          >
            <Phone className="w-4 h-4" aria-hidden />
            {FIRM.phoneDisplay}
          </a>
        </div>
      </div>
    </aside>
  );
}
