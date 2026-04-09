"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { X } from "lucide-react";

import { ConsultationForm } from "./ConsultationForm";

/**
 * Opens when any element with `data-pi-open-consult` is clicked (typically links to `#consult`).
 */
export function PiConsultModal() {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = (e.target as HTMLElement | null)?.closest("[data-pi-open-consult]");
      if (t) {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center p-4 sm:items-center sm:p-6" role="presentation">
      <button
        type="button"
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        aria-label="Close consultation dialog"
        onClick={close}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-[71] max-h-[min(92vh,760px)] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/15 bg-[#0a1628] shadow-2xl shadow-black/60"
      >
        <div className="sticky top-0 z-10 flex items-center justify-end border-b border-white/10 bg-[#0a1628]/95 px-4 py-3 backdrop-blur-sm">
          <span id={titleId} className="sr-only">
            Free consultation — confidential intake
          </span>
          <button
            type="button"
            onClick={close}
            className="rounded-full p-2 text-zinc-400 transition hover:bg-white/5 hover:text-white"
            aria-label="Close consultation"
          >
            <X className="size-5" />
          </button>
        </div>
        <div className="p-5 pt-4">
          <ConsultationForm
            idPrefix="pi-modal"
            heading="Free consultation"
            subheading="Tell us what happened—we’ll respond quickly with next steps."
            className="border-0 bg-transparent p-0 shadow-none"
          />
        </div>
      </div>
    </div>
  );
}
