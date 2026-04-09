"use client";

const DEFAULT_LINKS = [
  { href: "#overview", label: "Overview" },
  { href: "#pain", label: "Concerns" },
  { href: "#situations", label: "Situations" },
  { href: "#why-matters", label: "Why act" },
  { href: "#why-firm", label: "Why us" },
  { href: "#team", label: "Attorneys" },
  { href: "#results", label: "Results" },
  { href: "#faq", label: "FAQ" },
  { href: "#local", label: "Local" },
  { href: "#resources", label: "Reading" },
  { href: "#contact", label: "Contact" },
] as const;

type LinkItem = { href: string; label: string };

type Props = {
  /** When provided, overrides default anchor labels (e.g. unique SEO headings per practice) */
  links?: LinkItem[];
};

export function LawFirmPracticeQuickNav({ links }: Props) {
  const items = links?.length ? links : [...DEFAULT_LINKS];

  return (
    <nav
      aria-label="On this page"
      className="hidden xl:block sticky top-28 self-start rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-sm p-5 shadow-sm max-w-[14rem]"
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">
        On this page
      </p>
      <ul className="space-y-1.5 text-sm">
        {items.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-slate-600 hover:text-law-navy-900 hover:underline underline-offset-4 decoration-law-gold/50"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
