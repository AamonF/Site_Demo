"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Wrench, MapPin, Zap, Clock, Building2 } from "lucide-react";
import { whyUsPoints } from "@/lib/accarolinas/data";

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Wrench,
  MapPin,
  Zap,
  Clock,
  Building2,
};

export default function ACCWhyUs() {
  return (
    <section className="bg-zinc-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mb-16">
          <div className="lg:w-1/3">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-amber-500 rounded-full" />
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-widest">Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              The Way HVAC Service Should Work
            </h2>
          </div>
          <div className="lg:w-2/3 flex items-center">
            <p className="text-zinc-400 text-lg leading-relaxed">
              We built Air Central Of The Carolinas on a simple principle: treat every customer the way you'd want a contractor to treat your own family. That means honest assessments, quality work, and standing behind everything we do.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whyUsPoints.map((point, i) => {
            const Icon = iconMap[point.icon] ?? ShieldCheck;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group relative bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-xl p-6 transition-all duration-300 hover:-translate-y-0.5"
              >
                {/* Number */}
                <span className="absolute top-4 right-5 text-zinc-800 font-bold text-4xl select-none leading-none group-hover:text-zinc-700 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-4 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-all duration-300">
                  <Icon className="w-5 h-5 text-zinc-400 group-hover:text-amber-500 transition-colors duration-300" />
                </div>

                <h3 className="text-white font-semibold text-base mb-2 pr-8">{point.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{point.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
