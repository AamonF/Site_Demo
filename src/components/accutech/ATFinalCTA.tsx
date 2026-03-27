"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import type { BusinessDemo } from "@/lib/demos/types";

interface ATFinalCTAProps {
  demo: BusinessDemo;
}

export default function ATFinalCTA({ demo }: ATFinalCTAProps) {
  const scroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-20 lg:py-28 bg-slate-900 overflow-hidden">
      {/* Decorative */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-teal-800/15 blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-rose-900/10 blur-3xl translate-y-1/3 translate-x-1/4" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "36px 36px",
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
          <span className="inline-block mb-5 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-widest">
            {demo.city}, {demo.state} · {demo.serviceArea}
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight text-balance">
            {demo.finalCtaHeadline}
          </h2>

          <p className="mt-5 text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto text-balance">
            {demo.finalCtaSubheadline}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={demo.phoneHref}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-base shadow-xl shadow-rose-900/30 hover:shadow-rose-900/50 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call {demo.phone}
            </a>
            <button
              onClick={() => scroll("#contact")}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-base shadow-xl transition-all cursor-pointer"
            >
              {demo.bookingCTA}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <p className="mt-6 text-sm text-slate-600">
            Residential &amp; commercial · Charlotte, NC and surrounding areas · Non-emergency within 24 hrs
          </p>
        </motion.div>
      </div>
    </section>
  );
}
