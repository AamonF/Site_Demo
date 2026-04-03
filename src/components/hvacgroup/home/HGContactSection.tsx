"use client";
import { useState } from "react";
import { Phone, Mail, Send, CheckCircle2, MapPin } from "lucide-react";
import { SITE_LEAD_SOURCE, submitSiteLead } from "@/lib/siteLeads";

const services = ["AC Repair", "AC Installation", "Heating Repair", "Heating Installation", "Indoor Air Quality", "Commercial HVAC", "General Inquiry"];

export default function HGContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setLoading(true);
    const result = await submitSiteLead({
      source: SITE_LEAD_SOURCE.hvacGroupContact,
      name: form.name.trim() || null,
      phone: form.phone.trim() || null,
      email: form.email.trim() || null,
      service: form.service || null,
      message: form.message.trim() || null,
    });
    setLoading(false);
    if (!result.ok) {
      setSubmitError(result.error);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-slate-50 py-20 lg:py-28 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Info */}
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-3.5 py-1.5 mb-6">
              <span className="text-emerald-600 text-xs font-semibold tracking-widest uppercase">Contact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-5">
              Get in <span className="text-emerald-600">Touch</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Call us directly, send an email, or fill out the form. We respond quickly and are available in English and Spanish.
            </p>

            <div className="space-y-4">
              {[
                { label: "English Line", value: "(980) 263-0912", href: "tel:+19802630912", Icon: Phone },
                { label: "Línea en Español", value: "(704) 281-9121", href: "tel:+17042819121", Icon: Phone },
                { label: "Email", value: "hvacgroupinc@gmail.com", href: "mailto:hvacgroupinc@gmail.com", Icon: Mail },
              ].map(({ label, value, href, Icon }) => (
                <div key={label} className="bg-white border border-slate-200 rounded-xl p-5 hover:border-emerald-200 transition-colors">
                  <p className="text-slate-400 text-[10px] uppercase tracking-widest font-semibold mb-2">{label}</p>
                  <a href={href} className="flex items-center gap-3 text-slate-900 hover:text-emerald-600 font-semibold transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    {value}
                  </a>
                </div>
              ))}
              <div className="bg-white border border-slate-200 rounded-xl p-5">
                <p className="text-slate-400 text-[10px] uppercase tracking-widest font-semibold mb-2">Service Area</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-slate-700 text-sm">Charlotte, NC &amp; Surrounding Areas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="bg-white border border-emerald-200 rounded-2xl p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-slate-900 font-bold text-xl mb-3">Message Received</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Thank you for reaching out. We&apos;ll review your request and respond shortly. For immediate help, call (980) 263-0912.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { label: "Full Name *", key: "name", type: "text", placeholder: "Your name" },
                    { label: "Phone Number *", key: "phone", type: "tel", placeholder: "(704) 000-0000" },
                  ].map(({ label, key, type, placeholder }) => (
                    <div key={key}>
                      <label className="block text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">{label}</label>
                      <input type={type} required={label.includes("*")} value={form[key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })} placeholder={placeholder}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-400 focus:outline-none rounded-xl px-4 py-3 text-slate-900 text-sm placeholder:text-slate-400 transition-colors" />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">Email</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-400 focus:outline-none rounded-xl px-4 py-3 text-slate-900 text-sm placeholder:text-slate-400 transition-colors" />
                </div>
                <div>
                  <label className="block text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">Service Needed</label>
                  <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-400 focus:outline-none rounded-xl px-4 py-3 text-slate-900 text-sm transition-colors appearance-none">
                    <option value="">Select a service...</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">Message *</label>
                  <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your HVAC issue or what you need..."
                    className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-400 focus:outline-none rounded-xl px-4 py-3 text-slate-900 text-sm placeholder:text-slate-400 transition-colors resize-none" />
                </div>
                {submitError && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-3 py-2">{submitError}</p>
                )}
                <button type="submit" disabled={loading}
                  className="w-full flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-60 disabled:cursor-not-allowed text-white px-6 py-4 rounded-xl text-sm font-bold transition-all">
                  {loading ? (
                    <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                  ) : (
                    <><Send className="w-4 h-4" />Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
