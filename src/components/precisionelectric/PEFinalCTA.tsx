"use client";

import { motion } from "framer-motion";
import { Phone, ChevronRight, Zap, ShieldCheck, Clock } from "lucide-react";

interface Props {
  phone: string;
  city: string;
  onOpenModal: () => void;
}

export default function PEFinalCTA({ phone, city, onOpenModal }: Props) {
  const rawPhone = phone.replace(/\D/g, "");

  return (
    <section className="bg-zinc-900 py-20 md:py-28 relative overflow-hidden">
      {/* Animated electric background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-blue-600/5" />
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 400" fill="none">
          <motion.path
            d="M 0 200 L 150 200 L 150 100 L 350 100 L 350 250 L 600 250 L 600 80 L 800 80 L 800 200 L 1000 200"
            stroke="#FBBF24"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 1.5 }}
          />
          {[[150, 200], [350, 100], [600, 250], [800, 80]].map(([cx, cy], i) => (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r="6"
              fill="#FBBF24"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 0.8, 0.2], scale: [0, 1.5, 1] }}
              transition={{ delay: 0.6 + i * 0.5, duration: 0.5, repeat: Infinity, repeatDelay: 4 }}
            />
          ))}
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <div className="inline-flex w-20 h-20 bg-yellow-400 rounded-2xl items-center justify-center mb-6 shadow-2xl shadow-yellow-400/30">
            <Zap className="w-10 h-10 text-black fill-black" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-5 leading-tight">
            Need an Electrician{" "}
            <span className="text-yellow-400">in {city} Today?</span>
          </h2>
          <p className="text-zinc-300 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            Don&apos;t wait on electrical issues. Our licensed team is ready to respond fast,
            fix it right, and get your home safe.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button
              onClick={onOpenModal}
              className="group flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-xl px-10 py-5 rounded-xl transition-all duration-200 shadow-2xl shadow-yellow-400/20 hover:shadow-yellow-400/40 hover:-translate-y-0.5"
            >
              Request Service Now
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href={`tel:${rawPhone}`}
              className="flex items-center justify-center gap-2.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 hover:border-zinc-400 text-white font-black text-xl px-10 py-5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <Phone className="w-6 h-6 text-yellow-400 flex-shrink-0" />
              {phone}
            </a>
          </div>

          {/* Micro trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-yellow-400" />
              Licensed &amp; Insured
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-yellow-400" />
              Same-Day Available
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              24/7 Emergency Response
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
