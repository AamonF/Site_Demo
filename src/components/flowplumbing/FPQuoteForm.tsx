"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, CheckCircle, Send, ShieldCheck, Clock } from "lucide-react";

const PHONE_HREF = "tel:+17045550123";

const services = [
  "Drain Cleaning", "Leak Repair", "Water Heater",
  "Sewer Line", "Fixture Installation", "Pipe Replacement", "Emergency", "Other",
];

const trust = [
  { icon: Clock, label: "Response in 15 min" },
  { icon: ShieldCheck, label: "No obligation quote" },
  { icon: CheckCircle, label: "Licensed & insured" },
];

export default function FPQuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-br from-sky-950 via-blue-900 to-sky-950 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="pt-4"
          >
            <span className="inline-block bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5">
              Get Help Today
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 leading-tight">
              Get Plumbing Help{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-cyan-300">
                Now
              </span>
            </h2>
            <p className="text-sky-100/80 text-lg leading-relaxed mb-8">
              Fill out the form and a licensed plumber will call you back within 15 minutes. Emergency? Call us directly — we pick up.
            </p>

            {/* Trust items */}
            <div className="space-y-4 mb-10">
              {trust.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-sky-400" strokeWidth={2} />
                  </div>
                  <span className="text-sky-100 text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>

            {/* Emergency call block */}
            <div className="bg-white/10 border border-white/15 rounded-2xl p-5 backdrop-blur-sm">
              <p className="text-sky-200 text-xs font-bold uppercase tracking-wide mb-2">Emergency Line</p>
              <a
                href={PHONE_HREF}
                className="flex items-center gap-3 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/30 group-hover:bg-red-400 transition-colors">
                  <Phone className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-white font-extrabold text-xl group-hover:text-sky-200 transition-colors">(704) 555-0123</p>
                  <p className="text-sky-300/70 text-xs">Available 24/7 · Answered live</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Form header */}
              <div className="bg-gradient-to-r from-sky-600 to-blue-700 px-7 py-5">
                <h3 className="text-white font-extrabold text-lg">Quick Quote Request</h3>
                <p className="text-sky-200 text-sm">We respond within 15 minutes</p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="px-7 py-7 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="John Smith"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="(704) 555-0000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">
                      Service Needed *
                    </label>
                    <select
                      required
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition bg-white"
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">
                      Describe the Problem
                    </label>
                    <textarea
                      rows={3}
                      placeholder="What's going on? The more detail, the better..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white py-4 rounded-xl font-extrabold text-sm shadow-lg shadow-sky-600/25 hover:shadow-sky-600/40 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    Get My Free Quote →
                  </button>

                  <p className="text-center text-slate-400 text-[11px]">
                    No spam ever. We only use your info to respond to this request.
                  </p>
                </form>
              ) : (
                <div className="px-7 py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" strokeWidth={2} />
                  </div>
                  <h3 className="text-slate-900 font-extrabold text-xl mb-2">Request Received!</h3>
                  <p className="text-slate-500 text-sm mb-6 max-w-xs mx-auto">
                    A licensed plumber will call you back within <strong className="text-slate-700">15 minutes</strong>. For urgent needs, call directly.
                  </p>
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors shadow-lg"
                  >
                    <Phone className="w-4 h-4" />
                    (704) 555-0123
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
