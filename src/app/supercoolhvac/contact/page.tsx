import type { Metadata } from "next";
import SCPageHero from "@/components/supercool/SCPageHero";
import SCContactForm from "@/components/supercool/SCContactForm";
import SCCTABanner from "@/components/supercool/SCCTABanner";
import { makeBreadcrumb } from "@/lib/supercool/data";

export const metadata: Metadata = {
  title: "Contact Super Cool HVAC | Charlotte, NC",
  description: "Contact Super Cool HVAC for residential and commercial HVAC service in Charlotte, NC. Request service, ask a question, or schedule a visit. Call (704) 899-2665.",
  openGraph: {
    title: "Contact Super Cool HVAC | Charlotte, NC",
    description: "Request HVAC service or ask a question. Charlotte's honest HVAC company — locally owned, no-pressure.",
    url: "https://launchsitedemo.com/supercoolhvac/contact",
  },
  alternates: { canonical: "https://launchsitedemo.com/supercoolhvac/contact" },
};

export default function ContactPage() {
  const schema = makeBreadcrumb("Contact", "contact");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <SCPageHero
        eyebrow="Contact Us"
        headline="Let's Talk About Your HVAC Needs"
        subheadline="No pressure, no runaround. Just an honest conversation about your system and what it actually needs."
        breadcrumbs={[{ label: "Super Cool HVAC", href: "/supercoolhvac" }, { label: "Contact" }]}
      />

      <SCContactForm />

      <SCCTABanner
        headline="Prefer to Schedule by Phone?"
        subheadline="Our team is available Mon–Fri 7:30 AM – 5:30 PM and Sat–Sun 9 AM – 3 PM."
        ctaLabel="Call Now"
        ctaHref="tel:+17048992665"
        showPhone={false}
      />
    </>
  );
}
