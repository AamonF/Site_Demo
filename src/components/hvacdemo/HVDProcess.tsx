"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Search, Wrench } from "lucide-react";

import { IMAGES } from "./constants";

const steps = [
  {
    step: "01",
    icon: Phone,
    title: "Request Service",
    body: "Call or book online—we’ll confirm a window that fits your day.",
  },
  {
    step: "02",
    icon: Search,
    title: "Diagnose the Issue",
    body: "We inspect thoroughly, explain findings, and review repair or replace options.",
  },
  {
    step: "03",
    icon: Wrench,
    title: "Fix It Fast",
    body: "Approved work is completed with quality parts and a clean job site—guaranteed.",
  },
];

export default function HVDProcess() {
  return (
    <section className="py-20 md:py-28 bg-slate-50" aria-labelledby="hvd-process-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sky-600 font-semibold text-sm uppercase tracking-[0.18em]">
              How it works
            </p>
            <h2
              id="hvd-process-heading"
              className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight"
            >
              Simple from first call to finished repair
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              No runaround—just clear steps so you always know what happens next.
            </p>
            <ol className="mt-12 space-y-8 list-none p-0 m-0">
              {steps.map(({ step, icon: Icon, title, body }, i) => (
                <motion.li
                  key={step}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="flex gap-5"
                >
                  <span className="flex flex-col items-center shrink-0">
                    <span className="text-xs font-bold text-sky-600 tracking-widest">{step}</span>
                    <span className="mt-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-slate-200 text-sky-600 shadow-sm">
                      <Icon className="w-6 h-6" aria-hidden />
                    </span>
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">{body}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative aspect-[4/5] max-h-[520px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-200"
          >
            <Image
              src={IMAGES.process}
              alt="Smart thermostat and comfortable home temperature control"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            <p className="absolute bottom-6 left-6 right-6 text-white font-medium text-sm">
              Precision tuning · Energy-smart comfort
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
