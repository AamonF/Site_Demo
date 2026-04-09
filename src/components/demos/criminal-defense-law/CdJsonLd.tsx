import { CD_BRAND, CD_DEMO_BASE } from "./site-config";
import { homeFaqs, testimonials } from "./home-content";

const origin = "https://launchsitedemo.com";

export function CdJsonLd() {
  const legalService = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: CD_BRAND.name,
    url: `${origin}${CD_DEMO_BASE}`,
    telephone: CD_BRAND.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: CD_BRAND.addressLine1,
      addressLocality: "[City]",
      addressRegion: "ST",
      postalCode: "12345",
      addressCountry: "US",
    },
    areaServed: { "@type": "City", name: "[City]" },
    priceRange: "$$$",
    description:
      "Criminal defense law firm (demo): DUI, drug charges, assault, theft, domestic violence. Confidential consultations.",
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const reviews = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: CD_BRAND.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: String(testimonials.length),
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      reviewBody: t.quote,
      author: { "@type": "Person", name: t.name },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviews) }} />
    </>
  );
}
