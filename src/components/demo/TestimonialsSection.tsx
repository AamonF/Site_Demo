"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import type { BusinessDemo } from "@/lib/demos/types";

interface TestimonialsSectionProps {
  demo: BusinessDemo;
}

export default function TestimonialsSection({ demo }: TestimonialsSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block mb-3 text-blue-600 text-sm font-semibold tracking-wider uppercase">
            Customer Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight text-balance">
            What Charlotte Homeowners Are Saying
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Real experiences from real customers across the Charlotte area.
          </p>
        </motion.div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demo.testimonials.map((t, i) => (
            <motion.article
              key={`${t.name}-${i}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="flex gap-0.5"
                  aria-label={`${t.rating} out of 5 stars`}
                >
                  {[...Array(t.rating)].map((_, s) => (
                    <Star
                      key={s}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-slate-200 flex-shrink-0" />
              </div>

              {/* Review text */}
              <blockquote className="text-sm text-slate-600 leading-relaxed flex-1 mb-5">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div
                  aria-hidden="true"
                  className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-700 font-bold text-sm"
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
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
