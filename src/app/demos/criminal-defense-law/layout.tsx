import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

import { CdDemoChrome } from "@/components/demos/criminal-defense-law/CdDemoChrome";

import "./cd-demo.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cd-display",
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cd-body",
});

const base = "https://launchsitedemo.com";

export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: {
    default: "Criminal Defense Lawyers in [City] | Your Criminal Defense Firm (Demo)",
    template: "%s | Criminal Defense Demo",
  },
  description:
    "Charged with a crime in [City]? Strategic criminal defense for DUI, drugs, assault, theft, and domestic allegations. Free confidential consultation—demo website.",
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${base}/demos/criminal-defense-law`,
    siteName: "Criminal Defense Firm (Demo)",
    title: "Criminal Defense Law Firm Website Demo",
    description:
      "Premium criminal defense website demo—urgent, discreet, built for consultations and phone calls.",
  },
};

export default function CriminalDefenseDemoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`cd-law-demo ${display.variable} ${dmSans.variable} font-body min-h-screen bg-[#03060c] text-zinc-100 antialiased`}
    >
      <CdDemoChrome>{children}</CdDemoChrome>
    </div>
  );
}
