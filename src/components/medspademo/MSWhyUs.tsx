"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { IMAGES } from "./constants";

const points = [
  {
    title: "Personalized treatment plans",
    text: "Your goals, timeline, and comfort guide every recommendation—never one-size-fits-all.",
  },
  {
    title: "Experienced professionals",
    text: "Advanced training in facial anatomy and aesthetic medicine with a safety-first mindset.",
  },
  {
    title: "Natural-looking results",
    text: "Refinement that reads as rested and radiant—never overdone.",
  },
  {
    title: "Comfortable luxury experience",
    text: "Soft lighting, private suites, and unhurried appointments from arrival to aftercare.",
  },
] as const;

export default function MSWhyUs() {
  return (
    <section
      aria-labelledby="ms-why-heading"
      className="relative py-20 md:py-28 bg-[#f7f3ef] overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[min(50%,480px)] h-full bg-gradient-to-l from-[#f4e8e6]/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] max-h-[560px] rounded-[2rem] overflow-hidden shadow-[0_24px_60px_-24px_rgba(44,40,37,0.25)] ring-1 ring-[#e8dfd8]">
              <Image
                src={IMAGES.whyUs}
                alt="Calm med spa lounge with soft lighting"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c2825]/35 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 md:right-8 w-[min(100%,280px)] rounded-2xl bg-white/95 backdrop-blur-md p-5 shadow-xl ring-1 ring-[#e8dfd8]/80">
              <p className="font-serif text-lg text-[#2c2825]">Quiet confidence starts here.</p>
              <p className="mt-1 text-sm text-[#5c534c]">Welcoming, discreet, and detail-led.</p>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a8897c] mb-3"
            >
              Why choose our med spa
            </motion.p>
            <h2
              id="ms-why-heading"
              className="font-serif text-3xl sm:text-4xl md:text-[2.5rem] text-[#2c2825] leading-tight"
            >
              Aesthetic care with intention
            </h2>
            <p className="mt-4 text-lg text-[#5c534c] leading-relaxed">
              We believe the best outcomes feel effortless—balanced features, luminous skin, and a
              sense of ease in your own reflection.
            </p>

            <ul className="mt-10 space-y-6">
              {points.map((item, i) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  className="flex gap-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f4e8e6] text-[#8b6f62] ring-1 ring-[#e8d5cf]">
                    <Check className="w-5 h-5" strokeWidth={2.2} aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-semibold text-[#2c2825] text-lg">{item.title}</h3>
                    <p className="mt-1 text-[#5c534c] leading-relaxed">{item.text}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
