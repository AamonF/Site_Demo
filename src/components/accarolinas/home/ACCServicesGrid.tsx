"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Thermometer, Wind, Flame, Heater, ArrowUpDown, ClipboardCheck, Leaf, BarChart2, Building2 } from "lucide-react";
import { services, BASE } from "@/lib/accarolinas/data";

const iconMap: Record<string, React.ElementType> = {
  Thermometer,
  Wind,
  Flame,
  Heater,
  ArrowUpDown,
  ClipboardCheck,
  Leaf,
  BarChart2,
  Building2,
};

const categoryColors: Record<string, string> = {
  Cooling: "text-sky-400 bg-sky-500/10 border-sky-500/20",
  Heating: "text-orange-400 bg-orange-500/10 border-orange-500/20",
  "Heating & Cooling": "text-amber-400 bg-amber-500/10 border-amber-500/20",
  Maintenance: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  "Air Quality": "text-violet-400 bg-violet-500/10 border-violet-500/20",
  Efficiency: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  Commercial: "text-zinc-400 bg-zinc-500/10 border-zinc-500/20",
};

export default function ACCServicesGrid() {
  return (
    <section className="bg-zinc-900 py-24 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-amber-500 rounded-full" />
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-widest">What We Do</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Full-Scope HVAC Services
            </h2>
            <p className="text-zinc-400 mt-3 max-w-xl">
              From emergency repairs to full system replacements, we handle every aspect of home and commercial comfort.
            </p>
          </div>
          <Link
            href={`${BASE}/services`}
            className="flex items-center gap-2 text-amber-500 hover:text-amber-400 text-sm font-semibold transition-colors flex-shrink-0 group"
          >
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Wind;
            const colorClass = categoryColors[service.category] ?? "text-amber-400 bg-amber-500/10 border-amber-500/20";
            const isLast = i === services.length - 1;

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className={isLast ? "sm:col-span-2 lg:col-span-1" : ""}
              >
                <Link
                  href={`${BASE}/services/${service.slug}`}
                  className="group flex flex-col bg-zinc-950 border border-zinc-800 hover:border-zinc-600 rounded-xl p-6 h-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30"
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-10 h-10 rounded-lg border flex items-center justify-center flex-shrink-0 ${colorClass}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full border ${colorClass}`}>
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-white font-semibold text-base mb-2 group-hover:text-amber-500 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed flex-1">{service.description}</p>

                  <div className="mt-5 pt-4 border-t border-zinc-800 flex items-center justify-between">
                    <span className="text-zinc-500 text-xs">Learn more</span>
                    <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-amber-500 group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
