"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function openModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("openRoofingModal"));
  }
}

const projects = [
  {
    src: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=800&q=80&auto=format&fit=crop",
    label: "Roof Replacement",
    sub: "Charlotte, NC",
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop",
    label: "Storm Damage Repair",
    sub: "Concord, NC",
  },
  {
    src: "https://images.unsplash.com/photo-1591588582259-e675bd2e6088?w=800&q=80&auto=format&fit=crop",
    label: "New Construction",
    sub: "Mooresville, NC",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop",
    label: "Full Re-Roof",
    sub: "Huntersville, NC",
  },
  {
    src: "https://images.unsplash.com/photo-1613048945474-3ea1ee4b21a4?w=800&q=80&auto=format&fit=crop",
    label: "Shingle Replacement",
    sub: "Kannapolis, NC",
  },
  {
    src: "https://images.unsplash.com/photo-1575362901073-1d3c28e9a8e3?w=800&q=80&auto=format&fit=crop",
    label: "Commercial Roofing",
    sub: "Gastonia, NC",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.97 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.45 } },
};

export default function ERGallery() {
  return (
    <section id="projects" className="bg-zinc-950 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10"
        >
          <div>
            <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-500/25 text-red-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              Our Work
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Recent Projects
              <br />
              <span className="text-red-500">Across [City] Area</span>
            </h2>
          </div>
          <button
            onClick={openModal}
            className="inline-flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-white border border-zinc-700 hover:border-zinc-500 px-5 py-2.5 rounded-lg transition-all duration-200 whitespace-nowrap"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Image grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
              onClick={openModal}
            >
              {/* Image */}
              <img
                src={p.src}
                alt={p.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Red accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-extrabold text-base">{p.label}</p>
                <p className="text-zinc-400 text-xs font-medium">{p.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "1,200+", label: "Roofs Completed" },
            { value: "15+", label: "Years in Business" },
            { value: "200+", label: "5-Star Reviews" },
            { value: "100%", label: "Satisfaction Rate" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-red-500 mb-1">{value}</div>
              <div className="text-zinc-400 text-sm font-medium">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
