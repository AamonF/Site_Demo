"use client";

import { motion } from "framer-motion";
import type { BusinessDemo } from "@/lib/demos/types";

interface ATTrustStripProps {
  demo: BusinessDemo;
}

const stats = [
  { value: "24hr", label: "Non-Emergency Service Guarantee" },
  { value: "Res. & Com.", label: "Residential & Commercial" },
  { value: "Charlotte", label: "Local NC Service Team" },
  { value: "Discounted", label: "Rates for Agreement Customers" },
];

export default function ATTrustStrip({ demo }: ATTrustStripProps) {
  return (
    <section
      className="bg-white border-b border-slate-100 py-10 lg:py-12"
      aria-label="Trust indicators"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left border-l-2 border-teal-500 pl-4"
            >
              <span className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-none mb-1">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-slate-500 leading-snug font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-8 text-sm text-slate-400 text-center max-w-2xl mx-auto"
        >
          {demo.trustTagline}
        </motion.p>
      </div>
    </section>
  );
}
