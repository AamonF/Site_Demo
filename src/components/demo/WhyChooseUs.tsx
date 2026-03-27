"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Heart,
  Stethoscope,
  FileText,
  MapPin,
  Wallet,
} from "lucide-react";
import type { BusinessDemo } from "@/lib/demos/types";

const whyIcons: Record<string, React.ElementType> = {
  licensed: ShieldCheck,
  honest: Heart,
  diagnostic: Stethoscope,
  realestate: FileText,
  local: MapPin,
  budget: Wallet,
};

interface WhyChooseUsProps {
  demo: BusinessDemo;
}

export default function WhyChooseUs({ demo }: WhyChooseUsProps) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-3 text-blue-600 text-sm font-semibold tracking-wider uppercase">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight text-balance">
              {demo.whyTitle}
            </h2>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed text-balance">
              {demo.whySubtitle}
            </p>

            {/* Visual stat blocks */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                <div className="text-3xl font-extrabold text-blue-700 mb-1">10+</div>
                <div className="text-sm font-medium text-slate-600">
                  Years of HVAC experience
                </div>
              </div>
              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                <div className="text-3xl font-extrabold text-orange-600 mb-1">$89</div>
                <div className="text-sm font-medium text-slate-600">
                  Clear diagnostic pricing
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — benefit list */}
          <div className="space-y-4">
            {demo.whyPoints.map((point, i) => {
              const Icon = whyIcons[point.id] ?? ShieldCheck;
              return (
                <motion.div
                  key={point.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="flex gap-4 bg-slate-50 hover:bg-blue-50/50 border border-slate-100 hover:border-blue-100 rounded-2xl p-5 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      {point.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
