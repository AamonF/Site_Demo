"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  ShieldCheck,
  MousePointerClick,
  LayoutList,
  SearchCheck,
  ClipboardList,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const benefits = [
  {
    icon: Smartphone,
    title: "Better mobile experience",
    description:
      "Every demo is built mobile-first — because most local service customers browse on their phones when they need help right now.",
  },
  {
    icon: ShieldCheck,
    title: "Stronger trust and credibility",
    description:
      "A polished, modern site signals professionalism instantly. Visitors trust companies that look established and well-run.",
  },
  {
    icon: MousePointerClick,
    title: "Cleaner calls to action",
    description:
      "Clear, prominent CTAs guide visitors to call, request a quote, or book — not get lost in a confusing, outdated layout.",
  },
  {
    icon: LayoutList,
    title: "Better service clarity",
    description:
      "Services are presented clearly so visitors immediately understand what's offered, what areas are covered, and why to choose this business.",
  },
  {
    icon: SearchCheck,
    title: "SEO-friendly structure",
    description:
      "Page structure, headings, and content are all built with local SEO in mind — laying the foundation for better search visibility.",
  },
  {
    icon: ClipboardList,
    title: "Easier lead capture",
    description:
      "Contact forms, click-to-call buttons, and lead capture flows are strategically placed to maximize conversions from every visit.",
  },
];

export default function Benefits() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What You Get"
          title="Built to Perform, Not Just Look Good"
          subtitle="Every demo is designed around one goal: converting website visitors into phone calls and booked jobs."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-accent-100 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-accent-50 group-hover:bg-accent-100 flex items-center justify-center mb-4 transition-colors">
                <benefit.icon className="w-5 h-5 text-accent-600" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
