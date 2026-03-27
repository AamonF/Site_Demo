"use client";

import { motion } from "framer-motion";
import { DollarSign, Clock, Award, Users } from "lucide-react";

const reasons = [
  {
    icon: DollarSign,
    title: "Upfront, Honest Pricing",
    desc: "You'll know the full cost before we start a single bolt. No hidden fees, no bait-and-switch pricing — ever.",
    stat: "$0",
    statLabel: "Hidden Fees",
  },
  {
    icon: Clock,
    title: "Same-Day Availability",
    desc: "Call before noon and we'll be there today. We keep our schedule tight so we can respond when it matters most.",
    stat: "<2hr",
    statLabel: "Average Response",
  },
  {
    icon: Award,
    title: "Warranty-Backed Work",
    desc: "Every repair and installation is backed by our parts & labor warranty. We stand behind everything we do.",
    stat: "2-Year",
    statLabel: "Labor Warranty",
  },
  {
    icon: Users,
    title: "Highly Trained Technicians",
    desc: "Our team holds current NATE certifications and stays up-to-date on every major system brand and model.",
    stat: "NATE",
    statLabel: "Certified Team",
  },
];

export default function CHWhyUs() {
  return (
    <section id="why-us" className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">

      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-600/8 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-800/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block text-xs font-bold text-blue-400 uppercase tracking-widest mb-3 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
            Why [Company Name]?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            The [City] HVAC Company{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              That Actually Shows Up
            </span>
          </h2>
          <p className="text-blue-200/70 mt-3 text-base">
            We built our reputation one job at a time — and we protect it on every call.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ icon: Icon, title, desc, stat, statLabel }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-6 hover:bg-white/8 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6 text-blue-400" strokeWidth={2} />
              </div>

              <div className="mb-4">
                <span className="text-3xl font-black text-white">{stat}</span>
                <span className="text-blue-400 text-xs font-semibold ml-1.5 block leading-none mt-0.5">{statLabel}</span>
              </div>

              <h3 className="text-white font-bold text-base mb-2">{title}</h3>
              <p className="text-blue-200/60 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom guarantee banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/20 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-center sm:text-left">
            <p className="text-white font-bold text-xl">100% Satisfaction Guarantee</p>
            <p className="text-blue-200/70 text-sm mt-1">Not satisfied? We&apos;ll make it right or your money back. No questions asked.</p>
          </div>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="flex-shrink-0 bg-blue-500 hover:bg-blue-400 text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-colors shadow-lg shadow-blue-500/25 whitespace-nowrap"
          >
            Claim Free Estimate
          </button>
        </motion.div>
      </div>
    </section>
  );
}
