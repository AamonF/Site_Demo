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

      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(251,191,36,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Copper accent glow — upper right */}
      <div
        className="absolute -top-32 right-0 w-[700px] h-[700px] rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: "radial-gradient(circle, #d97706, transparent 70%)" }}
      />

      {/* Right-side mechanical panel accent */}
      <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent hidden lg:block" />
      <div className="absolute top-20 right-8 bottom-20 w-px bg-gradient-to-b from-transparent via-amber-500/20 to-transparent hidden lg:block" />

      {/* Bottom fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, transparent, #09090b)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-32 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">

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
          </div>

          {/* Right panel — mechanical stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-7 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600" />
                <div className="absolute top-4 right-4">
                  <span className="bg-amber-500/15 text-amber-400 text-xs font-semibold px-2.5 py-1 rounded-full border border-amber-500/20">
                    Available Now
                  </span>
                </div>

                <p className="text-zinc-500 text-xs font-semibold uppercase tracking-widest mb-6">Why Choose Air Central</p>

                <div className="space-y-4">
                  {[
                    { stat: "20+", label: "Years of Local Service" },
                    { stat: "100%", label: "Satisfaction Commitment" },
                    { stat: "All", label: "Major Brands Serviced" },
                    { stat: "Res +", label: "Commercial Capability" },
                  ].map(({ stat, label }) => (
                    <div key={label} className="flex items-center gap-4 py-3 border-b border-zinc-800 last:border-0">
                      <span className="text-2xl font-bold text-amber-500 w-14 flex-shrink-0">{stat}</span>
                      <span className="text-zinc-300 text-sm">{label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-zinc-800 flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold text-sm">Indian Trail, NC</p>
                    <p className="text-zinc-500 text-xs mt-0.5">Serving Charlotte Metro</p>
                  </div>
                  <a
                    href={COMPANY.phoneHref}
                    className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 px-4 py-2 rounded-md text-sm font-bold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call Now
                  </a>
                </div>
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-4 bg-zinc-800 border border-zinc-700 rounded-xl px-5 py-4 shadow-2xl">
                <p className="text-zinc-500 text-xs mb-1">Emergency Service</p>
                <p className="text-white font-semibold text-sm">Call Anytime</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-amber-400 text-xs">Rapid Response</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
