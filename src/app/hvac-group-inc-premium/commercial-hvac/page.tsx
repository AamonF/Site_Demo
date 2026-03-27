"use client";
import { useState } from "react";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle2, ChevronDown, Building2, Clock, TrendingDown, ShieldCheck, Users, Wrench } from "lucide-react";

const BASE = "/hvac-group-inc-premium";
const dots = { backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "28px 28px" };

const capabilities = [
  { icon: Building2, title: "Office Buildings", desc: "Climate control for single and multi-tenant office environments. Zoned systems, energy management, responsive service." },
  { icon: Users, title: "Retail Spaces", desc: "Reliable HVAC for retail environments where system failure directly impacts customer experience and revenue." },
  { icon: Wrench, title: "Multi-Unit Housing", desc: "Individual and centralized HVAC for apartment complexes, condos, and multi-family residential properties." },
  { icon: TrendingDown, title: "Preventative Maintenance", desc: "Structured programs that prevent failures, reduce energy costs, and extend equipment life." },
  { icon: ShieldCheck, title: "Rooftop Units (RTU)", desc: "Installation, repair, and replacement of commercial rooftop HVAC units — the most common commercial configuration." },
  { icon: Clock, title: "Rapid Commercial Response", desc: "Downtime is expensive. We prioritize commercial clients and respond quickly to minimize operational disruption." },
];

const faqs = [
  { q: "Do you work with property managers?", a: "Yes. We regularly work with property managers overseeing multiple units or buildings — providing clear documentation, coordinating access scheduling, and maintaining consistent communication throughout every project." },
  { q: "Can you set up a preventative maintenance program?", a: "Absolutely. A structured PM program is one of the most cost-effective investments for commercial HVAC. We schedule regular inspections, filter changes, coil cleaning, and system checks to catch problems before they become failures." },
  { q: "What size commercial systems do you work on?", a: "We service light through mid-range commercial systems — rooftop units, split systems, and packaged systems commonly found in offices, retail spaces, and multi-unit residential properties in the Charlotte area." },
  { q: "How do you minimize disruption during commercial work?", a: "We coordinate scheduling around business hours, work efficiently in occupied spaces, and communicate clearly with facility contacts and property managers throughout every job." },
  { q: "Do you offer emergency commercial HVAC service?", a: "Yes. Contact us when your commercial system goes down and we'll prioritize getting a technician to your property as quickly as possible." },
  { q: "How can I reduce commercial HVAC energy costs?", a: "Regular preventative maintenance, proper thermostat programming, equipment upgrades, and addressing refrigerant or duct leakage are the highest-ROI improvements. We'll assess your system and prioritize accordingly." },
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

export default function CommercialHVACPage() {
  return (
    <>
      <section className="relative bg-slate-950 pt-32 pb-14 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={dots} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3.5 py-1.5 mb-6">
            <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase">Commercial HVAC · Charlotte, NC</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-5 max-w-3xl">
            Commercial HVAC Services in <span className="text-emerald-400">North Carolina</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mb-8">Reliable HVAC for property managers, offices, retail, and multi-unit housing. Built around uptime, efficiency, and professional execution.</p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:+19802630912" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-emerald-900/30"><Phone className="w-4 h-4" /> Call (980) 263-0912</a>
            <Link href={`${BASE}/contact`} className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-500 text-white px-6 py-3.5 rounded-xl text-sm font-semibold transition-all">Commercial Quote <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">Commercial HVAC Demands a Different Standard</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>Residential HVAC failure is an inconvenience. Commercial failure is a business disruption that affects tenants, customers, productivity, and your bottom line.</p>
                <p>At HVAC Group Inc, we approach commercial work differently: faster response, thorough documentation, and a focus on preventative maintenance that keeps systems running reliably rather than responding to failures after they happen.</p>
              </div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <h3 className="text-slate-900 font-bold text-lg mb-5">Why Commercial Clients Choose Us</h3>
              <ul className="space-y-3">
                {["Experienced with commercial rooftop and split systems","Preventative maintenance programs available","Property manager coordination and communication","Reliable scheduling and on-time arrival","Clear estimates before any work begins","Documented service reports on every visit","Bilingual team — English and Spanish","Licensed and fully insured"].map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-8">Commercial <span className="text-emerald-600">Capabilities</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-emerald-200 hover:shadow-sm transition-all group">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
                  <Icon className="w-4 h-4 text-emerald-600" />
                </div>
                <h3 className="text-slate-900 font-semibold text-sm mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-100 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Commercial HVAC <span className="text-emerald-600">FAQs</span></h2>
          <div className="space-y-2">{faqs.map((f) => <FAQ key={f.q} {...f} />)}</div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Partner with a Reliable Commercial Contractor</h2>
          <p className="text-slate-600 mb-8">HVAC Group Inc serves property managers and commercial clients across Charlotte, NC.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+19802630912" className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-7 py-4 rounded-xl text-sm font-bold transition-all"><Phone className="w-4 h-4" /> Call (980) 263-0912</a>
            <Link href={`${BASE}/contact`} className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 hover:border-slate-300 text-slate-900 px-7 py-4 rounded-xl text-sm font-bold transition-all">Commercial Quote <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[["AC Repair", `${BASE}/ac-repair`], ["Indoor Air Quality", `${BASE}/indoor-air-quality`], ["About Us", `${BASE}/about`]].map(([label, href]) => (
              <Link key={href} href={href} className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 hover:border-emerald-200 text-slate-700 hover:text-emerald-600 px-4 py-2 rounded-lg text-sm transition-all">{label} <ArrowRight className="w-3.5 h-3.5" /></Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
