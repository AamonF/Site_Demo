"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, MessageSquare, Award, Sparkles, CalendarCheck } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "Trusted Local Company",
    desc: "We live and work right here in North Carolina. Your neighbors trust us — and we take that seriously.",
  },
  {
    icon: Clock,
    title: "Fast Response Times",
    desc: "HVAC problems don't wait. We offer same-day service and always give you a realistic arrival window.",
  },
  {
    icon: MessageSquare,
    title: "Honest Recommendations",
    desc: "We'll always tell you what your system actually needs — not what earns us the most money.",
  },
  {
    icon: Award,
    title: "Experienced Technicians",
    desc: "Our team is fully licensed, insured, and trained on all major HVAC brands and systems.",
  },
  {
    icon: Sparkles,
    title: "Clean, Respectful Service",
    desc: "We treat your home with care. We leave work areas tidy and always respect your space.",
  },
  {
    icon: CalendarCheck,
    title: "Reliable Scheduling",
    desc: "We show up when we say we will. No waiting around all day — we respect your time.",
  },
];

export default function ACWhyUs() {
  return (
    <section className="py-12 lg:py-16 bg-slate-50" aria-label="Why choose Air Central">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Why Homeowners Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3 leading-tight">
              The HVAC Company That Treats You Right
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-5">
              We built our reputation one home at a time. Every call, every visit,
              every repair — we show up ready to do right by you. That&apos;s what
              makes Air Central of the Carolinas different from the big chains.
            </p>
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-slate-900 font-semibold text-sm">Locally Owned &amp; Operated</p>
                <p className="text-slate-500 text-sm">Not a franchise — a real NC family business</p>
              </div>
            </div>
          </motion.div>

          {/* Right grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-blue-600" strokeWidth={1.8} />
                </div>
                <h3 className="text-slate-900 font-semibold text-sm mb-1.5">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
