import type { Metadata } from "next";

import { LawFirmBreadcrumbs } from "@/components/law-firm/LawFirmBreadcrumbs";
import { LawFirmPageHero } from "@/components/law-firm/LawFirmPageHero";
import { LawFirmTestimonials } from "@/components/law-firm/LawFirmTestimonials";
import { FIRM } from "@/lib/law-firm/firm";
import { TESTIMONIALS } from "@/lib/law-firm/content";
import { lawMetadata } from "@/lib/law-firm/seo";

export const metadata: Metadata = lawMetadata({
  title: "Client Testimonials",
  description: `Reviews and testimonials for ${FIRM.name}. Individual experiences vary; results are not guaranteed.`,
  path: "/testimonials",
});

export default function TestimonialsPage() {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: FIRM.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: FIRM.reviewScore,
      reviewCount: FIRM.reviewCount,
    },
    review: TESTIMONIALS.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewBody: t.quote,
      reviewRating: { "@type": "Rating", ratingValue: t.rating },
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <LawFirmPageHero
        eyebrow="Reviews"
        title="What clients say when the pressure was real"
        subtitle="Authentic feedback from people navigating injury, criminal, family, and immigration stress—edited only for privacy."
        dark={false}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <LawFirmBreadcrumbs items={[{ label: "Testimonials" }]} />
      </div>
      <LawFirmTestimonials />
    </main>
  );
}
