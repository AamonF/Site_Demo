"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { PHONE, PHONE_HREF } from "./constants";

const BG =
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=85&auto=format&fit=crop";

function openModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("openLandscapingModal"));
  }
}

export default function LDFinalCTA() {
  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <Image src={BG} alt="" fill className="object-cover" sizes="100vw" priority={false} />
        <div className="absolute inset-0 bg-emerald-950/88" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-950/85 to-emerald-900/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
            Upgrade Your Property&apos;s Curb Appeal
          </h2>
          <p className="text-lg text-emerald-100/90 mb-8 leading-relaxed">
            Ready for a lawn that photographs well and a layout that works for real life? Request a
            quote or call [Company Name] — we&apos;ll walk the property with you and map next steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              type="button"
              onClick={openModal}
              className="group inline-flex items-center justify-center gap-2 bg-white text-emerald-950 font-bold text-base px-7 py-3.5 rounded-xl shadow-xl hover:bg-emerald-50 transition-all"
            >
              Get Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 border border-white/35 bg-white/10 hover:bg-white/15 text-white font-semibold text-base px-7 py-3.5 rounded-xl backdrop-blur-sm transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
          <p className="mt-6 text-sm text-emerald-200/80">
            Call <span className="font-semibold text-white">{PHONE}</span> · Typical response same day
          </p>
        </motion.div>
      </div>
    </section>
  );
}
