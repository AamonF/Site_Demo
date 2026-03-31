"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { IMAGES, MAIL_HREF, PHONE, PHONE_HREF } from "./constants";

export default function MSFinalCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="ms-final-cta-heading"
      className="relative py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] min-h-[420px] md:min-h-[460px] flex items-center">
          <Image
            src={IMAGES.cta}
            alt=""
            fill
            className="object-cover object-center"
            sizes="(min-width: 1280px) 1200px, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2c2825]/92 via-[#2c2825]/75 to-[#2c2825]/45" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(244,232,230,0.15),transparent_55%)]" />

          <div className="relative z-10 px-8 py-12 md:px-14 md:py-16 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2
                id="ms-final-cta-heading"
                className="font-serif text-3xl sm:text-4xl md:text-[2.75rem] text-[#faf8f6] leading-tight"
              >
                Feel More Confident in Your Skin
              </h2>
              <p className="mt-4 text-lg text-[#e8dfd8]/95 leading-relaxed">
                Schedule a private consultation and discover a treatment plan tailored to you.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#faf8f6] px-7 py-3.5 text-base font-semibold text-[#2c2825] shadow-lg hover:bg-white transition-colors"
                >
                  Call {PHONE}
                </a>
                <a
                  href={MAIL_HREF}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-md hover:bg-white/15 transition-colors"
                >
                  Book Consultation
                  <ArrowRight className="w-4 h-4" aria-hidden />
                </a>
              </div>
              <p className="mt-6 text-sm text-[#e8dfd8]/80">
                Prefer email?{" "}
                <a
                  href="mailto:hello@companyname.com"
                  className="underline underline-offset-2 hover:text-white transition-colors"
                >
                  hello@companyname.com
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
