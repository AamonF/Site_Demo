"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { CITY } from "./constants";

const communities = [
  "[City]",
  "Charlotte",
  "Concord",
  "Huntersville",
  "Mooresville",
  "Davidson",
  "Cornelius",
  "Kannapolis",
];

export default function LDServiceArea() {
  return (
    <section className="bg-emerald-900 py-16 md:py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
        >
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              Service area
            </h2>
            <p className="text-emerald-100/85 leading-relaxed">
              Based in {CITY}, we regularly serve surrounding communities with design, installation,
              and maintenance routes planned for efficiency — and punctuality.
            </p>
          </div>
          <ul className="flex flex-wrap gap-2 lg:justify-end lg:max-w-xl">
            {communities.map((c) => (
              <li
                key={c}
                className="inline-flex items-center gap-1.5 rounded-full bg-emerald-950/50 border border-emerald-700/60 px-3 py-1.5 text-sm font-medium text-emerald-50"
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
