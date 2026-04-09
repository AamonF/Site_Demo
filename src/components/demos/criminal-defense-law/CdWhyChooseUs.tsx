import { Gavel, Lock, PhoneCall, Shield, Target } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Strategic defense—not chaos",
    body: "We map the prosecution’s theory, then dismantle weak links with motions, investigation, and disciplined trial prep.",
  },
  {
    icon: Gavel,
    title: "Courtroom experience that shows",
    body: "Judges respect preparation. We show up ready—with a record earned in hearings, motions practice, and trial.",
  },
  {
    icon: PhoneCall,
    title: "Immediate response when minutes matter",
    body: "Bond hearings, protective orders, and investigator contact can move fast. We prioritize urgent deadlines.",
  },
  {
    icon: Lock,
    title: "Discreet handling",
    body: "Your reputation, employment, and family life can be collateral targets. We keep intake professional and confidential.",
  },
  {
    icon: Shield,
    title: "Client-first communication",
    body: "You get clear explanations, realistic ranges, and a defense plan you can understand—without condescension.",
  },
] as const;

export function CdWhyChooseUs() {
  return (
    <section id="why-us" className="scroll-mt-28 border-b border-white/10 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-law-gold">Why choose us</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">Aggressive where it counts. Calm when you need steady guidance.</h2>
          <p className="mt-4 text-zinc-400">
            Criminal defense is not about loud talk—it is about leverage. We build leverage through preparation, credibility, and timing.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, body }) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <Icon className="size-7 text-law-gold" aria-hidden />
              <h3 className="mt-4 font-display text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
