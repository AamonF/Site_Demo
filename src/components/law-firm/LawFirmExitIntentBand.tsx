import Link from "next/link";

import { FIRM } from "@/lib/law-firm/firm";
import { LAW_FIRM_BASE } from "@/lib/law-firm/site";

/** Conversion band styled like a premium exit-intent offer — static for demo (no mouse-leave JS). */
export function LawFirmExitIntentBand() {
  return (
    <section
      className="relative py-16 overflow-hidden bg-gradient-to-br from-law-navy-950 via-law-navy-900 to-law-navy-800 border-t border-white/10"
      aria-labelledby="exit-cta-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_120%,rgba(201,162,39,0.15),transparent_55%)]" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-law-gold-light text-xs font-semibold uppercase tracking-[0.25em] mb-3">
          Still deciding?
        </p>
        <h2 id="exit-cta-heading" className="text-white text-2xl sm:text-3xl font-semibold">
          One conversation can change what happens next
        </h2>
        <p className="mt-4 text-slate-400 leading-relaxed max-w-2xl mx-auto text-[15px] font-light">
          In {FIRM.city}, windows close quickly—DMV deadlines, filing dates, and insurer investigations
          do not pause. Speak with our team before evidence fades. Urgent criminal and injury intakes
          are prioritized same-day when possible.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={`${LAW_FIRM_BASE}/free-consultation`}
            className="inline-flex items-center justify-center rounded-lg bg-law-gold px-8 py-3.5 text-sm font-semibold text-law-navy-950 hover:bg-[#d4b23a] transition-colors"
          >
            Reserve a consultation
          </Link>
          <a
            href={`tel:${FIRM.phoneTel.replace(/\D/g, "")}`}
            className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Call {FIRM.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
