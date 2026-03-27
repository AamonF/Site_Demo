"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { BusinessDemo } from "@/lib/demos/types";

interface ATTestimonialsProps {
  demo: BusinessDemo;
}

export default function ATTestimonials({ demo }: ATTestimonialsProps) {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block mb-3 text-xs font-bold text-teal-600 tracking-widest uppercase">
            Customer Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight text-balance">
            What Charlotte Customers Say About Accu-Tech
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Real feedback from local homeowners and commercial clients.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {demo.testimonials.map((t, i) => (
            <motion.article
              key={`${t.name}-${i}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col hover:shadow-md hover:border-teal-100 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Large decorative quote mark */}
              <span
                aria-hidden="true"
                className="absolute top-4 right-5 text-7xl font-black text-teal-50 leading-none select-none group-hover:text-teal-100 transition-colors"
              >
                &ldquo;
              </span>

              {/* Stars */}
              <div
                className="flex gap-0.5 mb-4"
                aria-label={`${t.rating} out of 5 stars`}
              >
                {[...Array(t.rating)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-rose-500 text-rose-500" />
                ))}
              </div>

              {/* Review text */}
              <blockquote className="relative text-sm text-slate-600 leading-relaxed flex-1 mb-5 z-10">
                {t.text}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div
                  aria-hidden="true"
                  className="w-9 h-9 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0 text-white font-extrabold text-sm"
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-extrabold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.location}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
