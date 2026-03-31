import { Phone, Mail, MapPin, Leaf, Clock } from "lucide-react";
import { PHONE, PHONE_HREF, CITY } from "./constants";

const services = [
  "Lawn Care",
  "Landscape Design",
  "Mulching & Planting",
  "Hardscaping",
  "Yard Maintenance",
  "Outdoor Lighting",
];

const areas = [
  "[City]",
  "Charlotte",
  "Concord",
  "Huntersville",
  "Mooresville",
  "Kannapolis",
  "Davidson",
  "Cornelius",
];

export default function LDFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 bg-emerald-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-950/40">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-white font-bold text-base block leading-tight">
                  [Company Name]
                </span>
                <span className="text-emerald-400/90 text-[10px] font-semibold tracking-widest uppercase">
                  Landscape Studio
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5 text-stone-400">
              Premium landscaping and outdoor services in {CITY} — design, installation, and care
              that holds up season after season.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Services</h3>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm hover:text-emerald-400 transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
              Service areas
            </h3>
            <ul className="flex flex-col gap-2.5">
              {areas.map((a) => (
                <li key={a} className="flex items-center gap-1.5 text-sm">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  {a}, NC
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Contact</h3>
            <div className="flex flex-col gap-4 text-sm">
              <a href={PHONE_HREF} className="flex items-start gap-3 group">
                <div className="w-9 h-9 bg-emerald-950 border border-emerald-800 rounded-lg flex items-center justify-center shrink-0 group-hover:border-emerald-600 transition-colors">
                  <Phone className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <span className="text-stone-500 text-xs uppercase tracking-wide block">Phone</span>
                  <span className="text-white font-semibold group-hover:text-emerald-400 transition-colors">
                    {PHONE}
                  </span>
                </div>
              </a>
              <a href="mailto:hello@companyname.com" className="flex items-start gap-3 group">
                <div className="w-9 h-9 bg-emerald-950 border border-emerald-800 rounded-lg flex items-center justify-center shrink-0 group-hover:border-emerald-600 transition-colors">
                  <Mail className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <span className="text-stone-500 text-xs uppercase tracking-wide block">Email</span>
                  <span className="text-white font-semibold group-hover:text-emerald-400 transition-colors">
                    hello@companyname.com
                  </span>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-emerald-950 border border-emerald-800 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <span className="text-stone-500 text-xs uppercase tracking-wide block">Hours</span>
                  <span className="text-white font-semibold">Mon–Sat 7am–6pm</span>
                  <span className="text-stone-500 text-xs block">Sun by appointment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-stone-500 text-xs text-center sm:text-left">
            &copy; {year} [Company Name]. Demo preview.
          </p>
          <div className="flex items-center gap-5 text-xs">
            <a href="#" className="text-stone-500 hover:text-stone-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-stone-500 hover:text-stone-400 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
