"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Search } from "lucide-react";

import { CITY_SHORT, IMAGES } from "./constants";

export default function RESearchSection() {
  return (
    <section
      className="relative py-16 md:py-24 bg-[#faf9f7]"
      aria-labelledby="re-search-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <h2
              id="re-search-heading"
              className="font-serif text-3xl sm:text-4xl text-neutral-900 tracking-tight"
            >
              Search homes in {CITY_SHORT}
            </h2>
            <p className="mt-4 text-neutral-600 leading-relaxed max-w-lg">
              Explore active listings with filters tailored to how you shop—location, price, beds,
              baths, and property type.
            </p>
            <div className="relative mt-8 w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <Image
                src={IMAGES.searchAccent}
                alt="Modern luxury home exterior with landscaping"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900/20 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-2xl bg-white p-6 sm:p-8 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.12)] ring-1 ring-neutral-200/80"
          >
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="re-loc" className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9a7b2d]" />
                  <input
                    id="re-loc"
                    type="text"
                    placeholder={`${CITY_SHORT}, NC or neighborhood`}
                    className="w-full rounded-lg border border-neutral-200 bg-neutral-50/80 pl-10 pr-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#c9a962]/40 focus:border-[#c9a962]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="re-price" className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                    Price range
                  </label>
                  <select
                    id="re-price"
                    className="w-full rounded-lg border border-neutral-200 bg-neutral-50/80 px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#c9a962]/40"
                    defaultValue=""
                  >
                    <option value="">Any price</option>
                    <option value="1">Under $500k</option>
                    <option value="2">$500k – $1M</option>
                    <option value="3">$1M – $2M</option>
                    <option value="4">$2M+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="re-type" className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                    Property type
                  </label>
                  <select
                    id="re-type"
                    className="w-full rounded-lg border border-neutral-200 bg-neutral-50/80 px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#c9a962]/40"
                    defaultValue=""
                  >
                    <option value="">All types</option>
                    <option value="sf">Single family</option>
                    <option value="th">Townhome</option>
                    <option value="condo">Condo</option>
                    <option value="land">Land</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="re-beds" className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                    Beds
                  </label>
                  <select
                    id="re-beds"
                    className="w-full rounded-lg border border-neutral-200 bg-neutral-50/80 px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#c9a962]/40"
                    defaultValue=""
                  >
                    <option value="">Any</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                    <option value="5">5+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="re-baths" className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                    Baths
                  </label>
                  <select
                    id="re-baths"
                    className="w-full rounded-lg border border-neutral-200 bg-neutral-50/80 px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#c9a962]/40"
                    defaultValue=""
                  >
                    <option value="">Any</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-900 px-5 py-3.5 text-sm font-semibold text-white hover:bg-neutral-800 transition-colors shadow-sm"
              >
                <Search className="w-4 h-4" aria-hidden />
                Search Homes
              </button>
              <p className="text-xs text-neutral-500 text-center">
                Demo search — connect your MLS feed for live results.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
