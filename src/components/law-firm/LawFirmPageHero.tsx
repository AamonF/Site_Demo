type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export function LawFirmPageHero({
  eyebrow,
  title,
  subtitle,
  align = "left",
  dark = true,
}: Props) {
  return (
    <div
      className={`relative overflow-hidden border-b ${
        dark
          ? "bg-law-navy-950 border-white/10 text-white"
          : "bg-slate-50 border-slate-200 text-law-navy-950"
      }`}
    >
      {!dark && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_100%_-20%,rgba(201,162,39,0.08),transparent_50%)] pointer-events-none" />
      )}
      {dark && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_0%,rgba(201,162,39,0.12),transparent_55%)] pointer-events-none" />
      )}
      <div
        className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-28 ${
          align === "center" ? "text-center max-w-4xl mx-auto" : ""
        }`}
      >
        {eyebrow && (
          <p
            className={`font-semibold text-sm uppercase tracking-[0.2em] mb-3 ${
              dark ? "text-law-gold-light" : "text-law-gold-dark"
            }`}
          >
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-balance leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mt-5 text-lg leading-relaxed max-w-3xl ${
              dark ? "text-slate-400" : "text-slate-600"
            } ${align === "center" ? "mx-auto" : ""}`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
