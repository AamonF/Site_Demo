"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Heart } from "lucide-react";

import { CITY_SHORT, COMPANY, IMAGES } from "./constants";

export default function MSAbout() {
  return (
    <section
      id="about"
      aria-labelledby="ms-about-heading"
      className="relative py-20 md:py-28 bg-[#f7f3ef]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-h-[520px] rounded-[2rem] overflow-hidden shadow-[0_24px_60px_-24px_rgba(44,40,37,0.22)] ring-1 ring-[#e8dfd8]">
              <Image
                src={IMAGES.about}
                alt="Med spa founder and lead provider portrait"
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 45vw, 100vw"
                priority={false}
              />
            </div>
            <div className="absolute -bottom-5 left-4 md:left-8 flex gap-3">
              <div className="relative h-28 w-24 md:h-32 md:w-28 rounded-2xl overflow-hidden shadow-lg ring-2 ring-white rotate-[-4deg]">
                <Image
                  src={IMAGES.aboutSecondary}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="120px"
                />
              </div>
            </div>
          </motion.div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a8897c] mb-3">
              About
            </p>
            <h2
              id="ms-about-heading"
              className="font-serif text-3xl sm:text-4xl md:text-[2.5rem] text-[#2c2825] leading-tight"
            >
              Led by a provider who prioritizes trust
            </h2>
            <p className="mt-5 text-lg text-[#5c534c] leading-relaxed">
              {COMPANY} was founded on a simple promise: elevated aesthetics should feel calm,
              honest, and deeply personal. Our lead provider combines advanced injectable technique
              with a conservative eye—so results read as refreshed, never artificial.
            </p>
            <p className="mt-4 text-[#5c534c] leading-relaxed">
              Serving clients across {CITY_SHORT} and surrounding communities, we focus on
              education, safety, and a treatment journey you feel confident in—start to finish.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#faf8f6] p-5 ring-1 ring-[#e8dfd8]/90">
                <Award className="w-8 h-8 text-[#a8897c]" aria-hidden />
                <h3 className="mt-3 font-semibold text-[#2c2825]">Board-informed care</h3>
                <p className="mt-1 text-sm text-[#5c534c] leading-relaxed">
                  Ongoing education in facial anatomy and emerging modalities.
                </p>
              </div>
              <div className="rounded-2xl bg-[#f4e8e6]/60 p-5 ring-1 ring-[#e8d5cf]/80">
                <Heart className="w-8 h-8 text-[#8b6f62]" aria-hidden />
                <h3 className="mt-3 font-semibold text-[#2c2825]">Patient-first ethos</h3>
                <p className="mt-1 text-sm text-[#5c534c] leading-relaxed">
                  Clear options, realistic timelines, and compassionate follow-up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
