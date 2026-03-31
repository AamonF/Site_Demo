"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import { CITY_SHORT, IMAGES, TESTIMONIAL_FACES } from "./constants";

const reviews = [
  {
    quote:
      "They priced our home perfectly and the marketing was cinematic. We had strong offers within days.",
    name: "Chris & Sam P.",
    detail: "Sellers · " + CITY_SHORT,
    face: TESTIMONIAL_FACES[0],
  },
  {
    quote:
      "Patient, strategic, and always available. We found a home we love in a neighborhood we did not think we could afford.",
    name: "Taylor M.",
    detail: "Buyer · " + CITY_SHORT,
    face: TESTIMONIAL_FACES[1],
  },
  {
    quote:
      "Negotiation was flawless—clear advice at every step. Closing felt calm instead of chaotic.",
    name: "Priya K.",
    detail: "Buyer & seller · nearby community",
    face: TESTIMONIAL_FACES[2],
  },
  {
    quote:
      "White-glove service from staging introductions to final walkthrough. Our net exceeded expectations.",
    name: "Daniel R.",
    detail: "Seller · " + CITY_SHORT,
    face: TESTIMONIAL_FACES[3],
  },
];

export default function RETestimonials() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden" aria-labelledby="re-testimonials-heading">
      <div className="absolute inset-0">
        <Image
          src={IMAGES.testimonialBg}
          alt=""
          fill
          className="object-cover opacity-[0.22]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#faf9f7]/95" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[#9a7b2d] text-xs font-semibold uppercase tracking-[0.22em] mb-3">
            Client stories
          </p>
          <h2
            id="re-testimonials-heading"
            className="font-serif text-3xl sm:text-4xl text-neutral-900 tracking-tight"
          >
            Trusted by buyers and sellers in {CITY_SHORT}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {reviews.map((r, i) => (
            <motion.blockquote
              key={r.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="relative rounded-2xl bg-white p-8 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.12)] ring-1 ring-neutral-200/90"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#c9a962]/25" aria-hidden />
              <p className="text-neutral-700 leading-relaxed relative z-[1]">&ldquo;{r.quote}&rdquo;</p>
              <footer className="mt-8 flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden ring-2 ring-[#faf9f7] shrink-0">
                  <Image src={r.face} alt="" fill className="object-cover" sizes="48px" />
                </div>
                <div>
                  <cite className="not-italic font-semibold text-neutral-900">{r.name}</cite>
                  <p className="text-sm text-neutral-500">{r.detail}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
