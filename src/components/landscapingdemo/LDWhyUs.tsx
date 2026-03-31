"use client";

import { motion } from "framer-motion";
import { Hammer, Clock, Palette, Focus } from "lucide-react";

const points = [
  {
    title: "Quality craftsmanship",
    copy: "Stone set true, beds edged clean, and plantings spaced with intention — not rushed.",
    icon: Hammer,
  },
  {
    title: "Reliable scheduling",
    copy: "Clear arrival windows and proactive updates so your week stays predictable.",
    icon: Clock,
  },
  {
    title: "Beautiful custom work",
    copy: "Designs tailored to your architecture, neighborhood, and how you actually use the yard.",
    icon: Palette,
  },
  {
    title: "Attention to detail",
    copy: "Drainage, soil health, and long-term growth planned in — not patched over later.",
    icon: Focus,
  },
];

export default function LDWhyUs() {
  return (
    <section className="relative bg-emerald-950 text-white py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_30%_20%,#fff_0,transparent_50%),radial-gradient(circle_at_80%_60%,#34d399_0,transparent_45%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl mb-14"
        >
          <p className="text-emerald-300/90 font-semibold text-sm uppercase tracking-[0.12em] mb-3">
            Why homeowners choose us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Built like a landscape should be — solid, thoughtful, and on-brand for your home
          </h2>
          <p className="text-emerald-100/85 text-lg leading-relaxed">
            [Company Name] is a referral-driven team: most of our work comes from neighbors who
            noticed the difference on the next street over.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="rounded-2xl border border-emerald-800/80 bg-emerald-900/40 p-6 md:p-8 backdrop-blur-sm hover:border-emerald-600/50 transition-colors"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-800/80 text-emerald-100 mb-4">
                <p.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-emerald-100/80 leading-relaxed">{p.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
