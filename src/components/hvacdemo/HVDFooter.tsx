import Link from "next/link";

import { CITY, COMPANY, PHONE, PHONE_HREF } from "./constants";

const serviceLinks = [
  { label: "AC Repair", href: "#services" },
  { label: "AC Installation", href: "#services" },
  { label: "Heating Repair", href: "#services" },
  { label: "Furnace Replacement", href: "#services" },
  { label: "Maintenance Plans", href: "#services" },
  { label: "Indoor Air Quality", href: "#services" },
];

export default function HVDFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-bold text-xl text-slate-900">{COMPANY}</p>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-xs">
              Premium heating and cooling services in {CITY}. Fast response, honest pricing, and
              workmanship you can trust.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-slate-600 hover:text-slate-900 transition-colors text-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <a href={PHONE_HREF} className="hover:text-slate-900 transition-colors font-medium">
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@companyname.com"
                  className="hover:text-slate-900 transition-colors"
                >
                  hello@companyname.com
                </a>
              </li>
              <li>{CITY}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
              Service area &amp; hours
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <span className="font-medium text-slate-800">Service area:</span> {CITY} and
                surrounding communities
              </li>
              <li>
                <span className="font-medium text-slate-800">Mon–Fri:</span> 7:00am – 7:00pm
              </li>
              <li>
                <span className="font-medium text-slate-800">Sat:</span> 8:00am – 5:00pm
              </li>
              <li>
                <span className="font-medium text-slate-800">Sun:</span> Emergency service available
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {COMPANY}. Demo page.</p>
          <p className="sm:text-right">Licensed &amp; insured · Financing available</p>
        </div>
      </div>
    </footer>
  );
}
