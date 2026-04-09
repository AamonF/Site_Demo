export type CdFaqItem = { q: string; a: string };

export const homeFaqs: readonly CdFaqItem[] = [
  {
    q: "What happens immediately after an arrest?",
    a: "You may be booked, fingerprinted, and given a court date or bond hearing. Anything you say can be used against you—so it is critical to invoke your right to counsel and avoid casual conversations about the case until you have legal guidance.",
  },
  {
    q: "Should I talk to the police without a lawyer?",
    a: "In most situations, you should politely decline to answer substantive questions until you have counsel. You can provide basic identifying information if required, but voluntary statements often create problems that are hard to undo later.",
  },
  {
    q: "How much does a criminal defense attorney cost?",
    a: "Fees depend on charge severity, complexity, court location, and investigation needs. We explain fee structures clearly after a confidential consultation so you understand what you are paying for and what milestones come next.",
  },
  {
    q: "How long will my case take?",
    a: "Timelines vary widely—from weeks for negotiated resolutions to much longer for contested matters. We prioritize urgent deadlines (bond, protective orders, discovery) while building a defense strategy that fits your goals.",
  },
  {
    q: "What should I expect in court?",
    a: "Early hearings often address conditions of release, scheduling, and procedural issues. As the case develops, your defense may involve motions, negotiations, and—if necessary—trial. We prepare you for each stage so you are not walking in blind.",
  },
];

export const testimonials = [
  {
    name: "Daniel R.",
    location: "[City] metro",
    quote:
      "I was terrified after charges were filed. The firm answered fast, explained every step calmly, and fought for a result I could live with. I finally slept again.",
  },
  {
    name: "Priya M.",
    location: "[City]",
    quote:
      "Professional, discreet, and relentless in court. They didn’t sugarcoat anything—but they also didn’t let me panic alone.",
  },
  {
    name: "James T.",
    location: "[County]",
    quote:
      "Clear communication and a strategy that made sense. I felt like someone was actually steering the ship while everything else felt out of control.",
  },
] as const;
