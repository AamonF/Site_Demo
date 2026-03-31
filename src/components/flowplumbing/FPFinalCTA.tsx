"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, AlertTriangle, ArrowRight, Droplets } from "lucide-react";
import FPLeadModal from "./FPLeadModal";

const PHONE = "(704) 555-0123";
const PHONE_HREF = "tel:+17045550123";

export default function FPFinalCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        {/* Layered background */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-blue-50 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(ellipse at 70% 50%, rgba(14,165,233,0.07) 0%, transparent 60%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Icon */}
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-sky-500/30">
              <Droplets className="w-9 h-9 text-white" strokeWidth={2} />
            </div>

            <span className="inline-block bg-sky-100 text-sky-700 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5">
              Don&apos;t Wait
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-5 leading-tight">
              Get Plumbing Help{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                Right Now
              </span>
            </h2>

            <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10">
              Every hour a plumbing problem goes unfixed, the damage grows. Our team is standing by — licensed, insured, and ready to respond in [City] within 60 minutes.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <button
                onClick={() => setModalOpen(true)}
                className="group inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-2xl font-extrabold text-base shadow-xl shadow-sky-600/30 hover:shadow-sky-600/45 transition-all duration-200 hover:-translate-y-0.5"
              >
                Book Service Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-2xl font-extrabold text-base shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                <AlertTriangle className="w-4 h-4" strokeWidth={2.5} />
                Emergency: {PHONE}
              </a>
            </div>

            {/* Micro trust row */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {[
                "✓ Licensed & Insured",
                "✓ Upfront Pricing",
                "✓ 60-Min Response",
                "✓ Work Guaranteed",
                "✓ 24/7 Emergency",
              ].map((item) => (
                <span key={item} className="text-slate-500 text-sm font-medium">{item}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <FPLeadModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
