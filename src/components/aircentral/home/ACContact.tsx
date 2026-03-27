"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ACContact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="py-12 lg:py-16 bg-white" id="contact" aria-label="Contact Air Central of the Carolinas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14">

          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Get in Touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-5 leading-tight">
              Let&apos;s Get Your Home Comfortable Again
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              Fill out the form and we&apos;ll reach out to schedule your service.
              Prefer to talk? Give us a call — we&apos;re friendly and always happy to help.
            </p>

            <div className="space-y-5">
              <a
                href="tel:+17045550190"
                className="flex items-center gap-4 p-4 bg-blue-800 hover:bg-blue-900 rounded-2xl border border-blue-700 transition-colors group"
              >
                  <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-300 text-xs font-medium mb-0.5">Call or Text</p>
                    <p className="text-white font-bold text-base">
                    (704) 555-0190
                  </p>
                </div>
              </a>

              <a
                href="mailto:info@aircentralcarolinas.com"
                className="flex items-center gap-4 p-4 bg-slate-50 hover:bg-slate-100 rounded-2xl border border-slate-100 transition-colors group"
              >
                <div className="w-11 h-11 bg-slate-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-medium mb-0.5">Email</p>
                  <p className="text-slate-900 font-bold text-sm group-hover:text-blue-600 transition-colors">
                    info@aircentralcarolinas.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-11 h-11 bg-slate-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-medium mb-0.5">Service Area</p>
                  <p className="text-slate-900 font-semibold text-sm">
                    Charlotte, NC &amp; Surrounding Areas
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl border border-slate-100 shadow-lg p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-slate-900 font-bold text-xl mb-2">We&apos;ve Got Your Request!</h3>
                  <p className="text-slate-500 text-sm max-w-xs">
                    We&apos;ll reach out shortly to confirm your appointment. For urgent issues, call us directly at{" "}
                    <a href="tel:+17045550190" className="text-blue-600 font-medium">(704) 555-0190</a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-slate-900 font-bold text-lg mb-5">Schedule a Service Call</h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-slate-900 text-sm placeholder-slate-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="(704) 555-0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-slate-900 text-sm placeholder-slate-400 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                      Email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-slate-900 text-sm placeholder-slate-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                      Service Needed
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-slate-900 text-sm bg-white transition-all"
                    >
                      <option value="">Select a service...</option>
                      <option>AC Repair</option>
                      <option>AC Installation</option>
                      <option>Heating Repair</option>
                      <option>Heating Installation</option>
                      <option>HVAC Maintenance</option>
                      <option>Indoor Air Quality</option>
                      <option>Not Sure / Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                      Tell Us About Your Situation
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Describe what's going on with your HVAC system..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-slate-900 text-sm placeholder-slate-400 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-sm shadow-blue-900/20 hover:shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    Send My Request
                  </button>
                  <p className="text-slate-400 text-xs text-center">
                    We typically respond within 1 hour during business hours.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
