"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { IMAGES } from "./constants";

const steps = [
  { title: "Schedule Consultation", description: "Tell us what happened and what you need to protect." },
  { title: "Review Your Case", description: "We analyze facts, deadlines, and options with clarity." },
  { title: "Build Your Strategy", description: "A roadmap aligned to your goals—negotiation, motion practice, or trial." },
  { title: "Move Forward with Confidence", description: "Measured execution with steady communication and updates." },
] as const;

export default function LDProcess() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative py-20 md:py-28 bg-white border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <p className="text-[#8b6914] text-xs font-semibold uppercase tracking-[0.22em]">
              Our Process
            </p>
            <h2 id="process-heading" className="mt-3 text-3xl sm:text-4xl text-[#0a1628]">
              What to Expect
            </h2>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed ">
              Legal matters move faster when expectations are clear. Our process is designed to
              reduce uncertainty—so you can focus on decisions, not confusion.
            </p>

            <ol className="mt-10 space-y-8">
              {steps.map((step, i) => (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="flex gap-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#c9a227]/40 bg-[#f8f7f4] text-sm font-bold text-[#0a1628]">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg text-[#0a1628]">{step.title}</h3>
                    <p className="mt-1 text-slate-600 text-sm leading-relaxed ">
                      {step.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-xl aspect-[4/3]">
              <Image
                src={IMAGES.process}
                alt="Client consultation meeting with attorney"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/65 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 text-white/95 text-sm sm:text-base ">
                From intake to resolution, we prioritize clarity—so you always understand the next
                step and why it matters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
