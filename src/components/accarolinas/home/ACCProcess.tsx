"use client";

import { motion } from "framer-motion";
import { processSteps, COMPANY } from "@/lib/accarolinas/data";

export default function ACCProcess() {
  return (
    <section className="bg-zinc-900 py-24 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mb-16">
          <div className="lg:w-2/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-amber-500 rounded-full" />
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-widest">How It Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Service Experience Built Around You
            </h2>
            <p className="text-zinc-400 mt-4 leading-relaxed">
              We&apos;ve refined our process to make sure every interaction is professional, transparent, and stress-free — from the first call to the final walkthrough.
            </p>
          </div>
          <div className="lg:w-3/5 flex items-center">
            <div className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-6">
              <p className="text-zinc-500 text-xs uppercase tracking-widest mb-4">Ready to get started?</p>
              <p className="text-white font-semibold mb-3">Reach us directly at:</p>
              <a
                href={COMPANY.phoneHref}
                className="text-amber-500 hover:text-amber-400 text-2xl font-bold transition-colors"
              >
                {COMPANY.phone}
              </a>
              <p className="text-zinc-500 text-sm mt-2">
                Mon–Fri 7am–6pm · Sat 8am–4pm · Emergency service available
              </p>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-zinc-800 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                {/* Number circle */}
                <div className="relative mb-5">
                  <div className="w-16 h-16 rounded-full bg-zinc-950 border-2 border-zinc-700 flex items-center justify-center relative z-10">
                    <span className="text-amber-500 font-bold text-lg">{step.number}</span>
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-px bg-zinc-800 -translate-y-1/2 z-0" />
                  )}
                </div>

                <h3 className="text-white font-semibold text-base mb-2">{step.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
