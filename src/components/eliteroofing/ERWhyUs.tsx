"use client";

import { motion } from "framer-motion";
import { Users, FileCheck, Layers, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Experienced, Certified Team",
    desc: "Our crews are factory-trained, background-checked, and have completed thousands of roofs across the Carolinas. Not day-labor — career craftsmen.",
    stat: "15+ Years",
    statLabel: "in business",
  },
  {
    icon: FileCheck,
    title: "Insurance Claim Experts",
    desc: "We handle the entire insurance process for you — documentation, adjuster meetings, and maximizing your claim payout. You shouldn't have to fight alone.",
    stat: "98%",
    statLabel: "claim approval rate",
  },
  {
    icon: Layers,
    title: "Premium Materials Only",
    desc: "We use Class 4 impact-resistant shingles and top-rated underlayment. No cheap materials, no shortcuts. Your roof will outlast the competition's.",
    stat: "50-Year",
    statLabel: "material warranty",
  },
  {
    icon: ShieldCheck,
    title: "Strong Workmanship Warranty",
    desc: "Every job we complete is backed by our industry-leading workmanship warranty. If anything goes wrong due to our work, we make it right — period.",
    stat: "10-Year",
    statLabel: "labor guarantee",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function ERWhyUs() {
  return (
    <section id="why-us" className="bg-zinc-900 py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-500/25 text-red-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Why [Company Name]
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-5">
              The Roofing Company
              <br />
              <span className="text-red-500">[City] Homeowners</span>
              <br />
              Trust Most
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              There's no shortage of roofing companies in NC. But there's a big difference between someone who slaps shingles down and a team that treats your home like their own.
            </p>

            {/* Image placeholder */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9]">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80&auto=format&fit=crop"
                alt="[Company Name] roofing crew at work"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 bg-zinc-950/80 backdrop-blur-sm border border-zinc-800 rounded-xl px-4 py-3">
                <p className="text-white font-black text-xl">1,200+</p>
                <p className="text-zinc-400 text-xs">Roofs completed across NC</p>
              </div>
            </div>
          </motion.div>

          {/* Right: reasons */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {reasons.map(({ icon: Icon, title, desc, stat, statLabel }) => (
              <motion.div
                key={title}
                variants={item}
                className="flex gap-5 group"
              >
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div className="w-12 h-12 bg-red-600/10 border border-red-500/20 rounded-xl flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                    <Icon className="w-5.5 h-5.5 text-red-500" />
                  </div>
                  <div className="flex-1 w-px bg-zinc-800 min-h-[24px]" />
                </div>
                <div className="pb-4">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="text-white font-extrabold text-base">{title}</h3>
                    <span className="hidden sm:inline-flex items-baseline gap-1 text-xs font-bold text-red-500 bg-red-500/10 border border-red-500/20 px-2 py-0.5 rounded-full whitespace-nowrap">
                      <span className="font-black">{stat}</span>
                      <span className="text-red-400">{statLabel}</span>
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
