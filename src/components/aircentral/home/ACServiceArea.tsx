"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const areas = [
  "Charlotte",
  "Concord",
  "Gastonia",
  "Mooresville",
  "Kannapolis",
  "Huntersville",
  "Matthews",
  "Mint Hill",
  "Indian Trail",
  "Monroe",
  "Salisbury",
  "Rock Hill, SC",
];

export default function ACServiceArea() {
  return (
    <section className="py-12 lg:py-16 bg-white" aria-label="Service area in North Carolina">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Where We Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-5 leading-tight">
              Proudly Serving Charlotte, NC &amp; Surrounding Communities
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-5">
              We&apos;re local — and that means faster response times, fair pricing,
              and a team that truly knows the neighborhoods we serve. From the
              heart of Charlotte to the surrounding counties, we&apos;ve got you covered.
            </p>
            <Link
              href="/air-central-carolinas/service-area"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm border border-blue-200 hover:border-blue-300 px-6 py-3 rounded-xl transition-all hover:bg-blue-50"
            >
              View Full Service Area <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right — area grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-3xl p-8 border border-blue-100">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {areas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 bg-white rounded-xl px-3 py-2.5 border border-blue-100 shadow-sm"
                  >
                    <MapPin className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                    <span className="text-slate-700 text-sm font-medium leading-tight">{area}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2 bg-blue-800 rounded-xl px-3 py-2.5 col-span-2 sm:col-span-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-200 flex-shrink-0" />
                  <span className="text-white text-sm font-semibold">+ More Areas</span>
                </div>
              </div>
              <p className="text-slate-500 text-xs mt-5 text-center">
                Not sure if we serve your area?{" "}
                <a href="tel:+17045550190" className="text-blue-600 font-medium hover:underline">
                  Give us a call
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
