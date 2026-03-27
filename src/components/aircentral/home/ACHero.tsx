"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Calendar, CheckCircle2, Star } from "lucide-react";

const badges = [
  "Licensed & Insured",
  "Same-Day Service",
  "All Major Brands",
];

export default function ACHero() {
  return (
    <section
      className="relative overflow-hidden pt-20 pb-12 lg:pt-28 lg:pb-16"
      aria-label="Hero section"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-slate-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Serving North Carolina Homeowners
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-5"
          >
            Reliable Heating &amp; Air Services{" "}
            <span className="text-blue-600">You Can Count On</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-6 max-w-2xl"
          >
            Fast, professional HVAC repair, installation, and maintenance for
            homes across North Carolina. When your comfort is on the line, we
            show up — and we get it done right.
          </motion.p>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-7"
          >
            {badges.map((b) => (
              <span
                key={b}
                className="flex items-center gap-1.5 text-sm text-slate-600 bg-white border border-blue-100 px-3 py-1.5 rounded-full shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-500" />
                {b}
              </span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 mb-8"
          >
            <Link
              href="/air-central-carolinas/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-7 py-4 rounded-xl text-base font-semibold transition-all duration-200 shadow-md shadow-blue-900/20 hover:shadow-lg hover:shadow-blue-900/25 hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5" />
              Schedule Service
            </Link>
            <a
              href="tel:+17045550190"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-slate-900 border border-blue-200 px-7 py-4 rounded-xl text-base font-semibold transition-all duration-200 shadow-sm hover:border-blue-300"
            >
              <Phone className="w-5 h-5 text-blue-600" />
              Call (704) 555-0190
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex items-center gap-4"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-200 to-sky-300 border-2 border-white flex items-center justify-center text-[10px] font-bold text-blue-800"
                >
                  {["JM", "SR", "TK", "LC"][i - 1]}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-500">
                Trusted by <span className="font-semibold text-slate-700">500+ NC homeowners</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
