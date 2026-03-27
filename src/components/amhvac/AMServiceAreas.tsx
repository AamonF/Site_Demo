"use client";

import { motion } from "framer-motion";
import { MapPin, ChevronRight } from "lucide-react";
import type { BusinessDemo } from "@/lib/demos/types";

interface AMServiceAreasProps {
  demo: BusinessDemo;
}

export default function AMServiceAreas({ demo }: AMServiceAreasProps) {
  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="service-areas" className="py-20 lg:py-28 bg-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block mb-3 text-xs font-bold text-emerald-400 tracking-widest uppercase">
            Service Areas
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight text-balance">
            Serving Charlotte and the Surrounding Region
          </h2>
          <p className="mt-4 text-lg text-emerald-200/70 leading-relaxed">
            Local HVAC service with quick scheduling across the greater Charlotte metro area.
          </p>
        </motion.div>

        {/* City pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {demo.serviceAreas.map((area, i) => (
            <motion.button
              key={area.city}
              onClick={() => handleScroll("#contact")}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer ${
                area.city === "Charlotte"
                  ? "bg-emerald-600 border-emerald-500 text-white shadow-sm"
                  : "bg-white/5 border-white/10 text-emerald-200 hover:bg-emerald-800/50 hover:border-emerald-600"
              }`}
            >
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              {area.city}
            </motion.button>
          ))}
        </motion.div>

        {/* Area detail cards — show first 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {demo.serviceAreas.slice(0, 4).map((area, i) => (
            <motion.article
              key={area.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 transition-colors"
            >
              <h3 className="text-base font-black text-white mb-2">{area.city}</h3>
              <p className="text-sm text-emerald-200/60 leading-relaxed mb-3 line-clamp-3">
                {area.description}
              </p>
              <button
                onClick={() => handleScroll("#contact")}
                className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
              >
                Schedule here
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm text-emerald-300/60"
        >
          Don&apos;t see your city?{" "}
          <a href={demo.phoneHref} className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors">
            Call us
          </a>{" "}
          — we may still be able to help.
        </motion.p>
      </div>
    </section>
  );
}
