"use client";

import { motion } from "framer-motion";
import { Thermometer, TrendingUp, Clock, CheckCircle2 } from "lucide-react";

const painPoints = [
  {
    icon: Thermometer,
    text: "AC breaking down in the middle of peak summer heat",
  },
  {
    icon: TrendingUp,
    text: "Skyrocketing energy bills with no explanation",
  },
  {
    icon: Clock,
    text: "Technicians who are slow, flaky, or never show up",
  },
];

export default function CHPainPoints() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Pain */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-bold text-red-500 uppercase tracking-widest mb-3 bg-red-50 px-3 py-1 rounded-full border border-red-100">
              Sound Familiar?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-8">
              Tired of Unreliable{" "}
              <span className="text-blue-600">Heating & Cooling?</span>
            </h2>
            <div className="space-y-5">
              {painPoints.map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-red-500" strokeWidth={2} />
                  </div>
                  <p className="text-slate-700 font-medium leading-snug pt-2">{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Solution */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 sm:p-10 text-white shadow-2xl shadow-blue-600/20">
              <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle2 className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 leading-tight">
                We fix it fast —{" "}
                <span className="text-blue-200">the right way.</span>
              </h3>
              <p className="text-blue-100 text-base leading-relaxed mb-7">
                [Company Name] was built for homeowners who are done settling for mediocre service. Our certified technicians arrive on time, diagnose fast, and fix it right the first time — with upfront pricing and no surprise fees.
              </p>
              <ul className="space-y-3">
                {[
                  "No hidden fees — ever",
                  "Certified technicians on every job",
                  "Same-day appointments available",
                  "Backed by our satisfaction guarantee",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-blue-50">
                    <CheckCircle2 className="w-4 h-4 text-blue-300 flex-shrink-0" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="mt-8 w-full bg-white text-blue-700 hover:bg-blue-50 py-3.5 rounded-xl font-bold text-sm transition-colors"
              >
                Get Free Estimate Today
              </button>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-5 -right-4 bg-yellow-400 text-yellow-900 rounded-2xl px-4 py-2 text-xs font-extrabold shadow-lg rotate-3">
              Response in &lt;1 Hour ⚡
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
