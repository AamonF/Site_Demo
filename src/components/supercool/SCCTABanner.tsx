import Link from "next/link";
import { Phone } from "lucide-react";
import { SC_BUSINESS } from "@/lib/supercool/data";

interface SCCTABannerProps {
  headline?: string;
  subheadline?: string;
  ctaLabel?: string;
  ctaHref?: string;
  showPhone?: boolean;
  variant?: "sky" | "teal" | "dark";
}

export default function SCCTABanner({
  headline = "Ready to Get Started?",
  subheadline = "Contact our team for a free assessment and honest recommendation.",
  ctaLabel = "Request Service",
  ctaHref = "/supercoolhvac/contact",
  showPhone = true,
  variant = "dark",
}: SCCTABannerProps) {
  const bg =
    variant === "sky"
      ? "bg-sky-400"
      : variant === "teal"
      ? "bg-teal-500"
      : "bg-slate-900 border border-slate-800/60";

  const textColor = variant === "dark" ? "text-white" : "text-slate-950";
  const subColor = variant === "dark" ? "text-slate-400" : "text-slate-800";

  return (
    <section className={`${bg} py-14 lg:py-16`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-2xl sm:text-3xl font-bold ${textColor} mb-3`}>{headline}</h2>
        <p className={`${subColor} text-base mb-8 max-w-xl mx-auto`}>{subheadline}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={ctaHref}
            className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-colors ${
              variant === "dark"
                ? "bg-sky-400 text-slate-950 hover:bg-sky-300"
                : "bg-slate-950 text-white hover:bg-slate-800"
            }`}
          >
            {ctaLabel}
          </Link>
          {showPhone && (
            <a
              href={SC_BUSINESS.phoneHref}
              className={`flex items-center gap-2 font-semibold text-sm transition-colors ${
                variant === "dark" ? "text-sky-400 hover:text-sky-300" : "text-slate-800 hover:text-slate-950"
              }`}
            >
              <Phone className="w-4 h-4" />
              {SC_BUSINESS.phone}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
