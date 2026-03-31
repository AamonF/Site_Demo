"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { CITY, COMPANY, IMAGES } from "./constants";

export default function HVDAbout() {
  return (
    <section
      id="about"
      aria-labelledby="hvd-about-heading"
      className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_30%,rgba(56,189,248,0.2),transparent_50%)]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
                <Image
                  src={IMAGES.about}
                  alt="HVAC technician at work"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 22vw, 45vw"
                />
              </div>
              <div className="flex flex-col gap-3 sm:gap-4 mt-8">
                <div className="relative aspect-square rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-xl">
                  <Image
                    src={IMAGES.aboutSecondary}
                    alt="Comfortable residential interior"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 22vw, 45vw"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-xl">
                  <Image
                    src={IMAGES.gallery[0]}
                    alt="Modern home HVAC environment"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 22vw, 45vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            <p className="text-sky-400 font-semibold text-sm uppercase tracking-[0.18em]">
              About {COMPANY}
            </p>
            <h2 id="hvd-about-heading" className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Built on service, reliability, and genuine care
            </h2>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              We started with a simple promise: show up on time, explain every option clearly, and
              treat your home like our own. Today, that same mindset drives every heating and cooling
              job we take in {CITY} and surrounding communities.
            </p>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Whether it&apos;s a midnight no-heat call or a planned system upgrade, our team brings
              professional equipment, meticulous workmanship, and respect for your schedule and space.
            </p>
            <dl className="mt-10 grid sm:grid-cols-3 gap-6 border-t border-white/10 pt-10">
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-500">Experience</dt>
                <dd className="mt-1 text-2xl font-bold text-white">15+ yrs</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-500">Homes served</dt>
                <dd className="mt-1 text-2xl font-bold text-white">10k+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-500">Response</dt>
                <dd className="mt-1 text-2xl font-bold text-white">Same-day</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
