"use client";

import { motion } from "framer-motion";
import { Phone, ClipboardList, CheckCircle, ChevronRight, Zap } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Phone,
    title: "Call or Request Online",
    description:
      "Reach out by phone or use our online form. We'll respond within the hour to confirm your appointment and gather details about the issue.",
    detail: "Same-day appointments available",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Free Diagnosis & Estimate",
    description:
      "Our licensed electrician arrives on time, diagnoses the issue thoroughly, and provides a clear, written estimate — no pressure, no obligation.",
    detail: "100% transparent pricing",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Safe, Expert Work — Done Right",
    description:
      "We complete the work to NEC code, clean up completely, and walk you through exactly what was done. Your home is safer than when we arrived.",
    detail: "Guaranteed satisfaction",
  },
];

interface Props {
  onOpenModal: () => void;
}

export default function PEProcess({ onOpenModal }: Props) {
  return (
    <section id="process" className="bg-zinc-950 py-20 md:py-28 relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            <Zap className="w-3.5 h-3.5" />
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5">
            Simple, Stress-Free Process
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            We&apos;ve made getting quality electrical work done as easy as three steps. No confusion,
            no runaround.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-[calc(16.67%-1px)] right-[calc(16.67%-1px)] h-[2px] bg-gradient-to-r from-yellow-400/20 via-blue-400/20 to-yellow-400/20" />

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative"
              >
                {/* Step number + icon */}
                <div className="flex flex-col items-center text-center lg:items-center mb-6">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-zinc-900 border-2 border-yellow-400/30 rounded-2xl flex items-center justify-center relative z-10">
                      <step.icon className="w-7 h-7 text-yellow-400" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-black font-black text-[10px] z-20">
                      {i + 1}
                    </span>
                  </div>
                  <span className="text-zinc-600 text-6xl font-black leading-none absolute -top-2 left-0 right-0 text-center select-none pointer-events-none opacity-30">
                    {step.number}
                  </span>
                </div>

                <div className="bg-zinc-900/60 border border-zinc-800 hover:border-yellow-400/20 rounded-2xl p-6 text-center transition-colors group">
                  <h3 className="font-black text-white text-xl mb-3">{step.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">{step.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-yellow-400 text-xs font-bold bg-yellow-400/10 px-3 py-1.5 rounded-full">
                    <CheckCircle className="w-3.5 h-3.5" />
                    {step.detail}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <button
            onClick={onOpenModal}
            className="group inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-lg px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-yellow-400/15 hover:shadow-yellow-400/30 hover:-translate-y-0.5"
          >
            Start Your Free Estimate
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
