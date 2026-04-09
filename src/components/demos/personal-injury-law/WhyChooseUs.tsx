import { Flame, Handshake, PhoneCall, Scale, Trophy } from "lucide-react";

import { whyChoose } from "./home-content";

const icons = [Flame, Scale, Handshake, PhoneCall, Trophy];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="scroll-mt-28 border-b border-white/10 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">Why choose us</h2>
            <p className="mt-4 text-lg text-zinc-400">
              We’re built for one thing: winning serious injury cases against well-funded opponents. Polished service.
              Relentless execution.
            </p>
            <div className="mt-8 rounded-2xl border border-law-gold/25 bg-gradient-to-br from-law-gold/10 to-transparent p-6">
              <p className="font-display text-xl text-white">We don’t chase volume—we build strength.</p>
              <p className="mt-2 text-sm text-zinc-400">
                Your case gets attention from attorneys who understand insurance tactics, medical proof, and what juries
                respond to.
              </p>
            </div>
          </div>
          <ul className="space-y-4">
            {whyChoose.map((item, i) => {
              const Icon = icons[i] ?? Flame;
              return (
                <li
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-law-gold/30"
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-law-gold/15 text-law-gold">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-zinc-400">{item.body}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
