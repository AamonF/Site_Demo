"use client";

import { motion } from "framer-motion";
import { Smartphone, Search, MessageSquareText, CheckCheck } from "lucide-react";
import type { BusinessDemo } from "@/lib/demos/types";

const stepIcons = [Smartphone, Search, MessageSquareText, CheckCheck];

interface AMProcessProps {
  demo: BusinessDemo;
}

export default function AMProcess({ demo }: AMProcessProps) {
  return (
    <section className="py-20 lg:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block mb-3 text-xs font-bold text-emerald-700 tracking-widest uppercase">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 leading-tight text-balance">
            Simple Service, Start to Finish
          </h2>
          <p className="mt-4 text-lg text-stone-500 leading-relaxed">
            Getting your HVAC taken care of shouldn&apos;t be complicated. Here&apos;s what to expect.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
                {/* Connector line */}
                {i < demo.processSteps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:block absolute top-7 left-[calc(100%_-_8px)] w-8 h-px border-t-2 border-dashed border-emerald-300 z-10"
                  />
                )}

                <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm h-full flex flex-col">
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-5xl font-black text-stone-100 leading-none tabular-nums select-none">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-emerald-700" />
                    </div>
                  </div>
                  <h3 className="text-base font-black text-stone-900 mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed">
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
