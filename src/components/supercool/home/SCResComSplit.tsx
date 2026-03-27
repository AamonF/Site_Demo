import Link from "next/link";
import { Home, Building2, CheckCircle, ArrowRight } from "lucide-react";

const RESIDENTIAL_POINTS = [
  "Central air conditioning repairs and replacements",
  "Heat pump installation and service",
  "Ductless mini-split systems",
  "Furnace and air handler maintenance",
  "Indoor air quality improvements",
  "Home energy audits and efficiency upgrades",
];

const COMMERCIAL_POINTS = [
  "Rooftop unit (RTU) service and replacement",
  "Restaurant and commercial kitchen ventilation",
  "Office and retail space climate control",
  "Preventive maintenance contracts",
  "Emergency commercial HVAC service",
  "Building commissioning and inspections",
];

export default function SCResComSplit() {
  return (
    <section className="bg-slate-900 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Residential & Commercial
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Expert HVAC for Every Property Type
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            Whether you&apos;re a Charlotte homeowner or running a commercial property, our team has the expertise to handle it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Residential */}
          <div className="relative bg-slate-950/60 border border-slate-800/60 rounded-2xl p-7 sm:p-8 hover:border-sky-400/20 transition-colors group">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-sky-400/10 flex items-center justify-center">
                <Home className="w-5 h-5 text-sky-400" />
              </div>
              <h3 className="text-white font-bold text-xl">Residential HVAC</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Your home deserves reliable comfort all year long. We service all makes and models, recommend only what you need, and back our work with solid warranties.
            </p>
            <ul className="space-y-2.5 mb-6">
              {RESIDENTIAL_POINTS.map((pt) => (
                <li key={pt} className="flex items-start gap-2.5 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  {pt}
                </li>
              ))}
            </ul>
            <Link href="/supercoolhvac/residential" className="inline-flex items-center gap-1.5 text-sky-400 font-semibold text-sm hover:text-sky-300 transition-colors group-hover:gap-2">
              Explore Residential Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Commercial */}
          <div className="relative bg-slate-950/60 border border-slate-800/60 rounded-2xl p-7 sm:p-8 hover:border-teal-400/20 transition-colors group">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-teal-400/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-teal-400" />
              </div>
              <h3 className="text-white font-bold text-xl">Commercial HVAC</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              From small offices to large commercial facilities, we keep your building comfortable and your equipment running at peak efficiency — minimizing downtime and operating costs.
            </p>
            <ul className="space-y-2.5 mb-6">
              {COMMERCIAL_POINTS.map((pt) => (
                <li key={pt} className="flex items-start gap-2.5 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  {pt}
                </li>
              ))}
            </ul>
            <Link href="/supercoolhvac/commercial" className="inline-flex items-center gap-1.5 text-teal-400 font-semibold text-sm hover:text-teal-300 transition-colors group-hover:gap-2">
              Explore Commercial Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
