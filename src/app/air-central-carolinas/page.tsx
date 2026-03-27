import type { Metadata } from "next";
import ACHero from "@/components/aircentral/home/ACHero";
import ACTrustBar from "@/components/aircentral/home/ACTrustBar";
import ACServices from "@/components/aircentral/home/ACServices";
import ACWhyUs from "@/components/aircentral/home/ACWhyUs";
import ACMaintenance from "@/components/aircentral/home/ACMaintenance";
import ACTestimonials from "@/components/aircentral/home/ACTestimonials";
import ACServiceArea from "@/components/aircentral/home/ACServiceArea";
import ACFAQ from "@/components/aircentral/home/ACFAQ";
import ACFinalCTA from "@/components/aircentral/home/ACFinalCTA";
import ACContact from "@/components/aircentral/home/ACContact";

export const metadata: Metadata = {
  title: "HVAC Services in Charlotte, NC | Air Central of the Carolinas",
  description:
    "Air Central of the Carolinas delivers fast, reliable HVAC repair, installation & maintenance for NC homeowners. Call today for same-day service!",
  keywords: [
    "HVAC services NC",
    "AC repair Charlotte NC",
    "AC installation North Carolina",
    "heating repair NC",
    "HVAC maintenance Charlotte",
    "indoor air quality NC",
    "Air Central of the Carolinas",
  ],
  alternates: { canonical: "/air-central-carolinas" },
};

export default function AirCentralHome() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HVACBusiness",
            name: "Air Central of the Carolinas",
            description:
              "Trusted residential HVAC repair, installation, and maintenance serving Charlotte, NC and surrounding communities. Fast, friendly, and dependable.",
            url: "https://launchsitedemo.com/air-central-carolinas",
            telephone: "+17045550190",
            email: "info@aircentralcarolinas.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Charlotte",
              addressRegion: "NC",
              addressCountry: "US",
            },
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 35.2271,
                longitude: -80.8431,
              },
              geoRadius: "80000",
            },
            priceRange: "$$",
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "07:00",
              closes: "20:00",
            },
          }),
        }}
      />
      <ACHero />
      <ACTrustBar />
      <ACServices />
      <ACWhyUs />
      <ACMaintenance />
      <ACTestimonials />
      <ACServiceArea />
      <ACFAQ />
      <ACFinalCTA />
      <ACContact />
    </>
  );
}
