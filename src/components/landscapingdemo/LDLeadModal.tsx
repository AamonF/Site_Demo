"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, CheckCircle2, Loader2, Leaf } from "lucide-react";
import { PHONE, PHONE_HREF } from "./constants";

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const services = [
  "Lawn Care",
  "Landscape Design",
  "Mulching & Planting",
  "Hardscaping",
  "Yard Maintenance",
  "Outdoor Lighting",
  "Other",
];

export default function LDLeadModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("openLandscapingModal", handler);
    return () => window.removeEventListener("openLandscapingModal", handler);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", email: "", service: "", message: "" });
    }, 400);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-emerald-950/80 backdrop-blur-sm"
            onClick={close}
          />

          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 30 }}
            transition={{ type: "spring", damping: 28, stiffness: 350 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-lg bg-stone-900 border border-stone-700/80 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-1 bg-gradient-to-r from-emerald-800 via-emerald-600 to-amber-600/90" />

              <button
                onClick={close}
                className="absolute top-4 right-4 text-stone-500 hover:text-white transition-colors z-10 bg-stone-800 hover:bg-stone-700 rounded-full p-1.5"
              >
                <X className="w-4 h-4" />
              </button>

              {!submitted ? (
                <div className="p-7">
                  <div className="flex items-start gap-3 mb-6">
                    <div className="w-11 h-11 bg-emerald-900/50 border border-emerald-700/40 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Leaf className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl leading-tight">
                        Request Your Free Quote
                      </h3>
                      <p className="text-stone-400 text-sm mt-1">
                        Tell us about your property — we&apos;ll follow up within one business day.
                      </p>
                    </div>
                  </div>

                  <a
                    href={PHONE_HREF}
                    className="flex items-center justify-center gap-2 w-full bg-stone-800 border border-stone-700 hover:border-emerald-700/50 text-white font-semibold py-3 rounded-xl text-sm mb-5 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    Prefer to call? {PHONE}
                  </a>

                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex-1 h-px bg-stone-700" />
                    <span className="text-stone-500 text-xs">or send a message</span>
                    <div className="flex-1 h-px bg-stone-700" />
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-stone-400 uppercase tracking-wide">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Jane Doe"
                          value={form.name}
                          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                          className="bg-stone-800 border border-stone-600 focus:border-emerald-600 text-white text-sm px-4 py-3 rounded-xl outline-none transition-colors placeholder-stone-500"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-stone-400 uppercase tracking-wide">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="(704) 555-0000"
                          value={form.phone}
                          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                          className="bg-stone-800 border border-stone-600 focus:border-emerald-600 text-white text-sm px-4 py-3 rounded-xl outline-none transition-colors placeholder-stone-500"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-stone-400 uppercase tracking-wide">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="you@email.com"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        className="bg-stone-800 border border-stone-600 focus:border-emerald-600 text-white text-sm px-4 py-3 rounded-xl outline-none transition-colors placeholder-stone-500"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-stone-400 uppercase tracking-wide">
                        Service interest
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                        className="bg-stone-800 border border-stone-600 focus:border-emerald-600 text-white text-sm px-4 py-3 rounded-xl outline-none transition-colors appearance-none"
                      >
                        <option value="" className="text-stone-500">
                          Select a service…
                        </option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-stone-400 uppercase tracking-wide">
                        Project details (optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Lot size, goals, timeline…"
                        value={form.message}
                        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                        className="bg-stone-800 border border-stone-600 focus:border-emerald-600 text-white text-sm px-4 py-3 rounded-xl outline-none transition-colors resize-none placeholder-stone-500"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-emerald-700 hover:bg-emerald-600 disabled:bg-emerald-900 text-white font-bold text-base py-4 rounded-xl shadow-lg shadow-emerald-900/40 transition-all duration-200 flex items-center justify-center gap-2 mt-1"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        "Get My Quote →"
                      )}
                    </button>

                    <p className="text-center text-stone-500 text-xs">
                      We respect your privacy. No spam.
                    </p>
                  </form>
                </div>
              ) : (
                <div className="p-10 text-center">
                  <div className="w-16 h-16 bg-emerald-900/40 border border-emerald-700/40 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-white font-bold text-2xl mb-3">Thank you!</h3>
                  <p className="text-stone-400 text-sm leading-relaxed mb-6">
                    Thanks, {form.name}! We&apos;ll reach out within{" "}
                    <strong className="text-white">one business day</strong> with your quote.
                  </p>
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    Call {PHONE}
                  </a>
                  <button
                    onClick={close}
                    className="block mt-4 mx-auto text-stone-500 hover:text-stone-300 text-sm transition-colors"
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
