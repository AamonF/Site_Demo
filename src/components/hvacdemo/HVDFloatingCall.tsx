"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

import { PHONE, PHONE_HREF } from "./constants";

export default function HVDFloatingCall() {
  return (
    <motion.a
      href={PHONE_HREF}
      className="md:hidden fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-sky-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-900/35 ring-2 ring-white/90 hover:bg-sky-700 transition-colors"
      aria-label={`Call ${PHONE}`}
      initial={{ opacity: 0, y: 16, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <Phone className="w-5 h-5" aria-hidden />
      Call now
    </motion.a>
  );
}
