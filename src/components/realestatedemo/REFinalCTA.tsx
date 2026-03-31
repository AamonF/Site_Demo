"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function REFinalCTA() {
  return (
    <section
      className="relative py-20 md:py-28 bg-neutral-950 overflow-hidden"
      aria-labelledby="re-final-cta-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(201,169,98,0.18),transparent_55%)]" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="re-final-cta-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-tight text-balance"
          >
            Start your real estate journey today
          </h2>
          <p className="mt-5 text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Browse curated listings or book a private consultation—no pressure, just a clear plan
            forward.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#listings"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#c9a962] px-8 py-4 text-base font-semibold text-neutral-950 hover:bg-[#d4b876] transition-colors shadow-lg shadow-black/25"
            >
              Browse Listings
              <ArrowRight className="w-4 h-4" aria-hidden />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/25 bg-white/5 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              <Calendar className="w-4 h-4" aria-hidden />
              Schedule Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
