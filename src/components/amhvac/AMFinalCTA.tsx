"use client";

import { motion } from "framer-motion";
import { Phone, CalendarCheck } from "lucide-react";
import type { BusinessDemo } from "@/lib/demos/types";

interface AMFinalCTAProps {
  demo: BusinessDemo;
}

export default function AMFinalCTA({ demo }: AMFinalCTAProps) {
  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-emerald-800 via-emerald-900 to-stone-950 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-0 w-80 h-80 rounded-full bg-emerald-700/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-emerald-800/25 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block mb-5 px-4 py-2 rounded-full bg-emerald-700/40 border border-emerald-600/40 text-emerald-300 text-xs font-bold uppercase tracking-widest">
            {demo.city}, {demo.state} · Serving Since 2009
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight text-balance">
            {demo.finalCtaHeadline}
          </h2>

          <p className="mt-5 text-lg sm:text-xl text-emerald-200/70 leading-relaxed max-w-2xl mx-auto text-balance">
            {demo.finalCtaSubheadline}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={demo.phoneHref}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-900 font-black text-base shadow-xl hover:shadow-amber-500/30 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call {demo.phone}
            </a>
            <button
              onClick={() => handleScroll("#contact")}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-base transition-all cursor-pointer"
            >
              <CalendarCheck className="w-5 h-5" />
              {demo.bookingCTA}
            </button>
          </div>

          <p className="mt-6 text-sm text-emerald-400/60">
            No commitment required · Straightforward pricing · Fast, friendly scheduling
          </p>
        </motion.div>
      </div>
    </section>
  );
}
