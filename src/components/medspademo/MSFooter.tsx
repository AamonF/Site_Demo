import Link from "next/link";
import { Instagram, Facebook, Linkedin } from "lucide-react";

import { CITY, COMPANY, PHONE, PHONE_HREF } from "./constants";

const treatmentLinks = [
  { label: "Botox", href: "#treatments" },
  { label: "Dermal Fillers", href: "#treatments" },
  { label: "Skin Rejuvenation", href: "#treatments" },
  { label: "Laser Treatments", href: "#treatments" },
];

export default function MSFooter() {
  return (
    <footer className="border-t border-[#e8dfd8] bg-[#f7f3ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-serif text-xl text-[#2c2825]">{COMPANY}</p>
            <p className="mt-3 text-sm text-[#5c534c] leading-relaxed max-w-xs">
              Luxury aesthetic treatments in {CITY}. Personalized plans, natural-looking results.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://instagram.com"
                className="p-2 rounded-full bg-[#faf8f6] ring-1 ring-[#e8dfd8] text-[#5c534c] hover:text-[#2c2825] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                className="p-2 rounded-full bg-[#faf8f6] ring-1 ring-[#e8dfd8] text-[#5c534c] hover:text-[#2c2825] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                className="p-2 rounded-full bg-[#faf8f6] ring-1 ring-[#e8dfd8] text-[#5c534c] hover:text-[#2c2825] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a8897c]">
              Treatments
            </h3>
            <ul className="mt-4 space-y-2">
              {treatmentLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[#5c534c] hover:text-[#2c2825] transition-colors text-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a8897c]">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-[#5c534c]">
              <li>
                <a href={PHONE_HREF} className="hover:text-[#2c2825] transition-colors">
                  {PHONE}
                </a>
              </li>
              <li>hello@companyname.com</li>
              <li>{CITY}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a8897c]">
              Hours
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-[#5c534c]">
              <li>Mon–Fri: 9:00am – 6:00pm</li>
              <li>Sat: 10:00am – 3:00pm</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#e8dfd8]/80 flex flex-col sm:flex-row justify-between gap-4 text-xs text-[#8b7e74]">
          <p>© {new Date().getFullYear()} {COMPANY}. Demo presentation.</p>
          <p>
            <Link href="#home" className="hover:text-[#2c2825] transition-colors">
              Back to top
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
