"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import type { BusinessDemo } from "@/lib/demos/types";

interface ATServiceAreasProps {
  demo: BusinessDemo;
}

export default function ATServiceAreas({ demo }: ATServiceAreasProps) {
  const scroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="service-areas" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block mb-3 text-xs font-bold text-teal-600 tracking-widest uppercase">
            Service Areas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight text-balance">
            HVAC Service Across Charlotte &amp; Surrounding Areas
          </h2>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            Residential and commercial HVAC service throughout the greater Charlotte metro.
          </p>
        </motion.div>

        {/* City pill grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2.5 mb-12"
        >
          {demo.serviceAreas.map((area, i) => (
            <motion.button
              key={area.city}
              onClick={() => scroll("#contact")}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer ${
                area.city === "Charlotte"
                  ? "bg-teal-600 border-teal-600 text-white shadow-sm shadow-teal-200"
                  : "bg-white border-slate-200 text-slate-700 hover:border-teal-300 hover:text-teal-700 hover:bg-teal-50"
              }`}
            >
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              {area.city}
            </motion.button>
          ))}
        </motion.div>

        {/* Detail cards — 2-col on md */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {demo.serviceAreas.map((area, i) => (
            <motion.article
              key={area.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-white border border-slate-200 rounded-xl p-5 hover:border-teal-200 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-md bg-teal-50 border border-teal-100 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-100 transition-colors">
                  <MapPin className="w-3.5 h-3.5 text-teal-600" />
                </div>
                <h3 className="text-sm font-extrabold text-slate-900">{area.city}</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed mb-3 line-clamp-3">
                {area.description}
              </p>
              <button
                onClick={() => scroll("#contact")}
                className="inline-flex items-center gap-1 text-xs font-bold text-teal-600 hover:text-teal-700 transition-colors cursor-pointer"
              >
                Schedule service
                <ArrowRight className="w-3 h-3" />
              </button>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm text-slate-400"
        >
          Don&apos;t see your city?{" "}
          <a
            href={demo.phoneHref}
            className="font-semibold text-teal-600 hover:text-teal-700 transition-colors"
          >
            Call us at {demo.phone}
          </a>{" "}
          — we may still be able to help.
        </motion.p>
      </div>
    </section>
  );
}
