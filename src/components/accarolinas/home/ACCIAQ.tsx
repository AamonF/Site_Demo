import Link from "next/link";
import { ArrowRight, Wind, Droplets, BarChart2, Leaf } from "lucide-react";
import { BASE } from "@/lib/accarolinas/data";

const iaqServices = [
  {
    icon: Wind,
    title: "High-Efficiency Air Filtration",
    description: "Upgrade from standard filters to MERV-rated media filters or electronic air cleaners that capture far more dust, pollen, and allergens.",
    link: `${BASE}/services/indoor-air-quality`,
  },
  {
    icon: Leaf,
    title: "UV Air Purification",
    description: "UV light systems installed inside your air handler neutralize mold, bacteria, and viruses as air circulates through your system.",
    link: `${BASE}/services/indoor-air-quality`,
  },
  {
    icon: Droplets,
    title: "Whole-Home Humidity Control",
    description: "Dehumidifiers and humidifiers that work with your existing HVAC system to maintain ideal humidity year-round — far more effective than portable units.",
    link: `${BASE}/services/indoor-air-quality`,
  },
  {
    icon: BarChart2,
    title: "Home Energy Audits",
    description: "Evaluate your home as a complete system — HVAC efficiency, insulation, ductwork, and building envelope — with prioritized improvements and real ROI.",
    link: `${BASE}/services/home-energy-audits`,
  },
];

export default function ACCIAQ() {
  return (
    <section className="bg-zinc-900 py-24 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-amber-500 rounded-full" />
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-widest">Beyond Heating & Cooling</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Healthier Air. Better Efficiency. Real Comfort.
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-zinc-400 leading-relaxed">
              Most people think of HVAC as just temperature control. We think about your home as a complete comfort system — which includes the quality of the air you breathe, the humidity levels that affect how that air feels, and how efficiently your home uses the energy it spends on comfort.
            </p>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {iaqServices.map(({ icon: Icon, title, description, link }) => (
            <Link
              key={title}
              href={link}
              className="group bg-zinc-950 border border-zinc-800 hover:border-zinc-700 rounded-xl p-6 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-all duration-300">
                  <Icon className="w-5 h-5 text-zinc-400 group-hover:text-amber-500 transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm mb-1.5 group-hover:text-amber-500 transition-colors">{title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-zinc-500 text-xs group-hover:text-amber-500 transition-colors">
                    Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-zinc-950 border border-zinc-800 rounded-xl px-6 py-5">
          <p className="text-zinc-300 text-sm max-w-lg">
            <span className="text-white font-semibold">Not sure where to start?</span> Ask us about an indoor air quality assessment — we&apos;ll help you prioritize what actually makes sense for your home and budget.
          </p>
          <Link
            href={`${BASE}/contact`}
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 px-5 py-2.5 rounded-md text-sm font-bold transition-colors flex-shrink-0"
          >
            Request Assessment
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
