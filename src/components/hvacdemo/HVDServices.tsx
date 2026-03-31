"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { CITY_SHORT, IMAGES } from "./constants";

const services = [
  {
    title: "AC Repair",
    desc: "Fast diagnostics and lasting repairs for every make and model.",
    img: IMAGES.services.acRepair,
  },
  {
    title: "AC Installation",
    desc: "Right-sized systems, clean installs, and energy-smart options.",
    img: IMAGES.services.acInstall,
  },
  {
    title: "Heating Repair",
    desc: "Restore warm, even heat when you need it most—winter-ready service.",
    img: IMAGES.services.heatingRepair,
  },
  {
    title: "Furnace Replacement",
    desc: "High-efficiency upgrades with clear options and professional setup.",
    img: IMAGES.services.furnace,
  },
  {
    title: "Maintenance Plans",
    desc: "Tune-ups that extend system life and help prevent costly surprises.",
    img: IMAGES.services.maintenance,
  },
  {
    title: "Indoor Air Quality",
    desc: "Filtration, humidity, and ventilation solutions for healthier air.",
    img: IMAGES.services.airQuality,
  },
] as const;

export default function HVDServices() {
  return (
    <section
      id="services"
      aria-labelledby="hvd-services-heading"
      className="py-20 md:py-28 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sky-600 font-semibold text-sm uppercase tracking-[0.18em]">
            What we do
          </p>
          <h2 id="hvd-services-heading" className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Full-service HVAC for {CITY_SHORT} homes
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            From emergency repairs to planned replacements, we deliver comfort with clear communication
            and workmanship you can count on.
          </p>
        </div>

        <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 list-none p-0 m-0">
          {services.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group"
            >
              <article className="h-full flex flex-col rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-900/5 transition-shadow duration-300 ring-1 ring-transparent hover:ring-sky-100">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={s.img}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                    <h3 className="text-lg font-bold text-white drop-shadow-sm">{s.title}</h3>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-sky-600 shadow-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" aria-hidden />
                    </span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <p className="text-slate-600 text-sm leading-relaxed flex-1">{s.desc}</p>
                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 hover:text-sky-700"
                  >
                    Request service
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden />
                  </a>
                </div>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
