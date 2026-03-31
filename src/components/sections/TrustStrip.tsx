"use client";

import { motion } from "framer-motion";
import { Home, Link2, PaintbrushVertical, TrendingUp, Star } from "lucide-react";

const trustPoints = [
  { icon: Home, label: "Built for home-service brands" },
  { icon: Link2, label: "Shareable preview links" },
  { icon: PaintbrushVertical, label: "Conversion-led layout" },
  { icon: TrendingUp, label: "Room to grow into SEO" },
  { icon: Star, label: "Looks like a market leader" },
];

export default function TrustStrip() {
  return (
    <section
      aria-label="Trust indicators"
      className="border-y border-zinc-200/80 bg-zinc-100/50 py-9"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex flex-wrap justify-center gap-x-10 gap-y-3.5 lg:gap-x-14"
        >
          {trustPoints.map((point, i) => (
            <motion.div
              key={point.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="flex items-center gap-2 text-zinc-700"
            >
              <point.icon className="w-4 h-4 text-accent-600 flex-shrink-0" />
              <span className="text-sm font-medium whitespace-nowrap">
                {point.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
