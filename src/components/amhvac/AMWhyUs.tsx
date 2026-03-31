"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  ShieldCheck,
  DollarSign,
  Award,
  Smartphone,
  ClipboardList,
} from "lucide-react";
import type { BusinessDemo } from "@/lib/demos/types";

const whyIcons: Record<string, React.ElementType> = {
  experience: CalendarDays,
  honest: ShieldCheck,
  pricing: DollarSign,
  certified: Award,
  booking: Smartphone,
  plans: ClipboardList,
};

interface AMWhyUsProps {
  demo: BusinessDemo;
}

export default function AMWhyUs({ demo }: AMWhyUsProps) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block mb-3 text-xs font-bold text-emerald-700 tracking-widest uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 leading-tight text-balance">
            {demo.whyTitle}
          </h2>
          <p className="mt-4 text-lg text-stone-500 leading-relaxed text-balance">
            {demo.whySubtitle}
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-14"
        >
          {[
            { stat: "15+", label: "Years Serving Charlotte" },
            { stat: "$99", label: "Diagnostic — No Hidden Fees" },
            { stat: "$15/mo", label: "Maintenance Plan — 1 System" },
          ].map((item) => (
            <div
              key={item.label}
              className="text-center bg-white rounded-2xl border border-stone-200 shadow-sm px-4 py-5"
            >
              <div className="text-2xl sm:text-3xl font-black text-emerald-700 mb-1">
                {item.stat}
              </div>
              <div className="text-xs text-stone-500 font-medium leading-snug">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Team photo banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative rounded-2xl overflow-hidden aspect-[21/6] mb-10 shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1766414629984-73a93e7caba0?w=1400&q=80&auto=format&fit=crop"
            alt="Andrew Matthews HVAC technician at work"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/70 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-6">
            <p className="text-white font-black text-lg">Licensed HVAC Professionals</p>
            <p className="text-emerald-400 text-sm font-semibold">Serving Charlotte Since 2009</p>
          </div>
        </motion.div>

        {/* 3-col benefit grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {demo.whyPoints.map((point, i) => {
            const Icon = whyIcons[point.id] ?? ShieldCheck;
            return (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-emerald-700" />
                </div>
                <h3 className="text-sm font-black text-stone-900 mb-2">{point.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{point.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
