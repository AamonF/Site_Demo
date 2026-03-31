"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck, BadgeCheck, Clock, Wrench, Users } from "lucide-react";

const badges = [
  { icon: Star, label: "4.9★ Rating", sub: "500+ Reviews" },
  { icon: ShieldCheck, label: "Licensed & Insured", sub: "NC Certified" },
  { icon: Clock, label: "60-Min Response", sub: "Avg. Arrival" },
  { icon: BadgeCheck, label: "Satisfaction Guaranteed", sub: "Or We Come Back Free" },
  { icon: Wrench, label: "20+ Years Experience", sub: "Local Plumbers" },
  { icon: Users, label: "5,000+ Jobs Done", sub: "In [City], NC" },
];

export default function FPTrustBar() {
  return (
    <section className="py-10 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map(({ icon: Icon, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex flex-col items-center text-center gap-2 p-4 rounded-2xl hover:bg-sky-50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-100 group-hover:bg-sky-600 flex items-center justify-center transition-colors">
                <Icon className="w-5 h-5 text-sky-600 group-hover:text-white transition-colors" strokeWidth={2} />
              </div>
              <div>
                <p className="text-slate-800 font-bold text-xs leading-tight">{label}</p>
                <p className="text-slate-400 text-[10px] mt-0.5">{sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
