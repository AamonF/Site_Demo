import type { Metadata } from "next";

import MSHeader from "@/components/medspademo/MSHeader";
import MSHero from "@/components/medspademo/MSHero";
import MSTreatments from "@/components/medspademo/MSTreatments";
import MSWhyUs from "@/components/medspademo/MSWhyUs";
import MSBeforeAfter from "@/components/medspademo/MSBeforeAfter";
import MSAbout from "@/components/medspademo/MSAbout";
import MSTestimonials from "@/components/medspademo/MSTestimonials";
import MSFAQ from "@/components/medspademo/MSFAQ";
import MSFinalCTA from "@/components/medspademo/MSFinalCTA";
import MSFooter from "@/components/medspademo/MSFooter";

import { COMPANY, PHONE } from "@/components/medspademo/constants";

const url = "https://launchsitedemo.com/medspa-demo";

export const metadata: Metadata = {
  title: "Med Spa in [City], NC | Aesthetic Treatments",
  description:
    "Premium aesthetic and skin treatments in [City], NC with " +
    COMPANY +
    ". Botox, fillers, laser, rejuvenation, and personalized consults. Call " +
    PHONE +
    ".",
  keywords: [
    "med spa [City] NC",
    "aesthetic treatments [City]",
    "Botox [City] NC",
    "dermal fillers [City]",
    "laser skin treatments [City] NC",
  ],
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    locale: "en_US",
    url,
    siteName: COMPANY,
    title: "Med Spa in [City], NC | Aesthetic Treatments",
    description:
      "Luxury med spa services in [City], NC—injectables, laser, skin rejuvenation, and private consultations: " +
      PHONE +
      ".",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${COMPANY} — Med Spa` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Med Spa in [City], NC | Aesthetic Treatments",
    description:
      "Aesthetic and skin treatments in [City], NC. Book a consultation: " + PHONE,
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: false },
};

const medSpaSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: COMPANY,
  description:
    "Luxury medical spa offering aesthetic injectables, laser treatments, skin rejuvenation, and personalized consultations.",
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
  priceRange: "$$$",
};

export default function MedSpaDemoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medSpaSchema) }}
      />

      <MSHeader />

      <main>
        <MSHero />
        <MSTreatments />
        <MSWhyUs />
        <MSBeforeAfter />
        <MSAbout />
        <MSTestimonials />
        <MSFAQ />
        <MSFinalCTA />
      </main>

      <MSFooter />
    </>
  );
}
