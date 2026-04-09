import Link from "next/link";
import { Phone } from "lucide-react";

import { FIRM } from "@/lib/law-firm/firm";
import { LAW_FIRM_BASE } from "@/lib/law-firm/site";

type Props = {
  title: string;
  subtitle: string;
};

export function LawFirmPracticeMidCta({ title, subtitle }: Props) {
  return (
    <aside className="my-14 rounded-2xl border border-law-gold/25 bg-gradient-to-br from-law-navy-950 to-law-navy-900 px-6 py-8 sm:px-10 sm:py-10 text-white shadow-xl shadow-law-navy-950/20">
      <p className="text-law-gold-light text-xs font-semibold uppercase tracking-[0.22em] mb-2">
        Next step
      </p>
      <h3 className="text-xl sm:text-2xl font-semibold leading-snug text-balance">{title}</h3>
      <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">{subtitle}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={`${LAW_FIRM_BASE}/free-consultation`}
          className="inline-flex items-center justify-center rounded-lg bg-law-gold px-5 py-3 text-sm font-semibold text-law-navy-950 hover:bg-[#d4b23a]"
        >
          Book free consultation
        </Link>
        <a
          href={`tel:${FIRM.phoneTel.replace(/\D/g, "")}`}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
        >
          <Phone className="w-4 h-4 shrink-0" aria-hidden />
          Call {FIRM.phoneDisplay}
        </a>
      </div>
    </aside>
  );
}
