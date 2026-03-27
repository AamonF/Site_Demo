"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Jennifer L.",
    city: "[City], NC",
    rating: 5,
    text: "My AC went out on the hottest day of the year. I called at 8am and they were at my house by noon. Fixed it fast, explained everything, and the price was exactly what they quoted. Absolute lifesavers!",
    initials: "JL",
    gradient: "from-blue-500 to-blue-700",
    date: "August 2024",
  },
  {
    name: "Marcus R.",
    city: "Concord, NC",
    rating: 5,
    text: "I've used three different HVAC companies in [City] over the years. [Company Name] is the only one I trust now. Upfront pricing, showed up exactly when they said, and the tech was incredibly knowledgeable.",
    initials: "MR",
    gradient: "from-slate-600 to-slate-800",
    date: "June 2024",
  },
  {
    name: "Karen T.",
    city: "[City], NC",
    rating: 5,
    text: "Our furnace died in January. They came out same day and had it running by evening. The tech walked us through every step and helped us understand our options without any pressure. 10/10.",
    initials: "KT",
    gradient: "from-blue-600 to-cyan-700",
    date: "January 2024",
  },
  {
    name: "Steve E.",
    city: "Gastonia, NC",
    rating: 5,
    text: "Signed up for their maintenance plan and it was the best decision I made. They caught a refrigerant issue before it became a full breakdown. Saved me probably $2,000 in repairs.",
    initials: "SE",
    gradient: "from-emerald-600 to-teal-700",
    date: "March 2024",
  },
  {
    name: "Diane M.",
    city: "[City], NC",
    rating: 5,
    text: "Professional, efficient, and genuinely nice people. They replaced my entire system and the new unit is whisper quiet. My energy bill dropped $80 the very first month.",
    initials: "DM",
    gradient: "from-violet-600 to-purple-700",
    date: "May 2024",
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  );
}

export default function CHTestimonials() {
  return (
    <section id="reviews" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-widest mb-3 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Real Homeowners
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Don&apos;t Take Our Word For It
          </h2>
          <p className="text-slate-500 mt-3 text-base">
            Over 312 five-star reviews from homeowners across [City] and surrounding areas.
          </p>

          {/* Aggregate rating */}
          <div className="flex items-center justify-center gap-3 mt-5 bg-white border border-slate-200 rounded-2xl px-6 py-3 w-fit mx-auto shadow-sm">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="font-bold text-slate-900 text-lg">4.9</span>
            <span className="text-slate-400 text-sm">/ 312 reviews</span>
          </div>
        </motion.div>

        {/* Reviews grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map(({ name, city, rating, text, initials, gradient, date }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              {/* Quote icon */}
              <Quote className="w-5 h-5 text-blue-200 mb-3" />

              {/* Stars */}
              <StarRow count={rating} />

              {/* Text */}
              <p className="text-slate-600 text-sm leading-relaxed mt-3 mb-5">
                &ldquo;{text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-xs font-bold text-white flex-shrink-0`}>
                  {initials}
                </div>
                <div>
                  <p className="text-slate-900 font-semibold text-sm">{name}</p>
                  <p className="text-slate-400 text-xs">{city} · {date}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100">
                    Verified
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA under reviews */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-10"
        >
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-colors shadow-lg shadow-blue-600/20"
          >
            Join 300+ Happy Customers →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
