import FPHeader from "@/components/flowplumbing/FPHeader";
import FPHero from "@/components/flowplumbing/FPHero";
import FPEmergencyBanner from "@/components/flowplumbing/FPEmergencyBanner";
import FPTrustBar from "@/components/flowplumbing/FPTrustBar";
import FPProblemSection from "@/components/flowplumbing/FPProblemSection";
import FPServicesGrid from "@/components/flowplumbing/FPServicesGrid";
import FPWhyUs from "@/components/flowplumbing/FPWhyUs";
import FPBeforeAfter from "@/components/flowplumbing/FPBeforeAfter";
import FPTestimonials from "@/components/flowplumbing/FPTestimonials";
import FPServiceArea from "@/components/flowplumbing/FPServiceArea";
import FPQuoteForm from "@/components/flowplumbing/FPQuoteForm";
import FPFinalCTA from "@/components/flowplumbing/FPFinalCTA";
import FPFooter from "@/components/flowplumbing/FPFooter";
import FPMobileCTA from "@/components/flowplumbing/FPMobileCTA";

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "[Company Name] Plumbing",
  telephone: "(704) 555-0123",
  address: {
    "@type": "PostalAddress",
    addressLocality: "[City]",
    addressRegion: "NC",
    addressCountry: "US",
  },
  areaServed: "[City], NC",
  description:
    "Fast, reliable plumbing services in [City], NC. Drain cleaning, leak repair, water heaters, sewer lines & more. 24/7 emergency plumbing. Licensed & insured.",
  priceRange: "$$",
  url: "https://launchsitedemo.com/plumbing-demo",
  openingHours: "Mo-Su 00:00-23:59",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "512",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Launch Site Demo", item: "https://launchsitedemo.com" },
    { "@type": "ListItem", position: 2, name: "[Company Name] Plumbing", item: "https://launchsitedemo.com/plumbing-demo" },
  ],
};

export default function PlumbingDemoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <FPHeader />

      <main>
        {/* 1. Hero */}
        <FPHero />

        {/* 2. Emergency Banner */}
        <FPEmergencyBanner />

        {/* 3. Trust Bar */}
        <FPTrustBar />

        {/* 4. Problem Section */}
        <FPProblemSection />

        {/* 5. Services Grid */}
        <FPServicesGrid />

        {/* 6. Why Choose Us */}
        <FPWhyUs />

        {/* 7. Before/After Slider */}
        <FPBeforeAfter />

        {/* 8. Testimonials */}
        <FPTestimonials />

        {/* 9. Service Area */}
        <FPServiceArea />

        {/* 10. Quote Form / Contact */}
        <FPQuoteForm />

        {/* 11. Final CTA */}
        <FPFinalCTA />
      </main>

      <FPFooter />

      {/* Mobile sticky CTA bar */}
      <FPMobileCTA />
    </>
  );
}
