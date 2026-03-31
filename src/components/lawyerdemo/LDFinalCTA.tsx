import { ArrowRight, Phone } from "lucide-react";

import { CONSULTATION_MAIL_HREF, PHONE, PHONE_HREF } from "./constants";

export default function LDFinalCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="relative py-20 md:py-28 bg-[#0a1628] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_120%,rgba(201,162,39,0.18),transparent_55%)]" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="cta-heading" className="text-3xl sm:text-4xl md:text-[2.5rem] text-white leading-tight">
          Get the Legal Guidance You Need
        </h2>
        <p className="mt-5 text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Schedule a consultation to discuss your situation, timelines, and the best path forward—with
          clarity and professionalism.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={CONSULTATION_MAIL_HREF}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-w-[220px] rounded-md bg-[#c9a227] px-8 py-4 text-base font-semibold text-[#0a1628] shadow-lg shadow-black/25 hover:bg-[#d4b23a] transition-colors duration-200"
          >
            Schedule Consultation
            <ArrowRight className="w-4 h-4" aria-hidden />
          </a>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-w-[220px] rounded-md border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors duration-200"
          >
            <Phone className="w-4 h-4" aria-hidden />
            Call {PHONE}
          </a>
        </div>
        <p className="mt-8 text-slate-500 text-sm">
          Response times vary by matter urgency. For emergencies involving safety, contact
          appropriate authorities first.
        </p>
      </div>
    </section>
  );
}
