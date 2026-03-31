"use client";

import { motion } from "framer-motion";
import { MapPin, CheckCircle2 } from "lucide-react";

const areas = [
  "[City]", "Mooresville", "Huntersville", "Cornelius", "Davidson",
  "Kannapolis", "Concord", "Mint Hill", "Matthews", "Pineville",
  "Waxhaw", "Indian Trail", "Monroe", "Harrisburg", "Gastonia",
];

export default function FPServiceArea() {
  return (
    <section id="service-area" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-sky-100 text-sky-700 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5">
              Where We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Proudly Serving{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                [City] &amp; Surrounding Areas
              </span>
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              We serve the greater [City] metro area and surrounding communities throughout Mecklenburg, Cabarrus, and Union counties. Same fast response times, no matter where you are.
            </p>

            {/* Areas grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8">
              {areas.map((area, i) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-sky-500 flex-shrink-0" strokeWidth={2} />
                  <span className={`text-sm font-medium ${area === "[City]" ? "text-sky-700 font-bold" : "text-slate-600"}`}>
                    {area}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-3 bg-sky-50 border border-sky-200 rounded-2xl px-5 py-4">
              <MapPin className="w-5 h-5 text-sky-500 flex-shrink-0" strokeWidth={2} />
              <p className="text-slate-700 text-sm">
                <strong className="text-slate-900">Not on the list?</strong> Call us — we may still be able to help.{" "}
                <a href="tel:+17045550123" className="text-sky-600 font-bold hover:underline">(704) 555-0123</a>
              </p>
            </div>
          </motion.div>

          {/* Right: visual map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Map-like visual */}
            <div className="relative bg-gradient-to-br from-sky-100 via-blue-50 to-sky-100 rounded-3xl overflow-hidden aspect-square max-w-sm mx-auto border border-sky-200 shadow-xl">

              {/* Grid lines simulating a map */}
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "linear-gradient(rgba(14,165,233,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.4) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              {/* Radial gradient pulse for "coverage" */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-sky-400/15 animate-pulse" />
                <div className="absolute w-48 h-48 rounded-full bg-sky-400/20 animate-pulse" style={{ animationDelay: "0.5s" }} />
                <div className="absolute w-32 h-32 rounded-full bg-sky-500/25 animate-pulse" style={{ animationDelay: "1s" }} />
              </div>

              {/* Center pin */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 z-10">
                  <div className="w-14 h-14 rounded-full bg-sky-600 shadow-xl shadow-sky-600/40 flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-white fill-white" strokeWidth={1.5} />
                  </div>
                  <div className="bg-white rounded-xl px-4 py-2 shadow-lg text-center">
                    <p className="text-slate-900 font-extrabold text-sm">[City], NC</p>
                    <p className="text-sky-600 text-xs font-bold">Home Base</p>
                  </div>
                </div>
              </div>

              {/* Satellite pins */}
              {[
                { top: "18%", left: "24%", label: "Cornelius" },
                { top: "22%", left: "62%", label: "Concord" },
                { top: "55%", left: "12%", label: "Gastonia" },
                { top: "65%", left: "74%", label: "Waxhaw" },
                { top: "75%", left: "42%", label: "Matthews" },
              ].map(({ top, left, label }) => (
                <div
                  key={label}
                  className="absolute flex flex-col items-center gap-1"
                  style={{ top, left, transform: "translate(-50%, -50%)" }}
                >
                  <div className="w-6 h-6 rounded-full bg-white border-2 border-sky-400 shadow-md flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-sky-500" />
                  </div>
                  <span className="text-[9px] font-bold text-slate-600 bg-white/80 px-1 rounded whitespace-nowrap shadow-sm">{label}</span>
                </div>
              ))}
            </div>

            {/* Badge */}
            <div className="absolute -bottom-4 -right-4 bg-sky-600 text-white rounded-2xl px-4 py-3 shadow-xl text-center">
              <p className="font-extrabold text-lg leading-none">30+</p>
              <p className="text-sky-200 text-xs font-medium">Cities Served</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
