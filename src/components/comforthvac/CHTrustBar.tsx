"use client";

import { motion } from "framer-motion";
import { Clock, Star, ShieldCheck, CreditCard } from "lucide-react";

const items = [
  {
    icon: Clock,
    title: "Same-Day Service",
    desc: "Call before noon, fixed today",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Star,
    title: "5-Star Rated",
    desc: "4.9★ across 312 reviews",
    color: "text-yellow-500",
    bg: "bg-yellow-50",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    desc: "NC State Certified Technicians",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: CreditCard,
    title: "Financing Available",
    desc: "0% APR options for 12 months",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
];

export default function CHTrustBar() {
  return (
    <section className="bg-white py-6 border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, title, desc, color, bg }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors group"
            >
              <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                <Icon className={`w-5 h-5 ${color}`} strokeWidth={2} />
              </div>
              <div>
                <p className="text-slate-900 font-semibold text-sm leading-tight">{title}</p>
                <p className="text-slate-500 text-xs mt-0.5">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
