"use client";

import { motion } from "framer-motion";
import { Phone, CalendarCheck, ChevronRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import type { BusinessDemo } from "@/lib/demos/types";

interface AMHeroProps {
  demo: BusinessDemo;
}

const pricingHighlights = [
  { label: "Cooling or Heating Diagnostic", price: "$99", note: "per visit" },
  { label: "Summer or Winter Tune-Up", price: "From $105", note: "1-system" },
  { label: "Annual Maintenance Plan", price: "$15/mo", note: "1-system" },
];

export default function AMHero({ demo }: AMHeroProps) {
  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative bg-stone-950 text-white overflow-hidden"
      aria-label="Hero"
    >
      {/* Background photo — z-0 so copy stays on top */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1724488751821-1415f5cf4960?w=1920&q=80&auto=format&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Faded photo treatment (matches roofing hero) */}
      <div aria-hidden="true" className="absolute inset-0 z-0 bg-stone-950/75 pointer-events-none" />
      <div aria-hidden="true" className="absolute inset-0 z-0 bg-gradient-to-r from-stone-950/90 via-emerald-950/60 to-stone-950/35 pointer-events-none" />
      <div aria-hidden="true" className="absolute inset-0 z-0 bg-gradient-to-t from-stone-950/90 via-transparent to-stone-950/40 pointer-events-none" />

      {/* Glow accents */}
      <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-emerald-600/10 blur-3xl" />
        <div className="absolute bottom-0 -right-32 w-[400px] h-[400px] rounded-full bg-emerald-900/20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 lg:pt-24 lg:pb-14 text-center">
        {/* Location pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-800/50 border border-emerald-700/50 text-emerald-300 text-xs font-semibold mb-7 uppercase tracking-widest"
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          Charlotte, NC · Certified Contractor · Serving Since 2009
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight text-balance"
        >
          Honest HVAC Service<br className="hidden sm:block" />
          <span className="text-emerald-400"> for Charlotte Homeowners</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl mx-auto text-balance"
        >
          {demo.heroSubheadline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <a
            href={demo.phoneHref}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-900 font-black text-sm shadow-lg hover:shadow-amber-500/30 transition-all"
          >
            <Phone className="w-4 h-4" />
            Call {demo.phone}
          </a>
          <button
            onClick={() => handleScroll("#contact")}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg transition-all cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4" />
            {demo.bookingCTA}
          </button>
          <button
            onClick={() => handleScroll("#services")}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-white/20 hover:bg-white/10 text-stone-300 hover:text-white font-semibold text-sm transition-all cursor-pointer"
          >
            View Plans & Pricing
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Trust badges */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2"
          aria-label="Trust credentials"
        >
          {demo.heroTrustBadges.map((badge) => (
            <li key={badge.label} className="flex items-center gap-1.5 text-sm text-stone-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
              {badge.label}
            </li>
          ))}
        </motion.ul>
      </div>

      {/* Pricing callout strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {pricingHighlights.map((item) => (
            <div
              key={item.label}
              className="bg-white/5 hover:bg-white/8 border border-white/10 rounded-2xl px-5 py-4 flex items-center justify-between gap-4 transition-colors"
            >
              <div>
                <p className="text-xs text-stone-400 mb-0.5 leading-snug">{item.label}</p>
                <p className="text-xs text-stone-500">{item.note}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="text-xl font-black text-amber-400">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
