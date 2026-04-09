type Props = {
  title: string;
  subtitle?: string;
};

export function CdStripCta({ title, subtitle }: Props) {
  return (
    <section className="border-b border-white/10 bg-gradient-to-r from-law-gold/15 via-law-gold/5 to-transparent py-10">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="font-display text-xl font-semibold text-white sm:text-2xl">{title}</p>
        {subtitle ? <p className="mt-2 text-sm text-zinc-400">{subtitle}</p> : null}
      </div>
    </section>
  );
}
