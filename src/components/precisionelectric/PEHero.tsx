"use client";

import { motion } from "framer-motion";
import { Phone, ChevronRight, ShieldCheck, Star, AlertTriangle } from "lucide-react";

interface Props {
  phone: string;
  city: string;
  onOpenModal: () => void;
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function PEHero({ phone, city, onOpenModal }: Props) {
  const rawPhone = phone.replace(/\D/g, "");

  return (
    <section
      id="home"
      className="relative min-h-[100svh] bg-zinc-950 flex flex-col justify-center overflow-hidden"
    >
      {/* Full-bleed hero photo — behind text & circuit art */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1758101755915-462eddc23f57?w=1920&q=80&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 z-0 bg-zinc-950/75 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/60 to-zinc-950/30 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-zinc-950/50 pointer-events-none" />

      <ElectricBackground />

      {/* Dark vignette overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black/60 via-transparent to-black/40 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — text content */}
          <div>
            {/* Top badge */}
            <motion.div {...fadeUp(0)} className="mb-6">
              <span className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/25 text-yellow-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                Licensed &amp; Insured · {city}, NC
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              {...fadeUp(0.1)}
              className="text-[2.5rem] sm:text-5xl md:text-6xl font-black text-white leading-[1.02] tracking-tight mb-6"
            >
              Safe, Reliable{" "}
              <span className="relative inline-block">
                <span className="text-yellow-400">Electrical</span>
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-[3px] bg-yellow-400 rounded-full origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                />
              </span>
              <br />
              Services in {city}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              {...fadeUp(0.2)}
              className="text-lg text-zinc-300 mb-8 leading-relaxed"
            >
              Licensed electricians. Code-compliant work. Done right the first time.{" "}
              <span className="text-white font-semibold">No shortcuts. No surprises.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.3)}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <button
                onClick={onOpenModal}
                className="group flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-lg px-8 py-4 rounded-xl transition-all duration-200 shadow-2xl shadow-yellow-400/20 hover:shadow-yellow-400/35 hover:-translate-y-0.5"
              >
                Request Service
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={`tel:${rawPhone}`}
                className="flex items-center justify-center gap-2.5 bg-zinc-800/80 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                Call Now: {phone}
              </a>
            </motion.div>

            {/* Trust micro-signals */}
            <motion.div
              {...fadeUp(0.45)}
              className="flex flex-wrap gap-x-6 gap-y-3"
            >
              {[
                "24/7 Emergency Service",
                "Free Estimates",
                "100% Satisfaction Guarantee",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-zinc-400 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — review (photo is full-bleed behind hero) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:flex flex-col gap-4"
          >
            {/* Review card */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 shadow-2xl">
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed mb-3">
                &quot;Best electrician in {city}. On time, professional, and explained everything clearly.&quot;
              </p>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-yellow-400/20 border border-yellow-400/30 flex items-center justify-center text-yellow-400 font-bold text-xs">M</div>
                <div>
                  <p className="text-white text-xs font-bold">Mike T.</p>
                  <p className="text-zinc-500 text-[10px]">Google Review</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-zinc-600 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1.5 h-2.5 bg-yellow-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function ElectricBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Animated SVG circuit traces */}
      <svg
        className="absolute w-full h-full opacity-100"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Primary yellow trace */}
        <motion.path
          d="M -50 380 L 180 380 L 180 180 L 480 180 L 480 320 L 780 320 L 780 120 L 1080 120 L 1080 280 L 1490 280"
          stroke="#FBBF24"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.18 }}
          transition={{ duration: 3.5, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 2 }}
        />
        {/* Blue trace */}
        <motion.path
          d="M -50 620 L 260 620 L 260 760 L 560 760 L 560 480 L 860 480 L 860 640 L 1160 640 L 1160 440 L 1490 440"
          stroke="#3B82F6"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.13 }}
          transition={{ duration: 4, ease: "easeInOut", delay: 1.2, repeat: Infinity, repeatType: "loop", repeatDelay: 1.5 }}
        />
        {/* Secondary faint trace */}
        <motion.path
          d="M 1490 200 L 1200 200 L 1200 420 L 900 420 L 900 260 L 600 260 L 600 460 L 300 460 L 300 580 L -50 580"
          stroke="#FBBF24"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.08 }}
          transition={{ duration: 4.5, ease: "easeInOut", delay: 0.6, repeat: Infinity, repeatType: "loop", repeatDelay: 2 }}
        />
        {/* Junction nodes - yellow */}
        {[[180, 380], [480, 180], [780, 320], [1080, 120]].map(([cx, cy], i) => (
          <motion.circle
            key={`y-${i}`}
            cx={cx}
            cy={cy}
            r="4"
            fill="#FBBF24"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.5, 0.2], scale: [0, 1.4, 1] }}
            transition={{ delay: 0.5 + i * 0.4, duration: 0.6, repeat: Infinity, repeatDelay: 4.5 }}
          />
        ))}
        {/* Junction nodes - blue */}
        {[[260, 620], [560, 760], [860, 480], [1160, 640]].map(([cx, cy], i) => (
          <motion.circle
            key={`b-${i}`}
            cx={cx}
            cy={cy}
            r="3.5"
            fill="#3B82F6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.4, 0.15], scale: [0, 1.3, 1] }}
            transition={{ delay: 1.5 + i * 0.4, duration: 0.6, repeat: Infinity, repeatDelay: 4.5 }}
          />
        ))}
      </svg>

      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-yellow-400/[0.04] rounded-full blur-[80px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-blue-600/[0.04] rounded-full blur-[80px]" />
      <div className="absolute top-2/3 left-1/2 w-[300px] h-[300px] bg-yellow-400/[0.03] rounded-full blur-[60px]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(251,191,36,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251,191,36,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
