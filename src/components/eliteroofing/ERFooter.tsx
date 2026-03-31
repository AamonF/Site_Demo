import { Phone, Mail, MapPin, Shield, Facebook, Instagram, Star } from "lucide-react";

const PHONE = "(704) 555-0123";
const PHONE_HREF = "tel:7045550123";

const services = [
  "Roof Repair",
  "Roof Replacement",
  "Storm Damage Repair",
  "Roof Inspections",
  "Commercial Roofing",
  "Gutters & Flashing",
];

const areas = [
  "[City]", "Charlotte", "Concord", "Huntersville",
  "Mooresville", "Kannapolis", "Davidson", "Cornelius",
];

export default function ERFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand col */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-600/25">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-white font-black text-base block leading-tight">
                  [Company Name]
                </span>
                <span className="text-red-500 text-[10px] font-bold tracking-widest uppercase">
                  Roofing Experts
                </span>
              </div>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5">
              [City]&apos;s most trusted roofing contractor. Licensed, insured, and backed by 15+ years of excellence across NC.
            </p>
            {/* Stars */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-zinc-400 text-xs">4.9 / 5 — 200+ Reviews</span>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services col */}
          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-widest mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-zinc-400 hover:text-red-400 text-sm transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas col */}
          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-widest mb-4">
              Service Areas
            </h4>
            <ul className="flex flex-col gap-2.5">
              {areas.map((a) => (
                <li key={a}>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-red-400 text-sm transition-colors flex items-center gap-1.5"
                  >
                    <MapPin className="w-3 h-3 text-red-600 flex-shrink-0" />
                    {a}, NC
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-widest mb-4">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href={PHONE_HREF}
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 bg-red-600/10 border border-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-red-600/20 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-red-500" />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs uppercase tracking-wide mb-0.5">Phone</p>
                  <p className="text-white font-bold text-sm group-hover:text-red-400 transition-colors">
                    {PHONE}
                  </p>
                </div>
              </a>

              <a
                href="mailto:info@[companyname].com"
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 bg-red-600/10 border border-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-red-600/20 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-red-500" />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs uppercase tracking-wide mb-0.5">Email</p>
                  <p className="text-white font-bold text-sm group-hover:text-red-400 transition-colors">
                    info@[companyname].com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-600/10 border border-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs uppercase tracking-wide mb-0.5">Location</p>
                  <p className="text-white font-bold text-sm">[City], NC</p>
                  <p className="text-zinc-500 text-xs">Mon–Sat 7am–7pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-zinc-500 text-xs text-center sm:text-left">
            &copy; {year} [Company Name] Roofing. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors">
              Terms of Service
            </a>
            <span className="text-zinc-700 text-xs hidden sm:inline">
              NC Contractor Lic. #XXXXX
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
