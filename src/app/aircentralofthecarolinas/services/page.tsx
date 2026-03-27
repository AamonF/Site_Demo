import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Thermometer, Wind, Flame, Heater, ArrowUpDown, ClipboardCheck, Leaf, BarChart2, Building2 } from "lucide-react";
import ACCPageHero from "@/components/accarolinas/shared/ACCPageHero";
import ACCCTABlock from "@/components/accarolinas/shared/ACCCTABlock";
import { BASE, services, COMPANY } from "@/lib/accarolinas/data";

export const metadata: Metadata = {
  title: "HVAC Services | Air Central Of The Carolinas | Indian Trail, NC",
  description:
    "Complete HVAC services in Indian Trail and Charlotte area — AC repair and installation, heating, heat pumps, maintenance plans, indoor air quality, energy audits, and commercial HVAC.",
  alternates: { canonical: "/aircentralofthecarolinas/services" },
};

const iconMap: Record<string, React.ElementType> = {
  Thermometer, Wind, Flame, Heater, ArrowUpDown, ClipboardCheck, Leaf, BarChart2, Building2,
};

const categories = [
  { name: "Cooling", description: "Air conditioning repair, installation, and service for all central cooling systems." },
  { name: "Heating", description: "Furnace and heating system repair, replacement, and installation." },
  { name: "Heating & Cooling", description: "Efficient all-in-one heat pump systems for year-round comfort." },
  { name: "Maintenance", description: "Preventive maintenance plans and tune-up service." },
  { name: "Air Quality", description: "Indoor air quality improvement through filtration, purification, and humidity control." },
  { name: "Efficiency", description: "Home energy audits to identify waste and lower operating costs." },
  { name: "Commercial", description: "Commercial HVAC installation, repair, and maintenance agreements." },
];

const categoryColors: Record<string, { bg: string; border: string; text: string; icon: string }> = {
  Cooling: { bg: "bg-sky-500/10", border: "border-sky-500/20", text: "text-sky-300", icon: "text-sky-400" },
  Heating: { bg: "bg-orange-500/10", border: "border-orange-500/20", text: "text-orange-300", icon: "text-orange-400" },
  "Heating & Cooling": { bg: "bg-amber-500/10", border: "border-amber-500/20", text: "text-amber-300", icon: "text-amber-400" },
  Maintenance: { bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-300", icon: "text-emerald-400" },
  "Air Quality": { bg: "bg-violet-500/10", border: "border-violet-500/20", text: "text-violet-300", icon: "text-violet-400" },
  Efficiency: { bg: "bg-cyan-500/10", border: "border-cyan-500/20", text: "text-cyan-300", icon: "text-cyan-400" },
  Commercial: { bg: "bg-zinc-500/10", border: "border-zinc-500/20", text: "text-zinc-300", icon: "text-zinc-400" },
};

export default function ServicesPage() {
  return (
    <>
      <ACCPageHero
        eyebrow="Our Services"
        title="Comprehensive HVAC Service"
        titleAccent="for Every System"
        description="From emergency repairs to full system replacements, energy audits, and commercial maintenance — Air Central Of The Carolinas handles every aspect of heating and cooling for homes and businesses in the Charlotte area."
        breadcrumbs={[{ label: "Services" }]}
      />

      {/* Category overview */}
      <section className="bg-zinc-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-amber-500 rounded-full" />
            <span className="text-amber-500 text-xs font-semibold uppercase tracking-widest">Service Categories</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const colors = categoryColors[cat.name];
              return (
                <div
                  key={cat.name}
                  className={`${colors.bg} ${colors.border} border rounded-full px-4 py-1.5`}
                >
                  <span className={`${colors.text} text-xs font-medium`}>{cat.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-zinc-950 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => {
              const Icon = iconMap[service.icon] ?? Wind;
              const colors = categoryColors[service.category] ?? categoryColors.Maintenance;
              return (
                <Link
                  key={service.slug}
                  href={`${BASE}/services/${service.slug}`}
                  className="group bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-11 h-11 rounded-lg border flex items-center justify-center ${colors.bg} ${colors.border}`}>
                      <Icon className={`w-5 h-5 ${colors.icon}`} />
                    </div>
                    <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full border ${colors.bg} ${colors.border} ${colors.text}`}>
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-amber-500 transition-colors">{service.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed flex-1 mb-5">{service.description}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                    <span className="text-zinc-500 text-xs">Full details & FAQs</span>
                    <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-amber-500 group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick contact */}
      <section className="bg-zinc-900 border-y border-zinc-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-xl mb-2">Not sure which service you need?</h3>
              <p className="text-zinc-400 text-sm max-w-lg">
                Call us and describe what&apos;s happening. We&apos;ll help you figure out the right next step — no charge, no pressure.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 px-6 py-3 rounded-md text-sm font-bold transition-colors"
              >
                Call {COMPANY.phone}
              </a>
              <Link
                href={`${BASE}/contact`}
                className="flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-white px-6 py-3 rounded-md text-sm font-semibold transition-colors"
              >
                Request Estimate
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ACCCTABlock
        headline="Ready to Schedule Service?"
        subtext="Air Central Of The Carolinas is accepting new customers for repairs, installations, and maintenance throughout Indian Trail and the Charlotte area."
        variant="standard"
      />
    </>
  );
}
