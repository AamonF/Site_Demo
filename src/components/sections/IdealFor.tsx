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
  Scale,
} from "lucide-react";
import { useDemoRequest } from "@/components/launch/DemoRequestProvider";
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
  { icon: Scale, label: "Legal", color: "bg-slate-50 text-slate-700 border-slate-200" },
];

export default function IdealFor() {
  const { open: openDemoRequest } = useDemoRequest();
  return (
    <section className="py-20 lg:py-28 bg-zinc-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-3 text-xs font-bold text-accent-600 tracking-[0.12em] uppercase">
              Who it&apos;s for
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 leading-tight text-balance tracking-tight">
              Local businesses that live or die on the phone
            </h2>
            <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
              This system is built specifically for local service businesses
              that rely on their website to generate calls and booked jobs.
            </p>
            <p className="mt-4 text-base text-zinc-600 leading-relaxed">
              If you run a home service company and your website looks outdated,
              loads slowly, or doesn&apos;t convert visitors into leads — this
              is exactly what I built this for. I&apos;ll show you what a
              better online presence looks like{" "}
              <strong className="text-zinc-800 font-semibold">
                before you spend a single dollar.
              </strong>
            </p>
            <div className="mt-8">
              <Button type="button" variant="primary" size="md" onClick={openDemoRequest}>
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
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
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
            <p className="mt-5 text-xs text-zinc-500 text-center lg:text-left">
              Don&apos;t see your niche?{" "}
              <button
                type="button"
                onClick={openDemoRequest}
                className="text-accent-600 hover:underline font-medium text-left"
              >
                Reach out — I build for any local service business.
              </button>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
