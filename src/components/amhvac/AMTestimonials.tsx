"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { BusinessDemo } from "@/lib/demos/types";

interface AMTestimonialsProps {
  demo: BusinessDemo;
}

export default function AMTestimonials({ demo }: AMTestimonialsProps) {
  return (
    <section className="py-20 lg:py-28 bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block mb-3 text-xs font-bold text-emerald-500 tracking-widest uppercase">
            Customer Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight text-balance">
            What Charlotte Homeowners Are Saying
          </h2>
          <p className="mt-4 text-lg text-stone-400">
            Real feedback from real customers across the Charlotte area.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {demo.testimonials.map((t, i) => (
            <motion.article
              key={`${t.name}-${i}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white/5 border border-white/8 rounded-2xl p-6 flex flex-col hover:bg-white/8 transition-colors"
            >
              {/* Stars */}
              <div
                className="flex gap-0.5 mb-4"
                aria-label={`${t.rating} out of 5 stars`}
              >
                {[...Array(t.rating)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review */}
              <blockquote className="text-sm text-stone-300 leading-relaxed flex-1 mb-5">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                <div
                  aria-hidden="true"
                  className="w-9 h-9 rounded-full bg-emerald-900 border border-emerald-700 flex items-center justify-center flex-shrink-0 text-emerald-400 font-black text-sm"
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-xs text-stone-500">{t.location}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
