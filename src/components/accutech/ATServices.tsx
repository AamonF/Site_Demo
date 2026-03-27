"use client";

import { motion } from "framer-motion";
import {
  Thermometer,
  Flame,
  Settings2,
  Wrench,
  Home,
  Building2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import type { BusinessDemo } from "@/lib/demos/types";

const serviceIcons: Record<string, React.ElementType> = {
  "ac-repair": Thermometer,
  "heating-repair": Flame,
  installation: Settings2,
  maintenance: Wrench,
  "residential-agreement": Home,
  "commercial-agreement": Building2,
};

interface ATServicesProps {
  demo: BusinessDemo;
}

export default function ATServices({ demo }: ATServicesProps) {
  const scroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
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
          className="mb-12 max-w-2xl"
        >
          <span className="inline-block mb-3 text-xs font-bold text-teal-600 tracking-widest uppercase">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Heating, Cooling &amp; Service Agreements<br />
            for Charlotte Homes &amp; Businesses
          </h2>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            Full-service HVAC from a local Charlotte team — repairs, installation, ongoing
            maintenance, and residential or commercial service agreements.
          </p>
        </motion.div>

        {/* 3-col card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {demo.services.map((service, i) => {
            const Icon = serviceIcons[service.id] ?? Wrench;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className={`relative bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col group ${
                  service.featured ? "border-teal-200 ring-1 ring-teal-200" : ""
                }`}
              >
                {/* Top accent bar */}
                <div
                  className={`h-1 w-full ${
                    service.featured ? "bg-teal-500" : "bg-slate-100 group-hover:bg-teal-100"
                  } transition-colors duration-300`}
                />

                {service.featured && (
                  <div className="absolute top-1 right-0">
                    <div className="bg-teal-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl tracking-wider uppercase">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  {/* Icon + price */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div
                      className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        service.featured
                          ? "bg-teal-50 border border-teal-100"
                          : "bg-slate-50 border border-slate-100"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          service.featured ? "text-teal-600" : "text-slate-500"
                        }`}
                      />
                    </div>
                    <div className="text-right">
                      <span className="block text-lg font-extrabold text-slate-900 leading-none">
                        {service.price}
                      </span>
                      {service.priceLabel && (
                        <span className="text-[11px] text-slate-400 font-medium">
                          {service.priceLabel}
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <ul
                    className="space-y-2 mb-6 flex-1"
                    aria-label={`${service.title} details`}
                  >
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <CheckCircle2
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            service.featured ? "text-teal-500" : "text-slate-300"
                          }`}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => scroll("#contact")}
                    className={`inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full font-bold text-sm transition-all duration-200 cursor-pointer ${
                      service.featured
                        ? "bg-teal-600 hover:bg-teal-700 text-white shadow-sm"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
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
