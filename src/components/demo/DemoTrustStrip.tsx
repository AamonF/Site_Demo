"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock3, ThumbsUp, MapPin, DollarSign, Star } from "lucide-react";
import type { BusinessDemo } from "@/lib/demos/types";

const stripIcons = [ShieldCheck, Clock3, ThumbsUp, MapPin, DollarSign];

interface DemoTrustStripProps {
  demo: BusinessDemo;
}

export default function DemoTrustStrip({ demo }: DemoTrustStripProps) {
  return (
    <section className="bg-white border-b border-slate-100 py-10" aria-label="Trust indicators">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust points row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 lg:gap-x-10"
        >
          {demo.trustStripItems.map((item, i) => {
            const Icon = stripIcons[i % stripIcons.length];
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="flex items-center gap-2 text-slate-600"
              >
                <Icon className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Review tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-sm text-slate-500 text-center sm:text-left max-w-lg">
            {demo.trustTagline}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
