"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

import { IMAGES, MAIL_HREF, PHONE, PHONE_HREF } from "./constants";

export default function HVDFinalCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="hvd-cta-heading"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={IMAGES.cta}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-sky-950/85 to-slate-900/90" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <h2
            id="hvd-cta-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Need HVAC service today?
          </h2>
          <p className="mt-5 text-lg text-slate-200 leading-relaxed">
            Schedule your free estimate or speak with our team—we&apos;re ready when you are.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={MAIL_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-sky-900/40 hover:bg-sky-400 transition-colors"
            >
              Get Free Estimate
              <ArrowRight className="w-4 h-4" aria-hidden />
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-md hover:bg-white/15 transition-colors"
            >
              <Phone className="w-4 h-4" aria-hidden />
              Call {PHONE}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
