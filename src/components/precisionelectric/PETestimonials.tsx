"use client";

import { motion } from "framer-motion";
import { Star, Quote, MessageSquare } from "lucide-react";

interface Props {
  city: string;
}

const REVIEWS = [
  {
    name: "Mike T.",
    location: "Homeowner",
    initials: "MT",
    rating: 5,
    date: "2 weeks ago",
    review:
      "Called them for a panel upgrade and they couldn't have been more professional. Showed up on time, explained everything before touching anything, and finished the job cleaner than they found it. Finally an electrician I trust.",
    service: "Panel Upgrade",
  },
  {
    name: "Sandra L.",
    location: "Property Manager",
    initials: "SL",
    rating: 5,
    date: "1 month ago",
    review:
      "I manage several rental properties and these are the only electricians I call. They're fast, honest, and their pricing never has surprises. Had them install EV chargers at two of my properties — flawless work.",
    service: "EV Charger Installation",
  },
  {
    name: "James R.",
    location: "Business Owner",
    initials: "JR",
    rating: 5,
    date: "3 weeks ago",
    review:
      "Called at 9pm for a tripped breaker that wouldn't reset in our restaurant — they were there in under an hour. Fixed the issue, found two other potential problems while they were there, and saved us from a bigger headache. Worth every penny.",
    service: "Emergency Service",
  },
  {
    name: "Amy C.",
    location: "Homeowner",
    initials: "AC",
    rating: 5,
    date: "5 weeks ago",
    review:
      "We had flickering lights for months before we finally called. Turns out it was a loose connection in the panel — a real fire hazard. They found it immediately, fixed it same day, and the price was fair. Genuinely relieved we called.",
    service: "Troubleshooting",
  },
];

export default function PETestimonials({ city }: Props) {
  return (
    <section id="testimonials" className="bg-zinc-900 py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-yellow-400/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            <MessageSquare className="w-3.5 h-3.5" />
            Real Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5">
            What {city} Homeowners{" "}
            <span className="text-yellow-400">Are Saying</span>
          </h2>

          {/* Aggregate rating */}
          <div className="inline-flex items-center gap-3 bg-zinc-800/60 border border-zinc-700 rounded-full px-6 py-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white font-black text-base">4.9</span>
            <span className="text-zinc-400 text-sm">·</span>
            <span className="text-zinc-400 text-sm">50+ Google Reviews</span>
          </div>
        </motion.div>

        {/* Review grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-zinc-800/50 border border-zinc-700/60 hover:border-zinc-600 rounded-2xl p-6 relative group transition-colors"
            >
              {/* Quote icon */}
              <div className="absolute top-5 right-5 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-8 h-8 text-yellow-400 fill-yellow-400" />
              </div>

              {/* Stars + date */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-zinc-500 text-xs">{review.date}</span>
              </div>

              {/* Review text */}
              <p className="text-zinc-300 text-sm leading-relaxed mb-5">&quot;{review.review}&quot;</p>

              {/* Reviewer info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-yellow-400/15 border border-yellow-400/25 flex items-center justify-center text-yellow-400 font-black text-sm flex-shrink-0">
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm leading-none mb-0.5">{review.name}</p>
                    <p className="text-zinc-500 text-xs">{review.location}</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold bg-zinc-700/60 text-zinc-400 px-2.5 py-1 rounded-full">
                  {review.service}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-zinc-500 text-sm">
            Reviews verified on{" "}
            <span className="text-zinc-300 font-semibold">Google Business Profile</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
