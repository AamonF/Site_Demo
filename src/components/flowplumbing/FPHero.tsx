"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Star, ShieldCheck, BadgeCheck, Clock, AlertTriangle, ChevronDown } from "lucide-react";
import FPLeadModal from "./FPLeadModal";

const PHONE = "(704) 555-0123";
const PHONE_HREF = "tel:+17045550123";

const trustBadges = [
  { icon: Star, label: "4.9★ Rated", sub: "500+ Reviews" },
  { icon: ShieldCheck, label: "Licensed & Insured", sub: "NC Certified" },
  { icon: BadgeCheck, label: "Satisfaction Guaranteed", sub: "Or It's Free" },
  { icon: Clock, label: "60-Min Response", sub: "Avg. Arrival Time" },
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

export default function FPHero() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-20"
      >
        {/* Full-bleed hero photo — behind all copy */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1749532125405-70950966b0e5?w=1920&q=80&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 z-0 bg-sky-950/75 pointer-events-none" />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-sky-950/90 via-sky-950/55 to-sky-950/30 pointer-events-none" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-sky-950/90 via-transparent to-sky-950/50 pointer-events-none" />

        {/* Deep water gradient wash (subtle) */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-sky-950/40 via-blue-900/30 to-sky-950/40" />

        {/* Water ripple orbs */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-sky-500/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-3xl animate-pulse" style={{ animationDelay: "1.2s" }} />
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/8 blur-3xl animate-pulse" style={{ animationDelay: "0.6s" }} />
        </div>

        {/* Subtle water wave lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(ellipse at 50% 50%, rgba(125,211,252,0.3) 0%, transparent 70%)",
          }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="max-w-3xl">
            {/* Text content — sits above full-bleed photo */}
            <div>
              {/* Live badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-sky-500/15 border border-sky-400/30 rounded-full px-4 py-1.5 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sky-300 text-xs font-semibold tracking-wide uppercase">Available Now · [City], NC</span>
              </motion.div>

              {/* H1 */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5"
              >
                Fast, Reliable{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-cyan-300">
                  Plumbing Services
                </span>{" "}
                in [City]
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-sky-100/80 mb-8 leading-relaxed"
              >
                Leaks, clogs, installs — we fix it fast.{" "}
                <span className="text-white font-semibold">Upfront pricing. No surprises.</span>
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 mb-10"
              >
                <button
                  onClick={() => setModalOpen(true)}
                  className="group flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-2xl text-base font-bold shadow-xl shadow-sky-500/35 hover:shadow-sky-400/45 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Book Service Now
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
                <a
                  href={PHONE_HREF}
                  className="flex items-center justify-center gap-2.5 bg-red-500/90 hover:bg-red-500 border border-red-400/50 text-white px-8 py-4 rounded-2xl text-base font-bold transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-red-900/30"
                >
                  <AlertTriangle className="w-4 h-4" strokeWidth={2.5} />
                  Emergency Call · {PHONE}
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
                    className="flex flex-col items-center text-center bg-white/[0.07] border border-white/10 rounded-2xl px-3 py-3.5 backdrop-blur-sm"
                  >
                    <Icon className="w-5 h-5 text-sky-400 mb-1.5" strokeWidth={2} />
                    <span className="text-white text-xs font-semibold leading-tight">{label}</span>
                    <span className="text-sky-300/70 text-[10px] mt-0.5">{sub}</span>
                  </div>
                ))}
              </motion.div>

              {/* Social proof avatars */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="mt-6 flex items-center gap-3"
              >
                <div className="flex -space-x-2">
                  {["JD", "KM", "TR", "SL", "BH"].map((initials, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-sky-900 bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center text-[9px] font-bold text-white"
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div>
                  <StarRow count={5} />
                  <p className="text-sky-200/70 text-xs mt-0.5">500+ happy homeowners in [City]</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom wave into white */}
        <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
          </svg>
        </div>

        {/* Scroll hint */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={() => handleScroll("#emergency")}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-sky-300/60 hover:text-sky-300 transition-colors flex flex-col items-center gap-1"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </motion.button>
      </section>

      <FPLeadModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
