"use client";

import { useCallback, useEffect, useId, useMemo, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

import { CD_BRAND } from "./site-config";

type Step = "intro" | "charges" | "arrest" | "court" | "urgency" | "contact" | "done";

const steps: Step[] = ["intro", "charges", "arrest", "court", "urgency", "contact", "done"];

export function DefenseCaseAssistant() {
  const labelId = useId();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("intro");
  const [charges, setCharges] = useState("");
  const [arrested, setArrested] = useState("");
  const [courtDate, setCourtDate] = useState("");
  const [urgency, setUrgency] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (t?.closest?.("[data-cd-open-chat]")) {
        setOpen(true);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const progress = useMemo(() => {
    const i = steps.indexOf(step);
    return Math.max(0, Math.round((i / (steps.length - 1)) * 100));
  }, [step]);

  const reset = useCallback(() => {
    setStep("intro");
    setCharges("");
    setArrested("");
    setCourtDate("");
    setUrgency("");
    setName("");
    setPhone("");
    setEmail("");
  }, []);

  const advance = useCallback(() => {
    setStep((s) => {
      const idx = steps.indexOf(s);
      return steps[Math.min(idx + 1, steps.length - 1)];
    });
  }, []);

  const panel = !open ? null : (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelId}
      className="fixed bottom-24 right-4 z-[60] flex w-[min(100vw-2rem,380px)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#050810] shadow-2xl shadow-black/60 md:bottom-8"
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div>
          <p id={labelId} className="font-display text-base font-semibold text-white">
            Defense Case Assistant
          </p>
          <p className="text-[11px] text-zinc-500">Intake assistant • Demo preview</p>
        </div>
        <button
          type="button"
          onClick={() => {
            setOpen(false);
            reset();
          }}
          className="rounded-full p-2 text-zinc-400 transition hover:bg-white/5 hover:text-white"
          aria-label="Close assistant"
        >
          <X className="size-4" />
        </button>
      </div>
      <div className="h-1 w-full bg-white/5">
        <div className="h-full bg-law-gold transition-[width] duration-300" style={{ width: `${progress}%` }} />
      </div>
      <div className="max-h-[min(52vh,440px)] space-y-4 overflow-y-auto px-4 py-4 text-sm text-zinc-200">
        <p className="rounded-xl border border-law-gold/20 bg-law-gold/5 p-3 text-xs leading-relaxed text-zinc-400">
          This tool is for general information only. It is{" "}
          <strong className="text-white">not legal advice</strong> and does{" "}
          <strong className="text-white">not</strong> create an attorney-client relationship. Speak with an attorney
          about your specific situation.
        </p>

        {step === "intro" && (
          <div className="space-y-3">
            <p className="text-base text-white">Let’s route your intake—quickly and discreetly.</p>
            <p className="text-zinc-500">
              We’ll ask what you’re facing, arrest status, court dates, urgency, and the best way to reach you.
            </p>
            <button
              type="button"
              onClick={() => setStep("charges")}
              className="w-full rounded-full bg-law-gold py-3 text-sm font-bold uppercase tracking-wide text-law-navy-950"
            >
              Start
            </button>
          </div>
        )}

        {step === "charges" && (
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              What charges are you facing (or worried about)?
            </label>
            <textarea
              value={charges}
              onChange={(e) => setCharges(e.target.value)}
              rows={4}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none ring-law-gold/40 placeholder:text-zinc-600 focus:ring-2"
              placeholder="e.g., DUI, assault, drug possession…"
            />
            <button
              type="button"
              disabled={charges.trim().length < 6}
              onClick={advance}
              className="mt-2 w-full rounded-full bg-white py-3 text-sm font-bold uppercase tracking-wide text-law-navy-950 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue
            </button>
          </div>
        )}

        {step === "arrest" && (
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Have you been arrested or cited?
            </label>
            <select
              value={arrested}
              onChange={(e) => setArrested(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none ring-law-gold/40 focus:ring-2"
            >
              <option value="">Select…</option>
              <option value="yes-jail">Yes — booked / held</option>
              <option value="yes-cite">Yes — citation / summons</option>
              <option value="no">Not yet — investigation stage</option>
              <option value="unsure">Not sure</option>
            </select>
            <button
              type="button"
              disabled={!arrested}
              onClick={advance}
              className="mt-2 w-full rounded-full bg-white py-3 text-sm font-bold uppercase tracking-wide text-law-navy-950 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue
            </button>
          </div>
        )}

        {step === "court" && (
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Court date (if known)
            </label>
            <input
              value={courtDate}
              onChange={(e) => setCourtDate(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none ring-law-gold/40 focus:ring-2"
              placeholder='Date, or write "unknown"'
            />
            <button
              type="button"
              disabled={courtDate.trim().length < 2}
              onClick={advance}
              className="mt-2 w-full rounded-full bg-white py-3 text-sm font-bold uppercase tracking-wide text-law-navy-950 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue
            </button>
          </div>
        )}

        {step === "urgency" && (
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">How urgent is this?</label>
            <select
              value={urgency}
              onChange={(e) => setUrgency(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none ring-law-gold/40 focus:ring-2"
            >
              <option value="">Select…</option>
              <option value="emergency">Emergency — court within 72 hours</option>
              <option value="high">High — charges filed / investigation active</option>
              <option value="planning">Moderate — need a plan soon</option>
              <option value="question">General question / precautionary</option>
            </select>
            <button
              type="button"
              disabled={!urgency}
              onClick={advance}
              className="mt-2 w-full rounded-full bg-white py-3 text-sm font-bold uppercase tracking-wide text-law-navy-950 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue
            </button>
          </div>
        )}

        {step === "contact" && (
          <div className="space-y-3">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none ring-law-gold/40 focus:ring-2"
                autoComplete="name"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Phone</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none ring-law-gold/40 focus:ring-2"
                inputMode="tel"
                autoComplete="tel"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none ring-law-gold/40 focus:ring-2"
                autoComplete="email"
              />
            </div>
            <button
              type="button"
              disabled={name.trim().length < 2 || phone.trim().length < 7 || !email.includes("@")}
              onClick={() => setStep("done")}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-law-gold py-3 text-sm font-bold uppercase tracking-wide text-law-navy-950 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Send className="size-4" />
              Submit (demo)
            </button>
          </div>
        )}

        {step === "done" && (
          <div className="space-y-3 text-center">
            <p className="font-display text-lg text-white">Received.</p>
            <p className="text-sm text-zinc-500">
              In a live deployment, this routes to intake instantly. For immediate help, call{" "}
              <a className="font-semibold text-law-gold" href={`tel:${CD_BRAND.phoneTel}`}>
                {CD_BRAND.phone}
              </a>
              .
            </p>
            <button
              type="button"
              onClick={() => {
                reset();
                setOpen(false);
              }}
              className="w-full rounded-full border border-white/15 bg-white/5 py-3 text-sm font-semibold text-white"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {panel}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-24 right-4 z-[55] flex size-14 items-center justify-center rounded-full border border-law-gold/40 bg-law-gold/15 text-law-gold shadow-xl transition hover:scale-[1.03] md:bottom-8"
        aria-label={open ? "Close Defense Case Assistant" : "Open Defense Case Assistant"}
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
      </button>
    </>
  );
}
