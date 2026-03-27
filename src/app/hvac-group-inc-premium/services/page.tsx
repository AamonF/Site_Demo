import type { Metadata } from "next";
import Link from "next/link";
import { Wind, Thermometer, Zap, Building2, Droplets, Settings, ArrowRight, CheckCircle2, Phone } from "lucide-react";

const BASE = "/hvac-group-inc-premium";

export const metadata: Metadata = {
  title: "HVAC Services in Charlotte, NC | HVAC Group Inc",
  description: "Complete HVAC services in Charlotte, NC — AC repair, installation, heating, indoor air quality, and commercial HVAC. Call (980) 263-0912.",
  alternates: { canonical: "/hvac-group-inc-premium/services" },
};

const services = [
  { icon: Wind, title: "AC Repair Services", slug: "ac-repair", description: "Fast, accurate air conditioning repair for homes and commercial spaces across Charlotte, NC.", bullets: ["All makes and models", "Refrigerant leak detection", "Capacitor, compressor, coil diagnostics", "Same-day availability"] },
  { icon: Settings, title: "AC Installation & Replacement", slug: "ac-installation", description: "New central AC installation and full replacements, properly sized and configured for lasting efficiency.", bullets: ["Load calculation for proper sizing", "Energy-efficient options", "Ductwork inspection", "New construction and retrofit"] },
  { icon: Thermometer, title: "Heating Repair", slug: "heating-repair", description: "Reliable furnace, heat pump, and heating system repair across the Charlotte region.", bullets: ["Gas and electric furnace repair", "Heat pump diagnostics", "Igniter, blower, heat exchanger service", "Safety verification"] },
  { icon: Zap, title: "Heating Installation", slug: "heating-installation", description: "Expert installation of furnaces and heat pumps with proper load calculations and full commissioning.", bullets: ["Furnace and heat pump installation", "High-efficiency options", "Load calculation and sizing", "Full system testing"] },
  { icon: Droplets, title: "Indoor Air Quality Solutions", slug: "indoor-air-quality", description: "Filtration, UV purification, humidity control, and ventilation upgrades for better indoor air.", bullets: ["Whole-home air filtration", "UV germicidal purification", "Humidification / dehumidification", "Ventilation upgrades"] },
  { icon: Building2, title: "Commercial HVAC", slug: "commercial-hvac", description: "Full-service commercial HVAC for offices, retail, multi-unit housing, and property managers.", bullets: ["Rooftop unit service", "Preventative maintenance programs", "Property manager preferred", "Commercial refrigeration"] },
];

const pageShell = "relative bg-slate-950 pt-32 pb-14 overflow-hidden";
const gridPattern = { backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)`, backgroundSize: "28px 28px" };

export default function ServicesHub() {
  return (
    <>
      <section className={pageShell}>
        <div className="absolute inset-0 opacity-[0.04]" style={gridPattern} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3.5 py-1.5 mb-6">
            <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase">All Services</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-5 max-w-3xl">
            HVAC Services in <span className="text-emerald-400">Charlotte, NC</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mb-8">
            Every residential and commercial HVAC need — handled professionally across North Carolina by one trusted team.
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {services.map(({ icon: Icon, title, slug, description, bullets }) => (
              <div key={slug} className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-emerald-200 hover:shadow-sm transition-all group">
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100 transition-colors">
                    <Icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h2 className="text-slate-900 font-bold text-xl pt-1 group-hover:text-emerald-700 transition-colors">{title}</h2>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{description}</p>
                <ul className="space-y-2 mb-6">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`${BASE}/${slug}`} className="inline-flex items-center gap-1.5 text-emerald-600 hover:text-emerald-500 text-sm font-semibold transition-colors group/l">
                  Learn More <ArrowRight className="w-3.5 h-3.5 group-hover/l:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-t border-slate-100 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">Give us a call. We&apos;ll ask the right questions and recommend only what&apos;s necessary — no pressure.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+19802630912" className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-emerald-600 text-white px-7 py-4 rounded-xl text-sm font-bold transition-all">
              <Phone className="w-4 h-4" /> Call (980) 263-0912
            </a>
            <Link href={`${BASE}/contact`} className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 hover:border-slate-300 text-slate-900 px-7 py-4 rounded-xl text-sm font-bold transition-all">
              Send a Message <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
