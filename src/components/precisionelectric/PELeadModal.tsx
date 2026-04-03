"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, CheckCircle, Zap, ShieldCheck, ChevronRight, Loader2 } from "lucide-react";
import { SITE_LEAD_SOURCE, submitSiteLead } from "@/lib/siteLeads";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  phone: string;
  company: string;
}

const SERVICES = [
  "Panel Upgrade",
  "Wiring / Rewiring",
  "Lighting Installation",
  "EV Charger Installation",
  "Electrical Troubleshooting",
  "Commercial Work",
  "Emergency Service",
  "Other",
];

type FormState = "idle" | "submitting" | "success";

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export default function PELeadModal({ isOpen, onClose, phone, company }: Props) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const overlayRef = useRef<HTMLDivElement>(null);
  const rawPhone = phone.replace(/\D/g, "");

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setFormState("submitting");
    const result = await submitSiteLead({
      source: SITE_LEAD_SOURCE.precisionElectricLeadModal,
      name: formData.name.trim() || null,
      phone: formData.phone.trim() || null,
      email: formData.email.trim() || null,
      service: formData.service || null,
      message: formData.message.trim() || null,
      meta: { company },
    });
    if (!result.ok) {
      setFormState("idle");
      setSubmitError(result.error);
      return;
    }
    setFormState("success");
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          ref={overlayRef}
          onClick={handleOverlayClick}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          {/* Modal panel */}
          <motion.div
            className="relative w-full max-w-lg bg-zinc-900 border border-zinc-700/60 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-br from-zinc-800 to-zinc-900 border-b border-zinc-700/60 px-6 py-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-black fill-black" />
                </div>
                <div>
                  <h2 className="text-white font-black text-xl leading-tight">
                    Request a Free Estimate
                  </h2>
                  <p className="text-zinc-400 text-sm mt-0.5">
                    We&apos;ll get back to you within the hour.
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-700/60 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-6">
              {formState === "success" ? (
                <SuccessView onClose={onClose} phone={phone} company={company} />
              ) : (
                <>
                  {/* Quick call alternative */}
                  <a
                    href={`tel:${rawPhone}`}
                    className="flex items-center justify-between w-full bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-600 rounded-xl px-4 py-3.5 mb-5 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-yellow-400/10 border border-yellow-400/25 rounded-lg flex items-center justify-center">
                        <Phone className="w-4 h-4 text-yellow-400" />
                      </div>
                      <div>
                        <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-wider leading-none mb-0.5">
                          Prefer to call?
                        </p>
                        <p className="text-white font-black text-base leading-none">{phone}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-yellow-400 group-hover:translate-x-0.5 transition-all" />
                  </a>

                  {/* Divider */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex-1 h-px bg-zinc-700/60" />
                    <span className="text-zinc-500 text-xs font-semibold">or fill out the form</span>
                    <div className="flex-1 h-px bg-zinc-700/60" />
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-zinc-400 text-xs font-bold uppercase tracking-wider mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full bg-zinc-800/60 border border-zinc-700 focus:border-yellow-400/60 rounded-xl px-4 py-3 text-white placeholder-zinc-600 text-sm outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-zinc-400 text-xs font-bold uppercase tracking-wider mb-1.5">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(704) 555-0000"
                          className="w-full bg-zinc-800/60 border border-zinc-700 focus:border-yellow-400/60 rounded-xl px-4 py-3 text-white placeholder-zinc-600 text-sm outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-zinc-400 text-xs font-bold uppercase tracking-wider mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@email.com"
                        className="w-full bg-zinc-800/60 border border-zinc-700 focus:border-yellow-400/60 rounded-xl px-4 py-3 text-white placeholder-zinc-600 text-sm outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-zinc-400 text-xs font-bold uppercase tracking-wider mb-1.5">
                        Service Needed *
                      </label>
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-zinc-800/60 border border-zinc-700 focus:border-yellow-400/60 rounded-xl px-4 py-3 text-sm outline-none transition-colors appearance-none cursor-pointer text-white"
                      >
                        <option value="" disabled className="text-zinc-600">
                          Select a service...
                        </option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s} className="bg-zinc-800 text-white">
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-zinc-400 text-xs font-bold uppercase tracking-wider mb-1.5">
                        Describe the Issue (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us a bit about what's going on..."
                        rows={3}
                        className="w-full bg-zinc-800/60 border border-zinc-700 focus:border-yellow-400/60 rounded-xl px-4 py-3 text-white placeholder-zinc-600 text-sm outline-none transition-colors resize-none"
                      />
                    </div>

                    {submitError && (
                      <p className="text-sm text-red-400 bg-red-950/40 border border-red-900/50 rounded-xl px-3 py-2">
                        {submitError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={formState === "submitting"}
                      className="w-full flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 disabled:opacity-70 text-black font-black text-base py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-yellow-400/20 disabled:cursor-not-allowed"
                    >
                      {formState === "submitting" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Get My Free Estimate
                          <ChevronRight className="w-5 h-5" />
                        </>
                      )}
                    </button>

                    {/* Trust note */}
                    <p className="text-center text-zinc-500 text-xs flex items-center justify-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-zinc-500" />
                      No spam. We&apos;ll only contact you about your request.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function SuccessView({
  onClose,
  phone,
  company,
}: {
  onClose: () => void;
  phone: string;
  company: string;
}) {
  const rawPhone = phone.replace(/\D/g, "");
  return (
    <div className="text-center py-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="w-20 h-20 bg-green-400/10 border-2 border-green-400/30 rounded-full flex items-center justify-center mx-auto mb-5"
      >
        <CheckCircle className="w-10 h-10 text-green-400" />
      </motion.div>
      <h3 className="text-white font-black text-2xl mb-3">Request Received!</h3>
      <p className="text-zinc-400 leading-relaxed mb-6 max-w-sm mx-auto">
        Thank you! A member of the {company} team will contact you within the hour to confirm your
        appointment and answer any questions.
      </p>
      <div className="bg-zinc-800/60 border border-zinc-700 rounded-xl p-4 mb-6">
        <p className="text-zinc-400 text-sm mb-1">Need faster service?</p>
        <a
          href={`tel:${rawPhone}`}
          className="text-yellow-400 font-black text-lg hover:text-yellow-300 transition-colors"
        >
          Call us directly: {phone}
        </a>
      </div>
      <button
        onClick={onClose}
        className="text-zinc-400 hover:text-zinc-200 text-sm transition-colors"
      >
        Close this window
      </button>
    </div>
  );
}
