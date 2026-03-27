"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";
import type { BusinessDemo } from "@/lib/demos/types";
import LeadForm from "./LeadForm";

interface DemoHeroProps {
  demo: BusinessDemo;
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function DemoHero({ demo }: DemoHeroProps) {
  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white overflow-hidden"
      aria-label="Hero"
    >
      {/* Background decoration */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-700/20 blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full bg-blue-800/30 blur-3xl" />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="lg:pt-4"
          >
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-200 text-xs font-semibold mb-6 uppercase tracking-wider"
            >
              {demo.city}, {demo.state} · Licensed {demo.industry} Service
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-[1.1] tracking-tight text-balance"
            >
              {demo.heroHeadline}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-5 text-base sm:text-lg text-blue-200 leading-relaxed text-balance"
            >
              {demo.heroSubheadline}
            </motion.p>

            {/* Trust badges */}
            <motion.ul
              variants={itemVariants}
              className="mt-6 grid grid-cols-2 gap-2"
              aria-label="Trust credentials"
            >
              {demo.heroTrustBadges.map((badge) => (
                <li
                  key={badge.label}
                  className="flex items-center gap-2 text-sm text-blue-100"
                >
                  <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                  {badge.label}
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href={demo.phoneHref}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="w-4 h-4" />
                Call {demo.phone}
              </a>
              <button
                onClick={() => handleScroll("#contact")}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
                {demo.bookingCTA}
              </button>
              <button
                onClick={() => handleScroll("#services")}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 hover:bg-white/10 text-blue-200 hover:text-white font-medium text-sm transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                Get a Free Second Opinion
              </button>
            </motion.div>
          </motion.div>

          {/* Right — lead form */}
          <motion.div
            id="contact"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8"
          >
            <div className="mb-6">
              <h2 className="text-lg font-bold text-slate-900 mb-1">
                Request Service
              </h2>
              <p className="text-sm text-slate-500">
                Fill out the form and we&apos;ll follow up quickly to confirm
                your appointment.
              </p>
            </div>
            <LeadForm
              bookingCTA={demo.bookingCTA}
              phone={demo.phone}
              phoneHref={demo.phoneHref}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
