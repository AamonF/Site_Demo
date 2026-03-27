import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, MapPin, CheckCircle2 } from "lucide-react";

const BASE = "/hvac-group-inc-premium";
const dots = { backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "28px 28px" };

export const metadata: Metadata = {
  title: "HVAC Service Area | Charlotte, NC & Surrounding Areas | HVAC Group Inc",
  description: "HVAC Group Inc serves Charlotte, NC and surrounding communities — Concord, Huntersville, Matthews, Mint Hill, Pineville, and more. Call (980) 263-0912.",
  alternates: { canonical: "/hvac-group-inc-premium/service-area" },
};

const areas = ["Charlotte, NC","Concord, NC","Huntersville, NC","Matthews, NC","Mint Hill, NC","Pineville, NC","Cornelius, NC","Mooresville, NC","Gastonia, NC","Kannapolis, NC","Indian Trail, NC","Monroe, NC"];

export default function ServiceAreaPage() {
  return (
    <>
      <section className="relative bg-slate-950 pt-32 pb-14 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={dots} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3.5 py-1.5 mb-6">
            <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase">Service Area</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-5 max-w-3xl">
            Serving <span className="text-emerald-400">Charlotte, NC &amp; Surrounding Areas</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mb-8">Residential and commercial HVAC service throughout the greater Charlotte, North Carolina area — including communities across Mecklenburg and surrounding counties.</p>
          <a href="tel:+19802630912" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-emerald-900/30"><Phone className="w-4 h-4" /> Call (980) 263-0912</a>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">Communities We Serve</h2>
              <p className="text-slate-600 leading-relaxed mb-8">Our team is based in the Charlotte, NC area and serves homeowners and commercial properties throughout the region. Contact us to confirm availability in your location.</p>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                {areas.map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-400 text-sm mt-6 italic">* Service availability may vary. Contact us to confirm coverage in your area.</p>
            </div>
            <div className="space-y-5">
              {[
                { title: "Residential Service", desc: "All residential HVAC needs — repairs, installations, and indoor air quality solutions.", items: ["AC repair and installation", "Heating repair and installation", "Indoor air quality", "System tune-ups"] },
                { title: "Commercial Service", desc: "Full commercial HVAC for property managers, office buildings, retail, and multi-unit housing.", items: ["Rooftop unit service", "Preventative maintenance", "Commercial repairs", "Property manager coordination"] },
              ].map(({ title, desc, items }) => (
                <div key={title} className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-emerald-200 transition-colors">
                  <h3 className="text-slate-900 font-bold text-lg mb-3">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{desc}</p>
                  <ul className="space-y-2">
                    {items.map((s) => (
                      <li key={s} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-slate-700 text-sm">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-t border-slate-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Not Sure If We Cover Your Area?</h2>
          <p className="text-slate-600 mb-8">Call or send a message and we&apos;ll confirm service availability in your location.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+19802630912" className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-7 py-4 rounded-xl text-sm font-bold transition-all"><Phone className="w-4 h-4" /> Call (980) 263-0912</a>
            <Link href={`${BASE}/contact`} className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 hover:border-slate-300 text-slate-900 px-7 py-4 rounded-xl text-sm font-bold transition-all">Send a Message <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[["All Services", `${BASE}/services`], ["Commercial HVAC", `${BASE}/commercial-hvac`], ["About Us", `${BASE}/about`]].map(([label, href]) => (
              <Link key={href} href={href} className="flex items-center gap-1.5 bg-white border border-slate-200 hover:border-emerald-200 text-slate-700 hover:text-emerald-600 px-4 py-2 rounded-lg text-sm transition-all">{label} <ArrowRight className="w-3.5 h-3.5" /></Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
