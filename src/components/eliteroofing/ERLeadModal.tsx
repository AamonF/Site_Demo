"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, CheckCircle2, Loader2, Shield } from "lucide-react";
import { SITE_LEAD_SOURCE, submitSiteLead } from "@/lib/siteLeads";

const PHONE = "(704) 555-0123";
const PHONE_HREF = "tel:7045550123";

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const services = [
  "Roof Inspection (Free)",
  "Roof Repair",
  "Roof Replacement",
  "Storm Damage / Insurance Claim",
  "Commercial Roofing",
  "Gutters & Flashing",
  "Other",
];

export default function ERLeadModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("openRoofingModal", handler);
    return () => window.removeEventListener("openRoofingModal", handler);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", email: "", service: "", message: "" });
    }, 400);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setLoading(true);
    const result = await submitSiteLead({
      source: SITE_LEAD_SOURCE.roofingLeadModal,
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
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/75 backdrop-blur-sm"
            onClick={close}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 30 }}
            transition={{ type: "spring", damping: 28, stiffness: 350 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Red accent top bar */}
              <div className="h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-700" />

              {/* Close btn */}
              <button
                onClick={close}
                className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors z-10 bg-zinc-900 hover:bg-zinc-800 rounded-full p-1.5"
              >
                <X className="w-4 h-4" />
              </button>

              {!submitted ? (
                <div className="p-7">
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-6">
                    <div className="w-11 h-11 bg-red-600/15 border border-red-500/25 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-white font-black text-xl leading-tight">
                        Get Your Free Roof Inspection
                      </h3>
                      <p className="text-zinc-400 text-sm mt-1">
                        No pressure. No cost. Usually available within 24 hours.
                      </p>
                    </div>
                  </div>

                  {/* Phone shortcut */}
                  <a
                    href={PHONE_HREF}
                    className="flex items-center justify-center gap-2 w-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white font-bold py-3 rounded-xl text-sm mb-5 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-red-500" />
                    Prefer to call? {PHONE}
                  </a>

                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex-1 h-px bg-zinc-800" />
                    <span className="text-zinc-600 text-xs">or fill out the form</span>
                    <div className="flex-1 h-px bg-zinc-800" />
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John Smith"
                          value={form.name}
                          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                          className="bg-zinc-900 border border-zinc-700 focus:border-red-500 text-white text-sm px-4 py-3 rounded-xl outline-none transition-colors placeholder-zinc-600"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="(704) 555-0000"
                          value={form.phone}
                          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                          className="bg-zinc-900 border border-zinc-700 focus:border-red-500 text-white text-sm px-4 py-3 rounded-xl outline-none transition-colors placeholder-zinc-600"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@email.com"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        className="bg-zinc-900 border border-zinc-700 focus:border-red-500 text-white text-sm px-4 py-3 rounded-xl outline-none transition-colors placeholder-zinc-600"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">
                        Service Needed
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                        className="bg-zinc-900 border border-zinc-700 focus:border-red-500 text-white text-sm px-4 py-3 rounded-xl outline-none transition-colors appearance-none"
                      >
                        <option value="" className="text-zinc-500">Select a service...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">
                        Tell Us More (optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Describe your roof issue or ask us anything..."
                        value={form.message}
                        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                        className="bg-zinc-900 border border-zinc-700 focus:border-red-500 text-white text-sm px-4 py-3 rounded-xl outline-none transition-colors resize-none placeholder-zinc-600"
                      />
                    </div>

                    {submitError && (
                      <p className="text-sm text-red-400 bg-red-950/40 border border-red-900/50 rounded-xl px-3 py-2">
                        {submitError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-red-600 hover:bg-red-500 disabled:bg-red-800 text-white font-extrabold text-base py-4 rounded-xl shadow-lg shadow-red-600/25 transition-all duration-200 flex items-center justify-center gap-2 mt-1"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Get My Free Inspection →"
                      )}
                    </button>

                    <p className="text-center text-zinc-600 text-xs">
                      We respect your privacy. No spam, ever.
                    </p>
                  </form>
                </div>
              ) : (
                <div className="p-10 text-center">
                  <div className="w-16 h-16 bg-green-500/15 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-white font-black text-2xl mb-3">
                    You're All Set!
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    Thanks, {form.name}! Our team will call you within{" "}
                    <strong className="text-white">2 business hours</strong> to schedule your free inspection.
                  </p>
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    Need it faster? Call {PHONE}
                  </a>
                  <button
                    onClick={close}
                    className="block mt-4 mx-auto text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
