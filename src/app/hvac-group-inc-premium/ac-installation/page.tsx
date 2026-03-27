"use client";
import { useState } from "react";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle2, ChevronDown, Settings } from "lucide-react";

const BASE = "/hvac-group-inc-premium";
const dots = { backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "28px 28px" };

const included = ["Professional load calculation and proper sizing","Energy-efficient equipment options","Full installation from equipment to commissioning","Ductwork inspection and sealing","Thermostat setup and programming","Post-installation walkthrough and guidance","Bilingual communication throughout"];
const faqs = [
  { q: "How do I know what size AC system I need?", a: "System sizing requires a load calculation that accounts for square footage, insulation, window placement, ceiling height, and local climate. Oversized and undersized systems both underperform — we size every installation correctly." },
  { q: "How long does AC installation take?", a: "Most residential installations complete in one day. Projects requiring new ductwork may take longer. We'll give you a complete timeline before scheduling." },
  { q: "What brands do you install?", a: "We work with a range of quality equipment brands. During the estimate, we recommend systems based on your budget, efficiency goals, and long-term performance needs." },
  { q: "What happens to my old system?", a: "We safely remove and dispose of your old equipment as part of the installation. Refrigerant is recovered in compliance with EPA regulations." },
  { q: "Do you handle new construction installs?", a: "Yes. We work on both replacement installations and new construction projects, coordinating with contractors on system design, duct layout, and equipment placement." },
];

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border rounded-xl overflow-hidden transition-all ${open ? "border-emerald-200 bg-emerald-50/30" : "border-slate-200 bg-white hover:border-slate-300"}`}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left">
        <span className={`font-semibold text-sm leading-snug ${open ? "text-emerald-700" : "text-slate-900"}`}>{q}</span>
        <ChevronDown className={`w-4 h-4 flex-shrink-0 mt-0.5 transition-transform duration-300 ${open ? "rotate-180 text-emerald-600" : "text-slate-400"}`} />
      </button>
      {open && <div className="px-6 pb-5"><div className="h-px bg-emerald-100 mb-4" /><p className="text-slate-600 text-sm leading-relaxed">{a}</p></div>}
    </div>
  );
}

export default function ACInstallationPage() {
  return (
    <>
      <section className="relative bg-slate-950 pt-32 pb-14 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={dots} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3.5 py-1.5 mb-6">
            <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase">AC Installation · Charlotte, NC</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-5 max-w-3xl">
            AC Installation &amp; Replacement in <span className="text-emerald-400">North Carolina</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mb-8">New central air conditioning systems and full replacements — professionally sized and installed for lasting comfort and efficiency.</p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:+19802630912" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-emerald-900/30"><Phone className="w-4 h-4" /> Call (980) 263-0912</a>
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-500 text-white px-6 py-3.5 rounded-xl text-sm font-semibold transition-all">Request Estimate <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5 leading-tight">A New System Done Right From Day One</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>The difference between a good installation and a poor one shows up over years of operation. An incorrectly sized system will short-cycle, fail to dehumidify, and wear out faster. An improperly installed system underperforms from the start.</p>
                <p>At HVAC Group Inc, every installation begins with a proper load calculation — not an estimate. We account for your space&apos;s actual thermal characteristics to select the right system for your needs and budget.</p>
              </div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                  <Settings className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-slate-900 font-bold text-lg">What Every Installation Includes</h3>
              </div>
              <ul className="space-y-3">
                {included.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-100 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Installation <span className="text-emerald-600">FAQs</span></h2>
          <div className="space-y-2">{faqs.map((f) => <FAQ key={f.q} {...f} />)}</div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready for a New AC System?</h2>
          <p className="text-slate-600 mb-8">Contact HVAC Group Inc for a free estimate across Charlotte, NC.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+19802630912" className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-7 py-4 rounded-xl text-sm font-bold transition-all"><Phone className="w-4 h-4" /> Call (980) 263-0912</a>
            <Link href={`${BASE}/contact`} className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 hover:border-slate-300 text-slate-900 px-7 py-4 rounded-xl text-sm font-bold transition-all">Get a Quote <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[["AC Repair", `${BASE}/ac-repair`], ["Heating Installation", `${BASE}/heating-installation`], ["Commercial HVAC", `${BASE}/commercial-hvac`]].map(([label, href]) => (
              <Link key={href} href={href} className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 hover:border-emerald-200 text-slate-700 hover:text-emerald-600 px-4 py-2 rounded-lg text-sm transition-all">
                {label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
