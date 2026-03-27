"use client";

import { Wind, Phone, MapPin, Mail } from "lucide-react";

const PHONE = "(704) 555-0123";
const PHONE_HREF = "tel:+17045550123";

const services = [
  "AC Repair",
  "AC Installation",
  "Heating Repair",
  "Furnace Replacement",
  "Maintenance Plans",
  "Indoor Air Quality",
];

const serviceAreas = [
  "[City], NC",
  "Concord, NC",
  "Kannapolis, NC",
  "Mooresville, NC",
  "Gastonia, NC",
  "Huntersville, NC",
];

export default function CHFooter() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-white">

      {/* Top CTA bar */}
      <div className="bg-blue-600 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white font-semibold text-sm sm:text-base">
            Ready to get comfortable? We respond fast — often same day.
          </p>
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-6 py-2.5 rounded-xl font-bold text-sm transition-colors flex-shrink-0"
          >
            <Phone className="w-4 h-4" />
            {PHONE}
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center">
                <Wind className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <p className="font-bold text-white text-sm">[Company Name]</p>
                <p className="text-blue-400 text-[10px] uppercase tracking-widest">HVAC Experts</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Serving [City], NC and surrounding communities with honest, fast, and reliable HVAC services.
            </p>
            <div className="space-y-2.5">
              <a href={PHONE_HREF} className="flex items-center gap-2.5 text-slate-400 hover:text-blue-400 text-sm transition-colors">
                <Phone className="w-4 h-4" />
                {PHONE}
              </a>
              <div className="flex items-center gap-2.5 text-slate-400 text-sm">
                <MapPin className="w-4 h-4" />
                [City], NC
              </div>
              <a href="mailto:info@companynameHVAC.com" className="flex items-center gap-2.5 text-slate-400 hover:text-blue-400 text-sm transition-colors">
                <Mail className="w-4 h-4" />
                info@[company].com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => handleNav("#services")}
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Service Areas</h3>
            <ul className="space-y-2.5">
              {serviceAreas.map((a) => (
                <li key={a}>
                  <button
                    onClick={() => handleNav("#service-area")}
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors text-left"
                  >
                    {a}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Hours */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Hours</h3>
            <ul className="space-y-2">
              {[
                { day: "Mon – Fri", hours: "7:00am – 8:00pm" },
                { day: "Saturday", hours: "8:00am – 6:00pm" },
                { day: "Sunday", hours: "Emergency Only" },
              ].map(({ day, hours }) => (
                <li key={day} className="flex justify-between text-sm">
                  <span className="text-slate-400">{day}</span>
                  <span className="text-white font-medium">{hours}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-2xl">
              <p className="text-emerald-400 font-bold text-xs uppercase tracking-wide mb-1">Emergency Service</p>
              <p className="text-white text-sm font-semibold">{PHONE}</p>
              <p className="text-slate-500 text-xs mt-0.5">Available 24/7 for urgent issues</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} [Company Name]. All rights reserved. · [City], NC</p>
          <div className="flex items-center gap-4">
            <span>Licensed & Insured · NC Certified</span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span>4.9★ Rated</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
