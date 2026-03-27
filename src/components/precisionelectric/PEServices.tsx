"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Cable,
  Lightbulb,
  Car,
  Wrench,
  Building2,
  ChevronRight,
} from "lucide-react";

const SERVICES = [
  {
    icon: Zap,
    title: "Panel Upgrades",
    badge: "Most Requested",
    description:
      "Outdated panels cause tripped breakers, flickering lights, and fire hazards. We upgrade to modern, safe panels rated for today's electrical demands.",
    benefit: "Prevent fires + handle modern loads",
  },
  {
    icon: Cable,
    title: "Wiring & Rewiring",
    badge: null,
    description:
      "From full-home rewires to new circuits and outlet additions, we run clean, code-compliant wiring that lasts decades — not years.",
    benefit: "Safe, durable, code-approved",
  },
  {
    icon: Lightbulb,
    title: "Lighting Installation",
    badge: null,
    description:
      "Recessed lighting, ceiling fans, dimmer switches, and smart lighting systems installed beautifully and safely. Transform any room.",
    benefit: "Perfect lighting, every time",
  },
  {
    icon: Car,
    title: "EV Charger Installation",
    badge: "High Demand",
    description:
      "Level 2 home EV chargers installed safely with proper load assessment, dedicated circuits, and permit pulls when required.",
    benefit: "Charge faster, drive smarter",
  },
  {
    icon: Wrench,
    title: "Troubleshooting",
    badge: null,
    description:
      "Flickering lights, dead outlets, tripping breakers — we diagnose fast and fix right. No guesswork. Accurate diagnosis saves you money.",
    benefit: "Root cause fixed, not patched",
  },
  {
    icon: Building2,
    title: "Commercial Electrical",
    badge: null,
    description:
      "Tenant build-outs, office wiring, lighting upgrades, and code compliance work for small businesses, retail, and commercial properties.",
    benefit: "Minimize downtime, stay compliant",
  },
];

interface Props {
  onOpenModal: () => void;
}

export default function PEServices({ onOpenModal }: Props) {
  return (
    <section id="services" className="bg-zinc-950 py-20 md:py-28 relative overflow-hidden">
      {/* Top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            <Zap className="w-3.5 h-3.5" />
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5">
            Electrical Services Built Around{" "}
            <span className="text-yellow-400">Your Safety</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Every service we offer is performed by licensed electricians who take safety and
            quality as seriously as you do.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative bg-zinc-900/60 border border-zinc-800 hover:border-yellow-400/30 rounded-2xl p-6 transition-all duration-300 hover:bg-zinc-900/90 hover:-translate-y-0.5"
            >
              {/* Badge */}
              {service.badge && (
                <span className="absolute top-4 right-4 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                  {service.badge}
                </span>
              )}

              {/* Icon */}
              <div className="w-12 h-12 bg-zinc-800 group-hover:bg-yellow-400/10 border border-zinc-700 group-hover:border-yellow-400/30 rounded-xl flex items-center justify-center mb-4 transition-all duration-300">
                <service.icon className="w-6 h-6 text-zinc-400 group-hover:text-yellow-400 transition-colors duration-300" />
              </div>

              <h3 className="font-black text-white text-lg mb-2">{service.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">{service.description}</p>

              {/* Benefit tag */}
              <div className="flex items-center gap-1.5 text-yellow-400/80 text-xs font-semibold">
                <div className="w-1 h-1 rounded-full bg-yellow-400 flex-shrink-0" />
                {service.benefit}
              </div>

              {/* Hover arrow */}
              <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0">
                <ChevronRight className="w-4 h-4 text-yellow-400" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-zinc-400 mb-4">
            Not sure what you need?{" "}
            <span className="text-zinc-200 font-semibold">We&apos;ll diagnose it for free.</span>
          </p>
          <button
            onClick={onOpenModal}
            className="group inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-black px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-yellow-400/15 hover:shadow-yellow-400/30 hover:-translate-y-0.5"
          >
            Schedule a Free Estimate
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
