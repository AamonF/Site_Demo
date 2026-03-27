"use client";

import { motion } from "framer-motion";
import { MapPin, CheckCircle2 } from "lucide-react";

const areas = [
  "[City]",
  "Concord",
  "Kannapolis",
  "Mooresville",
  "Huntersville",
  "Gastonia",
  "Belmont",
  "Mint Hill",
  "Matthews",
  "Stallings",
  "Indian Trail",
  "Monroe",
];

export default function CHServiceArea() {
  return (
    <section id="service-area" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-widest mb-3 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Where We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
              Proudly Serving [City], NC{" "}
              <span className="text-blue-600">and Surrounding Areas</span>
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              [Company Name] provides fast, reliable HVAC service across the greater [City] metro. If you&apos;re nearby, we can help — often the same day you call.
            </p>

            {/* Areas grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {areas.map((area, i) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="flex items-center gap-2 py-2.5 px-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-700 font-medium hover:border-blue-300 hover:text-blue-700 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" strokeWidth={2.5} />
                  {area}
                </motion.div>
              ))}
            </div>

            <p className="text-slate-400 text-xs mt-4 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Not on the list? Call us — we may still be able to help.
            </p>
          </motion.div>

          {/* Right: Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl aspect-square max-w-md mx-auto relative">
              {/* Simulated map */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-100 to-blue-100">
                {/* Grid lines */}
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-30">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div key={`v${i}`} className="absolute top-0 bottom-0 border-r border-blue-200" style={{ left: `${(i / 6) * 100}%` }} />
                  ))}
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div key={`h${i}`} className="absolute left-0 right-0 border-b border-blue-200" style={{ top: `${(i / 6) * 100}%` }} />
                  ))}
                </div>

                {/* Roads */}
                <div className="absolute top-1/2 left-0 right-0 h-2 bg-white/70 -translate-y-1/2 shadow-sm" />
                <div className="absolute left-1/3 top-0 bottom-0 w-2 bg-white/70 shadow-sm" />
                <div className="absolute left-2/3 top-0 bottom-0 w-1.5 bg-white/50" />
                <div className="absolute top-1/4 left-0 right-0 h-1 bg-white/40" />
                <div className="absolute top-3/4 left-0 right-0 h-1 bg-white/40" />

                {/* Center pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white animate-bounce">
                    <MapPin className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="mt-1 bg-white px-3 py-1 rounded-full shadow-md text-xs font-bold text-blue-700 whitespace-nowrap">
                    [Company Name]
                  </div>
                </div>

                {/* Area bubbles */}
                {[
                  { label: "Concord", top: "20%", left: "65%" },
                  { label: "Gastonia", top: "70%", left: "25%" },
                  { label: "Mooresville", top: "22%", left: "25%" },
                  { label: "Matthews", top: "72%", left: "68%" },
                ].map(({ label, top, left }) => (
                  <div
                    key={label}
                    className="absolute bg-white/80 backdrop-blur-sm border border-blue-200 rounded-lg px-2 py-1 text-[10px] font-semibold text-slate-600 shadow-sm"
                    style={{ top, left }}
                  >
                    {label}
                  </div>
                ))}

                {/* Service radius */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-dashed border-blue-400/40" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-dashed border-blue-300/25" />
              </div>
            </div>

            {/* Floating CTA */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white border border-slate-200 rounded-2xl px-6 py-3 shadow-lg text-center whitespace-nowrap">
              <p className="text-xs text-slate-500 mb-1">Serving 50+ mile radius</p>
              <a href="tel:+17045550123" className="text-blue-600 font-bold text-sm hover:text-blue-700 transition-colors">
                (704) 555-0123
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
