"use client";

import { motion } from "framer-motion";
import {
  Wind,
  HardHat,
  Wrench,
  Zap,
  Leaf,
  Droplets,
  Truck,
  Car,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const niches = [
  { icon: Wind, label: "HVAC", color: "bg-sky-50 text-sky-700 border-sky-200" },
  { icon: HardHat, label: "Roofing", color: "bg-amber-50 text-amber-700 border-amber-200" },
  { icon: Wrench, label: "Plumbing", color: "bg-blue-50 text-blue-700 border-blue-200" },
  { icon: Zap, label: "Electrical", color: "bg-yellow-50 text-yellow-700 border-yellow-200" },
  { icon: Leaf, label: "Landscaping", color: "bg-green-50 text-green-700 border-green-200" },
  { icon: Droplets, label: "Pressure Washing", color: "bg-cyan-50 text-cyan-700 border-cyan-200" },
  { icon: Truck, label: "Junk Removal", color: "bg-orange-50 text-orange-700 border-orange-200" },
  { icon: Car, label: "Mobile Detailing", color: "bg-violet-50 text-violet-700 border-violet-200" },
];

export default function IdealFor() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-3 text-accent-600 text-sm font-semibold tracking-wider uppercase">
              Who It&apos;s For
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight text-balance">
              Built for Local Businesses That Need More Calls
            </h2>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              This system is built specifically for local service businesses
              that rely on their website to generate calls and booked jobs.
            </p>
            <p className="mt-4 text-base text-slate-500 leading-relaxed">
              If you run a home service company and your website looks outdated,
              loads slowly, or doesn&apos;t convert visitors into leads — this
              is exactly what I built this for. I&apos;ll show you what a
              better online presence looks like{" "}
              <strong className="text-slate-700 font-medium">
                before you spend a single dollar.
              </strong>
            </p>
            <div className="mt-8">
              <Button variant="primary" size="md" href="#contact">
                Get a Demo Built for Your Business
              </Button>
            </div>
          </motion.div>

          {/* Right — niche grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3">
              {niches.map((niche, i) => (
                <motion.div
                  key={niche.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className={`flex flex-col items-center gap-2.5 px-4 py-5 rounded-2xl border ${niche.color} text-center cursor-default select-none hover:scale-105 transition-transform`}
                >
                  <niche.icon className="w-6 h-6" />
                  <span className="text-sm font-semibold leading-tight">
                    {niche.label}
                  </span>
                </motion.div>
              ))}
            </div>
            <p className="mt-5 text-xs text-slate-400 text-center lg:text-left">
              Don&apos;t see your niche?{" "}
              <a
                href="#contact"
                className="text-accent-600 hover:underline font-medium"
              >
                Reach out — I build for any local service business.
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
