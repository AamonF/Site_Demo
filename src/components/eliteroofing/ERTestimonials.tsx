"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcus T.",
    location: "Charlotte, NC",
    rating: 5,
    date: "March 2025",
    text: "After the hail storm last spring I was dreading dealing with insurance. [Company Name] handled literally everything — the adjuster meeting, the paperwork, all of it. New roof looks incredible and I paid almost nothing out of pocket.",
    job: "Hail Damage Claim + Full Re-Roof",
  },
  {
    name: "Jennifer W.",
    location: "Concord, NC",
    rating: 5,
    date: "January 2025",
    text: "I got four quotes and [Company Name] wasn't the cheapest, but the project manager explained exactly why and what materials they'd use. Six months in, zero issues. Wish I had just called them first.",
    job: "Full Roof Replacement",
  },
  {
    name: "David & Lisa R.",
    location: "Huntersville, NC",
    rating: 5,
    date: "November 2024",
    text: "Called them at 7am after a tree limb took out part of our roof overnight. By 9am they were tarped and making calls. The speed and professionalism was something else. Our neighbors have already asked for their number.",
    job: "Emergency Storm Repair",
  },
  {
    name: "Carlos M.",
    location: "Kannapolis, NC",
    rating: 5,
    date: "August 2024",
    text: "Running a commercial property, the last thing I need is a roofing crew that leaves me guessing. These guys were on-time, communicated daily, and the flat roof work was cleaner than any contractor I've used. Will use for all my properties.",
    job: "Commercial Flat Roof",
  },
  {
    name: "Patricia H.",
    location: "Mooresville, NC",
    rating: 5,
    date: "May 2024",
    text: "The free inspection turned up issues I had no idea about — missing flashing and three areas of soft decking. They repaired it all in one day at a very fair price. Already told my whole neighborhood.",
    job: "Roof Inspection + Repair",
  },
  {
    name: "Tyler B.",
    location: "Davidson, NC",
    rating: 5,
    date: "February 2024",
    text: "Bought a house that needed a new roof before closing. [Company Name] got it done in two days, communicated with our realtor directly, and it passed inspection with flying colors. Truly a class operation.",
    job: "Pre-Sale Roof Replacement",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ERTestimonials() {
  return (
    <section id="testimonials" className="bg-zinc-950 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-500/25 text-red-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            Real Customers. Real Results.
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            200+ Five-Star Reviews
            <br />
            <span className="text-red-500">and Counting</span>
          </h2>
          {/* Aggregate stars */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-zinc-300 font-bold">4.9</span>
            <span className="text-zinc-500 text-sm">on Google · 200+ reviews</span>
          </div>
        </motion.div>

        {/* Review cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-6 flex flex-col gap-4 group transition-colors duration-300"
            >
              {/* Stars + quote icon */}
              <div className="flex items-start justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-zinc-700 group-hover:text-red-700/60 transition-colors flex-shrink-0" />
              </div>

              {/* Review text */}
              <p className="text-zinc-300 text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Job tag */}
              <div className="inline-flex items-center">
                <span className="bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-semibold px-3 py-1 rounded-full">
                  {t.job}
                </span>
              </div>

              {/* Reviewer */}
              <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-zinc-500 text-xs">{t.location}</p>
                </div>
                <span className="text-zinc-600 text-xs">{t.date}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
