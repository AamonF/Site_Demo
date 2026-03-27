"use client";

import { motion } from "framer-motion";
import { Wind, Zap, Flame, Replace, ClipboardCheck, Leaf } from "lucide-react";

const services = [
  {
    icon: Wind,
    title: "AC Repair",
    desc: "Fast diagnostics and same-day repairs to restore your cool — no matter the brand or system age.",
    highlight: "Most repairs completed same day",
    color: "from-blue-500 to-blue-600",
    light: "bg-blue-50 text-blue-600",
  },
  {
    icon: Zap,
    title: "AC Installation",
    desc: "Energy-efficient systems sized perfectly for your home. Expert installation with full setup and testing.",
    highlight: "10-year parts & labor warranty",
    color: "from-cyan-500 to-cyan-600",
    light: "bg-cyan-50 text-cyan-600",
  },
  {
    icon: Flame,
    title: "Heating Repair",
    desc: "Don't suffer through a cold snap. We service all makes and models with honest, upfront diagnostics.",
    highlight: "24/7 emergency service available",
    color: "from-orange-500 to-orange-600",
    light: "bg-orange-50 text-orange-600",
  },
  {
    icon: Replace,
    title: "Furnace Replacement",
    desc: "When repair isn't enough, we'll help you choose the right high-efficiency furnace and install it with zero hassle.",
    highlight: "0% financing available",
    color: "from-rose-500 to-rose-600",
    light: "bg-rose-50 text-rose-600",
  },
  {
    icon: ClipboardCheck,
    title: "Maintenance Plans",
    desc: "Our seasonal tune-up plans keep your system running at peak performance — and your energy bills in check.",
    highlight: "Save up to 30% on energy costs",
    color: "from-emerald-500 to-emerald-600",
    light: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Leaf,
    title: "Indoor Air Quality",
    desc: "Breathe cleaner, healthier air with our filtration, purification, and humidity control solutions.",
    highlight: "Allergy-friendly home upgrades",
    color: "from-teal-500 to-teal-600",
    light: "bg-teal-50 text-teal-600",
  },
];

export default function CHServices() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-widest mb-3 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            HVAC Services in [City], NC
          </h2>
          <p className="text-slate-500 mt-3 text-base">
            From emergency repairs to full system replacements — we handle it all with speed, transparency, and craftsmanship.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, highlight, color, light }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group relative bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {/* Top accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color} rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity`} />

              <div className={`w-12 h-12 rounded-2xl ${light} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6" strokeWidth={2} />
              </div>

              <h3 className="text-slate-900 font-bold text-lg mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{desc}</p>

              <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-semibold text-emerald-600">{highlight}</span>
              </div>

              <div className="mt-4 text-blue-600 text-xs font-bold group-hover:gap-2 flex items-center gap-1 transition-all">
                Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 text-sm mb-4">Not sure what you need? We&apos;ll diagnose it for free.</p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-colors shadow-lg shadow-blue-600/20"
          >
            Schedule Free Assessment
          </button>
        </motion.div>
      </div>
    </section>
  );
}
