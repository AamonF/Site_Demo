"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  Wrench,
  ArrowLeftRight,
  ClipboardList,
  CheckCircle2,
  ArrowRight,
  Thermometer,
  Flame,
  Settings2,
  Home,
  Building2,
} from "lucide-react";
import type { BusinessDemo } from "@/lib/demos/types";

const serviceIcons: Record<string, React.ElementType> = {
  diagnostic: Stethoscope,
  maintenance: Wrench,
  replacement: ArrowLeftRight,
  realestate: ClipboardList,
  "ac-repair": Thermometer,
  "heating-repair": Flame,
  installation: Settings2,
  "residential-agreement": Home,
  "commercial-agreement": Building2,
};

interface ServicesSectionProps {
  demo: BusinessDemo;
}

export default function ServicesSection({ demo }: ServicesSectionProps) {
  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block mb-3 text-blue-600 text-sm font-semibold tracking-wider uppercase">
            Services & Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight text-balance">
            Clear Services. Honest Pricing.
          </h2>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            No guessing, no hidden fees. Here&apos;s exactly what we offer and
            what it costs — so you can make an informed decision before we ever
            show up.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {demo.services.map((service, i) => {
            const Icon = serviceIcons[service.id] ?? Wrench;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative bg-white rounded-2xl border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col ${
                  service.featured
                    ? "border-orange-200 ring-1 ring-orange-200"
                    : "border-slate-100"
                }`}
              >
                {service.featured && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  {/* Icon + price */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-700" />
                    </div>
                    <div className="text-right">
                      <span className="block text-2xl font-extrabold text-slate-900 leading-none">
                        {service.price}
                      </span>
                      {service.priceLabel && (
                        <span className="text-xs text-slate-400 font-medium">
                          {service.priceLabel}
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-6 flex-1" aria-label={`${service.title} benefits`}>
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-sm text-slate-600"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={() => handleScroll("#contact")}
                    className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer ${
                      service.featured
                        ? "bg-orange-500 hover:bg-orange-600 text-white shadow-sm hover:shadow-md"
                        : "bg-blue-700 hover:bg-blue-800 text-white"
                    }`}
                  >
                    {service.cta}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
