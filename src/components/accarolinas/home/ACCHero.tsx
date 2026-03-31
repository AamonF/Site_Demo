"use client";

import Link from "next/link";
import { Phone, ArrowRight, CheckCircle2, Shield, Star, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { COMPANY, BASE } from "@/lib/accarolinas/data";

const trustBadges = [
  { icon: Shield, text: "Licensed & Insured" },
  { icon: Star, text: "20+ Years Experience" },
  { icon: CheckCircle2, text: "Residential & Commercial" },
  { icon: Clock, text: "Emergency Service" },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function ACCHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-zinc-950 overflow-hidden">

      {/* Full-bleed hero photo — behind all copy */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1766414629984-73a93e7caba0?w=1920&q=80&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 z-0 bg-zinc-950/75 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/55 to-zinc-950/30 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-zinc-950/50 pointer-events-none" />

      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(251,191,36,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Copper accent glow — upper right */}
      <div
        className="absolute -top-32 right-0 z-0 w-[700px] h-[700px] rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: "radial-gradient(circle, #d97706, transparent 70%)" }}
      />

      {/* Right-side mechanical panel accent */}
      <div className="absolute top-0 right-0 bottom-0 z-0 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent hidden lg:block" />
      <div className="absolute top-20 right-8 bottom-20 z-0 w-px bg-gradient-to-b from-transparent via-amber-500/20 to-transparent hidden lg:block" />

      {/* Bottom fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 z-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #09090b)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-32 w-full">
        <div className="max-w-4xl">
          <div>

            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 border border-amber-500/30 bg-amber-500/5 rounded-full px-4 py-1.5 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">
                Indian Trail, NC · Serving Charlotte Metro
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[62px] font-bold text-white leading-[1.05] tracking-tight mb-6"
            >
              Trusted Heating &{" "}
              <span className="text-amber-500">Cooling</span>{" "}
              for Indian Trail and the Charlotte Area
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-zinc-400 leading-relaxed max-w-2xl mb-10"
            >
              From repairs and replacements to indoor air quality and commercial HVAC, Air Central Of The Carolinas keeps homes and businesses comfortable with dependable local service — done right, the first time.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                href={`${BASE}/contact`}
                className="inline-flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-zinc-950 px-8 py-4 rounded-md text-base font-bold transition-all duration-200 shadow-xl shadow-amber-900/40 hover:-translate-y-0.5"
              >
                Request Free Estimate
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={COMPANY.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 border border-zinc-700 hover:border-zinc-500 bg-zinc-900/50 hover:bg-zinc-900 text-white px-8 py-4 rounded-md text-base font-semibold transition-all duration-200 hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" strokeWidth={2.5} />
                Call {COMPANY.phone}
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {trustBadges.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 hover:border-zinc-700 transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                  <span className="text-zinc-300 text-xs font-medium">{text}</span>
                </div>
              ))}
            </motion.div>

            {/* Stat row (moved from former side panel; sits above full-bleed photo) */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {[
                { stat: "20+", label: "Years Experience" },
                { stat: "100%", label: "Satisfaction" },
                { stat: "All", label: "Major Brands" },
                { stat: "24/7", label: "Emergency" },
              ].map(({ stat, label }) => (
                <div
                  key={label}
                  className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/60 rounded-xl px-3 py-3 text-center"
                >
                  <span className="text-lg font-black text-amber-400 block">{stat}</span>
                  <span className="text-zinc-400 text-[10px] font-medium">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
