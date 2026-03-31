"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BarChart3, Handshake, Megaphone, Users } from "lucide-react";

import { CITY_SHORT, IMAGES } from "./constants";

const props = [
  {
    icon: Users,
    title: "Deep local market knowledge",
    body: `Pricing trends, school districts, and neighborhood character across ${CITY_SHORT}—so every decision is informed.`,
  },
  {
    icon: Handshake,
    title: "Skilled negotiation",
    body: "We advocate fiercely for your goals with clear communication and contract expertise from offer to close.",
  },
  {
    icon: Megaphone,
    title: "Marketing that gets results",
    body: "Cinematic media, targeted digital campaigns, and private-network exposure for standout listings.",
  },
  {
    icon: BarChart3,
    title: "Personalized buying & selling guidance",
    body: "A concierge experience—timeline, financing introductions, staging, and strategy tailored to you.",
  },
];

export default function REWhyUs() {
  return (
    <section className="py-16 md:py-24 bg-[#faf9f7]" aria-labelledby="re-why-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <Image
                src={IMAGES.whyUs}
                alt="Elegant living space with designer furnishings"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:right-0 max-w-xs rounded-xl bg-white p-5 shadow-xl ring-1 ring-neutral-200/80">
              <p className="font-serif text-lg text-neutral-900">White-glove service</p>
              <p className="mt-1 text-sm text-neutral-600">
                From first tour to keys—strategy, discretion, and follow-through.
              </p>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <p className="text-[#9a7b2d] text-xs font-semibold uppercase tracking-[0.22em] mb-3">
              Why work with us
            </p>
            <h2
              id="re-why-heading"
              className="font-serif text-3xl sm:text-4xl text-neutral-900 tracking-tight"
            >
              Elevated representation in {CITY_SHORT}
            </h2>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              We combine data, relationships, and presentation—so buyers find the right home and
              sellers maximize value without compromise.
            </p>
            <ul className="mt-10 space-y-8">
              {props.map((item, i) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex gap-4"
                >
                  <div className="shrink-0 h-12 w-12 rounded-xl bg-neutral-900 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#e8d5a3]" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 text-lg">{item.title}</h3>
                    <p className="mt-1.5 text-neutral-600 text-sm leading-relaxed">{item.body}</p>
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
