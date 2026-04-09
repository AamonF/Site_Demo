import type {
  BlogPost,
  CaseResult,
  NavItem,
  PracticeAreaPage,
  TeamMember,
  Testimonial,
} from "./types";
import { FIRM } from "./firm";
import { LAW_FIRM_BASE } from "./site";
import {
  getAllPracticePages,
  getPracticePageByPath,
  getRelatedPracticePages,
} from "./practice-registry";

export { FIRM } from "./firm";

export const SITE = {
  ...FIRM,
  basePath: LAW_FIRM_BASE,
  ogImage: "/og-image.png",
} as const;

export const NAV_PRIMARY: NavItem[] = [
  { label: "Home", href: LAW_FIRM_BASE },
  { label: "Practice Areas", href: `${LAW_FIRM_BASE}/practice-areas` },
  { label: "Results", href: `${LAW_FIRM_BASE}/results` },
  { label: "About", href: `${LAW_FIRM_BASE}/about` },
  { label: "Team", href: `${LAW_FIRM_BASE}/team` },
  { label: "Contact", href: `${LAW_FIRM_BASE}/contact` },
];

export const NAV_SECONDARY: NavItem[] = [
  { label: "Testimonials", href: `${LAW_FIRM_BASE}/testimonials` },
  { label: "FAQ", href: `${LAW_FIRM_BASE}/faq` },
  { label: "Blog", href: `${LAW_FIRM_BASE}/blog` },
  { label: "Locations", href: `${LAW_FIRM_BASE}/locations` },
  { label: "Financing", href: `${LAW_FIRM_BASE}/financing` },
];

export const TRUST_BADGES = [
  {
    abbr: "NCBA",
    label: "North Carolina Bar Association",
    detail: "Professional standards & ethics",
  },
  {
    abbr: "MCB",
    label: "Mecklenburg County Bar",
    detail: "Local bar leadership & programs",
  },
  {
    abbr: "ABA",
    label: "American Bar Association",
    detail: "Member firm · civil & trial sections",
  },
  {
    abbr: "MDAF",
    label: "Million Dollar Advocates Forum®",
    detail: "Injury results — illustrative only",
  },
] as const;

export const HERO_BADGES = [
  "Serving Charlotte & Mecklenburg County",
  "Free confidential consultation",
  "Same-day intake when urgency matters",
  "Trial-ready file preparation",
] as const;

export const WHY_CHOOSE = [
  {
    title: "Trial-ready from day one",
    description:
      "We prepare every file as if it could be tried—so negotiations are backed by credible leverage and clarity.",
    icon: "gavel" as const,
  },
  {
    title: "Direct access to your attorney",
    description:
      "You will know who is responsible for your case. Prompt updates and straightforward answers—without the runaround.",
    icon: "user" as const,
  },
  {
    title: "Transparent communication",
    description:
      "Plain-language explanations, realistic timelines, and candid guidance so you can decide with confidence.",
    icon: "message" as const,
  },
  {
    title: "Fast response times",
    description:
      "High-intent legal issues do not wait. Our team prioritizes urgent outreach and same-day follow-up when possible.",
    icon: "zap" as const,
  },
  {
    title: "Charlotte court fluency",
    description:
      "We appear in Mecklenburg courthouses and regional venues week in and week out—so strategy matches how judges, prosecutors, and mediators actually operate here.",
    icon: "map" as const,
  },
  {
    title: "Multilingual support",
    description:
      "Spanish-speaking intake and coordinated interpretation for hearings and meetings when needed.",
    icon: "globe" as const,
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Confidential consultation",
    body: `We learn your goals, timeline, and risks—then outline options without pressure. Most consultations can be scheduled in person at our ${FIRM.city} office or by phone within a few business days.`,
  },
  {
    step: "02",
    title: "Strategy & investigation",
    body: "We gather records, preserve evidence, and build a plan aligned with your priorities.",
  },
  {
    step: "03",
    title: "Advocacy & resolution",
    body: "Negotiation when it serves you; litigation when it protects you—always with clear counsel.",
  },
  {
    step: "04",
    title: "Ongoing counsel",
    body: "Clear next steps, documentation, and communication until your matter reaches a sound conclusion.",
  },
];

export const TEAM: TeamMember[] = [
  {
    id: "michael-reed",
    name: "Michael Reed",
    role: "Managing Partner · Civil Litigation & Personal Injury",
    bar: "North Carolina State Bar · U.S. District Court, Western District of NC",
    education: "J.D., University of North Carolina School of Law · B.A., Davidson College",
    bio: "Michael Reed chairs the firm’s civil practice and has spent more than two decades in Charlotte’s litigation community—first on the defense side, then representing injured clients with the same rigor carriers use to evaluate exposure. His work spans Mecklenburg Superior Court, Business Court dockets, and complex mediation settings where preparation separates credible leverage from noise.",
    approach:
      "Michael works with clients directly on theory of the case, expert selection, and settlement timing. He is known for calm judgment in high-stakes moments—and for refusing shortcuts that collapse under scrutiny from judges or opposing counsel.",
    credentials: [
      "NC Super Lawyers® — Personal Injury (demo selection methodology)",
      "Million Dollar Advocates Forum® — membership criteria apply",
      "Frequent speaker — Mecklenburg County Bar CLE programs",
    ],
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Attorney Michael Reed in professional attire seated in a law office",
  },
  {
    id: "sarah-nguyen",
    name: "Sarah Nguyen",
    role: "Partner · Criminal Defense & DUI",
    bar: "North Carolina State Bar",
    education: "J.D., Wake Forest University · B.S., UNC Charlotte",
    bio: "Sarah Nguyen defends clients in Mecklenburg County’s criminal and impaired-driving dockets—from first appearances and bond reviews through contested hearings. A Charlotte native, she understands how a single charge can threaten employment in banking, transportation, and professional licensing contexts that define this market.",
    approach:
      "Sarah intervenes early on forensic issues—stops, testing, and calibration records—while keeping clients oriented on license consequences and long-term record impact. Her practice is built on responsiveness: clients are not left guessing what happened in court.",
    credentials: [
      "NC Criminal Defense Bar — member",
      "Certified NHTSA SFST practitioner training (continuing education)",
      "Former assistant public defender — Mecklenburg County (illustrative)",
    ],
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Attorney Sarah Nguyen standing in a modern office setting",
  },
  {
    id: "james-carter",
    name: "James Carter",
    role: "Senior Associate · Family & Immigration",
    bar: "North Carolina State Bar",
    education: "J.D., Georgia State University · B.A., Spelman College",
    bio: "James Carter guides families through divorce, custody, and support matters in Charlotte’s family courts—and coordinates strategy when immigration status intersects with parenting plans or protective orders. His docket includes high-conflict custody litigation as well as negotiated resolutions for clients who prefer discretion.",
    approach:
      "James leads with structure: clear timelines, documented communications, and child-centered framing when courts evaluate best-interest factors. When litigation is unavoidable, he prepares witnesses and exhibits for hearings that turn on credibility and stability—not theatrics.",
    credentials: [
      "Family law mediation training — NC Dispute Resolution Commission programs",
      "Pro bono recognition — Charlotte-area family law clinic (illustrative)",
      "Spanish-language client meetings with professional interpretation as needed",
    ],
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Attorney James Carter in a professional headshot",
  },
];

export const CASE_RESULTS: CaseResult[] = [
  {
    id: "r1",
    headline: "Motor vehicle collision · cervical injury",
    type: "Personal injury",
    summary:
      "Commercial policy dispute on a busy Charlotte corridor—liability contested at a signalized intersection with multiple witness accounts.",
    venue: "Mecklenburg County Superior Court · mediated resolution",
    outcome: "Seven-figure settlement after structured expert analysis (past results do not guarantee future outcomes).",
    tags: ["pi", "pi-auto", "car"],
  },
  {
    id: "r1b",
    headline: "Tractor-trailer underride · reconstruction + carrier oversight",
    type: "Truck accident",
    summary:
      "Hours-of-service and maintenance records obtained under litigation hold; liability spread across driver and motor carrier.",
    venue: "Mecklenburg County Superior Court · confidential settlement",
    outcome: "High seven-figure resolution after expert reconstruction (illustrative; not a prediction for your case).",
    tags: ["truck", "pi"],
  },
  {
    id: "r1c",
    headline: "Motorcycle left-turn collision · visibility dispute",
    type: "Motorcycle injury",
    summary:
      "Competing witness accounts at dusk; biomechanics and scene mapping supported liability narrative.",
    venue: "Mecklenburg County · mediated outcome",
    outcome: "Policy-limits settlement plus UM/UIM stack coordination (past results do not guarantee future outcomes).",
    tags: ["moto", "pi"],
  },
  {
    id: "r1d",
    headline: "Wrongful death · commercial motor vehicle",
    type: "Wrongful death",
    summary:
      "Estate coordination, beneficiary structure, and damages presentation for fatal corridor crash.",
    venue: "North Carolina state court · resolved pre-trial",
    outcome: "Confidential high-value settlement for qualifying beneficiaries (illustrative composite).",
    tags: ["wrongful", "pi", "truck"],
  },
  {
    id: "r2",
    headline: "Felony assault · self-defense theory",
    type: "Criminal defense",
    summary: "Charges reduced following evidentiary challenges and witness credibility issues for the state.",
    venue: "Mecklenburg County Superior Court",
    outcome: "Dismissal of felony count; misdemeanor resolution with non-custodial terms.",
    tags: ["crim", "assault"],
  },
  {
    id: "r2b",
    headline: "Drug possession · motion to suppress granted",
    type: "Drug crimes",
    summary: "Traffic stop challenged; contraband excluded after Fourth Amendment hearing.",
    venue: "Mecklenburg County District Court",
    outcome: "Case dismissed without admissible evidence (outcomes depend on facts and judges).",
    tags: ["drug", "crim"],
  },
  {
    id: "r3",
    headline: "High BAC DUI · employment clearance at stake",
    type: "DUI",
    summary: "Challenge to stop sequence and calibration documentation for breath testing device.",
    venue: "Mecklenburg County District Court · DMV parallel proceedings",
    outcome: "Reduction to lesser offense; client retained professional license subject to monitoring.",
    tags: ["dui", "crim"],
  },
  {
    id: "r4",
    headline: "Contested custody · relocation dispute",
    type: "Family law",
    summary: "Multi-day hearing addressing best-interest factors and school continuity.",
    venue: "Mecklenburg County family court",
    outcome: "Primary custody aligned with child’s established community ties; structured visitation.",
    tags: ["custody", "fam"],
  },
  {
    id: "r4b",
    headline: "High-asset divorce · business valuation dispute",
    type: "Divorce",
    summary: "Forensic accounting on pass-through income; equitable distribution contested at trial.",
    venue: "Mecklenburg County family court",
    outcome: "Favorable distribution and support alignment after expert testimony (illustrative).",
    tags: ["divorce", "fam"],
  },
  {
    id: "r5",
    headline: "Marriage-based adjustment · RFE response",
    type: "Immigration",
    summary: "Request for Evidence on bona fides; supplemented with third-party affidavits and timeline documentation.",
    venue: "USCIS · Charlotte-area filings",
    outcome: "Approval after interview (government timelines and outcomes vary).",
    tags: ["gc", "imm"],
  },
  {
    id: "r6",
    headline: "Naturalization · travel history scrutiny",
    type: "Citizenship",
    summary: "N-400 preparation addressing extended trips and tax filing alignment prior to interview.",
    venue: "USCIS",
    outcome: "Oath scheduled after successful interview (not a guarantee for other cases).",
    tags: ["citizen", "imm"],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "I called after a serious accident and spoke with a human—not a call center. The team moved fast, explained every step, and never promised magic. The outcome exceeded what I thought was possible.",
    name: "Daniel R.",
    location: "Charlotte",
    caseType: "Personal injury",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "Sarah was direct about risks and timelines. She protected my license and my job. I hope I never need a lawyer again—but if I do, I’m calling this firm first.",
    name: "Monica L.",
    location: "Matthews",
    caseType: "DUI defense",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "Divorce was the hardest season of my life. James kept the focus on my kids and helped me avoid unnecessary court fights. When we had to litigate, he was ready.",
    name: "Sarah K.",
    location: "Charlotte",
    caseType: "Family law",
    rating: 5,
  },
  {
    id: "t4",
    quote:
      "Professional, calm, and relentless in the right ways. They earned my trust in the first consultation—and kept it through a long case.",
    name: "Andre M.",
    location: "Huntersville",
    caseType: "Criminal defense",
    rating: 5,
  },
];

export const FAQ_HOME_PREVIEW = [
  {
    question: "How much does a consultation cost?",
    answer:
      "Initial consultations are complimentary for most matters. We will confirm scope before you meet with an attorney. No surprise fees for the first conversation.",
  },
  {
    question: "Will I speak with an attorney—not only staff?",
    answer:
      "Yes. You will understand who is responsible for your case and how to reach them. Support staff assists with scheduling and documents, but legal strategy is attorney-led.",
  },
  {
    question: "Do you take cases outside Charlotte?",
    answer:
      "We routinely represent clients across Mecklenburg County and surrounding communities, and handle select matters statewide depending on jurisdiction and subject matter.",
  },
  {
    question: "How quickly will someone respond?",
    answer:
      "Urgent criminal and injury intakes are prioritized same-day when possible. For other matters, expect a response within one business day—often sooner.",
  },
];

export const FAQ_PAGE = [
  ...FAQ_HOME_PREVIEW,
  {
    question: "What should I bring to the first meeting?",
    answer:
      "Bring identification, any court paperwork, insurance documents (for injury matters), and a concise timeline of events. If you have photos, medical records, or witness contacts, bring those as well.",
  },
  {
    question: "How are fees structured?",
    answer:
      "It depends on the matter. Personal injury cases are frequently handled on a contingency basis. Criminal and family matters may be flat-fee or hourly. We explain fees in writing before you commit.",
  },
  {
    question: "Does contacting you create an attorney-client relationship?",
    answer:
      "No. A relationship is formed only after we agree in writing to represent you. Until then, do not send confidential information you are unwilling to risk becoming known.",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "what-to-do-after-charlotte-car-accident",
    title: "What to Do After a Car Accident in Charlotte: A Practical Checklist",
    excerpt:
      "Immediate steps that protect your health, preserve evidence, and avoid common insurance pitfalls after a collision in Mecklenburg County.",
    date: "2026-03-12",
    readTime: "7 min read",
    category: "Personal Injury",
    body: [
      "After a collision, safety comes first—then documentation. If you can do so safely, photograph vehicle positions, plate numbers, insurance cards, and the surrounding scene before vehicles move. Exchange information calmly, but avoid discussing fault in detail at the roadside.",
      "Seek medical evaluation even when pain feels minor; soft-tissue injuries often intensify later. Notify your insurer consistent with policy requirements, but avoid recorded statements about fault until you understand the full picture.",
      "In Mecklenburg County, insurers may assign investigators quickly. Preserve text messages, dashcam footage, and witness contacts. Consultation with counsel can help you communicate strategically without compromising a future claim.",
    ],
  },
  {
    slug: "dui-stop-mecklenburg-rights",
    title: "DUI Stops in Mecklenburg County: Rights, Tests, and Common Misunderstandings",
    excerpt:
      "A high-level overview of what drivers should know—without substituting for legal advice in your specific case.",
    date: "2026-02-28",
    readTime: "9 min read",
    category: "DUI",
    body: [
      "Impaired driving allegations can trigger parallel criminal and administrative processes. Field sobriety tests and breath testing involve rules—calibration, observation windows, and officer certification can matter when challenged appropriately.",
      "Refusal triggers separate consequences under implied consent frameworks. What feels like a simple decision can narrow options later. This article is educational only; your facts determine defenses and negotiation leverage.",
      "If you are facing a DUI charge, prioritize timely review of paperwork and deadlines. Early counsel can help preserve evidence and identify procedural issues that may matter in court or in license proceedings.",
    ],
  },
  {
    slug: "custody-best-interest-factors-nc",
    title: "Custody Decisions in NC: What “Best Interest” Really Looks Like in Practice",
    excerpt:
      "How courts weigh stability, caregiving history, and child preferences at different ages.",
    date: "2026-02-14",
    readTime: "8 min read",
    category: "Family Law",
    body: [
      "North Carolina custody decisions center on the child’s best interest—a standard that sounds simple but plays out through dozens of practical factors: school continuity, caregiving history, safety, and each parent’s ability to cooperate.",
      "Older children may have their preferences considered in age-appropriate ways, but no single factor controls. Courts dislike instability and high-conflict behavior that places children in the middle.",
      "Documentation matters: calendars, communications, and third-party observations can clarify disputed facts. Mediation often helps—but litigation remains necessary when safety or fundamental disagreements block agreement.",
    ],
  },
  {
    slug: "immigration-family-court-overlap",
    title: "When Immigration Status and Family Court Overlap: Planning for Safer Outcomes",
    excerpt:
      "Why coordination matters—and how to avoid accidental disclosures that complicate both processes.",
    date: "2026-01-30",
    readTime: "10 min read",
    category: "Immigration",
    body: [
      "Family court filings can become part of the record in unexpected ways. Immigration proceedings may require disclosure of marital history, addresses, and dependents. Inconsistent narratives across systems can create credibility problems.",
      "Coordinate counsel when possible. A family law settlement that looks practical on paper may have immigration consequences that should be reviewed by immigration counsel before signing.",
      "Protect children first—but understand that timing, custody labels, and support orders can intersect with petitions and admissibility questions. Early planning reduces painful surprises.",
    ],
  },
  {
    slug: "criminal-charges-first-48-hours",
    title: "Charged With a Crime? The First 48 Hours Matter More Than Most People Think",
    excerpt:
      "Evidence preservation, bond considerations, and why early counsel can change the trajectory of a case.",
    date: "2026-01-12",
    readTime: "6 min read",
    category: "Criminal Defense",
    body: [
      "The hours after an arrest or summons can determine what evidence exists—surveillance footage, witness memories, and digital records may not wait for your convenience.",
      "Bond conditions can restrict movement, contact, or internet use. Violations create new charges. Understand your conditions in writing and ask counsel if something interferes with work or childcare.",
      "Avoid discussing your case publicly or on social media. Statements to friends can become witnesses. Let your attorney shape communication with the state.",
    ],
  },
  {
    slug: "workers-comp-deadlines-nc",
    title: "North Carolina Workers’ Compensation Deadlines Employees Often Miss",
    excerpt:
      "Notice rules, filing windows, and why delay can narrow your options—even with a strong underlying claim.",
    date: "2025-12-18",
    readTime: "7 min read",
    category: "Workers’ Compensation",
    body: [
      "Workers’ compensation is deadline-heavy. Employers and carriers receive the benefit of late notice when employees delay reporting—even when the injury is legitimate.",
      "Medical authorization and treatment networks can also affect whether care is deemed compensable. Document the injury report and keep copies of forms you submit.",
      "If a third party caused the injury, separate personal injury claims may exist—but coordination is essential to avoid unintended offsets or lien issues.",
    ],
  },
  {
    slug: "truck-crash-ecm-logs-spoliation",
    title: "Truck Crashes: Why ECM Data and Driver Logs Disappear—And What Preservation Letters Do",
    excerpt:
      "A plain-English look at electronic control modules, hours-of-service records, and why carriers move fast after a serious collision.",
    date: "2026-04-02",
    readTime: "8 min read",
    category: "Truck Accidents",
    body: [
      "After a serious commercial motor vehicle collision, defense teams often focus on what was recorded—and what never made it into the file. Electronic control module (ECM) snapshots, driver qualification files, and maintenance histories are not academic details; they can illuminate fatigue, maintenance culture, and corporate oversight.",
      "Spoliation is not always dramatic shredding. Sometimes it is delayed downloads, ‘routine’ overwriting, or ambiguous retention policies. That is why attorneys send targeted preservation communications when litigation is reasonably anticipated.",
      "This article is educational only. Your collision may involve different vehicles, jurisdictions, and evidence types. Counsel should evaluate chain-of-custody and admissibility questions for your specific facts.",
    ],
  },
  {
    slug: "motorcycle-um-coverage-stacked-limits",
    title: "Motorcycle Crashes and UM/UIM: Why ‘Full Coverage’ Still Leaves Gaps",
    excerpt:
      "Uninsured and underinsured motorist coverage can decide whether a rider gets compensated when an at-fault driver carries state-minimum limits.",
    date: "2026-03-30",
    readTime: "7 min read",
    category: "Motorcycle Accidents",
    body: [
      "Riders are often told they purchased ‘full coverage,’ then discover after a crash that the at-fault driver’s policy is tiny and their own UM/UIM selections were minimal—or excluded in ways they did not understand.",
      "Stacking rules, household vehicles, and rejection forms can change outcomes dramatically. These issues are policy-specific and fact-specific; there is no one-size answer from a blog post.",
      "If you were injured, preserve your policy declarations, renewal documents, and any UM/UIM selection forms. Early review with counsel can prevent avoidable assumptions about what is in play.",
    ],
  },
  {
    slug: "wrongful-death-personal-representative-nc",
    title: "Wrongful Death in NC: Personal Representatives, Estates, and Why the Plaintiff Structure Matters",
    excerpt:
      "A high-level overview of how wrongful death actions differ from survival actions—and why families should avoid guessing about who can sue.",
    date: "2026-03-22",
    readTime: "9 min read",
    category: "Wrongful Death",
    body: [
      "Wrongful death claims are emotionally brutal and procedurally unforgiving. North Carolina law limits who may bring the action and how damages are distributed among beneficiaries. Confusion here can delay filings and create internal family stress you do not need.",
      "Estate administration can intersect with wrongful death strategy—especially when probate assets, creditors, or complex family structures are involved. Coordination between litigation counsel and estate counsel is not ‘extra’—it is often essential.",
      "This overview is not legal advice for your family. If you are navigating loss, prioritize safety and support first—then get individualized guidance when you are ready.",
    ],
  },
  {
    slug: "dui-dmv-civil-revocation-hearing",
    title: "DWI and Your License: Criminal Court Is Only Half the Story in North Carolina",
    excerpt:
      "Why some drivers face civil revocation timelines that move faster than their first criminal court date—and what notices to watch for.",
    date: "2026-03-18",
    readTime: "8 min read",
    category: "DUI",
    body: [
      "Impaired driving allegations can trigger parallel tracks: criminal charges and administrative license consequences. Missing a window on one track can narrow options even when the criminal case remains contested.",
      "Refusal allegations, prior offenses, and commercial licensing add complexity. What feels like a paperwork problem can become a job problem quickly for drivers who commute or hold CDLs.",
      "Do not rely on generic online timelines. Bring your citation, any testing paperwork, and DMV notices to an attorney consultation so deadlines can be mapped to your facts.",
    ],
  },
  {
    slug: "drug-charges-k9-sniff-suppression-motions",
    title: "Drug Cases Often Turn on the Stop—Not the Drugs Themselves",
    excerpt:
      "A primer on why defense counsel starts with the Fourth Amendment story before discussing plea numbers.",
    date: "2026-03-08",
    readTime: "7 min read",
    category: "Drug Crimes",
    body: [
      "Prosecutors can present drugs as if liability were obvious. Experienced defense counsel often starts earlier: was the stop supported by reasonable suspicion? Was a search constitutionally justified? Was a warrant affidavit complete?",
      "When judges suppress evidence, the state’s case can change overnight. That is why ‘weak’ cases on paper can still justify serious preparation—and why rushed pleas can be costly.",
      "Every jurisdiction has different judges, prosecutors, and local practices. This article cannot predict outcomes; it explains why motions matter.",
    ],
  },
  {
    slug: "assault-dvpo-criminal-crossover-nc",
    title: "Assault Charges and 50B Orders: When Criminal and Civil Tracks Collide",
    excerpt:
      "Why no-contact conditions, custody, and witness credibility require a unified strategy—not three different stories.",
    date: "2026-02-20",
    readTime: "8 min read",
    category: "Assault",
    body: [
      "Clients are sometimes surprised that a criminal assault case and a civil domestic violence protective order proceeding can both exist—with overlapping facts but different burdens and timelines.",
      "Inconsistent statements between forums can damage credibility in both. That does not mean you should refuse to participate; it means you should understand what is being asked and why wording matters.",
      "If children or housing are involved, ‘winning’ a narrative on social media is usually the wrong tactic. Documentation and counsel-led communication tend to age better in court.",
    ],
  },
  {
    slug: "divorce-executive-compensation-hidden-income",
    title: "Divorce With RSUs, Bonuses, and Clawbacks: Why ‘Income’ Is a Fight",
    excerpt:
      "How modern pay structures complicate support and distribution—and why discovery timing matters.",
    date: "2026-02-10",
    readTime: "10 min read",
    category: "Divorce",
    body: [
      "Executive compensation is rarely captured cleanly on a W-2 line. Vesting schedules, performance triggers, and forfeiture risk can make ‘what is marital’ a genuine dispute—not posturing.",
      "Equitable distribution and support analysis may treat the same dollars differently. Clients sometimes focus on one fight (the house) while overlooking another (deferred comp).",
      "Mediation can work when disclosures are complete. When information is asymmetrical, court processes exist—but they take time and credibility.",
    ],
  },
  {
    slug: "custody-apps-text-threads-best-interest",
    title: "Custody Cases in the Text-Message Era: What Judges Actually Read",
    excerpt:
      "Why tone, consistency, and third-party witnesses still beat volume when parents try to ‘prove’ the other side is impossible.",
    date: "2026-01-28",
    readTime: "8 min read",
    category: "Family Law",
    body: [
      "Courts have seen every screenshot strategy. Judges are not impressed by curated text wars; they look for stability, child-centered decisions, and credibility under scrutiny.",
      "Parenting apps and structured communication can help—or can become another front in a conflict. The tool is less important than the behavior it produces.",
      "If safety is a genuine issue, documentation matters. If the issue is annoyance, documentation can backfire. Counsel helps you tell the difference before you file something you cannot unsend.",
    ],
  },
  {
    slug: "i-864-affidavit-support-enforcement-basics",
    title: "The I-864 Affidavit of Support: When Family-Based Immigration Creates Long-Term Financial Duties",
    excerpt:
      "A high-level overview of sponsor obligations—without replacing advice on your specific petition.",
    date: "2026-01-18",
    readTime: "9 min read",
    category: "Immigration",
    body: [
      "Many sponsors focus on getting the relative to the United States—and only later learn that the I-864 can create enforceable support obligations that survive arguments at the dinner table.",
      "Divorce does not automatically erase I-864 issues. Family law and immigration strategy sometimes need to be coordinated so agreements do not create accidental immigration harm.",
      "This article is informational. Enforcement actions and agency interpretations change; your facts determine risk.",
    ],
  },
  {
    slug: "naturalization-trip-calculator-continuous-residence",
    title: "Naturalization: Why Your Travel History Is a Math Problem Before It Is a ‘Character’ Problem",
    excerpt:
      "Continuous residence and physical presence rules confuse lawful permanent residents—especially people who travel for work or family emergencies.",
    date: "2026-01-05",
    readTime: "8 min read",
    category: "Citizenship",
    body: [
      "Clients often assume that returning before a trip ‘expires’ means they are safe. USCIS can scrutinize lengthy absences, patterns of travel, and whether residence in the United States was truly maintained.",
      "Tax filing alignment, maintenance of a home, and employment location can all become interview topics—not because officers enjoy paperwork, but because eligibility is statutory.",
      "If you have a complex travel history, rushing an N-400 filing can be expensive. Sometimes the better strategy is timing—not speed.",
    ],
  },
];

export const SEO_LONGFORM_HOME = {
  heading: `Advocacy rooted in Charlotte, North Carolina`,
  paragraphs: [
    `When your health, freedom, family, or livelihood is on the line, you need counsel who combines courtroom credibility with responsive communication. ${FIRM.name} represents individuals and employers across ${FIRM.cityWithState}—from Uptown and South End to Matthews, Huntersville, and the Lake Norman communities—when injury, criminal charges, DUI allegations, divorce, or immigration issues demand disciplined advocacy.`,
    `${FIRM.localContext} Procedures and expectations are not identical from one courthouse to the next. Our attorneys invest in preparation early—preserving evidence, identifying deadlines, and building a strategy you can understand—so you are not learning the system at the worst possible moment.`,
    `Whether you were hurt on I-77 or I-485, cited after a stop in ${FIRM.county}, or served with papers in a family matter, the first step is a confidential conversation. We will tell you what we think is strong, what is uncertain, and what we recommend next—without a manufactured sense of urgency.`,
  ],
};

export const IMAGES = {
  heroBg:
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2000&q=80",
  heroPortrait:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80",
  office:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
  consultation:
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80",
  courthouse:
    "https://images.unsplash.com/photo-1505664192109-8f3a1a1b5cfc?auto=format&fit=crop&w=1400&q=80",
} as const;

export function getPracticeAreas(): PracticeAreaPage[] {
  return getAllPracticePages();
}

export function getPracticeBySlug(slug: string): PracticeAreaPage | undefined {
  return getPracticePageByPath(slug);
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((b) => b.slug === slug);
}

export function getRelatedPracticeAreas(paths: string[]): PracticeAreaPage[] {
  return getRelatedPracticePages(paths);
}

export function caseResultsForTags(tags: string[]): CaseResult[] {
  if (!tags.length) return CASE_RESULTS.slice(0, 3);
  const scored = CASE_RESULTS.map((c) => {
    const t = c.tags ?? [];
    const score = tags.reduce((n, tag) => n + (t.includes(tag) ? 1 : 0), 0);
    return { c, score };
  });
  scored.sort((a, b) => b.score - a.score);
  const picked = scored.filter((s) => s.score > 0).map((s) => s.c);
  const out = picked.length ? picked : CASE_RESULTS;
  return out.slice(0, 3);
}
