"use client";

import { motion } from "framer-motion";
import {
  Zap,
  DollarSign,
  ShieldCheck,
  Clock,
  Award,
  ThumbsUp,
  Phone,
} from "lucide-react";

const PHONE_HREF = "tel:+17045550123";

const reasons = [
  {
    icon: Zap,
    title: "Lightning-Fast Response",
    desc: "We answer every call — day or night. Our average on-site arrival time is under 60 minutes for emergencies in [City].",
    stat: "< 60 min",
    statLabel: "avg. arrival",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: DollarSign,
    title: "Upfront, Honest Pricing",
    desc: "You get a clear quote before any work begins. No surprise charges, no hidden fees — just honest pricing from the start.",
    stat: "$0",
    statLabel: "surprise fees",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: ShieldCheck,
    title: "100% Satisfaction Guarantee",
    desc: "If you're not completely satisfied, we'll come back and fix it at no additional charge. Our work speaks for itself.",
    stat: "100%",
    statLabel: "satisfaction rate",
    color: "from-sky-500 to-blue-600",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    desc: "Plumbing emergencies don't follow business hours. We're available around the clock, 365 days a year.",
    stat: "24/7",
    statLabel: "always available",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: Award,
    title: "Licensed & Insured in NC",
    desc: "Every technician is fully licensed, background-checked, and carries full insurance so you're always protected.",
    stat: "NC",
    statLabel: "licensed & insured",
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: ThumbsUp,
    title: "500+ 5-Star Reviews",
    desc: "We've earned the trust of over 500 families in [City]. Our reputation is built on consistent, quality work.",
    stat: "4.9★",
    statLabel: "avg. rating",
    color: "from-yellow-400 to-amber-500",
  },
];

export default function FPWhyUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50/40 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block bg-sky-100 text-sky-700 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            The Plumber{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
              [City] Trusts
            </span>
          </h2>
          <p className="text-slate-500 text-lg">
            We built this company on one principle: treat every customer like a neighbor — because they are.
          </p>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
            >
              {/* Gradient bar top */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${r.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl`} />

              <div className="flex items-start gap-4">
                {/* Icon + stat */}
                <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${r.color} flex items-center justify-center shadow-md`}>
                    <r.icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <div className="text-center">
                    <p className="text-slate-900 font-extrabold text-sm leading-none">{r.stat}</p>
                    <p className="text-slate-400 text-[9px] font-medium leading-tight">{r.statLabel}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-slate-900 font-extrabold text-base mb-1.5">{r.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-r from-sky-900 to-blue-900 rounded-3xl overflow-hidden px-8 py-10 text-center"
        >
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle at 20% 50%, rgba(125,211,252,0.5) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(56,189,248,0.3) 0%, transparent 60%)"
            }}
          />
          <div className="relative">
            <p className="text-sky-300 text-xs font-bold uppercase tracking-widest mb-3">Our Promise to You</p>
            <h3 className="text-white font-extrabold text-2xl sm:text-3xl mb-3">
              &quot;We won&apos;t leave until the job is done right.&quot;
            </h3>
            <p className="text-sky-200/80 text-sm max-w-xl mx-auto mb-6">
              Every job comes with a written workmanship guarantee. If anything fails within 1 year of our service, we come back — free of charge.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-white hover:bg-sky-50 text-sky-700 px-7 py-3.5 rounded-2xl font-extrabold text-sm shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" strokeWidth={2.5} />
              Call (704) 555-0123
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
