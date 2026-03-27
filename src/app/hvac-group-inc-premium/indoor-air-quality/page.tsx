"use client";
import { useState } from "react";
import Link from "next/link";
import { Phone, ArrowRight, ChevronDown, Wind, Shield, Droplets, Thermometer } from "lucide-react";

const BASE = "/hvac-group-inc-premium";
const dots = { backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "28px 28px" };

const solutions = [
  { icon: Wind, title: "Air Filtration", desc: "High-efficiency filtration systems that capture airborne particles, allergens, and contaminants before they circulate through your space." },
  { icon: Shield, title: "UV Germicidal Purification", desc: "UV light systems installed in your ductwork neutralize bacteria, mold, and viruses at the source." },
  { icon: Droplets, title: "Humidity Control", desc: "Whole-home humidifiers and dehumidifiers maintain optimal indoor humidity — reducing mold risk and improving comfort." },
  { icon: Thermometer, title: "Ventilation Upgrades", desc: "Fresh air ventilation ensures continuous clean outdoor air, reducing CO2 buildup and improving overall air quality." },
];

const faqs = [
  { q: "What is indoor air quality and why does it matter?", a: "Indoor air quality (IAQ) refers to the condition of air inside your home or building. Poor IAQ — caused by allergens, pollutants, excess moisture, and inadequate ventilation — directly affects health, comfort, and productivity. The EPA estimates indoor air can be 2–5x more polluted than outdoor air." },
  { q: "What are signs of poor indoor air quality?", a: "Frequent allergies or respiratory symptoms that improve when you leave home, musty odors, visible mold, excessive dust, high humidity (condensation on windows), or very dry air in winter are common indicators." },
  { q: "How do air purifiers differ from standard HVAC filters?", a: "Standard filters capture larger particles and protect your HVAC equipment. Whole-home air purifiers and UV systems go further — neutralizing smaller particles, bacteria, viruses, and VOCs that standard filters don't address." },
  { q: "What's the ideal indoor humidity level?", a: "The EPA recommends 30–50%. Below 30%, air becomes dry (nosebleeds, static, cracked wood). Above 50%, mold and dust mite growth increases significantly." },
  { q: "Can you improve IAQ in commercial buildings?", a: "Yes. We assess and improve indoor air quality for office spaces, retail environments, and multi-unit properties across the Charlotte region." },
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

export default function IndoorAirQualityPage() {
  return (
    <>
      <section className="relative bg-slate-950 pt-32 pb-14 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={dots} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3.5 py-1.5 mb-6">
            <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase">Indoor Air Quality · Charlotte, NC</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-5 max-w-3xl">
            Indoor Air Quality Solutions in <span className="text-emerald-400">North Carolina</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mb-8">Filtration, purification, humidity control, and ventilation upgrades for cleaner, healthier indoor air.</p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:+19802630912" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-emerald-900/30"><Phone className="w-4 h-4" /> Call (980) 263-0912</a>
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-500 text-white px-6 py-3.5 rounded-xl text-sm font-semibold transition-all">Request Assessment <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">The Air Inside Your Space Matters</h2>
            <p className="text-slate-600 leading-relaxed">Most people spend the majority of their time indoors — yet indoor air often contains significantly more pollutants than outdoor air. The air circulating through your HVAC system directly impacts health and comfort.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {solutions.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-slate-50 border border-slate-200 rounded-2xl p-7 hover:border-emerald-200 hover:shadow-sm transition-all group">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5 group-hover:bg-emerald-100 transition-colors">
                  <Icon className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-slate-900 font-bold text-base mb-2.5">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-100 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">IAQ <span className="text-emerald-600">FAQs</span></h2>
          <div className="space-y-2">{faqs.map((f) => <FAQ key={f.q} {...f} />)}</div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Breathe Better. Start Today.</h2>
          <p className="text-slate-600 mb-8">Contact HVAC Group Inc for an IAQ consultation in Charlotte, NC.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+19802630912" className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-7 py-4 rounded-xl text-sm font-bold transition-all"><Phone className="w-4 h-4" /> Call (980) 263-0912</a>
            <Link href={`${BASE}/contact`} className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 hover:border-slate-300 text-slate-900 px-7 py-4 rounded-xl text-sm font-bold transition-all">Request Assessment <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[["AC Repair", `${BASE}/ac-repair`], ["Commercial HVAC", `${BASE}/commercial-hvac`], ["All Services", `${BASE}/services`]].map(([label, href]) => (
              <Link key={href} href={href} className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 hover:border-emerald-200 text-slate-700 hover:text-emerald-600 px-4 py-2 rounded-lg text-sm transition-all">{label} <ArrowRight className="w-3.5 h-3.5" /></Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
