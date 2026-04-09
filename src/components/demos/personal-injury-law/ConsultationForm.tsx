"use client";

import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

import { PI_BRAND } from "./site-config";
import { PRACTICE_LINKS } from "./practice-data";

type Props = {
  idPrefix?: string;
  defaultAccidentType?: string;
  heading?: string;
  subheading?: string;
  className?: string;
};

const extraTypes = ["Other", "Unsure"] as const;

export function ConsultationForm({
  idPrefix = "pi",
  defaultAccidentType = "",
  heading = "Request your free consultation",
  subheading = "Fast. Confidential. No obligation.",
  className = "",
}: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [accidentType, setAccidentType] = useState(defaultAccidentType);

  useEffect(() => {
    if (defaultAccidentType) setAccidentType(defaultAccidentType);
  }, [defaultAccidentType]);

  return (
    <div className={`rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/30 ${className}`}>
      <div className="mb-6 space-y-2 text-center sm:text-left">
        <h3 className="font-display text-2xl font-semibold text-white">{heading}</h3>
        <p className="text-sm text-zinc-400">{subheading}</p>
        <p className="text-xs text-zinc-500">
          By submitting, you agree to be contacted about your inquiry. This is a demo form—no data is transmitted.
        </p>
      </div>

      {submitted ? (
        <div className="flex flex-col items-center gap-4 rounded-xl border border-law-gold/30 bg-law-gold/5 px-4 py-10 text-center">
          <CheckCircle2 className="size-12 text-law-gold" aria-hidden />
          <p className="font-display text-xl text-white">You’re on the list.</p>
          <p className="max-w-md text-sm text-zinc-400">
            In production, we’d route your details to intake instantly. Prefer immediate help? Call{" "}
            <a className="font-semibold text-law-gold" href={`tel:${PI_BRAND.phoneTel}`}>
              {PI_BRAND.phone}
            </a>
            —available 24/7 for emergencies.
          </p>
        </div>
      ) : (
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400" htmlFor={`${idPrefix}-name`}>
                Name
              </label>
              <input
                id={`${idPrefix}-name`}
                name="name"
                required
                className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none ring-law-gold/40 placeholder:text-zinc-600 focus:ring-2"
                placeholder="Full name"
                autoComplete="name"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400" htmlFor={`${idPrefix}-phone`}>
                Phone
              </label>
              <input
                id={`${idPrefix}-phone`}
                name="phone"
                required
                inputMode="tel"
                className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none ring-law-gold/40 placeholder:text-zinc-600 focus:ring-2"
                placeholder="Best number to reach you"
                autoComplete="tel"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400" htmlFor={`${idPrefix}-email`}>
              Email
            </label>
            <input
              id={`${idPrefix}-email`}
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none ring-law-gold/40 placeholder:text-zinc-600 focus:ring-2"
              placeholder="you@email.com"
              autoComplete="email"
            />
          </div>
          <div>
            <label
              className="text-xs font-semibold uppercase tracking-wider text-zinc-400"
              htmlFor={`${idPrefix}-accident`}
            >
              Accident type
            </label>
            <select
              id={`${idPrefix}-accident`}
              name="accidentType"
              value={accidentType}
              onChange={(e) => setAccidentType(e.target.value)}
              required
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none ring-law-gold/40 focus:ring-2"
            >
              <option value="" disabled>
                Select…
              </option>
              {PRACTICE_LINKS.map((p) => (
                <option key={p.slug} value={p.label}>
                  {p.label}
                </option>
              ))}
              {extraTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400" htmlFor={`${idPrefix}-msg`}>
              What happened?
            </label>
            <textarea
              id={`${idPrefix}-msg`}
              name="message"
              required
              rows={4}
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none ring-law-gold/40 placeholder:text-zinc-600 focus:ring-2"
              placeholder="Brief facts: date, location, injuries, police report if any…"
            />
          </div>
          <div>
            <label
              className="text-xs font-semibold uppercase tracking-wider text-zinc-400"
              htmlFor={`${idPrefix}-time`}
            >
              Preferred contact time <span className="font-normal text-zinc-600">(optional)</span>
            </label>
            <input
              id={`${idPrefix}-time`}
              name="preferredTime"
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none ring-law-gold/40 placeholder:text-zinc-600 focus:ring-2"
              placeholder="e.g., weekday mornings"
            />
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="submit"
              className="inline-flex flex-1 min-w-[200px] items-center justify-center rounded-full bg-law-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-law-navy-950 shadow-lg shadow-law-gold/25 transition hover:bg-law-gold-light"
            >
              Get my free review
            </button>
            <a
              href={`tel:${PI_BRAND.phoneTel}`}
              className="inline-flex flex-1 min-w-[160px] items-center justify-center rounded-full border border-white/15 bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/5"
            >
              Call {PI_BRAND.phone}
            </a>
          </div>
          <p className="text-center text-[11px] text-zinc-500">
            No fee unless we win • Available 24/7 for urgent matters • Se habla español (demo)
          </p>
        </form>
      )}
    </div>
  );
}
