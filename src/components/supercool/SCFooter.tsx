import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Wind, Facebook, Instagram } from "lucide-react";
import { SC_BUSINESS, SC_NAV_SERVICES, SC_NAV_MAIN } from "@/lib/supercool/data";

export default function SCFooter() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-sky-400 flex items-center justify-center">
                <Wind className="w-4.5 h-4.5 text-slate-950" />
              </div>
              <div className="leading-tight">
                <span className="block text-white font-bold text-base tracking-tight">Super Cool HVAC</span>
                <span className="block text-sky-400 text-[10px] font-semibold uppercase tracking-widest -mt-0.5">Charlotte, NC</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Honest HVAC service for Charlotte homeowners and businesses. Locally owned, no-pressure, and committed to energy-efficient solutions.
            </p>
            <div className="flex gap-3">
              <a href={SC_BUSINESS.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:bg-slate-700 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={SC_BUSINESS.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:bg-slate-700 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              {SC_NAV_SERVICES.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-400 text-sm hover:text-sky-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              {SC_NAV_MAIN.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-400 text-sm hover:text-sky-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href={SC_BUSINESS.phoneHref} className="flex items-start gap-2.5 text-slate-400 hover:text-sky-400 transition-colors group">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-sky-400" />
                  <span className="text-sm">{SC_BUSINESS.phone}</span>
                </a>
              </li>
              <li>
                <a href={SC_BUSINESS.emailHref} className="flex items-start gap-2.5 text-slate-400 hover:text-sky-400 transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-sky-400" />
                  <span className="text-sm">{SC_BUSINESS.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-sky-400" />
                <span className="text-sm">{SC_BUSINESS.address}</span>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-sky-400" />
                <div className="text-sm">
                  <p>{SC_BUSINESS.hours.weekday}</p>
                  <p>{SC_BUSINESS.hours.weekend}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} Super Cool HVAC. All rights reserved. Charlotte, NC.
          </p>
          <p className="text-slate-600 text-xs">Demo site — built by LaunchSiteDemo.com</p>
        </div>
      </div>

      {/* Mobile bottom spacer for sticky bar */}
      <div className="h-14 lg:hidden" aria-hidden="true" />
    </footer>
  );
}
