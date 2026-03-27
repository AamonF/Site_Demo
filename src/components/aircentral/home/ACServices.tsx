"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Wind, Snowflake, Flame, Wrench, Leaf, ArrowRight } from "lucide-react";

const BASE = "/air-central-carolinas";

const services = [
  {
    icon: Snowflake,
    title: "AC Repair",
    desc: "Warm house? We diagnose and fix air conditioning problems fast — so you're comfortable again the same day.",
    href: `${BASE}/ac-repair`,
    color: "bg-sky-50 text-sky-600",
    border: "hover:border-sky-200",
  },
  {
    icon: Wind,
    title: "AC Installation",
    desc: "Upgrade to a new, efficient system that keeps your home cool and your energy bills manageable.",
    href: `${BASE}/ac-installation`,
    color: "bg-blue-50 text-blue-600",
    border: "hover:border-blue-200",
  },
  {
    icon: Flame,
    title: "Heating Repair",
    desc: "Don't tough out a cold night. Our technicians get your heater running reliably — quickly.",
    href: `${BASE}/heating-repair`,
    color: "bg-orange-50 text-orange-500",
    border: "hover:border-orange-200",
  },
  {
    icon: Wrench,
    title: "Heating Installation",
    desc: "New furnace or heat pump? We handle every step of the installation with care and precision.",
    href: `${BASE}/heating-installation`,
    color: "bg-amber-50 text-amber-600",
    border: "hover:border-amber-200",
  },
  {
    icon: Wind,
    title: "HVAC Maintenance",
    desc: "Prevent breakdowns before they happen. Our tune-up plans keep your system running at its best all year.",
    href: `${BASE}/hvac-maintenance`,
    color: "bg-emerald-50 text-emerald-600",
    border: "hover:border-emerald-200",
  },
  {
    icon: Leaf,
    title: "Indoor Air Quality",
    desc: "Breathe easier. From air purifiers to humidity control, we help you create a healthier home environment.",
    href: `${BASE}/indoor-air-quality`,
    color: "bg-teal-50 text-teal-600",
    border: "hover:border-teal-200",
  },
];

export default function ACServices() {
  return (
    <section className="py-12 lg:py-16 bg-white" id="services" aria-label="HVAC services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Complete HVAC Services for NC Homes
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            From emergency AC repair to full system installations, our licensed
            technicians handle every heating and cooling need your home has.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, href, color, border }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Link
                href={href}
                className={`group block bg-white border border-slate-100 ${border} rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full`}
              >
                <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4 shadow-sm`}>
                  <Icon className="w-6 h-6" strokeWidth={1.8} />
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                  {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{desc}</p>
                <span className="inline-flex items-center gap-1.5 text-blue-600 text-sm font-semibold group-hover:gap-2.5 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href={`${BASE}/services`}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm border border-blue-200 hover:border-blue-300 px-6 py-3 rounded-xl transition-all hover:bg-blue-50"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
