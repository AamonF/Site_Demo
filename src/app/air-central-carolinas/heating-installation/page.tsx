import type { Metadata } from "next";
import ACServicePage from "@/components/aircentral/shared/ACServicePage";
import { Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Heating Installation in Charlotte, NC | Air Central of the Carolinas",
  description:
    "New furnace and heat pump installation for NC homes. Expert sizing, trusted brands, professional setup. Call Air Central of the Carolinas for a free estimate!",
  keywords: ["heating installation Charlotte NC", "new furnace NC", "heat pump installation North Carolina", "furnace replacement Charlotte"],
  alternates: { canonical: "/air-central-carolinas/heating-installation" },
};

const data = {
  badge: "Heating Installation · Charlotte, NC",
  headline: "New Heating System Installation for NC Homes",
  subheadline:
    "Whether your old furnace has reached the end of its life or you're upgrading to a more efficient system, Air Central of the Carolinas handles new heating installations from start to finish — with expert guidance, proper sizing, and clean professional work.",
  heroIcon: Wrench,
  heroColor: "text-amber-600",
  problem:
    "An aging or undersized heating system struggles to keep up on the coldest North Carolina nights — running constantly, driving up your energy bills, and still leaving rooms that feel drafty and cold. Replacing a heating system feels overwhelming: What brand? What size? What type of system? Most homeowners don't know where to start, and some contractors are happy to take advantage of that confusion.",
  solution:
    "We make new heating installation simple and stress-free. We assess your home, calculate exactly what capacity you need, and walk you through your options with honest explanations — no jargon, no pressure. Our installation team follows every manufacturer specification to ensure your new system performs at its best and your warranty stays fully intact from day one.",
  benefits: [
    {
      title: "Correct System Sizing",
      desc: "We size every heating system based on your home's actual heat load — not guesswork. Proper sizing means efficiency and comfort.",
    },
    {
      title: "All System Types",
      desc: "We install gas furnaces, electric furnaces, heat pumps, dual-fuel systems, and air handlers — whatever makes sense for your home.",
    },
    {
      title: "Top Brands Available",
      desc: "We install systems from Carrier, Trane, Lennox, Goodman, Rheem, and more. We'll match you with the right brand for your budget.",
    },
    {
      title: "Energy Efficiency",
      desc: "Modern high-efficiency furnaces and heat pumps can dramatically lower your monthly heating costs compared to older systems.",
    },
    {
      title: "Financing Options",
      desc: "New heating systems don't have to be a financial burden. Ask about our flexible financing options during your consultation.",
    },
    {
      title: "Full Warranty Protection",
      desc: "Proper installation is required to maintain manufacturer warranties. Our work meets every specification to protect your investment.",
    },
  ],
  process: [
    {
      step: "1",
      title: "Home Assessment",
      desc: "We visit your home, evaluate your current system and ductwork, and perform a heat load calculation to determine the right capacity.",
    },
    {
      step: "2",
      title: "System Selection",
      desc: "We present clear options with honest guidance on efficiency, performance, and cost — and help you choose with confidence.",
    },
    {
      step: "3",
      title: "Installation Day",
      desc: "Our certified team installs your new heating system, following all manufacturer and code requirements with care and precision.",
    },
    {
      step: "4",
      title: "System Testing",
      desc: "We run your system through a complete test cycle to verify all components are operating correctly and safely.",
    },
    {
      step: "5",
      title: "Homeowner Walkthrough",
      desc: "We explain how to use your new system, set up the thermostat, and answer any questions before we wrap up.",
    },
  ],
  faqs: [
    {
      q: "How do I know if it's time to replace my heating system?",
      a: "If your system is over 15 years old, requires frequent repairs, or your heating bills have been steadily rising, replacement is often the smarter investment. We'll give you an honest assessment.",
    },
    {
      q: "What's better — a gas furnace or a heat pump?",
      a: "It depends on your home's existing infrastructure, your local energy costs, and climate preferences. Heat pumps are very efficient in North Carolina's mild winters; gas furnaces offer more heat output in extreme cold. We'll help you decide based on your specific situation.",
    },
    {
      q: "How long does a heating installation take?",
      a: "Most residential heating installations take one full day. A straightforward furnace swap may take 4–6 hours; more complex installations with ductwork modifications can take longer.",
    },
    {
      q: "Do you offer financing for new heating systems?",
      a: "Yes. We offer flexible financing options to help make a new heating system affordable. Ask during your free consultation.",
    },
    {
      q: "Do you handle permits and inspections?",
      a: "Yes. We handle all required permits and ensure our installation passes local inspections. You don't have to worry about any of that — we take care of it.",
    },
  ],
  relatedLinks: [
    { label: "Heating Repair", href: "/air-central-carolinas/heating-repair" },
    { label: "AC Installation", href: "/air-central-carolinas/ac-installation" },
    { label: "HVAC Maintenance", href: "/air-central-carolinas/hvac-maintenance" },
    { label: "Indoor Air Quality", href: "/air-central-carolinas/indoor-air-quality" },
    { label: "All Services", href: "/air-central-carolinas/services" },
  ],
};

export default function HeatingInstallationPage() {
  return <ACServicePage data={data} />;
}
