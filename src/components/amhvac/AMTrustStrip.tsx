"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock3, ThumbsUp, MapPin, Smartphone, Star } from "lucide-react";
import type { BusinessDemo } from "@/lib/demos/types";

const stripIcons = [ShieldCheck, Clock3, ThumbsUp, MapPin, Smartphone];

interface AMTrustStripProps {
  demo: BusinessDemo;
}

export default function AMTrustStrip({ demo }: AMTrustStripProps) {
  return (
    <section className="bg-stone-50 border-y border-stone-200 py-10" aria-label="Trust indicators">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-4 lg:gap-x-12"
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
                className="flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-3.5 h-3.5 text-emerald-700" />
                </div>
                <span className="text-sm font-semibold text-stone-700 whitespace-nowrap">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-sm text-stone-500 text-center sm:text-left max-w-lg">
            {demo.trustTagline}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
