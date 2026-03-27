import type { Metadata } from "next";
import ACServicePage from "@/components/aircentral/shared/ACServicePage";
import { Wind } from "lucide-react";

export const metadata: Metadata = {
  title: "AC Installation in Charlotte, NC | Air Central of the Carolinas",
  description:
    "New AC installation services for NC homeowners. Energy-efficient systems, expert sizing, and professional installation. Call Air Central of the Carolinas today!",
  keywords: ["AC installation Charlotte NC", "new air conditioner NC", "HVAC installation North Carolina", "AC replacement Charlotte"],
  alternates: { canonical: "/air-central-carolinas/ac-installation" },
};

const data = {
  badge: "AC Installation · Charlotte, NC",
  headline: "New AC Installation Done Right the First Time",
  subheadline:
    "Upgrading or replacing your air conditioner is a big investment. Air Central of the Carolinas helps North Carolina homeowners choose the right system, get it installed properly, and enjoy reliable comfort for years to come.",
  heroIcon: Wind,
  heroColor: "text-blue-600",
  problem:
    "Installing the wrong-sized air conditioner is one of the most common and costly HVAC mistakes. An oversized unit short-cycles, wasting energy and wearing out faster. An undersized unit runs constantly and can't keep up in the summer heat. On top of that, poor installation can void your warranty and lead to expensive problems down the road.",
  solution:
    "We start with a proper load calculation to determine exactly what size system your home needs. Then we help you choose an energy-efficient unit that fits your budget and comfort goals. Our licensed technicians handle every step of the installation with precision — so your new AC runs efficiently, stays reliable, and lives up to its full warranty.",
  benefits: [
    {
      title: "Proper System Sizing",
      desc: "We calculate the right size for your home — not too big, not too small — so your new AC runs efficiently and keeps you comfortable.",
    },
    {
      title: "Energy-Efficient Options",
      desc: "We offer high-SEER systems that can significantly reduce your monthly energy bills while keeping your home perfectly cool.",
    },
    {
      title: "Warranty-Compliant Installation",
      desc: "Proper installation is essential for keeping your manufacturer warranty valid. We follow all specifications to protect your investment.",
    },
    {
      title: "Brand Flexibility",
      desc: "We work with top brands including Carrier, Trane, Lennox, Goodman, and more. We'll help you find the best fit for your home and budget.",
    },
    {
      title: "Financing Available",
      desc: "New AC installation doesn't have to break the bank. Ask about our flexible financing options to make it work for your budget.",
    },
    {
      title: "Clean Installation & Cleanup",
      desc: "We handle the full installation professionally and leave your home just as clean as we found it — no mess left behind.",
    },
  ],
  process: [
    {
      step: "1",
      title: "Free Consultation & Assessment",
      desc: "We visit your home, evaluate your current system, and perform a load calculation to determine the right size unit.",
    },
    {
      step: "2",
      title: "System Recommendation",
      desc: "We present your options clearly, explain the differences, and recommend the system that best fits your needs and budget.",
    },
    {
      step: "3",
      title: "Scheduling & Preparation",
      desc: "Once you approve, we schedule your installation at a time that works for you and source all necessary equipment.",
    },
    {
      step: "4",
      title: "Professional Installation",
      desc: "Our certified technicians install your new system following all manufacturer specifications and local code requirements.",
    },
    {
      step: "5",
      title: "Testing & Walkthrough",
      desc: "We test your new system thoroughly, verify everything is working correctly, and walk you through operating your new AC.",
    },
  ],
  faqs: [
    {
      q: "How long does an AC installation take?",
      a: "Most residential AC installations take 4–8 hours. A full system replacement (air handler and outdoor unit) may take a full day. We'll give you a realistic timeline during the scheduling process.",
    },
    {
      q: "What size AC do I need for my home?",
      a: "The right size depends on your home's square footage, insulation, ceiling height, sun exposure, and other factors. We perform a Manual J load calculation to determine the correct size — never just guessing or going with 'one size fits all.'",
    },
    {
      q: "What brands do you install?",
      a: "We install all major brands including Carrier, Trane, Lennox, Bryant, Goodman, Rheem, and American Standard. We'll help you choose the best option for your home and budget.",
    },
    {
      q: "Do you offer financing for new AC systems?",
      a: "Yes! We work with financing partners to offer flexible payment plans. Ask about your options when you schedule your consultation.",
    },
    {
      q: "What's the difference between a 14-SEER and 18-SEER system?",
      a: "SEER (Seasonal Energy Efficiency Ratio) measures efficiency. A higher SEER means lower monthly energy costs. We'll help you weigh the upfront cost difference against long-term savings to make the best decision for your situation.",
    },
  ],
  relatedLinks: [
    { label: "AC Repair", href: "/air-central-carolinas/ac-repair" },
    { label: "Heating Installation", href: "/air-central-carolinas/heating-installation" },
    { label: "HVAC Maintenance", href: "/air-central-carolinas/hvac-maintenance" },
    { label: "Indoor Air Quality", href: "/air-central-carolinas/indoor-air-quality" },
    { label: "All Services", href: "/air-central-carolinas/services" },
  ],
};

export default function ACInstallationPage() {
  return <ACServicePage data={data} />;
}
