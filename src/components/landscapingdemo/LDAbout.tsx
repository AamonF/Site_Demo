"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Users } from "lucide-react";
import { CITY } from "./constants";

const CREW_IMG =
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=85&auto=format&fit=crop";

export default function LDAbout() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-emerald-950/15 border border-stone-200">
              <Image
                src={CREW_IMG}
                alt="Landscaping crew maintaining a residential property"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none" />
            </div>
            <div className="absolute -bottom-5 -right-2 sm:right-4 bg-emerald-900 text-white px-5 py-4 rounded-xl shadow-xl max-w-[240px]">
              <div className="flex items-center gap-2 text-sm font-semibold text-emerald-100">
                <Users className="w-4 h-4" />
                In-house crews
              </div>
              <p className="text-xs text-emerald-200/90 mt-1 leading-snug">
                Designers and field teams under one roof — no mystery subcontractors on your driveway.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <p className="text-emerald-800 font-semibold text-sm uppercase tracking-[0.12em] mb-3">
              About [Company Name]
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-5">
              Outdoor spaces are personal — we treat them that way
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-5">
              Founded in {CITY}, we started as a small maintenance crew and grew into a full design-build
              studio because neighbors kept asking who &quot;did that yard.&quot; Today we still show up
              with the same pride: sharp edges, healthy soil, and finishes that look as good up close as
              they do from the curb.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              Whether we&apos;re refreshing a townhome courtyard or orchestrating a full estate plan, our
              process stays grounded — listen first, design with context, and build so it lasts through
              Carolina heat, storms, and growth seasons.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="inline-flex items-center gap-2 rounded-xl border border-stone-200 bg-stone-50 px-4 py-3">
                <Award className="w-5 h-5 text-amber-600" />
                <span className="text-sm font-semibold text-stone-800">15+ years serving the region</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
