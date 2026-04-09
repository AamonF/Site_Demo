import { PI_BRAND, PI_DEMO_BASE } from "./site-config";
import { homeFaqs, testimonials } from "./home-content";

const origin = "https://launchsitedemo.com";

export function PiJsonLd() {
  const legalService = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: PI_BRAND.name,
    url: `${origin}${PI_DEMO_BASE}`,
    telephone: PI_BRAND.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: PI_BRAND.addressLine1,
      addressLocality: "[City]",
      addressRegion: "ST",
      postalCode: "12345",
      addressCountry: "US",
    },
    areaServed: { "@type": "City", name: "[City]" },
    priceRange: "$$$",
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
    name: PI_BRAND.name,
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
