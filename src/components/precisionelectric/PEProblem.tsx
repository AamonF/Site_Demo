"use client";

import { motion } from "framer-motion";
import { AlertTriangle, ChevronRight, Flame, Zap, Home } from "lucide-react";

const DANGERS = [
  {
    icon: Flame,
    title: "House Fires",
    description:
      "Faulty wiring and overloaded panels are leading causes of residential fires. Old or DIY wiring is a silent threat.",
  },
  {
    icon: Zap,
    title: "Electrocution Risk",
    description:
      "Exposed wires, improper grounding, and amateur repairs put your family in danger every single day.",
  },
  {
    icon: Home,
    title: "Property Damage",
    description:
      "Electrical failures destroy appliances, damage your home's wiring, and void insurance claims.",
  },
];

interface Props {
  company: string;
  onOpenModal: () => void;
}

export default function PEProblem({ company, onOpenModal }: Props) {
  return (
    <section className="bg-zinc-900 py-20 md:py-28 relative overflow-hidden">
      {/* Accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Warning header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            <AlertTriangle className="w-3.5 h-3.5" />
            Don&apos;t Ignore the Warning Signs
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-5 text-balance">
            Electrical Issues Are More Than{" "}
            <span className="text-red-400">Inconvenient</span>
            <br className="hidden sm:block" />
            — They&apos;re <span className="text-red-400">Dangerous</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Every flickering light, tripping breaker, or warm outlet is your home telling you
            something is wrong. Ignoring it can cost you far more than a service call.
          </p>
        </motion.div>

        {/* Danger cards */}
        <div className="grid sm:grid-cols-3 gap-5 mb-14">
          {DANGERS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-zinc-800/50 border border-zinc-700/50 rounded-2xl p-6 hover:border-red-500/30 transition-colors group"
            >
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                <item.icon className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Solution pivot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/60 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6"
        >
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-black fill-black" />
              </div>
              <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">The Solution</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
              {company} Handles It — Safely and Correctly
            </h3>
            <p className="text-zinc-300 leading-relaxed max-w-xl">
              Our licensed electricians diagnose the root cause, not just the symptom. We use
              code-compliant methods, quality materials, and clear communication so you know
              exactly what we&apos;re doing and why.
            </p>
          </div>
          <button
            onClick={onOpenModal}
            className="group flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-black px-7 py-4 rounded-xl transition-all duration-200 whitespace-nowrap shadow-lg shadow-yellow-400/15 hover:shadow-yellow-400/30 hover:-translate-y-0.5"
          >
            Get a Free Estimate
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
