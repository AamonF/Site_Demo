const faqs = [
  {
    q: "Do I need a consultation first?",
    a: "In most situations, yes. A consultation helps us understand your facts, timeline, and objectives—and helps you understand how we can assist. It also allows us to identify urgent deadlines or filing requirements.",
  },
  {
    q: "What types of cases do you handle?",
    a: "We handle a broad range of matters across personal injury, criminal defense, family law, business law, estate planning, and civil litigation. If your issue falls outside our practice, we will tell you directly and may suggest alternative resources.",
  },
  {
    q: "How soon should I contact an attorney?",
    a: "Earlier is often better—especially when deadlines, evidence preservation, or negotiations are involved. If you are unsure whether timing matters, contact us and we can help you assess urgency.",
  },
  {
    q: "How are fees discussed?",
    a: "Fee structures depend on the matter. During your consultation, we explain how fees and costs are handled so you can make an informed decision before moving forward.",
  },
] as const;

export default function LDFAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-20 md:py-24 bg-white border-t border-slate-200/80"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[#8b6914] text-xs font-semibold uppercase tracking-[0.22em] text-center">
          FAQ
        </p>
        <h2 id="faq-heading" className="mt-3 text-3xl sm:text-4xl text-[#0a1628] text-center">
          Common questions
        </h2>
        <p className="mt-4 text-slate-600 text-center leading-relaxed">
          Straight answers to questions clients ask before the first meeting.
        </p>

        <div className="mt-12 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-slate-200/90 bg-[#f8f7f4] open:bg-white open:shadow-sm transition-shadow"
            >
              <summary className="cursor-pointer list-none px-5 py-4 sm:px-6 sm:py-5 font-semibold text-[#0a1628] flex items-center justify-between gap-4">
                <span>{item.q}</span>
                <span className="text-[#c9a227] text-xl leading-none group-open:rotate-45 transition-transform duration-200">
                  +
                </span>
              </summary>
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-transparent group-open:border-slate-200/80 group-open:pt-4">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
