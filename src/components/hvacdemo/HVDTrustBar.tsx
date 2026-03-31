"use client";

import { motion } from "framer-motion";
import { BadgeCheck, CalendarClock, Shield, Star, Wallet } from "lucide-react";

const items = [
  { icon: CalendarClock, label: "Same-Day Service" },
  { icon: Star, label: "5-Star Rated" },
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Wallet, label: "Financing Available" },
];

export default function HVDTrustBar() {
  return (
    <section
      aria-label="Company highlights"
      className="relative z-20 -mt-6 sm:-mt-8 mx-4 sm:mx-6 lg:mx-auto max-w-7xl"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-slate-200/90 bg-white shadow-[0_20px_50px_-24px_rgba(15,23,42,0.2)] px-4 py-5 sm:px-6 sm:py-6"
      >
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-3 justify-center lg:justify-start text-center lg:text-left"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                <Icon className="w-5 h-5" aria-hidden />
              </span>
              <span className="text-sm sm:text-base font-semibold text-slate-800">{label}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
