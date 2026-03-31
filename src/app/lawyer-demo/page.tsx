import type { Metadata } from "next";

import LDHeader from "@/components/lawyerdemo/LDHeader";
import LDHero from "@/components/lawyerdemo/LDHero";
import LDPracticeAreas from "@/components/lawyerdemo/LDPracticeAreas";
import LDWhyChoose from "@/components/lawyerdemo/LDWhyChoose";
import LDAbout from "@/components/lawyerdemo/LDAbout";
import LDResults from "@/components/lawyerdemo/LDResults";
import LDTestimonials from "@/components/lawyerdemo/LDTestimonials";
import LDGallery from "@/components/lawyerdemo/LDGallery";
import LDProcess from "@/components/lawyerdemo/LDProcess";
import LDFAQ from "@/components/lawyerdemo/LDFAQ";
import LDFinalCTA from "@/components/lawyerdemo/LDFinalCTA";
import LDFooter from "@/components/lawyerdemo/LDFooter";

import { COMPANY, PHONE } from "@/components/lawyerdemo/constants";

const url = "https://launchsitedemo.com/lawyer-demo";

export const metadata: Metadata = {
  title: "Law Firm in [City], NC | Experienced Attorneys",
  description:
    "Trusted legal representation in [City], NC. Experienced attorneys for injury, criminal defense, family law, business matters, estate planning, and civil litigation. Schedule a consultation: " +
    PHONE +
    ".",
  keywords: [
    "law firm [City] NC",
    "attorneys [City] North Carolina",
    "personal injury lawyer NC",
    "criminal defense attorney",
    "family law attorney",
    "business law firm",
    "estate planning lawyer",
  ],
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    locale: "en_US",
    url,
    siteName: COMPANY,
    title: "Law Firm in [City], NC | Experienced Attorneys",
    description:
      "Trusted legal representation in [City], NC. Clear counsel across multiple practice areas. Call " +
      PHONE +
      ".",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${COMPANY} — Law Firm` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Law Firm in [City], NC | Experienced Attorneys",
    description:
      "Trusted legal representation in [City], NC. Schedule a consultation: " + PHONE + ".",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: false },
};

const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: COMPANY,
  description:
    "Full-service law firm offering trusted legal representation for individuals and businesses.",
  url,
  telephone: PHONE,
  email: "info@companyname.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "[City]",
    addressRegion: "NC",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "[City]",
    containedInPlace: { "@type": "State", name: "North Carolina" },
  },
  priceRange: "$$",
};

export default function LawyerDemoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />

      <LDHeader />

      <main>
        <LDHero />
        <LDPracticeAreas />
        <LDWhyChoose />
        <LDAbout />
        <LDResults />
        <LDTestimonials />
        <LDGallery />
        <LDProcess />
        <LDFAQ />
        <LDFinalCTA />
      </main>

      <LDFooter />
    </>
  );
}
