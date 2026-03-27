"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle, DollarSign, Zap } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: ShieldCheck,
    label: "Licensed & Insured",
    sub: "Fully certified electricians",
  },
  {
    icon: CheckCircle,
    label: "Code-Compliant",
    sub: "Every job meets NEC standards",
  },
  {
    icon: DollarSign,
    label: "Upfront Pricing",
    sub: "No hidden fees, ever",
  },
  {
    icon: Zap,
    label: "Emergency Service",
    sub: "24/7 rapid response",
  },
];

export default function PETrustBar() {
  return (
    <section className="bg-yellow-400 relative overflow-hidden">
      {/* Subtle diagonal lines */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, black 0, black 1px, transparent 0, transparent 50%)",
          backgroundSize: "12px 12px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-5 md:py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-yellow-500/40">
          {TRUST_ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-center gap-3 md:px-6 first:pl-0 last:pr-0"
            >
              <div className="w-10 h-10 bg-black/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-black" />
              </div>
              <div>
                <p className="font-black text-black text-sm leading-none mb-0.5">{item.label}</p>
                <p className="text-yellow-900/70 text-xs font-medium leading-none">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
