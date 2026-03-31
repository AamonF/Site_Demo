"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sprout,
  PenTool,
  Flower2,
  BrickWall,
  CalendarClock,
  Lightbulb,
} from "lucide-react";

const services = [
  {
    title: "Lawn Care",
    blurb: "Fertilization, aeration, and seasonal programs for thick, healthy turf.",
    icon: Sprout,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Landscape Design",
    blurb: "Custom plans that balance color, texture, and flow with your architecture.",
    icon: PenTool,
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Mulching & Planting",
    blurb: "Bed prep, premium mulch, and plantings selected for sun, soil, and scale.",
    icon: Flower2,
    image:
      "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Hardscaping",
    blurb: "Patios, walkways, and retaining walls built for drainage and longevity.",
    icon: BrickWall,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Yard Maintenance",
    blurb: "Recurring visits to keep edges sharp, beds clean, and irrigation tuned.",
    icon: CalendarClock,
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Outdoor Lighting",
    blurb: "Low-voltage accents that highlight paths, trees, and architectural features.",
    icon: Lightbulb,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80&auto=format&fit=crop",
  },
];

export default function LDServices() {
  return (
    <section id="services" className="relative bg-stone-100 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl mb-14 md:mb-16"
        >
          <p className="text-emerald-800 font-semibold text-sm uppercase tracking-[0.12em] mb-3">
            What we do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-4">
            Full-service outdoor care &amp; design
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed">
            Whether you need a one-time refresh or a full property transformation, [Company Name]
            brings crews, equipment, and designers who sweat the details.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group bg-white rounded-2xl border border-stone-200/80 shadow-sm shadow-stone-900/5 overflow-hidden hover:shadow-xl hover:shadow-emerald-950/10 hover:border-emerald-200/60 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={s.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/55 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-emerald-800 shadow-md">
                  <s.icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-stone-900 mb-2">{s.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{s.blurb}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
