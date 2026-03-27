"use client";

import { motion } from "framer-motion";
import { Phone, Search, ClipboardList, CheckCheck } from "lucide-react";
import type { BusinessDemo } from "@/lib/demos/types";

const stepIcons = [Phone, Search, ClipboardList, CheckCheck];

interface ATProcessProps {
  demo: BusinessDemo;
}

export default function ATProcess({ demo }: ATProcessProps) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block mb-3 text-xs font-bold text-teal-600 tracking-widest uppercase">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight text-balance">
            Simple From Start to Finish
          </h2>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            Getting your HVAC handled shouldn&apos;t be a hassle. Here&apos;s what to expect when you work with Accu-Tech.
          </p>
        </motion.div>

        {/* Vertical timeline */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div
              aria-hidden="true"
              className="absolute left-6 top-8 bottom-8 w-px bg-slate-100 hidden sm:block"
            />

            <div className="space-y-6">
              {demo.processSteps.map((step, i) => {
                const Icon = stepIcons[i % stepIcons.length];
                const isLast = i === demo.processSteps.length - 1;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.45, delay: i * 0.1 }}
                    className="relative grid grid-cols-[auto_1fr] gap-5 sm:gap-7"
                  >
                    {/* Circle icon */}
                    <div className="relative flex flex-col items-center z-10">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border-2 shadow-sm ${
                          isLast
                            ? "bg-teal-600 border-teal-600"
                            : "bg-white border-teal-200"
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 ${isLast ? "text-white" : "text-teal-600"}`}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 hover:border-teal-100 hover:shadow-sm transition-all duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-black text-teal-600 tracking-wider uppercase">
                          Step {step.number}
                        </span>
                      </div>
                      <h3 className="text-base font-extrabold text-slate-900 mb-1.5 leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
