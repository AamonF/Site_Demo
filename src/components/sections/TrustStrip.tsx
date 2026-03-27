"use client";

import { motion } from "framer-motion";
import { Home, Link2, PaintbrushVertical, TrendingUp, Star } from "lucide-react";

const trustPoints = [
  {
    icon: Home,
    label: "Built for home-service brands",
  },
  {
    icon: Link2,
    label: "Fast live preview links",
  },
  {
    icon: PaintbrushVertical,
    label: "Clean, conversion-focused design",
  },
  {
    icon: TrendingUp,
    label: "Ready for SEO expansion",
  },
  {
    icon: Star,
    label: "Designed to look like the best in town",
  },
];

export default function TrustStrip() {
  return (
    <section
      aria-label="Trust indicators"
      className="border-y border-slate-100 bg-slate-50/60 py-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-4 lg:gap-x-12"
        >
          {trustPoints.map((point, i) => (
            <motion.div
              key={point.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex items-center gap-2.5 text-slate-600"
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
