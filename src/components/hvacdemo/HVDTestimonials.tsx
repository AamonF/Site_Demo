"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import { CITY_SHORT, IMAGES, TESTIMONIAL_FACES } from "./constants";

const reviews = [
  {
    name: "Marcus T.",
    area: "North [City]",
    text: "AC died in July—they were here same day, explained the repair vs replace options clearly, and the house was cool again by evening. Professional crew.",
  },
  {
    name: "Jennifer L.",
    area: "Near [City]",
    text: "Upfront pricing with no surprises. Technician wore shoe covers, cleaned up perfectly, and our new furnace runs quieter than we imagined.",
  },
  {
    name: "David & Amy R.",
    area: "[City] area",
    text: "We use their maintenance plan yearly. Reminders are helpful, techs are thorough, and we haven’t had an emergency breakdown since signing up.",
  },
  {
    name: "Sandra K.",
    area: "East [City]",
    text: "Honest assessment when another company quoted a full replacement. Fixed the real issue for a fraction of the price. Lifelong customer.",
  },
  {
    name: "Chris P.",
    area: "South [City]",
    text: "Financing made a new system doable. Install team was fast, tidy, and walked us through the thermostat setup. Five stars.",
  },
] as const;

export default function HVDTestimonials() {
  return (
    <section
      id="reviews"
      aria-labelledby="hvd-reviews-heading"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={IMAGES.testimonialBg}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-950/88 backdrop-blur-[2px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sky-400 font-semibold text-sm uppercase tracking-[0.18em]">
            Reviews
          </p>
          <h2
            id="hvd-reviews-heading"
            className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Trusted by homeowners across {CITY_SHORT}
          </h2>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            Real feedback from neighbors who count on us for heating, cooling, and honest advice.
          </p>
        </div>

        <ul className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">
          {reviews.map((r, i) => (
            <motion.li
              key={r.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <article className="h-full flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:bg-white/[0.07] transition-colors">
                <Quote className="w-8 h-8 text-sky-500/80 mb-3" aria-hidden />
                <div className="flex gap-0.5 mb-3" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden />
                  ))}
                </div>
                <p className="text-slate-200 leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3 pt-4 border-t border-white/10">
                  <Image
                    src={TESTIMONIAL_FACES[i % TESTIMONIAL_FACES.length]}
                    alt=""
                    width={44}
                    height={44}
                    className="rounded-full ring-2 ring-sky-500/30 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-white">{r.name}</p>
                    <p className="text-xs text-slate-400">{r.area}</p>
                  </div>
                </div>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
