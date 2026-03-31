"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { BEFORE_AFTER } from "./constants";

export default function MSBeforeAfter() {
  return (
    <section
      id="results"
      aria-labelledby="ms-results-heading"
      className="relative py-20 md:py-28 bg-[#faf8f6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a8897c] mb-3">
            Results
          </p>
          <h2
            id="ms-results-heading"
            className="font-serif text-3xl sm:text-4xl md:text-[2.5rem] text-[#2c2825] leading-tight"
          >
            Before &amp; after gallery
          </h2>
          <p className="mt-4 text-lg text-[#5c534c] leading-relaxed">
            Illustrative outcomes—individual results vary. Your provider will set realistic
            expectations during consultation.
          </p>
        </motion.div>

        <div className="mt-14 md:mt-20 grid sm:grid-cols-2 gap-6 md:gap-8">
          {BEFORE_AFTER.map((pair, i) => (
            <motion.div
              key={pair.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-3xl bg-white p-4 md:p-5 shadow-[0_12px_40px_-20px_rgba(44,40,37,0.12)] ring-1 ring-[#e8dfd8]/90"
            >
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <figure className="relative aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-[#e8dfd8]">
                  <Image
                    src={pair.before}
                    alt={`Before — ${pair.label}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 45vw, 22vw"
                  />
                  <figcaption className="absolute bottom-0 inset-x-0 bg-[#2c2825]/75 text-white text-xs font-semibold uppercase tracking-wider py-2 text-center backdrop-blur-sm">
                    Before
                  </figcaption>
                </figure>
                <figure className="relative aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-[#e8dfd8]">
                  <Image
                    src={pair.after}
                    alt={`After — ${pair.label}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 45vw, 22vw"
                  />
                  <figcaption className="absolute bottom-0 inset-x-0 bg-[#c9a89a]/90 text-[#2c2825] text-xs font-semibold uppercase tracking-wider py-2 text-center backdrop-blur-sm">
                    After
                  </figcaption>
                </figure>
              </div>
              <p className="mt-4 text-center font-medium text-[#2c2825]">{pair.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
