"use client";

import { motion } from "framer-motion";
import { Hammer, RefreshCcw, CloudLightning, Search, Building2, Wrench, ArrowRight } from "lucide-react";

function openModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("openRoofingModal"));
  }
}

const services = [
  {
    icon: Hammer,
    title: "Roof Repair",
    desc: "From missing shingles to persistent leaks, we diagnose and fix every type of roof damage with precision.",
    highlight: true,
  },
  {
    icon: RefreshCcw,
    title: "Roof Replacement",
    desc: "Full tear-off and re-roof using premium materials. We work with all major shingle brands and standing seam metal.",
    highlight: false,
  },
  {
    icon: CloudLightning,
    title: "Storm Damage Repair",
    desc: "Hail, wind, and fallen trees don't stand a chance. We respond fast and work with your insurance company.",
    highlight: false,
  },
  {
    icon: Search,
    title: "Roof Inspections",
    desc: "Comprehensive inspections for homebuyers, sellers, or anyone who just wants peace of mind. 100% free.",
    highlight: false,
  },
  {
    icon: Building2,
    title: "Commercial Roofing",
    desc: "Flat roofs, TPO, EPDM, and modified bitumen for businesses and multi-family properties across [City].",
    highlight: false,
  },
  {
    icon: Wrench,
    title: "Gutters & Flashing",
    desc: "Gutter installation, repair, and flashing replacement to keep water moving away from your home.",
    highlight: false,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ERServices() {
  return (
    <section id="services" className="bg-zinc-900 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-500/25 text-red-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Complete Roofing Services
            <br />
            <span className="text-red-500">Under One Roof</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            From emergency repairs to full replacements, [Company Name] handles it all — residential and commercial — across [City] and beyond.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12"
        >
          {services.map(({ icon: Icon, title, desc, highlight }) => (
            <motion.div
              key={title}
              variants={item}
              className={`group relative rounded-2xl p-7 border transition-all duration-300 cursor-pointer overflow-hidden ${
                highlight
                  ? "bg-red-600 border-red-500 shadow-xl shadow-red-600/25"
                  : "bg-zinc-950 border-zinc-800 hover:border-zinc-600"
              }`}
              onClick={openModal}
            >
              {/* Subtle top-right corner decoration */}
              <div
                className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10 ${
                  highlight ? "bg-white" : "bg-red-600"
                } group-hover:opacity-20 transition-opacity`}
              />

              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors ${
                  highlight
                    ? "bg-white/20"
                    : "bg-red-600/10 border border-red-500/20 group-hover:bg-red-600/20"
                }`}
              >
                <Icon
                  className={`w-6 h-6 ${highlight ? "text-white" : "text-red-500"}`}
                />
              </div>

              <h3
                className={`font-extrabold text-xl mb-3 ${
                  highlight ? "text-white" : "text-white"
                }`}
              >
                {title}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-5 ${
                  highlight ? "text-red-100" : "text-zinc-400"
                }`}
              >
                {desc}
              </p>

              <div
                className={`inline-flex items-center gap-1.5 text-sm font-bold group-hover:gap-2.5 transition-all ${
                  highlight ? "text-white" : "text-red-500"
                }`}
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-zinc-500 text-sm mb-4">
            Don't see your specific need? We handle it all.
          </p>
          <button
            onClick={openModal}
            className="inline-flex items-center gap-2 border border-red-500/50 hover:border-red-500 text-red-400 hover:text-red-300 font-bold px-7 py-3 rounded-xl transition-all duration-200 text-sm"
          >
            Talk to a Roofing Expert
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
