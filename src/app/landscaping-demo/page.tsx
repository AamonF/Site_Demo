import type { Metadata } from "next";
import LDLeadModal from "@/components/landscapingdemo/LDLeadModal";
import LDHeader from "@/components/landscapingdemo/LDHeader";
import LDHero from "@/components/landscapingdemo/LDHero";
import LDServices from "@/components/landscapingdemo/LDServices";
import LDWhyUs from "@/components/landscapingdemo/LDWhyUs";
import LDProjects from "@/components/landscapingdemo/LDProjects";
import LDAbout from "@/components/landscapingdemo/LDAbout";
import LDTestimonials from "@/components/landscapingdemo/LDTestimonials";
import LDServiceArea from "@/components/landscapingdemo/LDServiceArea";
import LDFAQ from "@/components/landscapingdemo/LDFAQ";
import LDFinalCTA from "@/components/landscapingdemo/LDFinalCTA";
import LDFooter from "@/components/landscapingdemo/LDFooter";

const url = "https://launchsitedemo.com/landscaping-demo";

export const metadata: Metadata = {
  title: "Landscaping in [City], NC | Lawn Care & Outdoor Design",
  description:
    "Premium landscaping in [City], NC: lawn care, landscape design, hardscaping, mulching, maintenance, and outdoor lighting. Custom quotes. Call (704) 555-0123.",
  keywords: [
    "landscaping [City] NC",
    "lawn care [City]",
    "landscape design [City]",
    "hardscaping [City] NC",
    "outdoor lighting [City]",
    "yard maintenance NC",
  ],
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    locale: "en_US",
    url,
    siteName: "[Company Name] Landscaping",
    title: "Landscaping in [City], NC | Lawn Care & Outdoor Design",
    description:
      "Landscaping, lawn care, and outdoor design in [City], NC. Beautiful, lasting results. Request a quote.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "[Company Name] Landscaping" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landscaping in [City], NC | Lawn Care & Outdoor Design",
    description:
      "Landscaping and lawn care in [City], NC. Call (704) 555-0123 for a custom quote.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: false },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: "[Company Name]",
  telephone: "(704) 555-0123",
  email: "hello@companyname.com",
  url,
  address: {
    "@type": "PostalAddress",
    addressLocality: "[City]",
    addressRegion: "NC",
    addressCountry: "US",
  },
  areaServed: [
    "[City]",
    "Charlotte",
    "Concord",
    "Huntersville",
    "Mooresville",
    "Kannapolis",
    "Davidson",
    "Cornelius",
  ],
  description:
    "Landscaping and outdoor services in [City], NC including lawn care, design, hardscaping, mulching, maintenance, and outdoor lighting.",
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "18:00",
    },
  ],
};

export default function LandscapingDemoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />

      <LDLeadModal />
      <LDHeader />

      <main className="min-h-screen bg-stone-100">
        <LDHero />
        <LDServices />
        <LDWhyUs />
        <LDProjects />
        <LDAbout />
        <LDTestimonials />
        <LDServiceArea />
        <LDFAQ />
        <LDFinalCTA />
      </main>

      <LDFooter />
    </>
  );
}
