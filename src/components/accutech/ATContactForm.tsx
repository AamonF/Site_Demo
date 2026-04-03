"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2, Phone, MapPin } from "lucide-react";
import type { BusinessDemo } from "@/lib/demos/types";
import { SITE_LEAD_SOURCE, submitSiteLead } from "@/lib/siteLeads";

const serviceOptions = [
  "Air Conditioning Repair",
  "Heating Repair",
  "HVAC Installation",
  "Preventive Maintenance",
  "Residential Service Agreement",
  "Commercial Service Agreement",
  "Other / Not Sure",
];

interface ATContactFormProps {
  demo: BusinessDemo;
}

export default function ATContactForm({ demo }: ATContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setLoading(true);
    const result = await submitSiteLead({
      source: SITE_LEAD_SOURCE.accutechContact,
      name: form.name.trim() || null,
      phone: form.phone.trim() || null,
      email: form.email.trim() || null,
      service: form.service || null,
      message: form.message.trim() || null,
      meta: { demoSlug: demo.slug, demoName: demo.name },
    });
    setLoading(false);
    if (!result.ok) {
      setSubmitError(result.error);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">

          {/* Left — copy + contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pt-2"
          >
            <span className="inline-block mb-3 text-xs font-bold text-teal-400 tracking-widest uppercase">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight mb-4">
              Ready to Schedule Service?
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Submit a request and we&apos;ll follow up quickly to confirm your visit. Or call us
              directly — we&apos;re easy to reach and don&apos;t put you on hold.
            </p>

            {/* Contact blocks */}
            <div className="space-y-4">
              <a
                href={demo.phoneHref}
                className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/8 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-rose-600/20 border border-rose-500/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-rose-400" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">
                    Phone
                  </p>
                  <p className="text-base font-bold text-white group-hover:text-rose-300 transition-colors">
                    {demo.phone}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Best way to reach us quickly
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-teal-600/20 border border-teal-500/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">
                    Address
                  </p>
                  <p className="text-sm font-semibold text-white">
                    {demo.schema.streetAddress}
                  </p>
                  <p className="text-sm text-slate-400">
                    {demo.schema.city}, {demo.schema.state} {demo.schema.postalCode}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-teal-900/40 border border-teal-700/40 rounded-xl">
                <p className="text-xs text-teal-300 font-semibold mb-0.5">
                  Service Agreement Customers
                </p>
                <p className="text-sm text-teal-100/70">
                  Non-emergency service guaranteed within 24 hours.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/30"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-10 gap-4">
                <div className="w-14 h-14 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">Request Received!</h3>
                <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
                  Thank you for reaching out. We&apos;ll follow up shortly to confirm your appointment.
                </p>
                <p className="text-sm text-slate-500">
                  Or call us directly:{" "}
                  <a
                    href={demo.phoneHref}
                    className="font-bold text-teal-600 hover:underline"
                  >
                    {demo.phone}
                  </a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="mb-5">
                  <h3 className="text-lg font-extrabold text-slate-900 mb-1">
                    Request Service
                  </h3>
                  <p className="text-sm text-slate-500">
                    We&apos;ll get back to you quickly to confirm your visit.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="at-name"
                      className="block text-xs font-bold text-slate-600 mb-1.5"
                    >
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="at-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="at-phone"
                      className="block text-xs font-bold text-slate-600 mb-1.5"
                    >
                      Phone <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="at-phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(704) 555-0100"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="at-email"
                    className="block text-xs font-bold text-slate-600 mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="at-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="at-service"
                    className="block text-xs font-bold text-slate-600 mb-1.5"
                  >
                    Service Needed <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="at-service"
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white appearance-none"
                  >
                    <option value="" disabled>
                      Select a service...
                    </option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="at-message"
                    className="block text-xs font-bold text-slate-600 mb-1.5"
                  >
                    Notes or Questions
                  </label>
                  <textarea
                    id="at-message"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe the issue or anything helpful to know..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                {submitError && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-3 py-2">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 disabled:opacity-70 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {demo.bookingCTA}
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-400">
                  No commitment required. We respond quickly.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
