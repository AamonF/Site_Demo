"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, Clock, Hammer, Receipt } from "lucide-react";

import { IMAGES } from "./constants";

const points = [
  {
    icon: Clock,
    title: "Fast response",
    body: "We prioritize urgent calls and keep you updated from dispatch to arrival.",
  },
  {
    icon: Receipt,
    title: "Upfront pricing",
    body: "Clear estimates before work begins—no surprise fees when the job is done.",
  },
  {
    icon: Hammer,
    title: "Skilled technicians",
    body: "Experienced pros who respect your home and get the repair right the first time.",
  },
  {
    icon: BadgeCheck,
    title: "Warranty-backed work",
    body: "Quality parts and workmanship backed by strong manufacturer and labor coverage.",
  },
];

export default function HVDWhyUs() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden" aria-labelledby="hvd-why-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/15 ring-1 ring-slate-200">
              <Image
                src={IMAGES.whyUs}
                alt="Comfortable modern living space with natural light"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-900/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:right-4 w-[min(100%,280px)] rounded-xl border border-slate-200 bg-white p-4 shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">Local team</p>
              <p className="mt-1 text-sm text-slate-700 leading-snug">
                Serving neighbors with the same care we&apos;d want for our own homes.
              </p>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <p className="text-sky-600 font-semibold text-sm uppercase tracking-[0.18em]">
              Why choose us
            </p>
            <h2
              id="hvd-why-heading"
              className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight"
            >
              Comfort you can feel—service you can trust
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              We combine technical expertise with honest recommendations, so you always know what
              your system needs and why.
            </p>
            <ul className="mt-10 space-y-6">
              {points.map(({ icon: Icon, title, body }, i) => (
                <motion.li
                  key={title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                    <Icon className="w-5 h-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                    <p className="mt-1 text-slate-600 leading-relaxed">{body}</p>
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
