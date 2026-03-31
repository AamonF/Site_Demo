"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Star, ShieldCheck, BadgeCheck, Clock } from "lucide-react";

const PHONE = "(704) 555-0123";
const PHONE_HREF = "tel:+17045550123";

const trustBadges = [
  { icon: Star, label: "4.9★ Rated", sub: "312 Reviews" },
  { icon: ShieldCheck, label: "Licensed & Insured", sub: "NC Certified" },
  { icon: BadgeCheck, label: "100% Satisfaction", sub: "Guaranteed" },
  { icon: Clock, label: "Same-Day Service", sub: "Available" },
];

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  );
}

export default function CHHero() {
  const [modalOpen, setModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleEstimate = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-20"
    >
      {/* Full-bleed hero photo — behind all copy */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1757800159710-080b937f517d?w=1920&q=80&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 z-0 bg-slate-950/75 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950/90 via-blue-950/55 to-slate-950/30 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/50 pointer-events-none" />

      {/* Gradient wash */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900/50 via-blue-950/40 to-slate-900/50" />

      {/* Animated background orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full bg-blue-800/15 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-900/10 blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-blue-300 text-xs font-semibold tracking-wide uppercase">Now Serving [City], NC</span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5"
            >
              Stay Comfortable{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Year-Round
              </span>{" "}
              with Trusted HVAC Experts in [City]
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-blue-100/80 mb-8 leading-relaxed"
            >
              Fast service. Honest pricing.{" "}
              <span className="text-white font-semibold">100% satisfaction guaranteed.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <button
                onClick={handleEstimate}
                className="group flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-2xl text-base font-bold shadow-xl shadow-blue-500/30 hover:shadow-blue-400/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                Get Free Estimate
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl text-base font-bold transition-all duration-200 hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" strokeWidth={2.5} />
                Call {PHONE}
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-3"
            >
              {trustBadges.map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center bg-white/8 border border-white/10 rounded-2xl px-3 py-3 backdrop-blur-sm"
                >
                  <Icon className="w-5 h-5 text-blue-400 mb-1.5" strokeWidth={2} />
                  <span className="text-white text-xs font-semibold leading-tight">{label}</span>
                  <span className="text-blue-300/70 text-[10px] mt-0.5">{sub}</span>
                </div>
              ))}
            </motion.div>

            {/* Social proof mini */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-6 flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {["JL","MR","KT","SE"].map((initials, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-blue-900 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-[9px] font-bold text-white"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <StarRow count={5} />
                <p className="text-blue-200/70 text-xs mt-0.5">Trusted by 300+ homeowners in [City]</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>
  );
}
