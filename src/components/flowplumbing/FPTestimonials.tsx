"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Karen M.",
    location: "[City], NC",
    rating: 5,
    date: "2 weeks ago",
    text: "Pipe burst at 11pm on a Sunday. They were at my house within 45 minutes. The plumber was professional, explained everything clearly, and had it fixed in under 2 hours. Cannot recommend enough!",
    service: "Emergency Burst Pipe",
    initials: "KM",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    name: "David R.",
    location: "[City], NC",
    rating: 5,
    date: "1 month ago",
    text: "Finally got a plumber who gives upfront pricing without the runaround. My water heater went out and they had a new one installed the same day. Fair price, clean work, no mess left behind.",
    service: "Water Heater Replacement",
    initials: "DR",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    name: "Jennifer L.",
    location: "[City], NC",
    rating: 5,
    date: "3 weeks ago",
    text: "Had a slow drain for months that other plumbers couldn't fix. This crew found a root intrusion in the sewer line with a camera and had it repaired the next morning. Incredible service.",
    service: "Sewer Line Repair",
    initials: "JL",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    name: "Tom B.",
    location: "[City], NC",
    rating: 5,
    date: "5 days ago",
    text: "Hired them for a full bathroom remodel — all fixture installs, drain rough-in, the works. Perfect execution, never had to call them back. These guys are my plumbers for life.",
    service: "Fixture Installation",
    initials: "TB",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    name: "Maria S.",
    location: "[City], NC",
    rating: 5,
    date: "2 months ago",
    text: "I've used a lot of plumbers over the years. This company is different — they actually show up on time, explain what they're doing, and don't try to upsell you on things you don't need.",
    service: "Drain Cleaning",
    initials: "MS",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    name: "Chris H.",
    location: "[City], NC",
    rating: 5,
    date: "1 week ago",
    text: "Quick quote over the phone, showed up within the window they promised, and fixed our leaking main line connection without ripping up half the yard. Extremely impressed.",
    service: "Pipe Leak Repair",
    initials: "CH",
    gradient: "from-cyan-500 to-sky-600",
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

export default function FPTestimonials() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/25 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
            Real Customer Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            What [City]{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
              Homeowners Say
            </span>
          </h2>

          {/* Aggregate rating */}
          <div className="inline-flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-2xl px-6 py-3 mt-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div className="text-left">
              <p className="text-slate-900 font-extrabold text-sm leading-none">4.9 out of 5</p>
              <p className="text-slate-500 text-xs">Based on 500+ reviews</p>
            </div>
          </div>
        </motion.div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <div className="mb-4">
                <Quote className="w-7 h-7 text-sky-200 fill-sky-100" />
              </div>

              {/* Stars + service tag */}
              <div className="flex items-center justify-between mb-3">
                <StarRow count={r.rating} />
                <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full">
                  {r.service}
                </span>
              </div>

              {/* Review text */}
              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">&quot;{r.text}&quot;</p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${r.gradient} flex items-center justify-center text-white text-xs font-extrabold flex-shrink-0`}>
                  {r.initials}
                </div>
                <div>
                  <p className="text-slate-800 font-bold text-sm">{r.name}</p>
                  <p className="text-slate-400 text-xs">{r.location} · {r.date}</p>
                </div>
                <div className="ml-auto">
                  <svg viewBox="0 0 40 14" className="h-4 opacity-40" fill="currentColor">
                    <text x="0" y="11" fontSize="11" fontWeight="bold" className="text-slate-600">Google</text>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
