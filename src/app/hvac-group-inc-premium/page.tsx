import type { Metadata } from "next";
import HGHero from "@/components/hvacgroup/home/HGHero";
import HGTrustBar from "@/components/hvacgroup/home/HGTrustBar";
import HGAbout from "@/components/hvacgroup/home/HGAbout";
import HGServices from "@/components/hvacgroup/home/HGServices";
import HGSplit from "@/components/hvacgroup/home/HGSplit";
import HGProcess from "@/components/hvacgroup/home/HGProcess";
import HGTestimonials from "@/components/hvacgroup/home/HGTestimonials";
import HGBilingual from "@/components/hvacgroup/home/HGBilingual";
import HGFAQ from "@/components/hvacgroup/home/HGFAQ";
import HGFinalCTA from "@/components/hvacgroup/home/HGFinalCTA";
import HGContactSection from "@/components/hvacgroup/home/HGContactSection";

export const metadata: Metadata = {
  title: "HVAC Group Inc | Expert HVAC Services in Charlotte, NC",
  description:
    "HVAC Group Inc delivers precision residential and commercial HVAC services in Charlotte, NC. Licensed, insured, bilingual (EN/ES). Call (980) 263-0912 today.",
  keywords: [
    "HVAC Charlotte NC",
    "AC repair Charlotte",
    "heating and cooling North Carolina",
    "commercial HVAC Charlotte",
    "bilingual HVAC contractor NC",
    "HVAC Group Inc",
  ],
  alternates: { canonical: "/hvac-group-inc-premium" },
};

export default function HVACGroupHome() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HVACBusiness",
            name: "HVAC Group Inc",
            description:
              "Precision residential and commercial HVAC services in Charlotte, NC. Founded 2017. Licensed and insured. Bilingual service in English and Spanish.",
            url: "https://launchsitedemo.com/hvac-group-inc-premium",
            telephone: ["+19802630912", "+17042819121"],
            email: "hvacgroupinc@gmail.com",
            foundingDate: "2017",
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
            sameAs: [
              "https://www.instagram.com/hvacgroupinc_nc",
            ],
          }),
        }}
      />
      <HGHero />
      <HGTrustBar />
      <HGAbout />
      <HGServices />
      <HGSplit />
      <HGProcess />
      <HGTestimonials />
      <HGBilingual />
      <HGFAQ />
      <HGFinalCTA />
      <HGContactSection />
    </>
  );
}
