import type { Metadata } from "next";
import { Shield, Phone } from "lucide-react";

import { LawFirmConsultationForm } from "@/components/law-firm/LawFirmConsultationForm";
import { FIRM } from "@/lib/law-firm/firm";
import { lawMetadata } from "@/lib/law-firm/seo";

export const metadata: Metadata = lawMetadata({
  title: "Free Consultation",
  description: `Book a free confidential consultation with ${FIRM.name}. ${FIRM.phoneDisplay}. Urgent criminal and injury intakes prioritized.`,
  path: "/free-consultation",
});

export default function FreeConsultationPage() {
  return (
    <main>
      <section className="relative bg-law-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_0%,rgba(201,162,39,0.15),transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <p className="text-law-gold-light font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Limited-risk first step
          </p>
          <h1 className="text-3xl sm:text-5xl font-semibold max-w-3xl leading-tight">
            Free consultation for qualifying matters
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl leading-relaxed">
            Tell us what you are facing. We will tell you whether we can help, what it may cost, and
            what we recommend next—without pressure.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`tel:${FIRM.phoneTel.replace(/\D/g, "")}`}
              className="inline-flex items-center gap-2 rounded-lg bg-law-gold px-6 py-3.5 text-sm font-semibold text-law-navy-950"
            >
              <Phone className="w-4 h-4" />
              Call {FIRM.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-6 text-slate-600">
          <h2 className="text-law-navy-950 text-xl font-semibold">What happens next</h2>
          <ol className="list-decimal pl-5 space-y-3 text-sm leading-relaxed">
            <li>Submit the form or call intake.</li>
            <li>We confirm conflicts and schedule attorney time.</li>
            <li>You receive a candid assessment and engagement options.</li>
          </ol>
          <div className="rounded-xl border border-law-gold/30 bg-law-gold/5 p-4 flex gap-3 text-sm">
            <Shield className="w-5 h-5 text-law-gold-dark shrink-0 mt-0.5" />
            <span>
              No attorney-client relationship is formed by submitting this form. Do not include
              secrets you cannot risk disclosing until we confirm representation.
            </span>
          </div>
        </div>
        <div className="lg:col-span-3 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-sm">
          <LawFirmConsultationForm id="landing-consult" showCalendarHint />
        </div>
      </div>
    </main>
  );
}
