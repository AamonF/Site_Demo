"use client";

import { motion } from "framer-motion";
import { Phone, CalendarCheck, ArrowRight } from "lucide-react";
import type { BusinessDemo } from "@/lib/demos/types";

interface DemoFinalCTAProps {
  demo: BusinessDemo;
}

export default function DemoFinalCTA({ demo }: DemoFinalCTAProps) {
  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 overflow-hidden">
      {/* Decorative */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block mb-4 px-3 py-1.5 rounded-full bg-white/15 border border-white/25 text-white/90 text-xs font-semibold uppercase tracking-wider">
            {demo.city}, {demo.state} · {demo.serviceArea}
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight text-balance">
            {demo.finalCtaHeadline}
          </h2>

          <p className="mt-5 text-lg sm:text-xl text-orange-100 leading-relaxed max-w-2xl mx-auto text-balance">
            {demo.finalCtaSubheadline}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={demo.phoneHref}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-orange-50 text-orange-600 font-bold text-base shadow-xl hover:shadow-2xl transition-all"
            >
              <Phone className="w-5 h-5" />
              Call {demo.phone}
            </a>
            <button
              onClick={() => handleScroll("#contact")}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-base transition-all cursor-pointer"
            >
              <CalendarCheck className="w-5 h-5" />
              {demo.bookingCTA}
            </button>
            <button
              onClick={() => handleScroll("#services")}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl border border-white/20 hover:bg-white/10 text-white/80 hover:text-white font-semibold text-base transition-all cursor-pointer"
            >
              <ArrowRight className="w-5 h-5" />
              Free Second Opinion
            </button>
          </div>

          <p className="mt-6 text-sm text-orange-200">
            No commitment required. Fast, friendly scheduling.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
