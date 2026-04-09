import { ConsultationForm } from "./ConsultationForm";

/** Mid-page conversion block — duplicate form with separate field IDs for accessibility. */
export function SecondaryConsultSection() {
  return (
    <section className="border-b border-white/10 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ConsultationForm
          idPrefix="secondary"
          heading="Second opinion on your injury claim"
          subheading="Same team. Same standard. Get your questions answered now."
          className="border-law-gold/20 bg-gradient-to-br from-white/[0.05] to-transparent"
        />
      </div>
    </section>
  );
}
