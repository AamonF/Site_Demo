import Image from "next/image";
import Link from "next/link";
import { Phone, Shield, CheckCircle2 } from "lucide-react";

import { FIRM } from "@/lib/law-firm/firm";
import { IMAGES } from "@/lib/law-firm/content";
import { LAW_FIRM_BASE } from "@/lib/law-firm/site";
import { LawFirmConsultationForm } from "./LawFirmConsultationForm";

export function LawFirmBookingSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white scroll-mt-28 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <p className="text-law-gold-dark font-semibold text-xs uppercase tracking-[0.28em] mb-4">
            Consultation · {FIRM.city}, {FIRM.stateAbbr}
          </p>
          <h2 className="text-law-navy-950 text-[1.85rem] sm:text-3xl md:text-[2.25rem] font-semibold tracking-tight leading-tight">
            Tell us what happened. We&apos;ll tell you what we think.
          </h2>
          <p className="mt-5 text-slate-600 leading-[1.75] text-lg font-light">
            Same-day review when capacity allows. If we cannot help, we will say so—and point you in a
            better direction when we can.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-start">
          <div className="relative rounded-[1.35rem] overflow-hidden min-h-[420px] border border-slate-200/90 shadow-[0_28px_56px_-28px_rgba(15,23,42,0.35)]">
            <Image
              src={IMAGES.courthouse}
              alt="Mecklenburg County courthouse—Charlotte civil and criminal practice"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-law-navy-950 via-law-navy-950/55 to-law-navy-950/20" />
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-11 text-white">
              <h3 className="text-2xl sm:text-3xl font-semibold leading-tight tracking-tight">
                Call or book—whichever fits your day
              </h3>
              <p className="mt-4 text-slate-300 leading-relaxed max-w-md text-[15px] font-light">
                {FIRM.addressLine1}, {FIRM.addressLine2}. Parking validation available for scheduled
                visits.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${FIRM.phoneTel.replace(/\D/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-law-gold px-7 py-3.5 text-sm font-semibold text-law-navy-950 hover:bg-[#d4b23a] transition-colors shadow-lg shadow-black/25"
                >
                  <Phone className="w-4 h-4" />
                  {FIRM.phoneDisplay}
                </a>
                <Link
                  href={`${LAW_FIRM_BASE}/contact`}
                  className="inline-flex items-center justify-center rounded-xl border border-white/35 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Directions & hours
                </Link>
              </div>
              <div className="mt-8 flex items-start gap-3 text-xs text-slate-400 leading-relaxed max-w-lg">
                <Shield className="w-4 h-4 shrink-0 mt-0.5 text-law-gold-light" />
                <span>
                  No attorney-client relationship is formed through this website alone. Intake is
                  confidential; we screen conflicts before any engagement letter is signed.
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 border border-slate-200/90 px-3 py-1.5 text-[12px] text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-law-gold-dark" aria-hidden />
                Free initial consult (most matters)
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 border border-slate-200/90 px-3 py-1.5 text-[12px] text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-law-gold-dark" aria-hidden />
                {FIRM.licensedIn} attorneys
              </span>
            </div>
            <p className="text-law-gold-dark font-semibold text-xs uppercase tracking-[0.22em] mb-3">
              Secure request
            </p>
            <h3 className="text-xl font-semibold text-law-navy-950 tracking-tight">
              Request your consultation online
            </h3>
            <p className="mt-2 text-slate-600 text-[15px] leading-relaxed font-light">
              Prefer to start in writing? Submit the form—we typically respond within one business day,
              faster for urgent criminal and injury matters.
            </p>
            <div className="mt-8 rounded-[1.25rem] border border-slate-200/90 bg-[#fafbfc] p-7 sm:p-9 shadow-inner">
              <LawFirmConsultationForm id="home-consult" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
