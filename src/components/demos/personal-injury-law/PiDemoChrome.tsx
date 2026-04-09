"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";

import { AccidentChatbot } from "./AccidentChatbot";
import { PiConsultModal } from "./PiConsultModal";
import { PI_BRAND, PI_DEMO_BASE } from "./site-config";

const bannerOffsetClass = "top-[22px]";

const PRIMARY_NAV = [
  { href: `${PI_DEMO_BASE}#attorney`, label: "Attorney" },
  { href: `${PI_DEMO_BASE}#practice-areas`, label: "Practice areas" },
  { href: `${PI_DEMO_BASE}#why-us`, label: "Why us" },
  { href: `${PI_DEMO_BASE}#results`, label: "Results" },
  { href: `${PI_DEMO_BASE}#testimonials`, label: "Clients" },
  { href: `${PI_DEMO_BASE}#process`, label: "Process" },
  { href: `${PI_DEMO_BASE}#faq`, label: "FAQ" },
  { href: `${PI_DEMO_BASE}#consult`, label: "Contact" },
] as const;

export function PiDemoChrome({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`sticky ${bannerOffsetClass} z-40 border-b border-white/10 bg-[#060d18]/90 backdrop-blur-md`}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center justify-between gap-3 py-3 lg:grid lg:grid-cols-[minmax(11rem,1fr)_auto_minmax(0,1fr)] lg:items-center lg:gap-4 lg:py-3 xl:gap-6">
            <Link
              href={PI_DEMO_BASE}
              className="group flex min-w-0 max-w-[min(100%,18rem)] flex-col leading-tight sm:max-w-none lg:justify-self-start"
              onClick={() => setMenuOpen(false)}
            >
              <span className="truncate font-display text-base font-semibold tracking-tight text-white transition-colors group-hover:text-law-gold sm:text-lg md:text-xl">
                {PI_BRAND.name}
              </span>
              <span className="hidden text-[10px] font-medium uppercase leading-snug tracking-[0.18em] text-zinc-400 sm:block sm:whitespace-nowrap">
                Serious injury. Serious results.
              </span>
            </Link>

            <nav
              className="hidden items-center justify-center gap-0.5 px-1 lg:flex xl:gap-1 xl:px-2"
              aria-label="Page sections"
            >
              {PRIMARY_NAV.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  {...(href.endsWith("#consult") ? { "data-pi-open-consult": "" as const } : {})}
                  className="whitespace-nowrap rounded-lg px-1.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-zinc-400 transition hover:bg-white/5 hover:text-white xl:px-2.5 xl:text-xs"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-shrink-0 items-center justify-end gap-1.5 sm:gap-3 md:gap-4 lg:justify-self-end">
              <a
                href={`tel:${PI_BRAND.phoneTel}`}
                className="hidden items-center gap-1.5 text-sm font-semibold text-white sm:flex"
              >
                <Phone className="size-4 shrink-0 text-law-gold" aria-hidden />
                {PI_BRAND.phone}
              </a>
              <a
                href={`tel:${PI_BRAND.phoneTel}`}
                className="flex items-center justify-center rounded-full bg-law-gold px-3 py-2 text-xs font-bold uppercase tracking-wide text-law-navy-950 shadow-lg shadow-law-gold/20 transition hover:bg-law-gold-light sm:hidden"
              >
                Call
              </a>
              <Link
                href={`${PI_DEMO_BASE}#consult`}
                data-pi-open-consult
                className="hidden rounded-full bg-white px-3 py-2 text-[11px] font-bold uppercase tracking-wide text-law-navy-950 shadow-sm transition hover:bg-zinc-100 sm:inline-flex xl:px-4 xl:text-xs"
                onClick={() => setMenuOpen(false)}
              >
                Free consultation
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 p-2 text-white transition hover:bg-white/5 lg:hidden"
                aria-expanded={menuOpen}
                aria-controls="pi-primary-nav-mobile"
                onClick={() => setMenuOpen((o) => !o)}
              >
                {menuOpen ? <X className="size-5" strokeWidth={2} aria-hidden /> : <Menu className="size-5" aria-hidden />}
                <span className="sr-only">{menuOpen ? "Close menu" : "Open section menu"}</span>
              </button>
            </div>
          </div>

          {menuOpen ? (
            <nav
              id="pi-primary-nav-mobile"
              className="border-t border-white/10 pb-3 lg:hidden"
              aria-label="Page sections"
            >
              <ul className="flex max-h-[min(70vh,420px)] flex-col gap-0.5 overflow-y-auto pt-2">
                {PRIMARY_NAV.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      {...(href.endsWith("#consult") ? { "data-pi-open-consult": "" as const } : {})}
                      className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-zinc-200 hover:bg-white/5 hover:text-white"
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>
      </header>

      <main className="pb-24 md:pb-0">{children}</main>

      <nav
        className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#060d18]/95 px-2 py-2 backdrop-blur-lg md:hidden"
        aria-label="Quick contact"
      >
        <div className="mx-auto grid max-w-lg grid-cols-3 gap-2 text-center text-xs font-bold uppercase tracking-wide">
          <a
            href={`tel:${PI_BRAND.phoneTel}`}
            className="rounded-lg bg-law-gold py-3 text-law-navy-950 shadow-inner shadow-white/10"
          >
            Call
          </a>
          <Link
            href={`${PI_DEMO_BASE}#consult`}
            data-pi-open-consult
            className="rounded-lg border border-white/15 bg-white/5 py-3 text-white"
          >
            Consult
          </Link>
          <button
            type="button"
            className="rounded-lg border border-law-gold/40 bg-law-gold/10 py-3 text-law-gold"
            data-pi-open-chat
          >
            Chat
          </button>
        </div>
      </nav>

      <PiConsultModal />
      <AccidentChatbot />
    </>
  );
}
