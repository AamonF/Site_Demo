"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Star, CheckCircle2 } from "lucide-react";

const PHONE = "(704) 555-0123";
const PHONE_HREF = "tel:7045550123";

function openModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("openRoofingModal"));
  }
}

const badges = [
  "Licensed & Insured",
  "Free Estimates",
  "Warranty Included",
];

export default function ERHero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-zinc-950"
    >
      {/* Parallax BG */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 will-change-transform scale-110"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80&auto=format&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
        }}
      />

      {/* Dark overlays for readability — behind text */}
      <div className="absolute inset-0 z-0 bg-zinc-950/75" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/60 to-zinc-950/30" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-zinc-950/40" />

      {/* Red accent line at top */}
      <div className="absolute top-0 left-0 right-0 z-0 h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-700" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-3xl">
          {/* Pre-headline badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-[0.15em] px-4 py-2 rounded-full mb-7"
          >
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            Serving [City], NC &amp; Surrounding Areas
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-black text-white leading-[1.05] tracking-tight mb-6"
          >
            Protect Your Home
            <br />
            <span className="text-red-500">with Trusted Roofing</span>
            <br />
            Experts in [City]
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="text-lg sm:text-xl text-zinc-300 mb-8 max-w-xl leading-relaxed"
          >
            Repairs, replacements, and inspections done right — backed by 15+
            years of experience and hundreds of satisfied homeowners.
          </motion.p>

          {/* Stars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex items-center gap-3 mb-9"
          >
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4.5 h-4.5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-zinc-300 text-sm font-medium">
              <strong className="text-white">4.9 / 5</strong> &mdash; 200+ Five‑Star Reviews
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.42 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <button
              onClick={openModal}
              className="group inline-flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-500 text-white font-extrabold text-lg px-8 py-4 rounded-xl shadow-xl shadow-red-600/35 transition-all duration-200 hover:shadow-red-500/45 hover:scale-[1.02] active:scale-100"
            >
              Get Free Inspection
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/18 border border-white/20 text-white font-bold text-lg px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-200 hover:scale-[1.02] active:scale-100"
            >
              <Phone className="w-5 h-5 text-red-400 flex-shrink-0" />
              Call Now — {PHONE}
            </a>
          </motion.div>

          {/* Quick trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-wrap gap-4"
          >
            {badges.map((badge) => (
              <div key={badge} className="flex items-center gap-1.5 text-zinc-400 text-sm">
                <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                {badge}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
    </section>
  );
}
