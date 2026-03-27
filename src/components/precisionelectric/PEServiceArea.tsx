"use client";

import { motion } from "framer-motion";
import { MapPin, CheckCircle, Zap } from "lucide-react";

interface Props {
  city: string;
}

const AREAS = [
  "[City]",
  "[Suburb 1]",
  "[Suburb 2]",
  "[Suburb 3]",
  "[Suburb 4]",
  "[Suburb 5]",
  "[Suburb 6]",
  "[Suburb 7]",
  "[Suburb 8]",
  "[Suburb 9]",
  "[Suburb 10]",
  "[Suburb 11]",
];

export default function PEServiceArea({ city }: Props) {
  return (
    <section id="service-area" className="bg-zinc-950 py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden aspect-[4/3]">
              {/* Map placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(251,191,36,0.6) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(251,191,36,0.6) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                  }}
                />
                {/* Center pin */}
                <div className="relative z-10 text-center">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                    className="inline-flex"
                  >
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl shadow-yellow-400/30">
                      <MapPin className="w-8 h-8 text-black fill-black" />
                    </div>
                  </motion.div>
                  {/* Ripple effect */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.div
                      className="w-16 h-16 rounded-full border-2 border-yellow-400/30"
                      animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                    />
                    <motion.div
                      className="absolute w-16 h-16 rounded-full border-2 border-yellow-400/20"
                      animate={{ scale: [1, 3.5], opacity: [0.3, 0] }}
                      transition={{ repeat: Infinity, duration: 2, delay: 0.5, ease: "easeOut" }}
                    />
                  </div>
                  <p className="text-white font-black text-xl mt-4">{city}, NC</p>
                  <p className="text-zinc-400 text-sm mt-1">Serving the greater {city} area</p>
                </div>

                {/* Road lines */}
                <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 300">
                  <line x1="0" y1="150" x2="400" y2="150" stroke="#FBBF24" strokeWidth="2" strokeDasharray="10,8" />
                  <line x1="200" y1="0" x2="200" y2="300" stroke="#FBBF24" strokeWidth="2" strokeDasharray="10,8" />
                  <line x1="0" y1="80" x2="400" y2="200" stroke="#FBBF24" strokeWidth="1" strokeDasharray="6,10" />
                  <line x1="0" y1="220" x2="400" y2="80" stroke="#FBBF24" strokeWidth="1" strokeDasharray="6,10" />
                </svg>
              </div>

              {/* Corner badge */}
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm border border-zinc-700 rounded-lg px-3 py-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white text-xs font-bold">Now Accepting Jobs</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Area list */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              <MapPin className="w-3.5 h-3.5" />
              Service Area
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              Serving {city} &amp;{" "}
              <span className="text-yellow-400">Surrounding Areas</span>
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed mb-8">
              We provide licensed electrical services across {city} and all nearby communities.
              Fast response times, local knowledge, and the same high-quality work at every address.
            </p>

            {/* Area list */}
            <div className="grid grid-cols-2 gap-2 mb-8">
              {AREAS.map((area, i) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className="flex items-center gap-2 text-zinc-300 text-sm"
                >
                  <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  {area}
                </motion.div>
              ))}
            </div>

            {/* Not listed callout */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 flex items-start gap-3">
              <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
              <p className="text-zinc-300 text-sm">
                <span className="font-bold text-white">Don&apos;t see your area?</span> Give us a call —
                we travel further for larger jobs and may be able to accommodate your location.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
