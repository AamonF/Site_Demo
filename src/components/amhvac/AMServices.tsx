"use client";

import { motion } from "framer-motion";
import {
  Thermometer,
  Wind,
  Sun,
  Snowflake,
  ClipboardList,
  Wrench,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import type { BusinessDemo } from "@/lib/demos/types";

const serviceIcons: Record<string, React.ElementType> = {
  "cooling-diagnostic": Thermometer,
  "heating-diagnostic": Wind,
  "summer-tuneup": Sun,
  "winter-tuneup": Snowflake,
  "maintenance-plan": ClipboardList,
  "general-service": Wrench,
};

interface AMServicesProps {
  demo: BusinessDemo;
}

export default function AMServices({ demo }: AMServicesProps) {
  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <span className="inline-block mb-3 text-xs font-bold text-emerald-700 tracking-widest uppercase">
            Services & Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 leading-tight text-balance">
            Straightforward Services.<br />
            <span className="text-emerald-700">Prices You Can See Up Front.</span>
          </h2>
          <p className="mt-4 text-lg text-stone-500 leading-relaxed">
            No guessing, no hidden fees. Here&apos;s exactly what we offer and what it costs — so you can make an informed decision.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {demo.services.map((service, i) => {
            const Icon = serviceIcons[service.id] ?? Wrench;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={`relative bg-white rounded-2xl border overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg ${
                  service.featured
                    ? "border-emerald-300 shadow-md ring-1 ring-emerald-200"
                    : "border-stone-200 shadow-sm hover:border-emerald-200"
                }`}
              >
                {/* Left accent bar */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl ${
                    service.featured ? "bg-emerald-600" : "bg-stone-200"
                  }`}
                />

                {service.featured && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="pl-7 pr-6 sm:pr-7 pt-6 pb-6 flex flex-col flex-1">
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          service.featured ? "bg-emerald-100" : "bg-stone-100"
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 ${service.featured ? "text-emerald-700" : "text-stone-600"}`}
                        />
                      </div>
                      <h3 className="text-base font-black text-stone-900 leading-tight">
                        {service.title}
                      </h3>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="block text-xl font-black text-stone-900 leading-none">
                        {service.price}
                      </span>
                      {service.priceLabel && (
                        <span className="text-xs text-stone-400 font-medium">
                          {service.priceLabel}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-stone-500 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-5 flex-1" aria-label={`${service.title} details`}>
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-sm text-stone-600">
                        <CheckCircle2
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            service.featured ? "text-emerald-600" : "text-stone-400"
                          }`}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={() => handleScroll("#contact")}
                    className={`inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                      service.featured
                        ? "bg-emerald-700 hover:bg-emerald-800 text-white shadow-sm"
                        : "bg-stone-100 hover:bg-stone-200 text-stone-800"
                    }`}
                  >
                    {service.cta}
                    <ChevronRight className="w-4 h-4" />
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
