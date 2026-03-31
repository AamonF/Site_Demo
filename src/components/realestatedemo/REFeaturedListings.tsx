"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Bath, Bed, Maximize } from "lucide-react";

import { CITY_SHORT, IMAGES } from "./constants";

const listings = [
  {
    price: "$1,875,000",
    beds: 5,
    baths: 4,
    sqft: "4,280",
    address: "1240 Providence Rd",
    city: `${CITY_SHORT}, NC`,
    image: IMAGES.listings[0],
  },
  {
    price: "$925,000",
    beds: 4,
    baths: 3,
    sqft: "3,050",
    address: "88 Sterling Oaks Ln",
    city: `${CITY_SHORT}, NC`,
    image: IMAGES.listings[1],
  },
  {
    price: "$2,450,000",
    beds: 6,
    baths: 5,
    sqft: "5,100",
    address: "21 Summit View Dr",
    city: `${CITY_SHORT}, NC`,
    image: IMAGES.listings[2],
  },
  {
    price: "$675,000",
    beds: 3,
    baths: 2,
    sqft: "2,180",
    address: "404 Elmwood Ave",
    city: `${CITY_SHORT}, NC`,
    image: IMAGES.listings[3],
  },
  {
    price: "$1,195,000",
    beds: 4,
    baths: 3,
    sqft: "3,420",
    address: "715 Harbor Pointe Way",
    city: `${CITY_SHORT}, NC`,
    image: IMAGES.listings[4],
  },
  {
    price: "$3,200,000",
    beds: 5,
    baths: 5,
    sqft: "6,200",
    address: "2 Lakeshore Ct",
    city: `${CITY_SHORT}, NC`,
    image: IMAGES.listings[5],
  },
];

export default function REFeaturedListings() {
  return (
    <section
      id="listings"
      className="py-16 md:py-24 bg-white"
      aria-labelledby="re-listings-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-14">
          <div>
            <p className="text-[#9a7b2d] text-xs font-semibold uppercase tracking-[0.22em] mb-3">
              Featured
            </p>
            <h2
              id="re-listings-heading"
              className="font-serif text-3xl sm:text-4xl text-neutral-900 tracking-tight"
            >
              Homes for sale in {CITY_SHORT}
            </h2>
            <p className="mt-4 text-neutral-600 max-w-2xl leading-relaxed">
              Hand-selected listings showcasing architecture, light, and location—preview luxury
              homes available across {CITY_SHORT} and surrounding communities.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 border-b border-[#c9a962] pb-0.5 hover:text-[#6b5420] transition-colors self-start"
          >
            Request a private tour
            <ArrowUpRight className="w-4 h-4" aria-hidden />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {listings.map((home, i) => (
            <motion.article
              key={home.address}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group rounded-2xl overflow-hidden bg-[#faf9f7] ring-1 ring-neutral-200/90 shadow-sm hover:shadow-xl hover:ring-neutral-300/80 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={home.image}
                  alt={`${home.address}, ${home.city}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-80" />
                <p className="absolute bottom-3 left-4 right-4 text-white font-serif text-xl sm:text-2xl tracking-tight">
                  {home.price}
                </p>
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-sm text-neutral-500">
                  {home.address}
                  <br />
                  <span className="text-neutral-700">{home.city}</span>
                </p>
                <ul className="mt-4 flex flex-wrap gap-4 text-sm text-neutral-700">
                  <li className="inline-flex items-center gap-1.5">
                    <Bed className="w-4 h-4 text-[#9a7b2d]" aria-hidden />
                    {home.beds} beds
                  </li>
                  <li className="inline-flex items-center gap-1.5">
                    <Bath className="w-4 h-4 text-[#9a7b2d]" aria-hidden />
                    {home.baths} baths
                  </li>
                  <li className="inline-flex items-center gap-1.5">
                    <Maximize className="w-4 h-4 text-[#9a7b2d]" aria-hidden />
                    {home.sqft} sqft
                  </li>
                </ul>
                <a
                  href="#contact"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-neutral-900 py-3 text-sm font-semibold text-white hover:bg-neutral-800 transition-colors"
                >
                  View Property
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
