"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPinned } from "lucide-react";

import { CITY, CITY_SHORT, COMPANY, IMAGES } from "./constants";

const nearby = [
  "Lake Norman corridor",
  "South Park & Barclay",
  "Myers Park",
  "Dilworth",
  "NoDa & Plaza Midwood",
  "Ballantyne",
];

export default function REServiceArea() {
  return (
    <section id="service-areas" className="py-16 md:py-24 bg-white" aria-labelledby="re-areas-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 order-2 lg:order-1"
          >
            <Image
              src={IMAGES.serviceArea}
              alt={`Neighborhood streets and skyline near ${CITY}`}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/55 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 text-white">
              <MapPinned className="w-6 h-6 text-[#e8d5a3] shrink-0" aria-hidden />
              <p className="text-sm font-medium">
                Local SEO demo — customize neighborhoods for your market.
              </p>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <p className="text-[#9a7b2d] text-xs font-semibold uppercase tracking-[0.22em] mb-3">
              Service area
            </p>
            <h2
              id="re-areas-heading"
              className="font-serif text-3xl sm:text-4xl text-neutral-900 tracking-tight"
            >
              Real estate in {CITY} and nearby communities
            </h2>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              {COMPANY} serves {CITY_SHORT} and surrounding areas with hyper-local insight—schools,
              commute patterns, new development, and resale trends—so you can buy or sell with
              confidence. Whether you are targeting urban walkability, suburban space, or waterfront
              living, we map opportunity to your lifestyle.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {nearby.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-2 text-sm text-neutral-800 rounded-lg bg-[#faf9f7] px-4 py-3 ring-1 ring-neutral-200/80"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c9a962]" aria-hidden />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
