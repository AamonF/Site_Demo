"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    quote:
      "Our front beds went from embarrassing to magazine-worthy. The crew was quiet, fast, and left the driveway cleaner than they found it.",
    name: "Sarah M.",
    role: "Homeowner · [City]",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80&auto=format&fit=crop",
  },
  {
    quote:
      "They designed a patio and lighting plan that actually matches our home. Scheduling was painless — rare for contractors.",
    name: "David R.",
    role: "Homeowner · Lake Norman area",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&q=80&auto=format&fit=crop",
  },
  {
    quote:
      "We use them for monthly maintenance and a seasonal color refresh. Lawn stripes never get old.",
    name: "Priya K.",
    role: "Homeowner · [City]",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&q=80&auto=format&fit=crop",
  },
];

export default function LDTestimonials() {
  return (
    <section id="reviews" className="relative bg-stone-100 py-20 md:py-28 overflow-hidden">
      <div className="absolute top-0 right-0 w-[min(100%,480px)] h-64 bg-gradient-to-bl from-emerald-200/30 to-transparent rounded-bl-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-emerald-800 font-semibold text-sm uppercase tracking-[0.12em] mb-3">
            Reviews
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-4">
            Loved by homeowners across the area
          </h2>
          <p className="text-stone-600 text-lg">
            Real feedback from projects in and around [City], NC.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm hover:shadow-lg hover:shadow-emerald-950/5 transition-shadow flex flex-col"
            >
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-emerald-200 mb-3" />
              <blockquote className="text-stone-700 leading-relaxed flex-1 mb-6">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3 pt-4 border-t border-stone-100">
                <div className="relative h-12 w-12 rounded-full overflow-hidden ring-2 ring-emerald-100 shrink-0">
                  <Image src={r.image} alt="" fill className="object-cover" sizes="48px" />
                </div>
                <div>
                  <cite className="not-italic font-bold text-stone-900 text-sm block">{r.name}</cite>
                  <span className="text-stone-500 text-xs">{r.role}</span>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
