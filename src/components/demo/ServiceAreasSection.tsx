"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import type { BusinessDemo } from "@/lib/demos/types";

interface ServiceAreasSectionProps {
  demo: BusinessDemo;
}

export default function ServiceAreasSection({ demo }: ServiceAreasSectionProps) {
  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="service-areas" className="py-20 lg:py-28 bg-white">
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
            Service Areas
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight text-balance">
            HVAC Service Across the Charlotte Region
          </h2>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            We serve Charlotte and the surrounding communities — with local
            knowledge, quick scheduling, and licensed technicians ready to help.
          </p>
        </motion.div>

        {/* Area cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {demo.serviceAreas.map((area, i) => (
            <motion.article
              key={area.city}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center transition-colors flex-shrink-0">
                  <MapPin className="w-4 h-4 text-blue-700" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{area.city}</h3>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                {area.description}
              </p>
              <button
                onClick={() => handleScroll("#contact")}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-800 group/btn transition-colors cursor-pointer"
              >
                Schedule in {area.city}
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
              </button>
            </motion.article>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center text-sm text-slate-400"
        >
          Don&apos;t see your city?{" "}
          <a
            href={demo.phoneHref}
            className="text-blue-600 font-semibold hover:underline"
          >
            Call us
          </a>{" "}
          — we may still be able to help.
        </motion.p>
      </div>
    </section>
  );
}
