"use client";

import { Phone, Zap } from "lucide-react";
import { motion } from "framer-motion";

const PHONE = "(704) 555-0123";
const PHONE_HREF = "tel:+17045550123";

export default function FPEmergencyBanner() {
  return (
    <section id="emergency" className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 py-4 relative overflow-hidden">
      {/* Shimmer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-full left-[-50%] w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 animate-[shimmer_3s_ease-in-out_infinite]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-white text-center"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <Zap className="w-4 h-4 fill-white text-white" />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse flex-shrink-0" />
              <span className="font-extrabold text-sm sm:text-base tracking-wide uppercase">
                24/7 Emergency Plumbing Available
              </span>
            </div>
          </div>

          <span className="hidden sm:block text-white/50 text-lg">|</span>

          <span className="text-white/90 text-sm">
            Burst pipe? Flooding? Don&apos;t wait — call now.
          </span>

          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 bg-white text-red-600 hover:bg-red-50 px-5 py-2 rounded-full font-extrabold text-sm transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex-shrink-0"
          >
            <Phone className="w-3.5 h-3.5" strokeWidth={2.5} />
            {PHONE}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
