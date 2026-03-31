import type { Metadata } from "next";
import CHHeader from "@/components/comforthvac/CHHeader";
import CHHero from "@/components/comforthvac/CHHero";
import CHTrustBar from "@/components/comforthvac/CHTrustBar";
import CHPainPoints from "@/components/comforthvac/CHPainPoints";
import CHServices from "@/components/comforthvac/CHServices";
import CHWhyUs from "@/components/comforthvac/CHWhyUs";
import CHTestimonials from "@/components/comforthvac/CHTestimonials";
import CHProcess from "@/components/comforthvac/CHProcess";
import CHServiceArea from "@/components/comforthvac/CHServiceArea";
import CHFinalCTA from "@/components/comforthvac/CHFinalCTA";
import CHFooter from "@/components/comforthvac/CHFooter";
import CHMobileCTA from "@/components/comforthvac/CHMobileCTA";
import CHExitPopup from "@/components/comforthvac/CHExitPopup";

const url = "https://launchsitedemo.com/hvac-demo";

export const metadata: Metadata = {
  title: "HVAC Services in [City], NC | AC & Heating Experts | [Company Name]",
  description:
    "Fast, reliable HVAC services in [City], NC. AC repair, heating, installation & more. Same-day service. Licensed & insured. Call (704) 555-0123 for a free estimate.",
  keywords: [
    "HVAC [City] NC",
    "AC repair [City]",
    "heating and cooling [City] NC",
    "air conditioning repair [City]",
    "furnace replacement [City]",
    "HVAC contractor [City] NC",
    "[Company Name]",
  ],
  alternates: { canonical: url },
  robots: { index: false, follow: false },
};

export default function HvacDemoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HVACBusiness",
            name: "[Company Name]",
            description:
              "Fast, reliable HVAC services in [City], NC. AC repair, heating installation, maintenance plans and more. Licensed, insured, and satisfaction guaranteed.",
            url,
            telephone: "+17045550123",
            address: {
              "@type": "PostalAddress",
              addressLocality: "[City]",
              addressRegion: "NC",
              addressCountry: "US",
            },
            areaServed: ["[City], NC", "Surrounding Areas, NC"],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "312",
            },
          }),
        }}
      />
      <CHHeader />
      <main id="home">
        <CHHero />
        <CHTrustBar />
        <CHPainPoints />
        <CHServices />
        <CHWhyUs />
        <CHTestimonials />
        <CHProcess />
        <CHServiceArea />
        <CHFinalCTA />
      </main>
      <CHFooter />
      <CHMobileCTA />
      <CHExitPopup />
    </>
  );
}
