"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { SC_BUSINESS } from "@/lib/supercool/data";

const SERVICE_OPTIONS = ["AC Repair", "AC Installation", "Heating Repair", "Heating Installation", "Preventive Maintenance", "Indoor Air Quality", "HVAC Inspection", "Commercial HVAC", "Financing Inquiry", "Other"];

interface SCContactFormProps {
  compact?: boolean;
}

export default function SCContactForm({ compact = false }: SCContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={`bg-slate-950 ${compact ? "py-16" : "py-20 lg:py-28"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!compact && (
          <div className="text-center mb-12">
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
              Get in Touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Request Service or Ask a Question</h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto">No pressure, no runaround. Just an honest conversation about your HVAC needs.</p>
          </div>
        )}

        <div className={`grid gap-10 ${compact ? "lg:grid-cols-1 max-w-2xl mx-auto" : "lg:grid-cols-2"}`}>
          {/* Form */}
          <div className="bg-slate-900/60 border border-slate-800/60 rounded-2xl p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-sky-400/20 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-6 h-6 text-sky-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-slate-400">We&apos;ll be in touch shortly. Most inquiries are answered same business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-1.5">First Name</label>
                    <input type="text" required placeholder="Jane" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-sky-400/60 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-1.5">Last Name</label>
                    <input type="text" required placeholder="Smith" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-sky-400/60 transition-colors" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-1.5">Phone</label>
                    <input type="tel" placeholder="(704) 555-0000" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-sky-400/60 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-1.5">Email</label>
                    <input type="email" required placeholder="jane@email.com" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-sky-400/60 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-1.5">Service Needed</label>
                  <select required className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-sky-400/60 transition-colors">
                    <option value="">Select a service…</option>
                    {SERVICE_OPTIONS.map((opt) => <option key={opt}>{opt}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-1.5">Message</label>
                  <textarea rows={4} placeholder="Describe your issue or what you need…" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-sky-400/60 transition-colors resize-none" />
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-400 text-slate-950 font-bold text-sm hover:bg-sky-300 transition-colors">
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact info (only shown in full mode) */}
          {!compact && (
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-bold text-xl mb-6">Reach Us Directly</h3>
                <div className="space-y-4">
                  {[
                    { Icon: Phone, label: "Phone", value: SC_BUSINESS.phone, href: SC_BUSINESS.phoneHref },
                    { Icon: Mail, label: "Email", value: SC_BUSINESS.email, href: SC_BUSINESS.emailHref },
                    { Icon: MapPin, label: "Address", value: SC_BUSINESS.address },
                    { Icon: Clock, label: "Hours", value: `${SC_BUSINESS.hours.weekday}\n${SC_BUSINESS.hours.weekend}` },
                  ].map(({ Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-sky-400/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-sky-400" />
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-0.5">{label}</p>
                        {href ? (
                          <a href={href} className="text-white text-sm font-medium hover:text-sky-400 transition-colors">{value}</a>
                        ) : (
                          <p className="text-white text-sm font-medium whitespace-pre-line">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-sky-400/5 border border-sky-400/20 rounded-2xl p-5">
                <p className="text-sky-400 font-semibold text-sm mb-1">Prefer to call?</p>
                <p className="text-slate-400 text-sm mb-3">Our team is available during business hours and we return all messages promptly.</p>
                <a href={SC_BUSINESS.phoneHref} className="inline-flex items-center gap-2 text-white font-bold hover:text-sky-400 transition-colors">
                  <Phone className="w-4 h-4 text-sky-400" />
                  {SC_BUSINESS.phone}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
