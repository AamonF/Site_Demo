import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";

import { PiDemoChrome } from "@/components/demos/personal-injury-law/PiDemoChrome";

import "./pi-demo.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pi-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pi-body",
});

const base = "https://launchsitedemo.com";

export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: {
    default: "Personal Injury Lawyers in [City] | Law Firm Website Demo",
    template: "%s | Personal Injury Demo",
  },
  description:
    "Injured in an accident? This demo showcases serious injury case positioning for [City]. Free consultation. No fee unless we win.",
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${base}/demos/personal-injury-law`,
    siteName: "Personal Injury Law Firm (Demo)",
    title: "Personal Injury Law Firm Website Demo",
    description:
      "Premium personal injury law firm website demo—consultation-focused, results-driven, built for conversion.",
  },
};

export default function PersonalInjuryDemoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`pi-law-demo ${playfair.variable} ${dmSans.variable} font-body min-h-screen bg-[#060d18] text-zinc-100 antialiased`}
    >
      <PiDemoChrome>{children}</PiDemoChrome>
    </div>
  );
}
