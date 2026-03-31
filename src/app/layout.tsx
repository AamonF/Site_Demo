import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Launch Site Demo | Custom Website Demos for Local Businesses",
  description:
    "Launch Site Demo builds modern, high-converting website demos for local service businesses so owners can preview a better online presence before committing.",
  keywords: [
    "custom website demos",
    "local business websites",
    "home service website design",
    "high-converting websites for local businesses",
    "SEO-ready service business websites",
    "website redesign demos",
    "HVAC website design",
    "plumber website",
    "roofer website",
    "electrician website",
  ],
  authors: [{ name: "Launch Site Demo" }],
  creator: "Launch Site Demo",
  metadataBase: new URL("https://launchsitedemo.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://launchsitedemo.com",
    siteName: "Launch Site Demo",
    title: "Launch Site Demo | Custom Website Demos for Local Businesses",
    description:
      "Launch Site Demo builds modern, high-converting website demos for local service businesses so owners can preview a better online presence before committing.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Launch Site Demo – Custom Website Demos for Local Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Launch Site Demo | Custom Website Demos for Local Businesses",
    description:
      "Launch Site Demo builds modern, high-converting website demos for local service businesses so owners can preview a better online presence before committing.",
    images: ["/og-image.png"],
    creator: "@launchsitedemo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
