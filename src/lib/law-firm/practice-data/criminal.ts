import type { PracticeAreaPage } from "../types";
import { FIRM } from "../firm";

const c = FIRM.city;
const cy = FIRM.county;

const D =
  "This assistant does not provide legal advice and does not create an attorney-client relationship.";

export const CRIMINAL_PRACTICE_PAGES: PracticeAreaPage[] = [
  {
    kind: "parent",
    segment: "criminal-defense",
    parentSegment: null,
    path: "criminal-defense",
    name: "Criminal Defense",
    shortDescription:
      "From investigations to trial: defense when your job, immigration status, and freedom are in the same storm.",
    cardCta: "Criminal defense entry points",
    image:
      "https://images.unsplash.com/photo-1521791059976-15a6b0d1d7d6?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Courthouse columns",
    metaTitle: `${c} Criminal Defense Lawyer | Investigations, Charges & Trials | ${FIRM.name}`,
    metaDescription: `Charged or under investigation in ${cy}? Defense counsel for DUI, drugs, assault, and complex cases—urgent intake. ${FIRM.phoneDisplay}.`,
    heroTitle: "Criminal defense is timing + silence + strategy—not a motivational speech",
    heroSubtitle:
      "We protect you from the traps that turn bad days into permanent records: sloppy statements, toxic bail conditions, and pleas signed before discovery.",
    painPoints: [
      "You are ashamed to tell your employer—but your job is exactly what makes bond conditions terrifying.",
      "You googled penalties and now you cannot sleep, but you also do not know what is realistic for your facts.",
      "Someone told you to ‘explain your side’ to police—and every lawyer meme you have ever seen is screaming.",
      "You are watching court dates approach like train tracks while you still do not understand what discovery will show.",
    ],
    overview: `Criminal allegations are not abstract. In ${c}, they collide with professional licensing, custody, immigration, and housing. Our defense team handles Mecklenburg dockets with a bias toward early fact preservation: body-worn video, dispatch audio, witness IDs, and digital evidence that disappears when phones get swapped or accounts go dark. We do not sell false confidence—we build defenses that survive prosecutors who have seen every story twice.`,
    examples: [
      "Impaired driving with employment-sensitive licensing (CDL, clearance, healthcare credentials)",
      "Drug charges where the stop, dog sniff, or warrant affidavit is the real fight",
      "Assault and DV-adjacent charges with overlapping protective orders and family court",
      "Felony investigations where pre-charge silence and preservation letters matter",
    ],
    whyMatters: `The state has investigators and institutional memory. You have one life and a record that follows you. The goal is not ‘winning the internet’—it is controlling what evidence exists and what story gets told in court.`,
    whyFirm: [
      "We respond quickly when court dates are measured in days, not months",
      "We translate prosecutor incentives into plain language so you can decide with clarity",
      "We prepare for hearings and trial when the state will not move reasonably",
    ],
    attorneyNote:
      "Sarah Nguyen leads our criminal practice with a rule: clients should never be surprised by their own file. If we do not know the weaknesses, we are not ready.",
    faqs: [
      {
        question: "Should I talk to detectives ‘just to clear things up’?",
        answer:
          "Almost never without counsel. ‘Clearing things up’ frequently creates admissible statements. Invoke counsel and get individualized guidance.",
      },
      {
        question: "What should I bring to the first meeting?",
        answer:
          "Paperwork: citations, bond conditions, court notices, and any no-contact orders. Bring a timeline of events—but avoid bringing contraband or weapons into the office, obviously.",
      },
      {
        question: "Can you get charges dropped?",
        answer:
          "Sometimes—through motions, diversion, or weaknesses in the state’s case. Anyone who guarantees dismissal is selling something unethical.",
      },
      {
        question: "Will this ruin my career?",
        answer:
          "It depends on profession, charges, and outcomes. We discuss employment realities early—not after a plea you cannot live with.",
      },
    ],
    localSeoHtml: `<p>If you need a <strong>${c} criminal defense attorney</strong> for ${cy} courts, prioritize counsel who knows local dockets—not generic national SEO pages. ${FIRM.name} defends people, not stereotypes.</p>`,
    relatedPaths: ["criminal-defense/dui-dwi", "personal-injury", "family-law"],
    caseResultTags: ["crim", "dui"],
    relatedBlogSlugs: ["criminal-charges-first-48-hours", "dui-dmv-civil-revocation-hearing"],
    sectionHeadings: {
      overview: "Criminal defense: what we actually control",
      painPoints: "What clients feel before they know the evidence",
      situations: `Defense matters we see across ${c} dockets`,
      childHub: "Choose the charge category closest to yours",
      whyMatters: "Why ‘waiting it out’ is sometimes the worst strategy",
      whyFirm: "Defense posture we take in Mecklenburg cases",
      attorney: "Leadership on criminal files",
      results: "Illustrative criminal outcomes (demo)",
      resultsIntro:
        "Hypothetical summaries for advertising. Prior results do not predict yours; prosecutors and judges vary.",
      faq: "Defense questions people are embarrassed to ask",
      local: `${cy} criminal practice realities`,
      resources: "Articles on early defense decisions",
      related: "When criminal charges touch other legal systems",
    },
    heroCtas: {
      primary: "Urgent consult—criminal",
      secondary: `24/7 intake line · ${FIRM.phoneDisplay}`,
    },
    midCta: {
      title: "Court date within days? Stop improvising and start preserving.",
      subtitle: `We prioritize bond reviews, conditions that affect work, and evidence requests—${c} metro.`,
    },
    closingCta: {
      title: "If you are choosing between ‘quick’ and ‘smart,’ we will help you see the tradeoffs.",
      subtitle:
        "Criminal cases punish panic. A consult can reduce uncertainty even when the situation is serious.",
    },
    formHeadline: "Criminal intake—charges or investigation?",
    formIntro:
      "Tell us court date (if any), bond status, and whether work, travel, or child contact is restricted.",
    chatContext: {
      focusLine: "Criminal triage: custody status, court date, and whether you have made statements.",
      prompts: [
        "Are you out on bond—and what conditions restrict you?",
        "Is there a court date within 10 days?",
        `Have you already spoken to law enforcement? ${D}`,
      ],
    },
  },
  {
    kind: "child",
    segment: "dui-dwi",
    parentSegment: "criminal-defense",
    path: "criminal-defense/dui-dwi",
    name: "DUI / DWI Defense",
    shortDescription:
      "Impaired driving: implied consent, civil revocation, and courtroom defense when your license is also your livelihood.",
    cardCta: "DUI defense consult",
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Night road DUI context",
    metaTitle: `${c} DWI Defense Attorney | License, Tests & Court Dates | ${FIRM.name}`,
    metaDescription: `DWI charges in ${cy}: breath/blood issues, refusal dynamics, DMV timelines, and court defense. Move fast—${FIRM.phoneDisplay}.`,
    heroTitle: "DWI is two emergencies: criminal court and your ability to drive Monday morning",
    heroSubtitle:
      "We map implied consent, testing issues, and your work reality—because a DWI case is never only about one court date.",
    painPoints: [
      "You are terrified of losing a CDL or clearance—not just ‘points.’",
      "You have a citation packet that reads like another language—and a calendar that does not wait.",
      "You are ashamed to tell your spouse, but you need rides to work starting tomorrow.",
      "You are one Google search away from catastrophic self-diagnosis of ‘refusal’ consequences.",
    ],
    overview: `North Carolina DWI law is a braid: traffic stops, standardized field sobriety testing, breath and blood admissibility, sentencing factors, and parallel license consequences. Our ${c} DUI team prepares clients for the questions they will actually face in Mecklenburg court—and the administrative timelines that move even when criminal court feels slow. We file motions when constitutional and forensic issues support them; we counsel honestly when the best outcome is damage control.`,
    examples: [
      "First offenses where employment and travel make limited privileges existential",
      "Repeat allegations where sentencing enhancements and monitoring are on the table",
      "Blood draws after collisions involving injury and multiple agencies",
      "Commercial drivers where disqualification timelines are the whole case",
    ],
    whyMatters: `Missing a DMV-facing deadline can shrink your options before your first substantive court hearing. DWI is one of the few areas where ‘later’ is actively dangerous.`,
    whyFirm: [
      "We translate testing jargon into decisions you can make under stress",
      "We coordinate court strategy with license realities—not as an afterthought",
      "We do not sell fairy tales; we sell preparation",
    ],
    attorneyNote:
      "Sarah Nguyen’s DWI practice is built for working people: clear schedules, clear risks, and a defense plan you can execute without losing your job in the process.",
    faqs: [
      {
        question: "Is refusal ‘better’ than blowing?",
        answer:
          "It can trigger separate consequences. The ‘right’ choice is fact-specific. Get advice urgently—not from a forum thread.",
      },
      {
        question: "Will I lose my license immediately?",
        answer:
          "It depends on testing, refusal, priors, and administrative processes. Bring your paperwork so we can calendar what actually applies.",
      },
      {
        question: "Can I drive for work while this is pending?",
        answer:
          "Sometimes limited privileges are available depending on offense level, timing, and compliance. We evaluate eligibility with your driving record and documents.",
      },
      {
        question: "Should I do ARP or similar programs?",
        answer:
          "Programs depend on jurisdiction, charge level, and prosecutorial policies. We evaluate fit—clients should not ‘shop’ programs without counsel.",
      },
    ],
    localSeoHtml: `<p>Searching for a <strong>${c} DUI lawyer</strong> usually means you are scared about work Monday. ${FIRM.name} handles DWI defense with attention to both courtroom defenses and license survival.</p>`,
    relatedPaths: ["criminal-defense/drug-crimes", "criminal-defense", "personal-injury/car-accidents"],
    caseResultTags: ["dui"],
    relatedBlogSlugs: ["dui-stop-mecklenburg-rights", "dui-dmv-civil-revocation-hearing"],
    sectionHeadings: {
      overview: "DWI defense: what is actually at stake besides ‘guilt’",
      painPoints: "The panic points DWI clients admit in the first ten minutes",
      situations: `DWI patterns we defend in ${c}`,
      whyMatters: "Why DWI punishes delay more than most misdemeanors",
      whyFirm: "How we run DWI files differently than volume firms",
      attorney: "Forensic focus and practical outcomes",
      results: "DWI illustrations (demo)",
      resultsIntro:
        "Demo summaries only. DWI outcomes depend on facts, testing, priors, and judicial discretion—not a website paragraph.",
      faq: "DWI questions clients ask when the citation stops feeling theoretical",
      local: `${cy} impaired-driving dockets and common prosecution approaches`,
      resources: "DWI process reading (educational)",
      related: "When DWI intersects injury or employment",
    },
    heroCtas: {
      primary: "Same-week DWI consult",
      secondary: `Call now · ${FIRM.phoneDisplay}`,
    },
    midCta: {
      title: "If your court date is soon, your plan should be today—not after a panic attack at midnight.",
      subtitle: "Bring citations, any breath/blood paperwork, and your license class (especially CDL).",
    },
    closingCta: {
      title: "Your license and your record need the same calendar—not two different stories.",
      subtitle:
        "We help clients align criminal defense steps with administrative deadlines when those tracks collide.",
    },
    formHeadline: "DWI intake—court date and license class",
    formIntro:
      "Include whether you refused testing, blew, or gave blood—and any job driving requirement.",
    chatContext: {
      focusLine: "DWI triage: testing type, refusal, court date, and occupational driving needs.",
      prompts: [
        "What exact charges appear on your citation?",
        "Do you hold a CDL or drive for work?",
        `Any prior DWI or related history? ${D}`,
      ],
    },
  },
  {
    kind: "child",
    segment: "drug-crimes",
    parentSegment: "criminal-defense",
    path: "criminal-defense/drug-crimes",
    name: "Drug Crimes",
    shortDescription:
      "Possession to trafficking: when the government’s best evidence is also its most vulnerable—search and seizure.",
    cardCta: "Drug charge strategy",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Evidence analysis concept",
    metaTitle: `${c} Drug Crime Defense Lawyer | Searches, Warrants & PWISD | ${FIRM.name}`,
    metaDescription: `Drug charges in ${cy}: Fourth Amendment motions, forensic issues, and immigration-aware negotiation. ${FIRM.phoneDisplay}.`,
    heroTitle: "Drug cases are often won—or lost—before anyone mentions the drugs",
    heroSubtitle:
      "We start with stops, warrants, and statements—because bad searches should not become easy pleas.",
    painPoints: [
      "You are more scared of immigration consequences than jail time—and nobody in the room is connecting those dots yet.",
      "You feel guilty because something was found—even if the search was wrong.",
      "You are being offered a ‘deal’ fast, and it feels like a trap—but you do not know why.",
      "You are watching co-defendants point fingers and you do not know who is on your side.",
    ],
    overview: `Drug prosecutions lean hard on forensic narratives: weight, packaging, travel patterns, and confidential informants. Our ${c} defense attorneys treat the Fourth Amendment as the front door. When searches and seizures fail, the chemistry matters less. When searches survive, we still evaluate lab reporting, chain of custody, and overcharging theories that inflate exposure. We also coordinate immigration risk honestly—some outcomes are worse than a short sentence on paper.`,
    examples: [
      "Traffic stops escalating to canine sniffs and prolonged detention issues",
      "Apartment searches with disputed consent or roommate authority",
      "School-zone and weight-based enhancements that deserve granular review",
      "Prescription pill cases where medical history and labeling matter",
    ],
    whyMatters: `Plea offers often arrive before you know whether the state can prove its case. The fastest deal is not always the cheapest deal—especially with collateral consequences.`,
    whyFirm: [
      "We file motions with specifics—not boilerplate ‘suppress everything’ theatrics",
      "We negotiate with trial risk in view, not bluster",
      "We bring immigration counsel into the loop when a plea can deport",
    ],
    attorneyNote:
      "If your defense conversation never mentions the Constitution, you are shopping in the wrong aisle.",
    faqs: [
      {
        question: "They found it in my car—don’t I have to plead?",
        answer:
          "Not automatically. Constructive possession and suppression issues can change everything. Let counsel review reports and video.",
      },
      {
        question: "What is a confidential informant case?",
        answer:
          "Sometimes the state’s witness is a cooperating defendant. Those cases have credibility issues—when you know how to expose them.",
      },
      {
        question: "Can I get treatment instead of jail?",
        answer:
          "Sometimes—depending on jurisdiction, charges, and record. We evaluate specialty courts and negotiated alternatives case by case.",
      },
      {
        question: "Will a drug conviction affect immigration?",
        answer:
          "It can—sometimes severely. This is why ‘quick pleas’ can be catastrophic. Get individualized analysis before you sign.",
      },
    ],
    localSeoHtml: `<p>If you need a <strong>${c} drug crime attorney</strong> for ${cy} charges, prioritize motion practice literacy—not slogans. ${FIRM.name} defends drug allegations with constitutional discipline.</p>`,
    relatedPaths: ["criminal-defense/dui-dwi", "immigration-law/green-cards", "criminal-defense"],
    caseResultTags: ["drug", "crim"],
    relatedBlogSlugs: ["drug-charges-k9-sniff-suppression-motions", "criminal-charges-first-48-hours"],
    sectionHeadings: {
      overview: "Drug defense starts with government power—not morality lectures",
      painPoints: "Fear points in drug cases beyond ‘jail time’",
      situations: "Drug allegations where motions actually matter",
      whyMatters: "Why fast pleas can be expensive pleas",
      whyFirm: "Our motion-first methodology",
      attorney: "Defense philosophy on drug allegations",
      results: "Drug case illustrations (demo)",
      resultsIntro:
        "Demo composites. Suppression outcomes depend on judges, facts, and record—never guaranteed.",
      faq: "Drug defense FAQs (including immigration)",
      local: `${cy} drug prosecution tendencies`,
      resources: "Fourth Amendment primers for clients",
      related: "When immigration and criminal law intersect",
    },
    heroCtas: {
      primary: "Review search & seizure issues",
      secondary: `Confidential call · ${FIRM.phoneDisplay}`,
    },
    midCta: {
      title: "If you are being pressured to plead before discovery, ask what the rush is hiding.",
      subtitle: "We request reports, lab paperwork, and video early—because surprises favor the state.",
    },
    closingCta: {
      title: "Collateral consequences can outlast jail days—especially for noncitizens.",
      subtitle:
        "Tell us immigration status early so strategy matches reality, not a one-page plea worksheet.",
    },
    formHeadline: "Drug charge intake—charge list and immigration status",
    formIntro:
      "List charges, bond status, and whether ICE or immigration counsel is already involved.",
    chatContext: {
      focusLine: "Drug triage: charges, quantity claims, and search type (warrant vs. consent vs. vehicle).",
      prompts: [
        "What does the citation or warrant allege—possession, PWISD, trafficking?",
        "Was anyone else arrested with you?",
        `Are you a lawful permanent resident or visa holder? ${D}`,
      ],
    },
  },
  {
    kind: "child",
    segment: "assault-charges",
    parentSegment: "criminal-defense",
    path: "criminal-defense/assault-charges",
    name: "Assault Charges",
    shortDescription:
      "Bar fights, domestic-adjacent allegations, and felony assault theories—credibility litigation with real-world consequences.",
    cardCta: "Assault defense review",
    image:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Courtroom gavel",
    metaTitle: `${c} Assault Defense Lawyer | Misdemeanor & Felony Assault | ${FIRM.name}`,
    metaDescription: `Assault charges in ${cy}: self-defense, DVPO overlap, witnesses, and trial strategy. ${FIRM.phoneDisplay}.`,
    heroTitle: "Assault charges are credibility wars dressed up as ‘facts’",
    heroSubtitle:
      "We map injuries, timelines, and digital evidence—then decide whether negotiation or trial protects your record and your family.",
    painPoints: [
      "You are scared the other person will lie—and sound more believable because they called first.",
      "You have a no-contact order that is destroying housing or parenting time.",
      "You are being painted as dangerous when you were scared—or defending someone else.",
      "You want this gone quietly, but quiet pleas can still cost careers.",
    ],
    overview: `Assault cases turn on what jurors believe about fear, proportionality, and identity. Our ${c} team develops evidence beyond police summaries: medical records, security footage, witness bias, and digital communications that either support or destroy narratives. When protective orders overlap, we coordinate strategy so you do not win one forum and lose another. We also take employment consequences seriously—‘just a misdemeanor’ is not always just anything.`,
    examples: [
      "Nightlife incidents with alcohol, bouncers, and partial video",
      "Domestic-adjacent charges with competing 911 calls",
      "School or workplace altercations with institutional investigations layered on top",
      "Weapon allegations where intent and identity are genuinely contested",
    ],
    whyMatters: `Bond conditions can separate you from your home and kids before a single fact is tested. Early strategy is not drama—it is damage control.`,
    whyFirm: [
      "We investigate before we posture—witness lists, footage requests, and medical clarity",
      "We prepare clients for how assault cases look in the real world—not on TV",
      "We coordinate with family counsel when custody and DVPO issues intersect",
    ],
    attorneyNote:
      "Assault defense is not ‘he said / she said’ resignation—it is disciplined proof development.",
    faqs: [
      {
        question: "The other person started it—why am I charged?",
        answer:
          "Police sometimes charge everyone, or the person who looks worse on scene. Self-defense is fact-specific and must be developed with evidence—not vibes.",
      },
      {
        question: "Can charges be dropped if the victim recants?",
        answer:
          "Not automatically. The state may proceed with other evidence. We evaluate admissibility and whether the case survives without cooperative testimony.",
      },
      {
        question: "What happens to my gun rights?",
        answer:
          "Domestic violence protective orders and certain convictions can affect firearm rights. This must be analyzed individually—do not guess.",
      },
      {
        question: "Should I talk to the victim to ‘fix’ it?",
        answer:
          "Often that violates bond or protective orders—and creates new charges. Do not improvise contact restrictions.",
      },
    ],
    localSeoHtml: `<p>Looking for an <strong>assault defense attorney in ${c}</strong>? ${FIRM.name} handles violent-crime allegations with witness work and protective-order awareness—not generic pleas.</p>`,
    relatedPaths: ["criminal-defense/drug-crimes", "family-law", "criminal-defense"],
    caseResultTags: ["assault", "crim"],
    relatedBlogSlugs: ["assault-dvpo-criminal-crossover-nc", "criminal-charges-first-48-hours"],
    sectionHeadings: {
      overview: "Assault allegations: what is actually being decided",
      painPoints: "What defendants fear besides jail",
      situations: `Assault fact patterns we see in ${c}`,
      whyMatters: "Why bond conditions can hurt before a trial date exists",
      whyFirm: "How we defend credibility cases",
      attorney: "Trial preparation vs. negotiation judgment",
      results: "Assault illustrations (demo)",
      resultsIntro:
        "Demo summaries only. Assault outcomes depend on evidence, injuries, and prosecutorial discretion.",
      faq: "Assault & protective-order FAQs",
      local: `${cy} assault dockets and common resolutions`,
      resources: "Crossover issues with family court",
      related: "When assault charges touch family or immigration",
    },
    heroCtas: {
      primary: "Defend the assault allegation",
      secondary: `Bond & conditions help · ${FIRM.phoneDisplay}`,
    },
    midCta: {
      title: "No-contact orders are not ‘paperwork’—they can rearrange your life overnight.",
      subtitle: "Bring your bond conditions and any DVPO paperwork to consult.",
    },
    closingCta: {
      title: "If your job requires background checks, your defense strategy should include your career—not ignore it.",
      subtitle:
        "We discuss deferred outcomes only when they are real options—not fantasy diversion promises.",
    },
    formHeadline: "Assault charge—who was arrested first and what conditions apply?",
    formIntro:
      "Include whether a DVPO exists, children are involved, and any workplace investigation.",
    chatContext: {
      focusLine: "Assault triage: injuries, who called police, and any protective orders.",
      prompts: [
        "Are you subject to a no-contact order or house exclusion?",
        "Is there video, bouncer statements, or medical documentation?",
        `Are children or employers already involved? ${D}`,
      ],
    },
  },
];
