"use client";
import { useState } from "react";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle2, ChevronDown, Clock, ShieldCheck, Wind, AlertTriangle } from "lucide-react";

const BASE = "/hvac-group-inc-premium";
const dots = { backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "28px 28px" };

const benefits = [
  { icon: Clock, title: "Fast Response", desc: "We prioritize AC repair calls, especially in summer. Same-day service available across Charlotte, NC." },
  { icon: ShieldCheck, title: "Accurate Diagnosis", desc: "We find the actual source of the problem, not just what's visible on the surface." },
  { icon: AlertTriangle, title: "Honest Assessment", desc: "If it's not worth repairing, we'll tell you — with clear numbers, not a sales pitch." },
  { icon: Wind, title: "All Systems Serviced", desc: "Central AC, mini-splits, heat pumps in cooling mode — residential and commercial." },
];

const process = [
  { n: "01", title: "Full System Inspection", desc: "We examine refrigerant, electrical components, coils, filters, and thermostat." },
  { n: "02", title: "Root Cause Diagnosis", desc: "Professional diagnostic tools identify what's actually failing and why." },
  { n: "03", title: "Clear Estimate", desc: "Itemized estimate before any work begins. No surprises." },
  { n: "04", title: "Precision Repair", desc: "Quality parts, thorough testing, confirmed performance before we leave." },
];

const faqs = [
  { q: "How quickly can you respond to an AC repair call?", a: "We prioritize HVAC service calls and aim to respond the same day whenever possible. During peak summer months, we work extended hours to accommodate urgent repairs in Charlotte, NC." },
  { q: "What are the most common signs my AC needs repair?", a: "Warm air from vents, unusual noises (clicking, grinding, squealing), poor airflow, ice on the unit, frequent cycling, water leaks, or a spike in energy bills are all indicators of an AC problem." },
  { q: "Do you repair all AC brands?", a: "Yes. We service all major brands including Carrier, Trane, Lennox, Rheem, York, Goodman, American Standard, and others." },
  { q: "Can a refrigerant leak be repaired?", a: "Yes. We locate the leak using professional detection equipment, repair the damaged component, and recharge to the correct level. We fix the source — not just top off the refrigerant." },
  { q: "Should I repair or replace my AC?", a: "If the repair cost exceeds 50% of a new system and your unit is over 10–12 years old, replacement often makes more financial sense. We'll give you an honest comparison." },
];

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border rounded-xl overflow-hidden transition-all duration-200 ${open ? "border-emerald-200 bg-emerald-50/30" : "border-slate-200 bg-white hover:border-slate-300"}`}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left">
        <span className={`font-semibold text-sm leading-snug ${open ? "text-emerald-700" : "text-slate-900"}`}>{q}</span>
        <ChevronDown className={`w-4 h-4 flex-shrink-0 mt-0.5 transition-transform duration-300 ${open ? "rotate-180 text-emerald-600" : "text-slate-400"}`} />
      </button>
      {open && <div className="px-6 pb-5"><div className="h-px bg-emerald-100 mb-4" /><p className="text-slate-600 text-sm leading-relaxed">{a}</p></div>}
    </div>
  );
}

export default function ACRepairPage() {
  return (
    <>
      <section className="relative bg-slate-950 pt-32 pb-14 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={dots} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3.5 py-1.5 mb-6">
            <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase">AC Repair · Charlotte, NC</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-5 max-w-3xl">
            AC Repair Services in <span className="text-emerald-400">Charlotte, NC</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mb-8">
            Fast, accurate air conditioning repair for homes and businesses. Licensed, insured, backed by 20+ years of experience.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:+19802630912" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-emerald-900/30">
              <Phone className="w-4 h-4" /> Call (980) 263-0912
            </a>
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-500 text-white px-6 py-3.5 rounded-xl text-sm font-semibold transition-all">
              Request Estimate <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5 leading-tight">When Your AC Fails, Every Hour Matters</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>A malfunctioning AC in Charlotte&apos;s summer heat is more than an inconvenience — it&apos;s a health concern. Most failures trace back to a handful of causes: refrigerant leaks, failed capacitors, dirty coils, or electrical issues.</p>
                <p>At HVAC Group Inc, we arrive with professional diagnostic equipment, identify the root cause, present a clear estimate, and perform a precision repair. No guesswork. No unnecessary parts.</p>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Repair <span className="text-emerald-600">Process</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map(({ n, title, desc }) => (
              <div key={n} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-emerald-200 hover:shadow-sm transition-all group">
                <span className="text-5xl font-black block mb-4 leading-none" style={{ color: "rgba(16,185,129,0.10)" }}>{n}</span>
                <div className="w-7 h-0.5 bg-emerald-500/50 mb-4 group-hover:bg-emerald-500 transition-colors" />
                <h3 className="text-slate-900 font-bold text-sm mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">AC Repair <span className="text-emerald-600">FAQs</span></h2>
          <div className="space-y-2">{faqs.map((f) => <FAQ key={f.q} {...f} />)}</div>
        </div>
      </section>

      <section className="bg-slate-50 border-t border-slate-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Get Your AC Fixed?</h2>
          <p className="text-slate-600 mb-8">Serving Charlotte, NC and surrounding areas. Bilingual service available.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="tel:+19802630912" className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-7 py-4 rounded-xl text-sm font-bold transition-all">
              <Phone className="w-4 h-4" /> Call (980) 263-0912
            </a>
            <a href="tel:+17042819121" className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 px-7 py-4 rounded-xl text-sm font-bold transition-all">
              <Phone className="w-4 h-4" /> Llamar (ES): (704) 281-9121
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[["AC Installation", `${BASE}/ac-installation`], ["Heating Repair", `${BASE}/heating-repair`], ["Indoor Air Quality", `${BASE}/indoor-air-quality`], ["Commercial HVAC", `${BASE}/commercial-hvac`]].map(([label, href]) => (
              <Link key={href} href={href} className="flex items-center gap-1.5 bg-white border border-slate-200 hover:border-emerald-200 text-slate-700 hover:text-emerald-600 px-4 py-2 rounded-lg text-sm transition-all">
                {label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
