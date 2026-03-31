"use client";

import { motion } from "framer-motion";
import { Waves, Flame, Droplets, AlertTriangle, Clock, DollarSign } from "lucide-react";

const problems = [
  {
    icon: Waves,
    title: "Burst Pipes",
    desc: "A burst pipe can dump hundreds of gallons per hour into your home, causing catastrophic water damage, mold, and costly repairs that compound every minute.",
    urgency: "Act in minutes — not hours",
    color: "from-red-500 to-rose-600",
    bg: "bg-red-50",
    border: "border-red-100",
    iconColor: "text-red-500",
  },
  {
    icon: Droplets,
    title: "Clogged Drains",
    desc: "Slow drains signal deeper blockages. Left alone, they back up sewage, create foul odors, and can damage your pipes beyond a simple fix.",
    urgency: "Clogs get worse over time",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
    iconColor: "text-amber-500",
  },
  {
    icon: Flame,
    title: "No Hot Water",
    desc: "A failing water heater robs your family of comfort — and can suddenly leak or flood your utility room, causing water damage and mold behind walls.",
    urgency: "Don't wait for a cold morning",
    color: "from-sky-500 to-blue-600",
    bg: "bg-sky-50",
    border: "border-sky-100",
    iconColor: "text-sky-500",
  },
];

const stats = [
  { icon: Clock, value: "60 min", label: "Average response time" },
  { icon: DollarSign, value: "Upfront", label: "Pricing — no surprises" },
  { icon: AlertTriangle, value: "24/7", label: "Emergency availability" },
];

export default function FPProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/30 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block bg-red-100 text-red-600 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
            Don&apos;t Ignore the Signs
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Plumbing Problems{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
              Can&apos;t Wait
            </span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Every minute a plumbing problem goes unresolved, the damage — and the bill — gets bigger. Here&apos;s what you&apos;re up against.
          </p>
        </motion.div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl border ${p.border} ${p.bg} p-6 overflow-hidden group hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-4 shadow-lg`}>
                <p.icon className="w-6 h-6 text-white" strokeWidth={2} />
              </div>

              <h3 className="text-slate-900 font-extrabold text-xl mb-2">{p.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{p.desc}</p>

              {/* Urgency pill */}
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse flex-shrink-0" />
                <span className={`text-xs font-bold ${p.iconColor}`}>{p.urgency}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-sky-600 to-blue-700 rounded-3xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <Icon className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <p className="text-white font-extrabold text-2xl">{value}</p>
              <p className="text-sky-200 text-sm font-medium">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
