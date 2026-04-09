"use client";

import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";
import { CheckCircle2, Lock } from "lucide-react";

import { FIRM } from "@/lib/law-firm/firm";
import { getIntakePracticeOptions } from "@/lib/law-firm/practice-registry";
import { LAW_FIRM_BASE } from "@/lib/law-firm/site";

type Props = {
  id?: string;
  compact?: boolean;
  showCalendarHint?: boolean;
  /** Pre-select case type (practice path, e.g. `personal-injury/car-accidents`) */
  defaultPracticePath?: string;
};

const TRUST_POINTS = [
  "NC-licensed attorneys review intake",
  "No obligation from this request alone",
  "We respond quickly—often same business day",
] as const;

export function LawFirmConsultationForm({
  id = "consultation-form",
  compact = false,
  showCalendarHint = true,
  defaultPracticePath,
}: Props) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const intakeOptions = getIntakePracticeOptions();
  const defaultMatter = defaultPracticePath ?? "";
  const groupedIntake = intakeOptions.reduce(
    (acc, o) => {
      if (!acc[o.group]) acc[o.group] = [];
      acc[o.group].push(o);
      return acc;
    },
    {} as Record<string, typeof intakeOptions>,
  );

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      router.push(`${LAW_FIRM_BASE}/thank-you`);
    }, 400);
  }

  return (
    <div>
      <ol className="flex flex-wrap gap-4 sm:gap-8 mb-8 pb-8 border-b border-slate-200/90 text-[12px] text-slate-600">
        <li className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-law-navy-900 text-[11px] font-bold text-white">
            1
          </span>
          Share details
        </li>
        <li className="flex items-center gap-2 opacity-80">
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-300 text-[11px] font-bold text-slate-500">
            2
          </span>
          Intake confirms
        </li>
        <li className="flex items-center gap-2 opacity-80">
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-300 text-[11px] font-bold text-slate-500">
            3
          </span>
          Attorney follow-up
        </li>
      </ol>

      <ul className="mb-8 grid sm:grid-cols-1 gap-2.5">
        {TRUST_POINTS.map((t) => (
          <li key={t} className="flex items-start gap-2.5 text-[13px] text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-law-gold-dark shrink-0 mt-0.5" aria-hidden />
            {t}
          </li>
        ))}
      </ul>

      <form
        id={id}
        onSubmit={onSubmit}
        className={`space-y-4 ${compact ? "" : "max-w-xl"}`}
        noValidate
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor={`${id}-name`}
              className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5"
            >
              Full name
            </label>
            <input
              id={`${id}-name`}
              name="name"
              required
              autoComplete="name"
              className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-law-navy-950 placeholder:text-slate-400 focus:border-law-gold focus:ring-2 focus:ring-law-gold/25 outline-none transition-shadow"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor={`${id}-phone`}
              className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5"
            >
              Phone
            </label>
            <input
              id={`${id}-phone`}
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-law-navy-950 placeholder:text-slate-400 focus:border-law-gold focus:ring-2 focus:ring-law-gold/25 outline-none transition-shadow"
              placeholder="(704) 555-0100"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor={`${id}-email`}
            className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5"
          >
            Email
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-law-navy-950 placeholder:text-slate-400 focus:border-law-gold focus:ring-2 focus:ring-law-gold/25 outline-none transition-shadow"
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label
            htmlFor={`${id}-matter`}
            className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5"
          >
            Case type
          </label>
          <select
            id={`${id}-matter`}
            name="caseType"
            required
            className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-law-navy-950 focus:border-law-gold focus:ring-2 focus:ring-law-gold/25 outline-none transition-shadow"
            defaultValue={defaultMatter || ""}
          >
            <option value="" disabled={!defaultMatter}>
              Select a practice area
            </option>
            {Object.entries(groupedIntake).map(([group, opts]) => (
              <optgroup key={group} label={group}>
                {opts.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </optgroup>
            ))}
            <option value="other">Other / not sure</option>
          </select>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor={`${id}-contact-method`}
              className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5"
            >
              Preferred contact
            </label>
            <select
              id={`${id}-contact-method`}
              name="contactMethod"
              className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-law-navy-950 focus:border-law-gold focus:ring-2 focus:ring-law-gold/25 outline-none"
              defaultValue="phone"
            >
              <option value="phone">Phone</option>
              <option value="email">Email</option>
              <option value="either">Either</option>
            </select>
          </div>
          <div>
            <label
              htmlFor={`${id}-time`}
              className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5"
            >
              Best time to reach you
            </label>
            <select
              id={`${id}-time`}
              name="preferredTime"
              className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-law-navy-950 focus:border-law-gold focus:ring-2 focus:ring-law-gold/25 outline-none"
            >
              <option value="morning">Morning (8–12)</option>
              <option value="afternoon">Afternoon (12–5)</option>
              <option value="evening">Evening (5–8)</option>
              <option value="asap">As soon as possible</option>
            </select>
          </div>
        </div>
        <div>
          <label
            htmlFor={`${id}-consult`}
            className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5"
          >
            Consultation format
          </label>
          <select
            id={`${id}-consult`}
            name="consultFormat"
            className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-law-navy-950 focus:border-law-gold focus:ring-2 focus:ring-law-gold/25 outline-none"
            defaultValue="phone"
          >
            <option value="phone">Phone consultation</option>
            <option value="video">Video meeting</option>
            <option value="in-person">In-person ({FIRM.city})</option>
          </select>
        </div>
        {showCalendarHint && !compact && (
          <div className="rounded-xl border border-dashed border-law-gold/35 bg-law-gold/[0.06] px-4 py-3 text-xs text-slate-600 leading-relaxed">
            <strong className="text-law-navy-800">Scheduling:</strong> Calendar tools (Calendly,
            Acuity, or custom booking) can plug in here—intake still confirms attorney availability for
            Charlotte-area meetings.
          </div>
        )}
        <div>
          <label
            htmlFor={`${id}-msg`}
            className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5"
          >
            Brief summary <span className="text-slate-400 font-normal">(optional)</span>
          </label>
          <textarea
            id={`${id}-msg`}
            name="message"
            rows={compact ? 3 : 4}
            className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-law-navy-950 placeholder:text-slate-400 focus:border-law-gold focus:ring-2 focus:ring-law-gold/25 outline-none resize-y min-h-[96px]"
            placeholder="A few sentences help us route your inquiry—avoid highly sensitive details until we confirm representation."
          />
        </div>
        <div className="flex items-start gap-2 rounded-xl bg-slate-50 border border-slate-100 px-3 py-2.5 text-[11px] text-slate-600 leading-snug">
          <Lock className="w-3.5 h-3.5 shrink-0 mt-0.5 text-slate-400" aria-hidden />
          <span>
            By submitting, you consent to contact about legal services. This does not create an
            attorney-client relationship. See our{" "}
            <a href={`${LAW_FIRM_BASE}/privacy`} className="underline font-medium text-law-navy-800">
              Privacy Policy
            </a>
            .
          </span>
        </div>
        {status === "error" && (
          <p className="text-sm text-red-600">Something went wrong. Please call {FIRM.phoneDisplay}.</p>
        )}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-law-navy-900 px-10 py-4 text-sm font-semibold text-white shadow-xl shadow-law-navy-950/25 hover:bg-law-navy-800 disabled:opacity-60 transition-colors"
        >
          {status === "submitting" ? "Sending…" : "Request consultation"}
        </button>
        <p className="text-[11px] text-slate-500 text-center sm:text-left">
          Need help now? Call{" "}
          <a className="font-semibold text-law-navy-900" href={`tel:${FIRM.phoneTel.replace(/\D/g, "")}`}>
            {FIRM.phoneDisplay}
          </a>
        </p>
      </form>
    </div>
  );
}
