import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb { label: string; href?: string }

interface SCPageHeroProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  breadcrumbs?: Crumb[];
  ctaLabel?: string;
  ctaHref?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
}

export default function SCPageHero({
  eyebrow,
  headline,
  subheadline,
  breadcrumbs,
  ctaLabel,
  ctaHref,
  ctaSecondaryLabel,
  ctaSecondaryHref,
}: SCPageHeroProps) {
  return (
    <section className="relative bg-slate-950 pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-sky-400/8 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 mb-6 flex-wrap" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-600" />}
                {crumb.href ? (
                  <Link href={crumb.href} className="text-slate-500 text-xs hover:text-sky-400 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-slate-400 text-xs">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {eyebrow && (
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
            {eyebrow}
          </p>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mb-4">
          {headline}
        </h1>

        {subheadline && (
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed mb-8">
            {subheadline}
          </p>
        )}

        {(ctaLabel || ctaSecondaryLabel) && (
          <div className="flex flex-wrap gap-3">
            {ctaLabel && ctaHref && (
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-400 text-slate-950 font-bold text-sm hover:bg-sky-300 transition-colors"
              >
                {ctaLabel}
              </Link>
            )}
            {ctaSecondaryLabel && ctaSecondaryHref && (
              <Link
                href={ctaSecondaryHref}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 text-slate-300 font-medium text-sm hover:border-sky-400/40 hover:text-white transition-colors"
              >
                {ctaSecondaryLabel}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
