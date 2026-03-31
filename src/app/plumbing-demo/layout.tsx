import type { Metadata } from "next";

const url = "https://launchsitedemo.com/plumbing-demo";

export const metadata: Metadata = {
  title: "Plumber in [City], NC | Emergency Plumbing Services",
  description:
    "Fast, reliable plumbing services in [City], NC. Drain cleaning, leak repair, water heaters, sewer lines & more. 24/7 emergency plumbing. Licensed & insured. Upfront pricing.",
  keywords: [
    "plumber [City] NC",
    "emergency plumber [City]",
    "drain cleaning [City]",
    "leak repair [City]",
    "water heater repair [City]",
    "sewer line repair [City]",
    "plumbing services [City] NC",
    "24/7 plumber",
  ],
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    locale: "en_US",
    url,
    siteName: "[Company Name] Plumbing",
    title: "Plumber in [City], NC | Emergency Plumbing Services",
    description:
      "Fast, reliable plumbing in [City], NC. Drain cleaning, leak repair, water heaters & more. 24/7 emergency service.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "[Company Name] Plumbing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plumber in [City], NC | Emergency Plumbing Services",
    description: "Fast, reliable plumbing in [City], NC. 24/7 emergency service. Upfront pricing.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: false },
};

export default function PlumbingDemoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
