"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2, Phone } from "lucide-react";
import type { BusinessDemo } from "@/lib/demos/types";

const serviceOptions = [
  "Cooling Diagnostic ($99)",
  "Heating Diagnostic ($99)",
  "Summer Tune-Up",
  "Winter Tune-Up",
  "Annual Maintenance Plan",
  "General HVAC Service / Repair",
  "Other / Not Sure",
];

interface AMContactFormProps {
  demo: BusinessDemo;
}

export default function AMContactForm({ demo }: AMContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pt-4"
          >
            <span className="inline-block mb-3 text-xs font-bold text-emerald-700 tracking-widest uppercase">
              Book Online
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 leading-tight text-balance">
              Schedule Your Service Online
            </h2>
            <p className="mt-4 text-lg text-stone-500 leading-relaxed">
              Fill out the form and we&apos;ll follow up quickly to confirm your appointment. Or call us directly — no phone tag, no pressure.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { label: "Cooling or Heating Diagnostic", price: "$99" },
                { label: "Summer or Winter Tune-Up", price: "From $105" },
                { label: "Annual Maintenance Plan", price: "From $15/mo" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between bg-white border border-stone-200 rounded-2xl px-5 py-4 shadow-sm">
                  <span className="text-sm font-semibold text-stone-700">{item.label}</span>
                  <span className="text-base font-black text-emerald-700">{item.price}</span>
                </div>
              ))}
            </div>

            <a
              href={demo.phoneHref}
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Prefer to call? {demo.phone}
            </a>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-10 gap-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-lg font-black text-stone-900">Request Received!</h3>
                <p className="text-sm text-stone-500 max-w-xs leading-relaxed">
                  Thank you for reaching out. We&apos;ll follow up shortly to confirm your appointment.
                </p>
                <p className="text-sm text-stone-500">
                  Or call directly:{" "}
                  <a href={demo.phoneHref} className="font-bold text-emerald-700 hover:underline">
                    {demo.phone}
                  </a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <h3 className="text-lg font-black text-stone-900 mb-1">Request Service</h3>
                  <p className="text-sm text-stone-500 mb-5">
                    We&apos;ll get back to you quickly to confirm your visit.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="am-name" className="block text-xs font-bold text-stone-600 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="am-name" name="name" type="text" required
                      value={form.name} onChange={handleChange} placeholder="John Smith"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="am-phone" className="block text-xs font-bold text-stone-600 mb-1.5">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="am-phone" name="phone" type="tel" required
                      value={form.phone} onChange={handleChange} placeholder="(704) 555-0100"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="am-email" className="block text-xs font-bold text-stone-600 mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="am-email" name="email" type="email"
                    value={form.email} onChange={handleChange} placeholder="you@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="am-service" className="block text-xs font-bold text-stone-600 mb-1.5">
                    Service Needed <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="am-service" name="service" required
                    value={form.service} onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-white appearance-none"
                  >
                    <option value="" disabled>Select a service...</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="am-message" className="block text-xs font-bold text-stone-600 mb-1.5">
                    Notes or Questions
                  </label>
                  <textarea
                    id="am-message" name="message" rows={3}
                    value={form.message} onChange={handleChange}
                    placeholder="Describe the issue or anything helpful for us to know..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit" disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 disabled:opacity-70 text-stone-900 font-black text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  {loading ? (
                    <><Loader2 className="w-4 h-4 animate-spin" />Submitting...</>
                  ) : (
                    <><Send className="w-4 h-4" />{demo.bookingCTA}</>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
