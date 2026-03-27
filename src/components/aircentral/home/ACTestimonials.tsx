"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jennifer M.",
    location: "Charlotte, NC",
    rating: 5,
    text: "Air Central was at my house within 3 hours of my call. My AC had stopped working on one of the hottest days of the year and they fixed it quickly. The technician was professional and explained everything. Highly recommend!",
    initials: "JM",
  },
  {
    name: "David R.",
    location: "Concord, NC",
    rating: 5,
    text: "I've been using Air Central for two years now and they always deliver. Their maintenance plan has saved me from two major issues already. Honest pricing, reliable team, and they always show up on time.",
    initials: "DR",
  },
  {
    name: "Sarah K.",
    location: "Gastonia, NC",
    rating: 5,
    text: "We needed a full system replacement and Air Central made it easy. They explained all our options without any pressure, helped us find a unit that fit our budget, and had it installed the next day. Couldn't be happier.",
    initials: "SK",
  },
  {
    name: "Tom L.",
    location: "Mooresville, NC",
    rating: 5,
    text: "These guys are the real deal. Fixed a weird noise my heat pump had been making for months — something two other companies couldn't figure out. Fair price, great communication. They've earned a customer for life.",
    initials: "TL",
  },
  {
    name: "Angela P.",
    location: "Rock Hill, SC",
    rating: 5,
    text: "Signed up for their annual maintenance plan and it's been worth every penny. My system is running more efficiently and my energy bill actually went down. The team is always friendly and respectful in my home.",
    initials: "AP",
  },
  {
    name: "Marcus W.",
    location: "Kannapolis, NC",
    rating: 5,
    text: "Called them on a Sunday because our heat stopped working. They answered immediately and had someone out within the hour. Incredible service when you really need it. This is the only HVAC company I'll ever call.",
    initials: "MW",
  },
];

export default function ACTestimonials() {
  return (
    <section className="py-12 lg:py-16 bg-slate-50" aria-label="Customer testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            What Our Customers Say
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Real Homeowners. Real Results.
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">
            Don&apos;t just take our word for it. Here&apos;s what our customers across North Carolina have to say.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <Quote className="w-7 h-7 text-blue-100 mb-4" />
              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-slate-50 pt-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-sky-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-slate-900 font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.location}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
