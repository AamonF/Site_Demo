"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, TrendingDown, LifeBuoy, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Prevent Costly Breakdowns",
    desc: "Catch small problems before they become expensive emergencies. Regular tune-ups keep your system running without surprises.",
  },
  {
    icon: TrendingDown,
    title: "Lower Your Energy Bills",
    desc: "A well-maintained system runs more efficiently — which means real savings on your monthly energy costs.",
  },
  {
    icon: LifeBuoy,
    title: "Extend System Life",
    desc: "Most HVAC systems last 15–20 years with proper care. A simple maintenance plan protects your investment.",
  },
];

export default function ACMaintenance() {
  return (
    <section className="py-12 lg:py-16 bg-white overflow-hidden" aria-label="HVAC maintenance plans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Visual card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl p-8 lg:p-10 text-white shadow-xl shadow-blue-900/20">
              <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-3">
                Comfort Plan
              </p>
              <h3 className="text-2xl lg:text-3xl font-extrabold mb-4 leading-tight">
                Annual HVAC Maintenance for Peace of Mind
              </h3>
              <p className="text-blue-200 leading-relaxed mb-5">
                Join hundreds of NC homeowners who never worry about their
                heating and cooling system. Our maintenance plan covers you
                through every season.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  "2 tune-ups per year (spring + fall)",
                  "Priority scheduling — you go first",
                  "Discounts on repairs and parts",
                  "Full system inspection each visit",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-blue-50">
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-3 h-3 text-white" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/air-central-carolinas/hvac-maintenance"
                className="inline-flex items-center gap-2 bg-white text-blue-800 hover:bg-blue-50 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:shadow-md"
              >
                Learn About Our Plans <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            {/* Decorative blob */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-sky-100 rounded-full blur-2xl opacity-60 pointer-events-none -z-10" />
          </motion.div>

          {/* Benefits list */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Why Maintenance Matters
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-5 leading-tight">
              Keep Your Home Comfortable Year-Round
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              Your HVAC system works hard every day. A little preventive care goes
              a long way toward keeping your home comfortable and your costs low.
            </p>

            <div className="space-y-5">
              {benefits.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-100">
                    <Icon className="w-6 h-6 text-blue-600" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-base mb-1.5">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
