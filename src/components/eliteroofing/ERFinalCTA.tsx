"use client";

import { motion } from "framer-motion";
import { Phone, Calendar, Star, ShieldCheck } from "lucide-react";

const PHONE = "(704) 555-0123";
const PHONE_HREF = "tel:7045550123";

function openModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("openRoofingModal"));
  }
}

const guarantees = [
  { icon: ShieldCheck, text: "Licensed & Insured" },
  { icon: Star, text: "4.9-Star Rated" },
  { icon: Calendar, text: "Same-Week Availability" },
];

export default function ERFinalCTA() {
  return (
    <section
      id="contact"
      className="relative bg-zinc-950 py-20 lg:py-28 overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=1920&q=60&auto=format&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/50 via-zinc-950/80 to-zinc-950" />

      {/* Red top bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="inline-flex items-center gap-2 bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-7">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            Limited Spots Available This Week
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5">
            Schedule Your{" "}
            <span className="text-red-500">Free Roof Inspection</span>
            {" "}Today
          </h2>

          <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Don't wait for a small issue to become a major expense. Our certified team will give you an honest, no-pressure assessment — completely free of charge.
          </p>

          {/* Guarantee badges */}
          <div className="flex flex-wrap items-center justify-center gap-5 mb-10">
            {guarantees.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-zinc-300">
                <Icon className="w-4 h-4 text-red-500 flex-shrink-0" />
                {text}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-extrabold text-lg px-10 py-4.5 rounded-xl shadow-2xl shadow-red-600/35 transition-all duration-200 hover:scale-[1.02] active:scale-100"
            >
              <Calendar className="w-5 h-5" />
              Book Free Inspection
            </button>
            <a
              href={PHONE_HREF}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/8 border border-white/15 text-white font-bold text-lg px-10 py-4.5 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-all duration-200 hover:scale-[1.02]"
            >
              <Phone className="w-5 h-5 text-red-400" />
              {PHONE}
            </a>
          </div>

          <p className="text-zinc-600 text-sm mt-6">
            Mon–Sat 7am–7pm · Emergency line available 24/7
          </p>
        </motion.div>
      </div>
    </section>
  );
}
