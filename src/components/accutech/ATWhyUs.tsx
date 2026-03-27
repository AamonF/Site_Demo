"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Layers,
  FileCheck,
  Clock,
  ThumbsUp,
  Wrench,
} from "lucide-react";
import type { BusinessDemo } from "@/lib/demos/types";

const whyIcons: Record<string, React.ElementType> = {
  local: MapPin,
  "residential-commercial": Layers,
  agreements: FileCheck,
  response: Clock,
  honest: ThumbsUp,
  "full-service": Wrench,
};

interface ATWhyUsProps {
  demo: BusinessDemo;
}

export default function ATWhyUs({ demo }: ATWhyUsProps) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <span className="inline-block mb-3 text-xs font-bold text-teal-600 tracking-widest uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
            {demo.whyTitle}
          </h2>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            {demo.whySubtitle}
          </p>
        </motion.div>

        {/* Numbered list layout */}
        <div className="space-y-0 divide-y divide-slate-100">
          {demo.whyPoints.map((point, i) => {
            const Icon = whyIcons[point.id] ?? ThumbsUp;
            return (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="grid grid-cols-[auto_1fr] gap-6 py-7 group"
              >
                {/* Number + icon column */}
                <div className="flex flex-col items-center gap-3 pt-1">
                  <span className="text-4xl font-black text-slate-100 leading-none tabular-nums select-none group-hover:text-teal-100 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-100 transition-colors">
                    <Icon className="w-5 h-5 text-teal-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="py-1">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2 leading-snug">
                    {point.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-xl">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
