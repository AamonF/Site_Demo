import type { Metadata } from "next";
import { SC_BUSINESS, SC_SCHEMA_BASE, SC_BREADCRUMB_HOME, makeFaqSchema, SC_FAQ_GENERAL } from "@/lib/supercool/data";

import SCHero from "@/components/supercool/home/SCHero";
import SCTrustBar from "@/components/supercool/SCTrustBar";
import SCWhyUs from "@/components/supercool/home/SCWhyUs";
import SCServicesGrid from "@/components/supercool/home/SCServicesGrid";
import SCResComSplit from "@/components/supercool/home/SCResComSplit";
import SCEcoSection from "@/components/supercool/home/SCEcoSection";
import SCMaintenanceSection from "@/components/supercool/home/SCMaintenanceSection";
import SCTestimonials from "@/components/supercool/SCTestimonials";
import SCServiceArea from "@/components/supercool/home/SCServiceArea";
import SCFAQ from "@/components/supercool/SCFAQ";
import SCCTABanner from "@/components/supercool/SCCTABanner";

export const metadata: Metadata = {
  title: "Super Cool HVAC | Charlotte's Honest HVAC Company",
  description: "Super Cool HVAC serves Charlotte, NC with expert residential and commercial HVAC repairs, installations, and maintenance. Locally owned, no-pressure, energy-efficient solutions.",
  openGraph: {
    title: "Super Cool HVAC | Charlotte's Honest HVAC Company",
    description: "Expert HVAC service for Charlotte homeowners and businesses. Honest assessments, quality workmanship, energy-efficient solutions.",
    url: "https://launchsitedemo.com/supercoolhvac",
    siteName: "Super Cool HVAC",
    type: "website",
  },
  alternates: { canonical: "https://launchsitedemo.com/supercoolhvac" },
};

export default function SuperCoolHomePage() {
  const schemas = [SC_SCHEMA_BASE, SC_BREADCRUMB_HOME, makeFaqSchema(SC_FAQ_GENERAL)];

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <SCHero />
      <SCTrustBar />
      <SCWhyUs />
      <SCServicesGrid />
      <SCResComSplit />
      <SCCTABanner
        headline="Ready to Schedule Service?"
        subheadline={`Call ${SC_BUSINESS.phone} or request service online — most calls are answered same day.`}
        ctaLabel="Contact Us"
        ctaHref="/supercoolhvac/contact"
      />
      <SCEcoSection />
      <SCMaintenanceSection />
      <SCTestimonials />
      <SCServiceArea />
      <SCFAQ items={SC_FAQ_GENERAL} title="Common HVAC Questions" subtitle="Straight answers to what Charlotte homeowners and businesses ask most." />
      <SCCTABanner
        headline="Let's Get Your System Running Right"
        subheadline="Whether it's a repair, tune-up, or new installation — we'll give you an honest assessment and a fair price."
        ctaLabel="Request Service"
        ctaHref="/supercoolhvac/contact"
        variant="sky"
      />
    </>
  );
}
