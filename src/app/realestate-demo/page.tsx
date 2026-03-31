import type { Metadata } from "next";

import REHeader from "@/components/realestatedemo/REHeader";
import REHero from "@/components/realestatedemo/REHero";
import RESearchSection from "@/components/realestatedemo/RESearchSection";
import REFeaturedListings from "@/components/realestatedemo/REFeaturedListings";
import REWhyUs from "@/components/realestatedemo/REWhyUs";
import REBuySellSplit from "@/components/realestatedemo/REBuySellSplit";
import REAboutTeam from "@/components/realestatedemo/REAboutTeam";
import RETestimonials from "@/components/realestatedemo/RETestimonials";
import REServiceArea from "@/components/realestatedemo/REServiceArea";
import REFAQ from "@/components/realestatedemo/REFAQ";
import REContact from "@/components/realestatedemo/REContact";
import REFinalCTA from "@/components/realestatedemo/REFinalCTA";
import REFooter from "@/components/realestatedemo/REFooter";

import { COMPANY, PHONE } from "@/components/realestatedemo/constants";

const url = "https://launchsitedemo.com/realestate-demo";

export const metadata: Metadata = {
  title: "Real Estate in [City], NC | Homes for Sale",
  description:
    "Explore homes for sale in [City], NC with " +
    COMPANY +
    ". Local market expertise for buyers and sellers—listings, pricing strategy, and private consultations. Call " +
    PHONE +
    ".",
  keywords: [
    "homes for sale [City] NC",
    "real estate [City] North Carolina",
    "luxury homes [City]",
    "buy a home [City]",
    "sell my home [City]",
  ],
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    locale: "en_US",
    url,
    siteName: COMPANY,
    title: "Real Estate in [City], NC | Homes for Sale",
    description:
      "Buy or sell with confidence in [City], NC. Browse listings, get your home value, and schedule a consultation: " +
      PHONE +
      ".",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${COMPANY} — Real Estate` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate in [City], NC | Homes for Sale",
    description:
      "Homes for sale and expert guidance for buyers and sellers in [City], NC. " + PHONE,
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: false },
};

const realEstateSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: COMPANY,
  description:
    "Luxury real estate services for buyers and sellers—listings, pricing, marketing, and private consultations.",
  url,
  telephone: PHONE,
  email: "hello@companyname.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "[City]",
    addressRegion: "NC",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "[City]", containedInPlace: { "@type": "State", name: "North Carolina" } },
  ],
  priceRange: "$$$$",
};

export default function RealEstateDemoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateSchema) }}
      />

      <REHeader />

      <main>
        <REHero />
        <RESearchSection />
        <REFeaturedListings />
        <REWhyUs />
        <REBuySellSplit />
        <REAboutTeam />
        <RETestimonials />
        <REServiceArea />
        <REFAQ />
        <REContact />
        <REFinalCTA />
      </main>

      <REFooter />
    </>
  );
}
