"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/accarolinas/data";

export default function ACCTestimonials() {
  return (
    <section className="bg-zinc-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-amber-500 rounded-full" />
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-widest">Customer Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              What Our Customers Say
            </h2>
          </div>
          <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-white font-semibold text-sm">5.0</span>
            <span className="text-zinc-500 text-xs">· Google Reviews</span>
          </div>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-xl p-6 flex flex-col transition-colors group"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <Quote className="w-5 h-5 text-zinc-700 group-hover:text-zinc-600 transition-colors" />
              </div>

              {/* Text */}
              <p className="text-zinc-300 text-sm leading-relaxed flex-1 mb-5">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Bottom row */}
              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-zinc-500 text-xs mt-0.5">{t.location}</p>
                </div>
                <span className="text-[10px] bg-zinc-800 text-zinc-400 px-2.5 py-1 rounded-full border border-zinc-700">
                  {t.service}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
