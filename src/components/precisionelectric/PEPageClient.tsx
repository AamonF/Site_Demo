"use client";

import { useState } from "react";
import PEHeader from "./PEHeader";
import PEHero from "./PEHero";
import PETrustBar from "./PETrustBar";
import PEProblem from "./PEProblem";
import PEServices from "./PEServices";
import PEWhyChooseUs from "./PEWhyChooseUs";
import PEProcess from "./PEProcess";
import PETestimonials from "./PETestimonials";
import PEServiceArea from "./PEServiceArea";
import PEFinalCTA from "./PEFinalCTA";
import PEFooter from "./PEFooter";
import PELeadModal from "./PELeadModal";

interface Props {
  phone: string;
  city: string;
  company: string;
}

export default function PEPageClient({ phone, city, company }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <PEHeader phone={phone} company={company} onOpenModal={openModal} />
      <main id="home">
        <PEHero phone={phone} city={city} onOpenModal={openModal} />
        <PETrustBar />
        <PEProblem company={company} onOpenModal={openModal} />
        <PEServices onOpenModal={openModal} />
        <PEWhyChooseUs />
        <PEProcess onOpenModal={openModal} />
        <PETestimonials city={city} />
        <PEServiceArea city={city} />
        <PEFinalCTA phone={phone} city={city} onOpenModal={openModal} />
      </main>
      <PEFooter phone={phone} city={city} company={company} />
      <PELeadModal
        isOpen={isModalOpen}
        onClose={closeModal}
        phone={phone}
        company={company}
      />
    </>
  );
}
