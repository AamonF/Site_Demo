import { testimonials } from "./home-content";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="scroll-mt-28 border-b border-white/10 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">Clients don’t hire us for polite—</h2>
          <p className="mt-3 text-lg text-zinc-400">they hire us for outcomes.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <blockquote className="flex-1 text-lg leading-relaxed text-zinc-200">“{t.quote}”</blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-sm text-zinc-500">{t.meta}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
