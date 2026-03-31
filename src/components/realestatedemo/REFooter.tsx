import Link from "next/link";

import { COMPANY, PHONE, PHONE_HREF } from "./constants";

const cols = [
  {
    title: "Explore",
    links: [
      { label: "Listings", href: "#listings" },
      { label: "Buying", href: "#buying-selling" },
      { label: "Selling", href: "#buying-selling" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Service areas", href: "#service-areas" },
    ],
  },
];

export default function REFooter() {
  return (
    <footer className="bg-[#111] text-neutral-400 border-t border-white/10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="#home" className="inline-flex items-center gap-2">
              <span className="h-9 w-9 rounded-sm bg-white flex items-center justify-center text-[10px] font-semibold text-neutral-900">
                RE
              </span>
              <span className="font-serif text-xl text-white">{COMPANY}</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-md">
              Luxury real estate demo for presentation. Replace placeholders with your brand,
              markets, and MLS integration.
            </p>
            <a href={PHONE_HREF} className="mt-6 inline-flex text-white font-semibold hover:text-[#e8d5a3] transition-colors">
              {PHONE}
            </a>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-4">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <a href={l.href} className="text-sm hover:text-white transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} {COMPANY}. Demo site.</p>
          <p className="text-neutral-500">Built for launchsitedemo — not for production indexing.</p>
        </div>
      </div>
    </footer>
  );
}
