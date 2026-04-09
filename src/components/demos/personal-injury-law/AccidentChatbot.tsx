"use client";

import { useCallback, useEffect, useId, useMemo, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

import { PI_BRAND } from "./site-config";

type Step =
  | "intro"
  | "what"
  | "when"
  | "injury"
  | "insurance"
  | "contact"
  | "done";

const steps: Step[] = ["intro", "what", "when", "injury", "insurance", "contact", "done"];

export function AccidentChatbot() {
  const labelId = useId();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("intro");
  const [what, setWhat] = useState("");
  const [when, setWhen] = useState("");
  const [injury, setInjury] = useState("");
  const [insurance, setInsurance] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (t?.closest?.("[data-pi-open-chat]")) {
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
    setWhat("");
    setWhen("");
    setInjury("");
    setInsurance("");
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
      className="fixed bottom-24 right-4 z-[60] flex w-[min(100vw-2rem,380px)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a1628] shadow-2xl shadow-black/50 md:bottom-8"
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div>
          <p id={labelId} className="font-display text-base font-semibold text-white">
            Accident Case Assistant
          </p>
          <p className="text-[11px] text-zinc-400">Intake assistant • Demo preview</p>
        </div>
        <button
          type="button"
          onClick={() => {
            setOpen(false);
            reset();
          }}
          className="rounded-full p-2 text-zinc-400 transition hover:bg-white/5 hover:text-white"
          aria-label="Close chat"
        >
          <X className="size-4" />
        </button>
      </div>
      <div className="h-1 w-full bg-white/5">
        <div
          className="h-full bg-law-gold transition-[width] duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="max-h-[min(52vh,420px)] space-y-4 overflow-y-auto px-4 py-4 text-sm text-zinc-200">
        <p className="rounded-xl border border-law-gold/20 bg-law-gold/5 p-3 text-xs leading-relaxed text-zinc-300">
          This tool is for general information only. It is{" "}
          <strong className="text-white">not legal advice</strong> and does not create an attorney-client
          relationship. Contact us for advice about your specific situation.
        </p>

        {step === "intro" && (
          <div className="space-y-3">
            <p className="text-base text-white">Let’s capture the basics—fast.</p>
            <p className="text-zinc-400">
              We’ll ask what happened, timing, injury severity, insurance contact, and the best way to reach you.
            </p>
            <button
              type="button"
              onClick={() => setStep("what")}
              className="w-full rounded-full bg-law-gold py-3 text-sm font-bold uppercase tracking-wide text-law-navy-950"
            >
              Start
            </button>
          </div>
        )}

        {step === "what" && (
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              What happened?
            </label>
            <textarea
              value={what}
              onChange={(e) => setWhat(e.target.value)}
              rows={4}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none ring-law-gold/40 placeholder:text-zinc-500 focus:ring-2"
              placeholder="Briefly describe the incident…"
            />
            <button
              type="button"
              disabled={what.trim().length < 8}
              onClick={advance}
              className="mt-2 w-full rounded-full bg-white py-3 text-sm font-bold uppercase tracking-wide text-law-navy-950 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue
            </button>
          </div>
        )}

        {step === "when" && (
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              When did it occur?
            </label>
            <input
              value={when}
              onChange={(e) => setWhen(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none ring-law-gold/40 focus:ring-2"
              placeholder="Date or approximate timeframe"
            />
            <button
              type="button"
              disabled={when.trim().length < 2}
              onClick={advance}
              className="mt-2 w-full rounded-full bg-white py-3 text-sm font-bold uppercase tracking-wide text-law-navy-950 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue
            </button>
          </div>
        )}

        {step === "injury" && (
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Injury severity (brief)
            </label>
            <select
              value={injury}
              onChange={(e) => setInjury(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none ring-law-gold/40 focus:ring-2"
            >
              <option value="">Select…</option>
              <option value="minor">Minor / urgent care</option>
              <option value="moderate">Moderate / ER visit</option>
              <option value="severe">Severe / hospitalization</option>
              <option value="unknown">Still being evaluated</option>
            </select>
            <button
              type="button"
              disabled={!injury}
              onClick={advance}
              className="mt-2 w-full rounded-full bg-white py-3 text-sm font-bold uppercase tracking-wide text-law-navy-950 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue
            </button>
          </div>
        )}

        {step === "insurance" && (
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Has an insurer contacted you?
            </label>
            <select
              value={insurance}
              onChange={(e) => setInsurance(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none ring-law-gold/40 focus:ring-2"
            >
              <option value="">Select…</option>
              <option value="yes-recorded">Yes — I gave a recorded statement</option>
              <option value="yes-no-record">Yes — no recorded statement</option>
              <option value="no">Not yet</option>
              <option value="unsure">Not sure</option>
            </select>
            <button
              type="button"
              disabled={!insurance}
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
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none ring-law-gold/40 focus:ring-2"
                autoComplete="name"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Phone</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none ring-law-gold/40 focus:ring-2"
                inputMode="tel"
                autoComplete="tel"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Email</label>
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
            <p className="text-sm text-zinc-400">
              In a live deployment, this intake routes to your CRM. For now, call{" "}
              <a className="font-semibold text-law-gold" href={`tel:${PI_BRAND.phoneTel}`}>
                {PI_BRAND.phone}
              </a>{" "}
              for immediate help.
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
        className="fixed bottom-24 right-4 z-[55] flex size-14 items-center justify-center rounded-full bg-law-gold text-law-navy-950 shadow-xl shadow-law-gold/30 transition hover:scale-[1.03] md:bottom-8"
        aria-label={open ? "Close Accident Case Assistant" : "Open Accident Case Assistant"}
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
      </button>
    </>
  );
}
