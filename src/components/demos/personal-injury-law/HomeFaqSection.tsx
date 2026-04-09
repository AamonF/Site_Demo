import { homeFaqs } from "./home-content";
import { FaqAccordion } from "./FaqAccordion";

export function HomeFaqSection() {
  return (
    <section id="faq" className="scroll-mt-28 border-b border-white/10 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-semibold text-white sm:text-4xl">FAQ</h2>
        <p className="mt-3 text-center text-lg text-zinc-400">Straight answers—before you ever step into our office.</p>
        <div className="mt-10">
          <FaqAccordion items={homeFaqs} idPrefix="home-faq" />
        </div>
      </div>
    </section>
  );
}
