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
    <section className="py-20 lg:py-28 bg-white border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What you get"
          title="Built to perform—not just look good"
          subtitle="Every demo is aimed at one outcome: more calls and booked jobs from the same traffic."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-zinc-50/50 border border-zinc-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-accent-200/60 hover:bg-white transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-white border border-zinc-100 group-hover:border-accent-100 flex items-center justify-center mb-4 transition-colors shadow-sm">
                <benefit.icon className="w-5 h-5 text-accent-600" />
              </div>
              <h3 className="text-base font-bold text-zinc-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
