"use client";

import { motion } from "framer-motion";
import { Search, Laptop2, Send, Rocket } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Find the Right Businesses",
    description:
      "I identify local service businesses with outdated or weak websites — companies that are losing leads to better-looking competitors.",
    color: "bg-blue-50 text-blue-600",
    border: "border-blue-100",
  },
  {
    number: "02",
    icon: Laptop2,
    title: "Build a Custom Demo",
    description:
      "I create a polished, high-converting website demo — built specifically around their business, branding, and service area.",
    color: "bg-violet-50 text-violet-600",
    border: "border-violet-100",
  },
  {
    number: "03",
    icon: Send,
    title: "Send the Live Preview Link",
    description:
      "I send them a live preview link so they can see exactly what their new website looks like — no selling abstracts, just results.",
    color: "bg-emerald-50 text-emerald-600",
    border: "border-emerald-100",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch on Their Real Domain",
    description:
      "If they love it and want to move forward, I launch the full site on their real domain and connect everything they need.",
    color: "bg-amber-50 text-amber-600",
    border: "border-amber-100",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Process"
          title="How It Works"
          subtitle="A simple, no-pressure system that lets local businesses see the value before they commit."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative bg-white rounded-2xl border ${step.border} p-6 shadow-sm hover:shadow-md transition-shadow`}
            >
              {/* Step number */}
              <span className="absolute top-5 right-5 text-xs font-bold text-slate-200 tabular-nums">
                {step.number}
              </span>

              {/* Icon */}
              <div
                className={`w-11 h-11 rounded-xl ${step.color} flex items-center justify-center mb-5`}
              >
                <step.icon className="w-5 h-5" />
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {step.description}
              </p>

              {/* Connector arrow for desktop */}
              {i < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 10h12M12 6l4 4-4 4"
                      stroke="#CBD5E1"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
