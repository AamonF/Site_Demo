"use client";
import { useState } from "react";
import Link from "next/link";
import { Phone, ArrowRight, ChevronDown, Clock, ShieldCheck, Zap, Thermometer } from "lucide-react";

const BASE = "/hvac-group-inc-premium";
const dots = { backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "28px 28px" };

const benefits = [
  { icon: Clock, title: "Rapid Response", desc: "Heating failures in winter demand fast service. We prioritize heat-loss calls." },
  { icon: ShieldCheck, title: "Safety First", desc: "We verify carbon monoxide levels and heat exchanger integrity on every furnace repair." },
  { icon: Zap, title: "Precision Repair", desc: "We identify the actual failed component and repair it correctly." },
  { icon: Thermometer, title: "All Systems", desc: "Gas and electric furnaces, heat pumps — residential and commercial." },
];

const faqs = [
  { q: "What are signs my heating system needs repair?", a: "Insufficient heat, uneven temperatures, unusual sounds (banging, squealing), frequent on/off cycling, a yellow or flickering furnace flame, rising energy bills, or a system that won't start are all indicators of a problem." },
  { q: "Is it safe to run my furnace if it's making noise?", a: "Banging or rumbling can indicate a cracked heat exchanger — a potential carbon monoxide risk. If you hear unusual sounds, shut the system off and call us before running it again." },
  { q: "Do you repair heat pumps as well as furnaces?", a: "Yes. We service gas furnaces, electric furnaces, and heat pumps in heating mode. Our technicians are trained across all heating systems in the Charlotte, NC area." },
  { q: "How long does a heating repair take?", a: "Most repairs complete in a few hours. We stock commonly needed components to resolve most jobs on the first visit." },
  { q: "My furnace keeps cycling on and off — what's causing it?", a: "Short-cycling is usually caused by an overheating furnace (dirty filter or blocked vents), a faulty flame sensor, or a thermostat issue. All are diagnosable and fixable." },
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

export default function HeatingRepairPage() {
  return (
    <>
      <section className="relative bg-slate-950 pt-32 pb-14 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={dots} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3.5 py-1.5 mb-6">
            <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase">Heating Repair · Charlotte, NC</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-5 max-w-3xl">
            Heating Repair Services in <span className="text-emerald-400">Charlotte, NC</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mb-8">Reliable furnace and heating system repair for homes and businesses. Fast response, honest diagnosis, lasting repairs.</p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:+19802630912" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-emerald-900/30"><Phone className="w-4 h-4" /> Call (980) 263-0912</a>
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-500 text-white px-6 py-3.5 rounded-xl text-sm font-semibold transition-all">Request Estimate <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">Don&apos;t Wait on a Heating Problem</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>Heating failures in Charlotte winters can escalate quickly. A failing furnace isn&apos;t just an inconvenience — cracked heat exchangers and blocked flues can present real carbon monoxide risks if left unaddressed.</p>
                <p>Our technicians perform thorough safety checks on every furnace repair, including CO testing, heat exchanger inspection, and flue verification. We make sure the system is safe to operate — not just functional.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-emerald-200 transition-colors">
                  <Icon className="w-5 h-5 text-emerald-600 mb-3" />
                  <h3 className="text-slate-900 font-semibold text-sm mb-1.5">{title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-100 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Heating Repair <span className="text-emerald-600">FAQs</span></h2>
          <div className="space-y-2">{faqs.map((f) => <FAQ key={f.q} {...f} />)}</div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Heating Problem? We&apos;re Ready.</h2>
          <p className="text-slate-600 mb-8">Fast heating repair across Charlotte, NC. Bilingual service available.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+19802630912" className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-7 py-4 rounded-xl text-sm font-bold transition-all"><Phone className="w-4 h-4" /> Call (980) 263-0912</a>
            <a href="tel:+17042819121" className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 px-7 py-4 rounded-xl text-sm font-bold transition-all"><Phone className="w-4 h-4" /> Llamar (ES): (704) 281-9121</a>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[["Heating Installation", `${BASE}/heating-installation`], ["AC Repair", `${BASE}/ac-repair`], ["Commercial HVAC", `${BASE}/commercial-hvac`]].map(([label, href]) => (
              <Link key={href} href={href} className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 hover:border-emerald-200 text-slate-700 hover:text-emerald-600 px-4 py-2 rounded-lg text-sm transition-all">{label} <ArrowRight className="w-3.5 h-3.5" /></Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
