import Link from "next/link";
import { Zap, Mail, ExternalLink } from "lucide-react";

const demoLinks = [
  { label: "Super Cool HVAC", href: "/supercoolhvac" },
  { label: "Prime Comfort", href: "/primecomfort" },
  { label: "Heating & Air Connect", href: "/heatingandairconnect" },
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Demo Examples", href: "#demo-examples" },
  { label: "Why It Works", href: "#why-it-works" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 group mb-4"
              aria-label="Launch Site Demo"
            >
              <div className="w-8 h-8 rounded-lg bg-accent-600 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Launch Site Demo
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-slate-400">
              I build modern, high-converting demo websites for local service
              businesses — so they can see exactly what their upgraded site
              could look like before committing.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-slate-400">
              <Mail className="w-4 h-4 flex-shrink-0 text-accent-500" />
              <a
                href="mailto:hello@launchsitedemo.com"
                className="hover:text-white transition-colors"
              >
                hello@launchsitedemo.com
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Demo links */}
          <div>
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Demo Examples
            </h3>
            <ul className="space-y-2.5">
              {demoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors group"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Launch Site Demo. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Custom website demos for local service businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
