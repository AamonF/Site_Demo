import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BASE, COMPANY } from "@/lib/accarolinas/data";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface ACCPageHeroProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
  ctaLabel?: string;
  ctaHref?: string;
  showCTA?: boolean;
}

export default function ACCPageHero({
  eyebrow,
  title,
  titleAccent,
  description,
  breadcrumbs,
  ctaLabel = "Request Free Estimate",
  ctaHref,
  showCTA = true,
}: ACCPageHeroProps) {
  return (
    <section className="relative bg-zinc-950 pt-32 pb-20 overflow-hidden">
      {/* Background grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(251,191,36,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Amber glow */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #f59e0b, transparent 70%)" }}
      />
      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-zinc-800" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 mb-6" aria-label="Breadcrumb">
            <Link href={BASE} className="text-zinc-500 hover:text-zinc-300 text-xs transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-zinc-700" />
                {crumb.href ? (
                  <Link href={crumb.href} className="text-zinc-500 hover:text-zinc-300 text-xs transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-zinc-300 text-xs">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {eyebrow && (
          <div className="inline-flex items-center gap-2 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">{eyebrow}</span>
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-4 max-w-3xl">
          {title}
          {titleAccent && (
            <>
              {" "}
              <span className="text-amber-500">{titleAccent}</span>
            </>
          )}
        </h1>

        {description && (
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mb-8">{description}</p>
        )}

        {showCTA && (
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={ctaHref ?? `${BASE}/contact`}
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 px-6 py-3 rounded-md text-sm font-bold transition-all duration-200"
            >
              {ctaLabel}
            </Link>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-zinc-500 text-white px-6 py-3 rounded-md text-sm font-semibold transition-colors"
            >
              Call {COMPANY.phone}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
