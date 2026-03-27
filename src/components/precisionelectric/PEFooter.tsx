import { Phone, Mail, MapPin, Zap, Facebook, Instagram } from "lucide-react";

interface Props {
  phone: string;
  city: string;
  company: string;
}

const SERVICES_LIST = [
  "Panel Upgrades",
  "Wiring & Rewiring",
  "Lighting Installation",
  "EV Charger Installation",
  "Troubleshooting",
  "Commercial Electrical",
];

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Service Area", href: "#service-area" },
];

export default function PEFooter({ phone, city, company }: Props) {
  const rawPhone = phone.replace(/\D/g, "");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-zinc-800/60">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-black fill-black" />
              </div>
              <div>
                <p className="font-black text-white text-base leading-none">{company}</p>
                <p className="text-yellow-400 text-[10px] font-bold uppercase tracking-widest leading-none mt-0.5">
                  Electrical Services
                </p>
              </div>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5">
              Licensed, insured electricians serving {city}, NC. Code-compliant work backed by a
              100% satisfaction guarantee.
            </p>
            {/* Social */}
            <div className="flex gap-2">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-white font-black text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2.5">
              {SERVICES_LIST.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-zinc-400 hover:text-yellow-400 text-sm transition-colors flex items-center gap-1.5"
                  >
                    <div className="w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-white font-black text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-yellow-400 text-sm transition-colors flex items-center gap-1.5"
                  >
                    <div className="w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-white font-black text-sm uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${rawPhone}`}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 bg-yellow-400/10 border border-yellow-400/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400/20 transition-colors">
                    <Phone className="w-3.5 h-3.5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider mb-0.5">
                      Phone
                    </p>
                    <p className="text-white font-bold text-sm group-hover:text-yellow-400 transition-colors">
                      {phone}
                    </p>
                    <p className="text-zinc-500 text-xs">24/7 Emergency Line</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-3.5 h-3.5 text-zinc-400" />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider mb-0.5">
                      Email
                    </p>
                    <p className="text-zinc-300 text-sm">info@companyname.com</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider mb-0.5">
                      Service Area
                    </p>
                    <p className="text-zinc-300 text-sm">{city}, NC &amp; Surrounding Areas</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <p>
            © {currentYear} {company}. All rights reserved. · Licensed Electrician · {city}, NC
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
