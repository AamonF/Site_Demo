"use client";

import { motion } from "framer-motion";
import { PhoneCall, Search, Wrench, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Call or Request Online",
    desc: "Call us or submit a quick form. We respond within 60 minutes during business hours — often much faster.",
    color: "bg-blue-600",
    lightColor: "bg-blue-50 text-blue-600",
  },
  {
    number: "02",
    icon: Search,
    title: "Diagnose the Issue",
    desc: "Our certified tech arrives on time, performs a thorough inspection, and explains exactly what's wrong — in plain English.",
    color: "bg-blue-700",
    lightColor: "bg-blue-50 text-blue-700",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Fix It Same Day",
    desc: "We carry a fully-stocked service van so most repairs are completed on the first visit. Fast, clean, done right.",
    color: "bg-blue-800",
    lightColor: "bg-blue-50 text-blue-800",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "You're Comfortable Again",
    desc: "We test everything, clean up, and leave you with a warm (or cool) home and a satisfaction guarantee in writing.",
    color: "bg-emerald-600",
    lightColor: "bg-emerald-50 text-emerald-600",
  },
];

export default function CHProcess() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-widest mb-3 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            How It Works
          </h2>
          <p className="text-slate-500 mt-3 text-base">
            Getting your HVAC fixed shouldn&apos;t be complicated. Here&apos;s how easy it is.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-600 via-blue-700 to-emerald-500 z-0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map(({ number, icon: Icon, title, desc, color, lightColor }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center text-center"
              >
                {/* Circle */}
                <div className={`relative w-20 h-20 rounded-full ${color} flex items-center justify-center mb-5 shadow-xl`}>
                  <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-white rounded-full border-2 border-slate-100 flex items-center justify-center shadow-md">
                    <span className="text-[10px] font-black text-slate-700">{number}</span>
                  </div>
                </div>

                <h3 className="text-slate-900 font-bold text-base mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-3xl p-8 text-center"
        >
          <p className="text-slate-900 font-bold text-xl mb-2">Ready to get started?</p>
          <p className="text-slate-500 text-sm mb-6">Most appointments are available same-day or next-day. Call or request online.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+17045550123"
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-colors shadow-lg shadow-blue-600/20"
            >
              <PhoneCall className="w-4 h-4" />
              Call (704) 555-0123
            </a>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border-2 border-slate-200 text-slate-700 px-8 py-3.5 rounded-xl font-bold text-sm transition-colors"
            >
              Request Online
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
