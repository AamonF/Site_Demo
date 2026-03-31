"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { IMAGES } from "./constants";

const services = [
  {
    title: "Botox",
    desc: "Softening expression lines for a refreshed, rested appearance.",
    image: IMAGES.treatments.botox,
  },
  {
    title: "Dermal Fillers",
    desc: "Subtle volume and contouring tailored to your facial balance.",
    image: IMAGES.treatments.fillers,
  },
  {
    title: "Skin Rejuvenation",
    desc: "Brightening, texture, and glow with medical-grade protocols.",
    image: IMAGES.treatments.rejuvenation,
  },
  {
    title: "Laser Treatments",
    desc: "Precision resurfacing and tone correction with minimal downtime.",
    image: IMAGES.treatments.laser,
  },
  {
    title: "Facial Aesthetics",
    desc: "Holistic facial harmony—structure, proportion, and skin quality.",
    image: IMAGES.treatments.facial,
  },
  {
    title: "Body Contouring",
    desc: "Sculpting support for confidence in silhouette and skin tightness.",
    image: IMAGES.treatments.body,
  },
] as const;

const fade = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

export default function MSTreatments() {
  return (
    <section
      id="treatments"
      aria-labelledby="ms-treatments-heading"
      className="relative py-20 md:py-28 bg-[#faf8f6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fade} className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a8897c] mb-3">
            Signature services
          </p>
          <h2
            id="ms-treatments-heading"
            className="font-serif text-3xl sm:text-4xl md:text-[2.5rem] text-[#2c2825] leading-tight"
          >
            Treatments designed for refined, natural results
          </h2>
          <p className="mt-4 text-lg text-[#5c534c] leading-relaxed">
            From injectables to advanced skin and body modalities—every plan is curated to your
            goals, anatomy, and lifestyle.
          </p>
        </motion.div>

        <div className="mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-3xl bg-white shadow-[0_12px_40px_-20px_rgba(44,40,37,0.15)] ring-1 ring-[#e8dfd8]/80 overflow-hidden hover:shadow-[0_20px_50px_-18px_rgba(44,40,37,0.2)] transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c2825]/45 via-transparent to-transparent" />
              </div>
              <div className="p-6 md:p-7">
                <h3 className="font-serif text-xl md:text-2xl text-[#2c2825]">{item.title}</h3>
                <p className="mt-2 text-[#5c534c] text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex text-sm font-semibold text-[#8b6f62] hover:text-[#2c2825] transition-colors"
                >
                  Request details →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
