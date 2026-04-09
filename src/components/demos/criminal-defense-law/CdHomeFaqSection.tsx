import { homeFaqs } from "./home-content";
import { CdFaqAccordion } from "./CdFaqAccordion";

export function CdHomeFaqSection() {
  return (
    <section id="faq" className="scroll-mt-28 border-b border-white/10 bg-[#050810] py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-semibold text-white sm:text-4xl">Frequently asked questions</h2>
        <p className="mt-3 text-center text-sm text-zinc-500">
          Straight answers to stressful questions—without pretending every case is identical.
        </p>
        <div className="mt-10">
          <CdFaqAccordion items={homeFaqs} idPrefix="home-faq" />
        </div>
      </div>
    </section>
  );
}
