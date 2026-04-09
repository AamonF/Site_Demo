"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";

import { CdConsultModal } from "./CdConsultModal";
import { CD_BRAND, CD_DEMO_BASE } from "./site-config";
import { DefenseCaseAssistant } from "./DefenseCaseAssistant";

const bannerOffsetClass = "top-[22px]";

const PRIMARY_NAV = [
  { href: `${CD_DEMO_BASE}#trust`, label: "Why trust us" },
  { href: `${CD_DEMO_BASE}#practice-areas`, label: "Practice areas" },
  { href: `${CD_DEMO_BASE}#why-us`, label: "Approach" },
  { href: `${CD_DEMO_BASE}#results`, label: "Outcomes" },
  { href: `${CD_DEMO_BASE}#attorney`, label: "Attorney" },
  { href: `${CD_DEMO_BASE}#testimonials`, label: "Clients" },
  { href: `${CD_DEMO_BASE}#process`, label: "Process" },
  { href: `${CD_DEMO_BASE}#faq`, label: "FAQ" },
  { href: `${CD_DEMO_BASE}#consult`, label: "Contact" },
] as const;

export function CdDemoChrome({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`sticky ${bannerOffsetClass} z-40 border-b border-white/10 bg-[#03060c]/92 backdrop-blur-md`}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center justify-between gap-3 py-3">
            <Link
              href={CD_DEMO_BASE}
              className="group flex min-w-0 shrink flex-col leading-tight"
              onClick={() => setMenuOpen(false)}
            >
              <span className="truncate font-display text-base font-semibold tracking-tight text-white transition-colors group-hover:text-law-gold sm:text-lg md:text-xl">
                {CD_BRAND.publicLabel}
              </span>
              <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500 sm:block">
                {CD_BRAND.tagline}
              </span>
            </Link>

            <nav
              className="hidden flex-1 items-center justify-center gap-0.5 px-2 lg:flex xl:gap-1"
              aria-label="Page sections"
            >
              {PRIMARY_NAV.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  {...(href.endsWith("#consult") ? { "data-cd-open-consult": "" as const } : {})}
                  className="whitespace-nowrap rounded-lg px-1.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-zinc-500 transition hover:bg-white/5 hover:text-white xl:px-2 xl:text-xs"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-shrink-0 items-center gap-1.5 sm:gap-3 md:gap-4">
              <a
                href={`tel:${CD_BRAND.phoneTel}`}
                className="hidden items-center gap-1.5 text-sm font-semibold text-white sm:flex"
              >
                <Phone className="size-4 shrink-0 text-law-gold" aria-hidden />
                {CD_BRAND.phone}
              </a>
              <a
                href={`tel:${CD_BRAND.phoneTel}`}
                className="flex items-center justify-center rounded-full bg-law-gold px-3 py-2 text-xs font-bold uppercase tracking-wide text-law-navy-950 shadow-lg shadow-law-gold/15 transition hover:bg-law-gold-light sm:hidden"
              >
                Call
              </a>
              <Link
                href={`${CD_DEMO_BASE}#consult`}
                data-cd-open-consult
                className="hidden rounded-full border border-white/15 bg-white/5 px-3 py-2 text-[11px] font-bold uppercase tracking-wide text-white transition hover:bg-white/10 sm:inline-flex xl:px-4 xl:text-xs"
                onClick={() => setMenuOpen(false)}
              >
                Free consultation
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 p-2 text-white transition hover:bg-white/5 lg:hidden"
                aria-expanded={menuOpen}
                aria-controls="cd-primary-nav-mobile"
                onClick={() => setMenuOpen((o) => !o)}
              >
                {menuOpen ? <X className="size-5" strokeWidth={2} aria-hidden /> : <Menu className="size-5" aria-hidden />}
                <span className="sr-only">{menuOpen ? "Close menu" : "Open section menu"}</span>
              </button>
            </div>
          </div>

          {menuOpen ? (
            <nav
              id="cd-primary-nav-mobile"
              className="border-t border-white/10 pb-3 lg:hidden"
              aria-label="Page sections"
            >
              <ul className="flex max-h-[min(70vh,420px)] flex-col gap-0.5 overflow-y-auto pt-2">
                {PRIMARY_NAV.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      {...(href.endsWith("#consult") ? { "data-cd-open-consult": "" as const } : {})}
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
        className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#03060c]/96 px-2 py-2 backdrop-blur-lg md:hidden"
        aria-label="Quick contact"
      >
        <div className="mx-auto grid max-w-lg grid-cols-3 gap-2 text-center text-xs font-bold uppercase tracking-wide">
          <a
            href={`tel:${CD_BRAND.phoneTel}`}
            className="rounded-lg bg-law-gold py-3 text-law-navy-950 shadow-inner shadow-white/10"
          >
            Call
          </a>
          <Link
            href={`${CD_DEMO_BASE}#consult`}
            data-cd-open-consult
            className="rounded-lg border border-white/15 bg-white/5 py-3 text-white"
          >
            Consult
          </Link>
          <button
            type="button"
            className="rounded-lg border border-law-gold/35 bg-law-gold/10 py-3 text-law-gold"
            data-cd-open-chat
          >
            Chat
          </button>
        </div>
      </nav>

      <CdConsultModal />
      <DefenseCaseAssistant />
    </>
  );
}
