"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, Calendar } from "lucide-react";

const services = [
  "AC Repair",
  "AC Installation",
  "Heating Repair",
  "Heating Installation",
  "HVAC Maintenance",
  "Indoor Air Quality",
  "Not Sure / Other",
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    urgency: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-8 lg:pt-28 lg:pb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Ready to Help
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-5 leading-tight">
            Contact Air Central of the Carolinas
          </h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto leading-relaxed">
            Schedule a service call, ask a question, or request a free estimate.
            We&apos;re friendly, fast, and always happy to help.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-5">
              <a
                href="tel:+17045550190"
                className="flex items-center gap-4 p-5 bg-blue-800 hover:bg-blue-900 rounded-2xl text-white transition-colors group"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-blue-200 text-xs font-medium mb-0.5">Call or Text</p>
                  <p className="text-white font-bold text-xl">(704) 555-0190</p>
                  <p className="text-blue-200 text-xs mt-0.5">Same-day service available</p>
                </div>
              </a>

              <a
                href="mailto:info@aircentralcarolinas.com"
                className="flex items-center gap-4 p-5 bg-slate-50 hover:bg-slate-100 rounded-2xl border border-slate-100 transition-colors group"
              >
                <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-medium mb-0.5">Email</p>
                  <p className="text-slate-900 font-semibold text-sm group-hover:text-blue-600 transition-colors">
                    info@aircentralcarolinas.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-medium mb-0.5">Service Area</p>
                  <p className="text-slate-900 font-semibold text-sm">Charlotte, NC &amp; Surrounding Communities</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-medium mb-1">Hours</p>
                  <p className="text-slate-900 text-sm font-medium">Mon–Sat: 7am – 8pm</p>
                  <p className="text-slate-900 text-sm font-medium">Sunday: 8am – 6pm</p>
                  <p className="text-blue-600 text-xs font-semibold mt-1">Emergency service available</p>
                </div>
              </div>

              <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <p className="text-blue-700 font-semibold text-sm">Quick Response Guarantee</p>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We respond to all form submissions within 1 hour during business hours. For urgent issues, calling is always fastest.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl border border-slate-100 shadow-lg p-8">
                {sent ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-blue-600" />
                    </div>
                    <h2 className="text-slate-900 font-bold text-2xl mb-3">Request Received!</h2>
                    <p className="text-slate-500 max-w-xs leading-relaxed">
                      Thank you! We&apos;ll reach out shortly to confirm your appointment. For urgent situations, call us at{" "}
                      <a href="tel:+17045550190" className="text-blue-600 font-semibold">(704) 555-0190</a>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h2 className="text-slate-900 font-bold text-xl mb-1">Request Service</h2>
                      <p className="text-slate-500 text-sm">Fill out the form and we&apos;ll be in touch quickly.</p>
                    </div>

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

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-700 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                          Service Needed
                        </label>
                        <select
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-slate-900 text-sm bg-white transition-all"
                        >
                          <option value="">Select service...</option>
                          {services.map((s) => (
                            <option key={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-slate-700 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                          How Urgent?
                        </label>
                        <select
                          value={form.urgency}
                          onChange={(e) => setForm({ ...form, urgency: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-slate-900 text-sm bg-white transition-all"
                        >
                          <option value="">Select urgency...</option>
                          <option>Emergency — ASAP</option>
                          <option>Today if possible</option>
                          <option>This week works</option>
                          <option>Just getting a quote</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-700 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                        Tell Us What&apos;s Going On
                      </label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Describe your HVAC issue or what you need help with..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-slate-900 text-sm placeholder-slate-400 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-semibold text-sm transition-all duration-200 shadow-sm shadow-blue-900/20 hover:shadow-md"
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
