"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Do you offer emergency HVAC repair?", a: "Yes. HVAC failures don't follow business hours. Contact us when your system goes down and we'll dispatch a technician as quickly as possible — especially during Charlotte's extreme summers and winters." },
  { q: "Do you service commercial HVAC systems?", a: "Absolutely. Commercial HVAC is a core part of our business. We work with property managers, office buildings, retail spaces, and multi-unit housing across the Charlotte, NC region." },
  { q: "Can I request service in Spanish?", a: "Yes. Call our Spanish-language line at (704) 281-9121. You'll communicate entirely in Spanish from the first call through the completed job." },
  { q: "Should I repair or replace my unit?", a: "It depends on the system's age, condition, and repair cost. If repair cost exceeds 50% of replacement and the unit is over 10 years old, replacement often makes more financial sense. We give you an honest comparison either way." },
  { q: "Do you install new AC and heating systems?", a: "Yes. We handle full installations and replacements for central air, heat pumps, and furnaces — properly sized with load calculations for your specific space." },
  { q: "What areas in North Carolina do you serve?", a: "We serve Charlotte, NC and surrounding areas including Concord, Huntersville, Matthews, Mint Hill, Pineville, Cornelius, and more. Contact us to confirm coverage in your location." },
  { q: "How long has HVAC Group Inc been in business?", a: "We founded HVAC Group Inc in 2017, but our team's experience in the trade goes back to 2005 — giving us over 20 years of practical knowledge across residential and commercial systems." },
];

export default function HGFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-3.5 py-1.5 mb-6">
            <span className="text-emerald-600 text-xs font-semibold tracking-widest uppercase">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Common <span className="text-emerald-600">Questions</span>
          </h2>
          <p className="text-slate-600 text-lg">Straightforward answers about our services and process.</p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i}
              className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                open === i ? "border-emerald-200 bg-emerald-50/30 shadow-sm" : "border-slate-200 bg-white hover:border-slate-300"
              }`}>
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left" aria-expanded={open === i}>
                <span className={`font-semibold text-sm leading-snug transition-colors ${open === i ? "text-emerald-700" : "text-slate-900"}`}>
                  {faq.q}
                </span>
                <ChevronDown className={`w-4 h-4 flex-shrink-0 mt-0.5 transition-transform duration-300 ${open === i ? "rotate-180 text-emerald-600" : "text-slate-400"}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <div className="h-px bg-emerald-100 mb-4" />
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
