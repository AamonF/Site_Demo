"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

function openModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("openRoofingModal"));
  }
}

const areas = [
  "[City]",
  "Charlotte",
  "Concord",
  "Huntersville",
  "Mooresville",
  "Kannapolis",
  "Davidson",
  "Cornelius",
  "Gastonia",
  "Matthews",
  "Mint Hill",
  "Indian Trail",
  "Monroe",
  "Salisbury",
  "Statesville",
];

export default function ERServiceArea() {
  return (
    <section className="bg-zinc-900 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-500/25 text-red-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <MapPin className="w-3.5 h-3.5" />
              Service Area
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-5">
              Roofing Services
              <br />
              <span className="text-red-500">Across the Region</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Based in [City], NC, we serve homeowners and businesses throughout the greater Charlotte metro and surrounding counties. Fast response times, local knowledge, and crews that know the area.
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {areas.map((area) => (
                <span
                  key={area}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
                    area === "[City]"
                      ? "bg-red-600/20 border-red-500/40 text-red-400"
                      : "bg-zinc-800 border-zinc-700 text-zinc-300"
                  }`}
                >
                  <MapPin className="w-3 h-3 flex-shrink-0" />
                  {area}
                </span>
              ))}
            </div>

            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-extrabold px-7 py-3.5 rounded-xl shadow-lg shadow-red-600/25 transition-all duration-200 hover:scale-[1.02]"
            >
              Check if We Serve Your Area
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Right: map visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            {/* Stylized map placeholder */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-zinc-950 border border-zinc-800">
              <img
                src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=900&q=80&auto=format&fit=crop"
                alt="Service area"
                className="w-full h-full object-cover opacity-30"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 to-zinc-950/70" />

              {/* Map pins decoration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  {/* Rings */}
                  <div className="absolute inset-0 border-2 border-red-500/20 rounded-full animate-ping" style={{ animationDuration: "3s" }} />
                  <div className="absolute inset-4 border-2 border-red-500/30 rounded-full animate-ping" style={{ animationDuration: "2.5s", animationDelay: "0.5s" }} />
                  <div className="absolute inset-8 border-2 border-red-500/40 rounded-full animate-ping" style={{ animationDuration: "2s", animationDelay: "1s" }} />

                  {/* Center pin */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-600/50">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div className="bg-zinc-900/90 border border-zinc-700 rounded-lg px-3 py-1.5 text-center">
                        <p className="text-white font-bold text-xs">[City], NC</p>
                        <p className="text-red-400 text-[10px] font-semibold">Our Home Base</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coverage badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-zinc-950/90 backdrop-blur-sm border border-zinc-800 rounded-xl px-4 py-3 text-center">
                <p className="text-white font-extrabold text-lg">
                  50-Mile Service Radius
                </p>
                <p className="text-zinc-400 text-xs">
                  Same-day emergency response available
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
