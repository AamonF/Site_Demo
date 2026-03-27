import type { Metadata } from "next";
import ACCHero from "@/components/accarolinas/home/ACCHero";
import ACCTrustBar from "@/components/accarolinas/home/ACCTrustBar";
import ACCWhyUs from "@/components/accarolinas/home/ACCWhyUs";
import ACCServicesGrid from "@/components/accarolinas/home/ACCServicesGrid";
import ACCResComSplit from "@/components/accarolinas/home/ACCResComSplit";
import ACCProcess from "@/components/accarolinas/home/ACCProcess";
import ACCMaintenance from "@/components/accarolinas/home/ACCMaintenance";
import ACCIAQ from "@/components/accarolinas/home/ACCIAQ";
import ACCFinancing from "@/components/accarolinas/home/ACCFinancing";
import ACCServiceAreas from "@/components/accarolinas/home/ACCServiceAreas";
import ACCTestimonials from "@/components/accarolinas/home/ACCTestimonials";
import ACCFAQ from "@/components/accarolinas/home/ACCFAQ";
import ACCFinalCTA from "@/components/accarolinas/home/ACCFinalCTA";

export const metadata: Metadata = {
  title: "Air Central Of The Carolinas | HVAC Company Indian Trail, NC",
  description:
    "Air Central Of The Carolinas — trusted HVAC service for Indian Trail, Charlotte, and the surrounding area. AC repair, heating, heat pumps, commercial HVAC, and more. Call (704) 288-4822.",
  keywords: [
    "HVAC company Indian Trail NC",
    "AC repair Indian Trail",
    "heating and cooling Charlotte NC",
    "HVAC installation near Charlotte",
    "heat pump service Charlotte area",
    "Air Central Of The Carolinas",
  ],
  alternates: { canonical: "/aircentralofthecarolinas" },
};

export default function ACCHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HVACBusiness",
            name: "Air Central Of The Carolinas",
            description:
              "Family-owned HVAC company serving Indian Trail, NC and the greater Charlotte metro area. Residential and commercial heating, cooling, heat pumps, maintenance, indoor air quality, and energy audits.",
            url: "https://launchsitedemo.com/aircentralofthecarolinas",
            telephone: "+17042884822",
            email: "info@aircentralofthecarolinas.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Indian Trail",
              addressRegion: "NC",
              postalCode: "28079",
              addressCountry: "US",
            },
            areaServed: [
              "Indian Trail, NC",
              "Charlotte, NC",
              "Matthews, NC",
              "Monroe, NC",
              "Mint Hill, NC",
              "Stallings, NC",
              "Waxhaw, NC",
              "Weddington, NC",
            ],
            priceRange: "$$",
            openingHours: ["Mo-Fr 07:00-18:00", "Sa 08:00-16:00"],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Do you offer emergency HVAC service?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We provide emergency service for heating and cooling failures. Call us at (704) 288-4822 any time.",
                },
              },
              {
                "@type": "Question",
                name: "What areas do you serve?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We primarily serve Indian Trail, Charlotte, Matthews, Monroe, Mint Hill, Stallings, Waxhaw, Weddington, Marvin, Pineville, Concord, and Fort Mill, SC.",
                },
              },
            ],
          }),
        }}
      />
      <ACCHero />
      <ACCTrustBar />
      <ACCWhyUs />
      <ACCServicesGrid />
      <ACCResComSplit />
      <ACCProcess />
      <ACCMaintenance />
      <ACCIAQ />
      <ACCFinancing />
      <ACCServiceAreas />
      <ACCTestimonials />
      <ACCFAQ />
      <ACCFinalCTA />
    </>
  );
}
