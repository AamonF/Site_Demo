import Link from "next/link";
import { Layers, Mail, ExternalLink } from "lucide-react";
import { FooterRequestDemoLink } from "@/components/launch/FooterRequestDemoLink";

const demoLinks = [
  { label: "Plumbing demo", href: "/plumbing-demo" },
  { label: "Landscaping demo", href: "/landscaping-demo" },
  { label: "HVAC demo", href: "/hvac-demo" },
  { label: "Electrical demo", href: "/electrical-demo" },
  { label: "Law Firm demo", href: "/lawyer-demo" },
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Process", href: "#how-it-works" },
  { label: "Demos", href: "#demo-examples" },
  { label: "Why it works", href: "#why-it-works" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2.5 group mb-4"
              aria-label="Launch Site Demo"
            >
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center">
                <Layers className="w-[18px] h-[18px] text-zinc-900" strokeWidth={2} />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Launch Site Demo
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm text-zinc-400">
              Custom demo websites for local service businesses—built so owners
              can preview a stronger online presence before they buy in.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-zinc-400">
              <Mail className="w-4 h-4 flex-shrink-0 text-accent-500" />
              <a
                href="mailto:hello@launchsitedemo.com"
                className="hover:text-white transition-colors"
              >
                hello@launchsitedemo.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">
              Navigate
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <FooterRequestDemoLink />
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">
              Live demos
            </h3>
            <ul className="space-y-2.5">
              {demoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors group"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800/80 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} Launch Site Demo. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600">
            Preview-first websites for local service brands.
          </p>
        </div>
      </div>
    </footer>
  );
}
