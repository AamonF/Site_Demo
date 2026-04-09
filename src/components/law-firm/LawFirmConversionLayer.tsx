"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, X, Send, ShieldAlert, Calendar, MapPin } from "lucide-react";

import { FIRM } from "@/lib/law-firm/firm";
import { getIntakePracticeOptions, getPracticePageByPath } from "@/lib/law-firm/practice-registry";
import { LAW_FIRM_BASE } from "@/lib/law-firm/site";

export function LawFirmConversionLayer() {
  const pathname = usePathname();
  const [chatOpen, setChatOpen] = useState(false);
  const [floatOpen, setFloatOpen] = useState(false);
  const [step, setStep] = useState(0);

  const intakeOptions = getIntakePracticeOptions();
  const groupedIntake = useMemo(
    () =>
      intakeOptions.reduce(
        (acc, o) => {
          if (!acc[o.group]) acc[o.group] = [];
          acc[o.group].push(o);
          return acc;
        },
        {} as Record<string, typeof intakeOptions>,
      ),
    [intakeOptions],
  );

  const practicePath = useMemo(() => {
    if (!pathname?.startsWith(LAW_FIRM_BASE)) return "";
    const rest = pathname.slice(LAW_FIRM_BASE.length).replace(/^\//, "");
    if (!rest.startsWith("practice-areas/")) return "";
    return rest.replace(/^practice-areas\//, "");
  }, [pathname]);

  const pageContext = practicePath ? getPracticePageByPath(practicePath) : undefined;
  const defaultMatter = pageContext?.path ?? "";

  return (
    <>
      <div className="hidden xl:block fixed left-4 top-[42%] z-[55]">
        <div className="flex flex-col rounded-xl border border-white/10 bg-law-navy-950/95 backdrop-blur-md shadow-2xl shadow-black/40 overflow-hidden">
          <button
            type="button"
            onClick={() => setFloatOpen((v) => !v)}
            className="flex items-center gap-2 px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white/5 border-b border-white/10"
            aria-expanded={floatOpen}
          >
            <Phone className="w-4 h-4 text-law-gold-light shrink-0" />
            {floatOpen ? "Close" : "Quick"}
          </button>
          {floatOpen && (
            <div className="p-4 w-56">
              <p className="text-[11px] text-slate-400 mb-1 flex items-center gap-1">
                <MapPin className="w-3 h-3" aria-hidden />
                {FIRM.city} intake
              </p>
              <a
                href={`tel:${FIRM.phoneTel.replace(/\D/g, "")}`}
                className="flex items-center gap-2 text-law-gold-light font-semibold text-sm"
              >
                {FIRM.phoneDisplay}
              </a>
              <Link
                href={`${LAW_FIRM_BASE}/free-consultation`}
                className="mt-3 block text-center rounded-lg bg-law-gold text-law-navy-950 text-xs font-semibold py-2.5 hover:bg-[#d4b23a]"
              >
                Book consultation
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="fixed bottom-[4.75rem] sm:bottom-9 right-4 z-[70] flex flex-col items-end gap-3">
        {chatOpen && (
          <div
            className="w-[min(100vw-2rem,400px)] rounded-2xl border border-white/10 bg-law-navy-950 shadow-2xl shadow-black/50 overflow-hidden flex flex-col max-h-[min(560px,70vh)]"
            role="dialog"
            aria-label="Consultation assistant"
          >
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-law-navy-900 to-law-navy-950 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-full overflow-hidden border border-law-gold/30">
                  <Image
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=200&q=80"
                    alt=""
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Consultation Assistant</p>
                  <p className="text-[11px] text-slate-400">Case intake · not legal advice</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setChatOpen(false)}
                className="p-1.5 rounded-md hover:bg-white/10 text-slate-300"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 overflow-y-auto flex-1 space-y-4 text-sm">
              <div className="rounded-xl bg-white/5 border border-white/10 p-3 text-slate-300 leading-relaxed">
                I can help route your inquiry and schedule a confidential consultation. I do not provide
                legal advice, and chatting does not create an attorney-client relationship.
              </div>

              {pageContext && (
                <div className="rounded-xl border border-law-gold/25 bg-law-gold/[0.07] px-3 py-2.5 text-[13px] text-law-gold-light/95 leading-relaxed">
                  <span className="font-semibold text-law-gold-light block mb-1">This page · {pageContext.name}</span>
                  {pageContext.chatContext.focusLine}
                </div>
              )}

              {step === 0 && (
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                    Practice area
                  </label>
                  <select
                    className="w-full rounded-lg border border-white/15 bg-law-navy-900 px-3 py-2 text-sm text-white"
                    defaultValue={defaultMatter}
                  >
                    <option value="" disabled={!defaultMatter}>
                      Select
                    </option>
                    {Object.entries(groupedIntake).map(([group, opts]) => (
                      <optgroup key={group} label={group} className="bg-law-navy-900 text-slate-300">
                        {opts.map((o) => (
                          <option key={o.value} value={o.value} className="text-white">
                            {o.label}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>

                  {pageContext && (
                    <ul className="text-[12px] text-slate-400 space-y-2 pt-1">
                      {pageContext.chatContext.prompts.map((p) => (
                        <li key={p.slice(0, 40)} className="flex gap-2">
                          <span className="text-law-gold shrink-0">•</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="mt-2 w-full rounded-lg bg-law-gold py-2.5 text-sm font-semibold text-law-navy-950"
                  >
                    Continue
                  </button>
                </div>
              )}
              {step >= 1 && (
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                    Urgency
                  </label>
                  <select className="w-full rounded-lg border border-white/15 bg-law-navy-900 px-3 py-2 text-sm text-white">
                    <option>Within 24 hours</option>
                    <option>This week</option>
                    <option>Planning ahead</option>
                  </select>
                </div>
              )}
              {step >= 1 && (
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                    Brief summary
                  </label>
                  <textarea
                    rows={3}
                    className="w-full rounded-lg border border-white/15 bg-law-navy-900 px-3 py-2 text-sm text-white placeholder:text-slate-500"
                    placeholder="High-level facts only—avoid sending secrets until we confirm representation."
                  />
                </div>
              )}
              {step >= 1 && (
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Name"
                    className="rounded-lg border border-white/15 bg-law-navy-900 px-3 py-2 text-sm text-white"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="rounded-lg border border-white/15 bg-law-navy-900 px-3 py-2 text-sm text-white"
                  />
                </div>
              )}
              {step >= 1 && (
                <div className="flex flex-col gap-2 pt-1">
                  <Link
                    href={`${LAW_FIRM_BASE}/free-consultation`}
                    onClick={() => setChatOpen(false)}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-law-navy-950 py-2.5 text-sm font-semibold hover:bg-slate-100"
                  >
                    <Calendar className="w-4 h-4" />
                    Book consultation
                  </Link>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-law-gold/40 text-law-gold-light py-2 text-sm font-medium hover:bg-white/5"
                  >
                    <Send className="w-4 h-4" />
                    Send to intake (demo)
                  </button>
                </div>
              )}
              <div className="flex gap-2 items-start rounded-lg bg-amber-950/40 border border-amber-700/30 p-2.5 text-[11px] text-amber-100/90">
                <ShieldAlert className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
                <span>
                  This assistant is a demo UI for intake routing. It is not a lawyer and does not
                  replace professional counsel. No attorney-client relationship is formed through this
                  chat.
                </span>
              </div>
            </div>
          </div>
        )}
        <button
          type="button"
          onClick={() => {
            setChatOpen((v) => !v);
            if (!chatOpen) setStep(0);
          }}
          className="group flex items-center gap-2 rounded-full bg-law-gold pl-4 pr-5 py-3.5 text-law-navy-950 font-semibold text-sm shadow-xl shadow-black/40 border border-law-gold-light/40 hover:bg-[#d4b23a] transition-all hover:shadow-2xl"
          aria-expanded={chatOpen}
        >
          <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-105" aria-hidden />
          Case Assistant
        </button>
      </div>

      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-[65] border-t border-white/10 bg-law-navy-950/98 backdrop-blur-xl pb-[env(safe-area-inset-bottom,0px)] shadow-[0_-12px_40px_-12px_rgba(0,0,0,0.45)]">
        <div className="grid grid-cols-3 gap-0 divide-x divide-white/[0.08]">
          <a
            href={`tel:${FIRM.phoneTel.replace(/\D/g, "")}`}
            className="flex flex-col items-center justify-center py-3.5 text-law-gold-light text-xs font-semibold active:bg-white/5 transition-colors"
          >
            <Phone className="w-[1.35rem] h-[1.35rem] mb-1" />
            Call now
          </a>
          <Link
            href={`${LAW_FIRM_BASE}/free-consultation`}
            className="flex flex-col items-center justify-center py-3.5 bg-gradient-to-b from-law-gold to-[#b8921f] text-law-navy-950 text-xs font-bold shadow-inner"
          >
            <Calendar className="w-[1.35rem] h-[1.35rem] mb-1" />
            Consult
          </Link>
          <button
            type="button"
            onClick={() => setChatOpen(true)}
            className="flex flex-col items-center justify-center py-3.5 text-slate-200 text-xs font-semibold active:bg-white/5"
          >
            <MessageCircle className="w-[1.35rem] h-[1.35rem] mb-1" />
            Chat
          </button>
        </div>
        <p className="text-[10px] text-center text-slate-500 py-1.5 px-2 border-t border-white/[0.06]">
          {FIRM.city} · {FIRM.phoneDisplay}
        </p>
      </div>
    </>
  );
}
