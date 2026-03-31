"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import { IMAGES, TESTIMONIAL_FACES } from "./constants";

const reviews = [
  {
    quote:
      "I finally feel like myself again—just brighter. The team never rushed me, and the results look beautifully natural.",
    name: "Alexandra M.",
    detail: "Skin rejuvenation",
  },
  {
    quote:
      "From consultation to follow-up, everything felt private and premium. My confidence in photos is night and day.",
    name: "Jordan L.",
    detail: "Injectables",
  },
  {
    quote:
      "They listened to what I wanted and helped me build a plan I could afford. Honest, skilled, and kind.",
    name: "Priya S.",
    detail: "Laser & facials",
  },
] as const;

export default function MSTestimonials() {
  return (
    <section
      id="reviews"
      aria-labelledby="ms-reviews-heading"
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
        <div className="absolute inset-0 bg-[#f7f3ef]/88 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f6]/40 via-transparent to-[#f4e8e6]/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a8897c] mb-3">
            Reviews
          </p>
          <h2
            id="ms-reviews-heading"
            className="font-serif text-3xl sm:text-4xl md:text-[2.5rem] text-[#2c2825] leading-tight"
          >
            Confidence our clients can feel
          </h2>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((r, i) => (
            <motion.blockquote
              key={r.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative rounded-3xl bg-white/90 backdrop-blur-md p-7 md:p-8 shadow-[0_16px_50px_-28px_rgba(44,40,37,0.18)] ring-1 ring-[#e8dfd8]/90"
            >
              <Quote
                className="absolute top-6 right-6 w-10 h-10 text-[#f4e8e6]"
                aria-hidden
                strokeWidth={1.25}
              />
              <div className="flex items-center gap-3 mb-5">
                <div className="relative h-12 w-12 rounded-full overflow-hidden ring-2 ring-[#e8dfd8] shadow-sm">
                  <Image
                    src={TESTIMONIAL_FACES[i]}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <cite className="not-italic font-semibold text-[#2c2825]">{r.name}</cite>
                  <p className="text-sm text-[#8b7e74]">{r.detail}</p>
                </div>
              </div>
              <p className="text-[#5c534c] leading-relaxed relative z-10">&ldquo;{r.quote}&rdquo;</p>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
