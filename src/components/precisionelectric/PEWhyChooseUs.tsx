"use client";

import { motion } from "framer-motion";
import { ShieldCheck, DollarSign, Clock, Award, BadgeCheck } from "lucide-react";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Safety-First Approach",
    description:
      "We never cut corners. Every job follows NEC code and local regulations so your family and property stay protected for the long term.",
    highlight: "Code-compliant on every job",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "You get a full written estimate before we start. No surprise invoices, no scope creep. What we quote is what you pay.",
    highlight: "Upfront quotes, guaranteed",
  },
  {
    icon: Clock,
    title: "Fast Response Time",
    description:
      "Electrical emergencies can't wait. We offer same-day scheduling for urgent issues and 24/7 emergency response when you need it most.",
    highlight: "Same-day service available",
  },
  {
    icon: Award,
    title: "Experienced Electricians",
    description:
      "Our team brings 15+ years of combined experience. We've handled everything from simple outlet repairs to full commercial rewires.",
    highlight: "15+ years of experience",
  },
];

const STATS = [
  { value: "500+", label: "Projects Completed" },
  { value: "4.9★", label: "Average Rating" },
  { value: "15+", label: "Years Experience" },
  { value: "24/7", label: "Emergency Service" },
];

export default function PEWhyChooseUs() {
  return (
    <section id="why-us" className="bg-zinc-900 py-20 md:py-28 relative overflow-hidden">
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-600/[0.04] rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Reasons */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <span className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                <BadgeCheck className="w-3.5 h-3.5" />
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                The Electricians{" "}
                <span className="text-yellow-400">{" "}Your Neighbors Trust</span>
              </h2>
            </motion.div>

            <div className="space-y-5">
              {REASONS.map((reason, i) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-4 group"
                >
                  <div className="w-12 h-12 bg-zinc-800 group-hover:bg-yellow-400/10 border border-zinc-700 group-hover:border-yellow-400/30 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 mt-0.5">
                    <reason.icon className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="font-black text-white text-base mb-1">{reason.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-1.5">
                      {reason.description}
                    </p>
                    <span className="text-yellow-400/80 text-xs font-semibold flex items-center gap-1">
                      <BadgeCheck className="w-3.5 h-3.5" />
                      {reason.highlight}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:pl-8"
          >
            <div className="bg-zinc-950/80 border border-zinc-700/60 rounded-3xl p-8 md:p-10">
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-5 mb-8">
                {STATS.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                    className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 text-center"
                  >
                    <p className="text-3xl font-black text-yellow-400 leading-none mb-1">
                      {stat.value}
                    </p>
                    <p className="text-zinc-400 text-xs font-medium uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Guarantee block */}
              <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-400/5 border border-yellow-400/20 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-base mb-1">
                      100% Satisfaction Guarantee
                    </h4>
                    <p className="text-zinc-300 text-sm leading-relaxed">
                      If you&apos;re not completely satisfied with our work, we&apos;ll make it right at no
                      additional cost. That&apos;s our promise to every customer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
