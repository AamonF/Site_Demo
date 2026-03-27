"use client";

import { motion } from "framer-motion";
import { PhoneCall, Stethoscope, ClipboardCheck, Smile } from "lucide-react";
import type { BusinessDemo } from "@/lib/demos/types";

const stepIcons = [PhoneCall, Stethoscope, ClipboardCheck, Smile];

interface ProcessSectionProps {
  demo: BusinessDemo;
}

export default function ProcessSection({ demo }: ProcessSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block mb-3 text-orange-400 text-sm font-semibold tracking-wider uppercase">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight text-balance">
            Simple, Straightforward Service
          </h2>
          <p className="mt-4 text-lg text-slate-400 leading-relaxed">
            Getting your HVAC issue resolved shouldn&apos;t be complicated.
            Here&apos;s what to expect from start to finish.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {demo.processSteps.map((step, i) => {
            const Icon = stepIcons[i % stepIcons.length];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {/* Connector */}
                {i < demo.processSteps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:block absolute top-10 left-[calc(100%_-_12px)] w-6 h-px bg-white/15 z-10"
                  />
                )}

                <div className="bg-white/5 hover:bg-white/8 border border-white/10 rounded-2xl p-6 transition-colors h-full flex flex-col">
                  {/* Number + icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold text-slate-500 tabular-nums">
                      STEP {step.number}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-orange-500/15 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-orange-400" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
