"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Calendar } from "lucide-react";

export default function ACFinalCTA() {
  return (
    <section className="py-14 lg:py-20 bg-blue-900 relative overflow-hidden" aria-label="Call to action">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-800/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-950/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-4">
            Ready to Get Started?
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
            Get Your HVAC System Back on Track Today
          </h2>
          <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto mb-7">
            Whether you need an emergency repair, a seasonal tune-up, or a brand new
            system — our team is ready to help. Fast, friendly, and always honest.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/air-central-carolinas/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-900 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            >
              <Calendar className="w-5 h-5" />
              Schedule Service
            </Link>
            <a
              href="tel:+17045550190"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white border border-blue-600/50 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              Call (704) 555-0190
            </a>
          </div>
          <p className="text-blue-400 text-sm mt-6">
            Same-day service available · Licensed &amp; insured · Serving NC homeowners
          </p>
        </motion.div>
      </div>
    </section>
  );
}
