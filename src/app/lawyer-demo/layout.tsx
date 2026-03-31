import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./lawyer-demo.css";

const lawHeading = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-law-heading",
  display: "swap",
});

const lawBody = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-law-body",
  display: "swap",
});

export default function LawyerDemoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`lawyer-demo-page min-h-screen bg-white text-slate-900 antialiased ${lawBody.variable} ${lawHeading.variable}`}
    >
      {children}
    </div>
  );
}
