"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { isSupabaseConfigured, SITE_LEAD_SOURCE, submitSiteLead } from "@/lib/siteLeads";

type DemoRequestContextValue = {
  open: () => void;
  close: () => void;
};

const DemoRequestContext = createContext<DemoRequestContextValue | null>(null);

export function useDemoRequest() {
  const ctx = useContext(DemoRequestContext);
  if (!ctx) {
    throw new Error("useDemoRequest must be used within DemoRequestProvider");
  }
  return ctx;
}

const EMAIL = "hello@launchsitedemo.com";

function DemoRequestModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
      setPending(false);
      setSubmitError(null);
      return;
    }
    const t = window.setTimeout(() => firstFieldRef.current?.focus(), 100);
    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const business = String(fd.get("business") ?? "").trim();
    const industry = String(fd.get("industry") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    if (!name || !email || !phone) return;

    setSubmitError(null);

    if (isSupabaseConfigured()) {
      setPending(true);
      const result = await submitSiteLead({
        source: SITE_LEAD_SOURCE.launchDemoRequest,
        name,
        email,
        phone,
        business: business || null,
        industry: industry || null,
        message: message || null,
      });
      setPending(false);
      if (!result.ok) {
        setSubmitError(result.error);
        return;
      }
      setSubmitted(true);
      window.setTimeout(() => onClose(), 2200);
      return;
    }

    const body = [
      `Demo request from Launch Site Demo`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Business: ${business || "—"}`,
      `Industry / niche: ${industry || "—"}`,
      ``,
      `Project details:`,
      message || "—",
    ].join("\n");

    const subject = encodeURIComponent(`Demo website request — ${business || name}`);
    const mailto = `mailto:${EMAIL}?subject=${subject}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
    window.setTimeout(() => onClose(), 2200);
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
          <motion.button
            type="button"
            aria-label="Close dialog"
            className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative w-full sm:max-w-lg max-h-[min(92vh,720px)] overflow-y-auto rounded-t-2xl sm:rounded-2xl bg-white shadow-2xl border border-zinc-200"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between gap-3 px-5 py-4 border-b border-zinc-100 bg-white/95 backdrop-blur-sm rounded-t-2xl">
              <h2 id={titleId} className="text-lg font-bold text-zinc-900 tracking-tight">
                Request a custom demo
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="px-5 py-12 text-center">
                <p className="text-zinc-900 font-semibold text-lg">Thanks — you&apos;re all set.</p>
                <p className="mt-2 text-sm text-zinc-600">
                  {isSupabaseConfigured() ? (
                    <>
                      Questions? Reach us at{" "}
                      <a href={`mailto:${EMAIL}`} className="text-accent-600 font-medium hover:underline">
                        {EMAIL}
                      </a>
                      .
                    </>
                  ) : (
                    <>
                      If your email app didn&apos;t open, reach us at{" "}
                      <a href={`mailto:${EMAIL}`} className="text-accent-600 font-medium hover:underline">
                        {EMAIL}
                      </a>
                      .
                    </>
                  )}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="px-5 py-5 space-y-4">
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Tell us a bit about your business. We&apos;ll follow up with next steps for a live
                  preview link.
                </p>

                <div>
                  <label htmlFor="demo-name" className="block text-xs font-semibold text-zinc-700 mb-1.5">
                    Full name <span className="text-red-500">*</span>
                  </label>
                  <input
                    ref={firstFieldRef}
                    id="demo-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent-600 focus:border-transparent"
                    placeholder="Jane Smith"
                  />
                </div>

                <div>
                  <label htmlFor="demo-email" className="block text-xs font-semibold text-zinc-700 mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="demo-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent-600 focus:border-transparent"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="demo-phone" className="block text-xs font-semibold text-zinc-700 mb-1.5">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="demo-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent-600 focus:border-transparent"
                    placeholder="(704) 555-0123"
                  />
                </div>

                <div>
                  <label htmlFor="demo-business" className="block text-xs font-semibold text-zinc-700 mb-1.5">
                    Business name
                  </label>
                  <input
                    id="demo-business"
                    name="business"
                    type="text"
                    autoComplete="organization"
                    className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent-600 focus:border-transparent"
                    placeholder="Acme Heating & Cooling"
                  />
                </div>

                <div>
                  <label htmlFor="demo-industry" className="block text-xs font-semibold text-zinc-700 mb-1.5">
                    Industry / niche
                  </label>
                  <input
                    id="demo-industry"
                    name="industry"
                    type="text"
                    className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent-600 focus:border-transparent"
                    placeholder="HVAC, plumbing, legal, etc."
                  />
                </div>

                <div>
                  <label htmlFor="demo-message" className="block text-xs font-semibold text-zinc-700 mb-1.5">
                    What should we know?
                  </label>
                  <textarea
                    id="demo-message"
                    name="message"
                    rows={3}
                    className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent-600 focus:border-transparent resize-y min-h-[88px]"
                    placeholder="Service area, current website, timeline…"
                  />
                </div>

                {submitError && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-3 py-2">
                    {submitError}
                  </p>
                )}

                <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2 pt-2 pb-1">
                  <Button type="button" variant="ghost" size="md" onClick={onClose}>
                    Cancel
                  </Button>
                  <Button type="submit" variant="primary" size="md" disabled={pending}>
                    Submit request
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>

                <p className="text-[11px] text-zinc-500 leading-snug">
                  {isSupabaseConfigured()
                    ? "Your request is saved securely. We’ll follow up by email."
                    : "Submitting opens your email app with this information. You can send it as-is or edit before sending."}
                </p>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function DemoRequestProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const hashHandled = useRef(false);
  useEffect(() => {
    if (typeof window === "undefined" || hashHandled.current) return;
    if (window.location.hash === "#request-demo") {
      hashHandled.current = true;
      openModal();
      const { pathname, search } = window.location;
      window.history.replaceState(null, "", pathname + search);
    }
  }, [openModal]);

  const value = useMemo(
    () => ({ open: openModal, close: closeModal }),
    [openModal, closeModal]
  );

  return (
    <DemoRequestContext.Provider value={value}>
      {children}
      <DemoRequestModal open={open} onClose={closeModal} />
    </DemoRequestContext.Provider>
  );
}
