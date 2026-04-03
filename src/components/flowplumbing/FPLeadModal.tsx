"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, CheckCircle, Droplets, AlertTriangle, Loader2 } from "lucide-react";
import { SITE_LEAD_SOURCE, submitSiteLead } from "@/lib/siteLeads";

const PHONE_HREF = "tel:+17045550123";

interface FPLeadModalProps {
  open: boolean;
  onClose: () => void;
}

const services = [
  "Drain Cleaning",
  "Leak Repair",
  "Water Heater",
  "Sewer Line",
  "Fixture Install",
  "Pipe Replacement",
  "Emergency Plumbing",
  "Other",
];

export default function FPLeadModal({ open, onClose }: FPLeadModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setTimeout(() => setSubmitted(false), 400);
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setLoading(true);
    const result = await submitSiteLead({
      source: SITE_LEAD_SOURCE.plumbingLeadModal,
      name: form.name.trim() || null,
      phone: form.phone.trim() || null,
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
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-sky-950/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
          >
            {/* Header bar */}
            <div className="bg-gradient-to-r from-sky-600 to-blue-700 px-6 py-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Book Service</p>
                    <p className="text-sky-200 text-xs">Response within 15 minutes</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">
                    Your Name *
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
                    Describe the Issue
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what's going on..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition resize-none"
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
                  className="w-full bg-sky-600 hover:bg-sky-700 disabled:opacity-70 text-white py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-sky-600/25 hover:shadow-sky-600/40 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    "Request Service →"
                  )}
                </button>

                <div className="text-center">
                  <p className="text-slate-400 text-xs mb-2">Prefer to call?</p>
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center gap-2 text-red-500 hover:text-red-600 font-bold text-sm transition-colors"
                  >
                    <AlertTriangle className="w-4 h-4" />
                    Emergency Line: (704) 555-0123
                  </a>
                </div>

                <p className="text-center text-slate-400 text-[11px]">
                  No spam. We&apos;ll only use your info to contact you about this request.
                </p>
              </form>
            ) : (
              <div className="px-6 py-10 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" strokeWidth={2} />
                </div>
                <h3 className="text-slate-900 font-extrabold text-xl mb-2">We Got It!</h3>
                <p className="text-slate-500 text-sm mb-6">
                  A plumber will call you back within <strong className="text-slate-700">15 minutes</strong>. For urgent issues, call us directly.
                </p>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (704) 555-0123
                </a>
                <button
                  onClick={onClose}
                  className="block mt-4 mx-auto text-slate-400 hover:text-slate-600 text-sm transition-colors"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
