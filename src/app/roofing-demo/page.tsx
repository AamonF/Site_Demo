import type { Metadata } from "next";
import ERHeader from "@/components/eliteroofing/ERHeader";
import ERHero from "@/components/eliteroofing/ERHero";
import ERTrustBar from "@/components/eliteroofing/ERTrustBar";
import ERProblem from "@/components/eliteroofing/ERProblem";
import ERServices from "@/components/eliteroofing/ERServices";
import ERGallery from "@/components/eliteroofing/ERGallery";
import ERWhyUs from "@/components/eliteroofing/ERWhyUs";
import ERTestimonials from "@/components/eliteroofing/ERTestimonials";
import ERServiceArea from "@/components/eliteroofing/ERServiceArea";
import ERFinalCTA from "@/components/eliteroofing/ERFinalCTA";
import ERLeadModal from "@/components/eliteroofing/ERLeadModal";
import ERStickyBar from "@/components/eliteroofing/ERStickyBar";
import ERFooter from "@/components/eliteroofing/ERFooter";

const url = "https://launchsitedemo.com/roofing-demo";

export const metadata: Metadata = {
  title: "Roofing Company in [City], NC | Roof Repair & Replacement",
  description:
    "Top-rated roofing contractor in [City], NC. Expert roof repair, replacement, storm damage, and inspections. Licensed & insured. Free estimates. Call (704) 555-0123.",
  keywords: [
    "roofing company [City] NC",
    "roof repair [City]",
    "roof replacement [City] NC",
    "storm damage roof repair",
    "roofing contractor Charlotte NC",
    "free roof inspection NC",
    "insurance claim roofing",
    "commercial roofing NC",
  ],
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    locale: "en_US",
    url,
    siteName: "[Company Name] Roofing",
    title: "Roofing Company in [City], NC | Roof Repair & Replacement",
    description:
      "Top-rated roofing contractor in [City], NC. Expert roof repair, replacement, and free inspections. Licensed & insured. Call today.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "[Company Name] Roofing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roofing Company in [City], NC | Roof Repair & Replacement",
    description: "Top-rated roofing contractor in [City], NC. Free estimates. Call (704) 555-0123.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: false },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "[Company Name] Roofing",
  telephone: "(704) 555-0123",
  email: "info@companyname.com",
  url,
  address: {
    "@type": "PostalAddress",
    addressLocality: "[City]",
    addressRegion: "NC",
    addressCountry: "US",
  },
  areaServed: [
    "[City]", "Charlotte", "Concord", "Huntersville", "Mooresville",
    "Kannapolis", "Davidson", "Cornelius", "Gastonia",
  ],
  description:
    "Licensed roofing contractor in [City], NC offering roof repair, replacement, storm damage repair, inspections, and commercial roofing services.",
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "19:00",
    },
  ],
};

export default function RoofingDemoPage() {
  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />

      <ERLeadModal />
      <ERHeader />

      <main>
        <ERHero />
        <ERTrustBar />
        <ERProblem />
        <ERServices />
        <ERGallery />
        <ERWhyUs />
        <ERTestimonials />
        <ERServiceArea />
        <ERFinalCTA />
      </main>

      <ERFooter />
      <ERStickyBar />
    </>
  );
}
