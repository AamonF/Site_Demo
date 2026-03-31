"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Waves,
  Wrench,
  Flame,
  GitBranch,
  Settings,
  Pipette,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    icon: Waves,
    title: "Drain Cleaning",
    desc: "Stubborn clogs, slow drains, and full blockages cleared fast with professional-grade hydro jetting and snaking.",
    badge: "Most Popular",
    badgeColor: "bg-sky-100 text-sky-700",
  },
  {
    icon: Wrench,
    title: "Leak Repair",
    desc: "From dripping faucets to hidden pipe leaks — we detect, diagnose, and fix the source, not just the symptom.",
    badge: "Emergency",
    badgeColor: "bg-red-100 text-red-600",
  },
  {
    icon: Flame,
    title: "Water Heater Services",
    desc: "Repair, replacement, and tankless upgrades. We handle all major brands and work with your budget.",
    badge: null,
    badgeColor: "",
  },
  {
    icon: GitBranch,
    title: "Sewer Line Repair",
    desc: "Camera inspection, spot repair, and full sewer line replacement using trenchless methods when possible.",
    badge: "Emergency",
    badgeColor: "bg-red-100 text-red-600",
  },
  {
    icon: Settings,
    title: "Fixture Installation",
    desc: "Toilets, faucets, showers, sinks — installed properly the first time with a workmanship guarantee.",
    badge: null,
    badgeColor: "",
  },
  {
    icon: Pipette,
    title: "Pipe Replacement",
    desc: "Aging galvanized or copper pipes re-piped with modern materials for lasting performance and water quality.",
    badge: null,
    badgeColor: "",
  },
];

export default function FPServicesGrid() {
  const [hovered, setHovered] = useState<number | null>(null);

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block bg-sky-100 text-sky-700 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
            What We Fix
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Full-Service{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
              Plumbing Solutions
            </span>
          </h2>
          <p className="text-slate-500 text-lg">
            From emergency repairs to planned upgrades — we do it all, and we do it right.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`relative bg-white rounded-2xl border p-6 cursor-pointer transition-all duration-300 group ${
                hovered === i
                  ? "border-sky-300 shadow-xl shadow-sky-500/10 -translate-y-1"
                  : "border-slate-200 shadow-sm hover:shadow-md"
              }`}
              onClick={scrollToContact}
            >
              {/* Badge */}
              {s.badge && (
                <span className={`absolute top-4 right-4 text-[10px] font-bold px-2 py-0.5 rounded-full ${s.badgeColor}`}>
                  {s.badge}
                </span>
              )}

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${
                  hovered === i
                    ? "bg-gradient-to-br from-sky-500 to-blue-600 shadow-lg shadow-sky-500/30"
                    : "bg-sky-50"
                }`}
              >
                <s.icon
                  className={`w-6 h-6 transition-colors ${hovered === i ? "text-white" : "text-sky-500"}`}
                  strokeWidth={2}
                />
              </div>

              <h3 className="text-slate-900 font-extrabold text-lg mb-2">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>

              <span className={`inline-flex items-center gap-1 text-xs font-bold transition-colors ${
                hovered === i ? "text-sky-600" : "text-slate-400"
              }`}>
                Get a Quote <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-slate-500 text-sm mb-4">Not sure what you need? We&apos;ll diagnose it for free.</p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-lg shadow-sky-600/25 hover:shadow-sky-600/40 transition-all duration-200 hover:-translate-y-0.5"
          >
            Book a Free Diagnostic →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
