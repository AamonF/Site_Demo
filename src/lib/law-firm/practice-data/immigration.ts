import type { PracticeAreaPage } from "../types";
import { FIRM } from "../firm";

const c = FIRM.city;
const cy = FIRM.county;

const D =
  "This assistant does not provide legal advice and does not create an attorney-client relationship.";

export const IMMIGRATION_PRACTICE_PAGES: PracticeAreaPage[] = [
  {
    kind: "parent",
    segment: "immigration-law",
    parentSegment: null,
    path: "immigration-law",
    name: "Immigration Law",
    shortDescription:
      "Family and employment immigration, adjustment, and citizenship—with cross-system coordination when criminal or family courts are in the mix.",
    cardCta: "Immigration pathways",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Passport and travel documents",
    metaTitle: `${c} Immigration Attorney | Petitions, Adjustment & Strategy | ${FIRM.name}`,
    metaDescription: `Immigration lawyer in ${c}: family petitions, employment sponsorship strategy, and citizenship—accuracy-first. ${FIRM.phoneDisplay}.`,
    heroTitle: "Immigration law punishes inconsistency more than it punishes ‘bad luck’",
    heroSubtitle:
      "We build coherent petition narratives—because agencies compare timelines, addresses, and prior answers whether you meant to hide something or not.",
    painPoints: [
      "You are scared a mistake from years ago will destroy everything you built here.",
      "You are getting conflicting advice from family, forums, and notarios—and nobody signs their name to it.",
      "You have a family court order that helps at home but terrifies you for immigration.",
      "You are waiting on government mail that feels like it controls your entire future.",
    ],
    overview: `Immigration is detail law: forms, evidence packets, interviews, and agency discretion. Our ${c} team assists with select family-based petitions, high-level employment sponsorship planning, adjustment considerations, and naturalization preparation—while coordinating with criminal and family counsel when your legal systems collide. We do not promise approvals; we promise disciplined preparation and candid risk assessment—including referrals to specialized removal counsel when your case demands it.`,
    examples: [
      "Marriage-based adjustment with complex financial interdependence documentation",
      "Naturalization with travel history that needs explanation—not panic",
      "Cases where old charges or citations require admissibility analysis before filing",
      "Employer-sponsored processes requiring HR coordination and timing discipline",
    ],
    whyMatters: `Small inconsistencies become interview questions. Interview questions become findings. Findings become years of delay—or worse.`,
    whyFirm: [
      "We coordinate across practice teams when family and criminal issues intersect",
      "Spanish-language intake support and interpreter coordination for hearings when needed",
      "We prefer a postponed filing over a reckless one",
    ],
    attorneyNote:
      "James Carter supports immigration clients with structured planning—because hope is not an evidence packet.",
    faqs: [
      {
        question: "Can you guarantee approval?",
        answer:
          "No ethical attorney can guarantee government outcomes. We provide diligent preparation and honest risk assessment.",
      },
      {
        question: "Do you handle removal defense?",
        answer:
          "We evaluate select matters and refer to dedicated removal counsel when your case requires immigration court advocacy beyond our scope.",
      },
      {
        question: "Why is my case taking so long?",
        answer:
          "Agency backlogs, category limits, and requests for evidence all affect timelines. We help you plan life around realistic ranges—not forum rumors.",
      },
      {
        question: "Should I fix my tax situation before filing?",
        answer:
          "Sometimes tax alignment matters enormously for naturalization and sometimes for sponsorship. We evaluate with specifics—do not self-diagnose.",
      },
    ],
    localSeoHtml: `<p>Clients seeking an <strong>immigration lawyer in ${c}</strong> should prioritize consistency across forms and counsel coordination—especially with ${cy} family court involvement. ${FIRM.name} assists with select petitions and strategic planning.</p>`,
    relatedPaths: ["immigration-law/green-cards", "family-law", "criminal-defense"],
    caseResultTags: ["imm", "gc"],
    relatedBlogSlugs: ["immigration-family-court-overlap", "i-864-affidavit-support-enforcement-basics"],
    sectionHeadings: {
      overview: "Immigration representation: credibility across time",
      painPoints: "What keeps families awake in immigration limbo",
      situations: `Immigration matters we structure for ${c}-area clients`,
      childHub: "Choose the pathway you are trying to open—or defend",
      whyMatters: "Why ‘small mistakes’ are not small in agency review",
      whyFirm: "How we prepare petitions and interviews",
      attorney: "Leadership on cross-border legal risk",
      results: "Immigration illustrations (demo)",
      resultsIntro:
        "Demo summaries only. Government decisions depend on agency discretion and facts—not law firm marketing.",
      faq: "Immigration questions clients are afraid to ask twice",
      local: `${c} filings and interview logistics`,
      resources: "Cross-system reading for families",
      related: "When immigration touches family or criminal law",
    },
    heroCtas: {
      primary: "Book an immigration strategy session",
      secondary: `Bilingual intake · ${FIRM.phoneDisplay}`,
    },
    midCta: {
      title: "If you are about to file something ‘close enough,’ stop—close enough is how RFEs become denials.",
      subtitle: "Bring prior filings, notices, and travel history—even when it is messy.",
    },
    closingCta: {
      title: "Your story has to match the documents—not the group chat advice.",
      subtitle:
        "We help you build a coherent narrative with evidence, not optimism.",
    },
    formHeadline: "Immigration intake—status goal and deadlines",
    formIntro:
      "List current status, any notices (RFE, NTA), and other open cases (family/criminal).",
    chatContext: {
      focusLine: "Immigration triage: category, deadlines, and any enforcement exposure.",
      prompts: [
        "What benefit are you seeking—green card, citizenship, petition?",
        "Have you received an RFE, denial, or court notice?",
        `Any criminal history or prior removal proceedings? ${D}`,
      ],
    },
  },
  {
    kind: "child",
    segment: "green-cards",
    parentSegment: "immigration-law",
    path: "immigration-law/green-cards",
    name: "Green Cards",
    shortDescription:
      "Permanent residence through family, employment, adjustment, and removal of conditions—petitions built for officer skepticism.",
    cardCta: "Green card petition review",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Permanent resident card concept",
    metaTitle: `${c} Green Card Lawyer | Family & Employment LPR | ${FIRM.name}`,
    metaDescription: `Green card counsel in ${c}: I-130/I-140, adjustment, consular processing, I-751—documented petitions. ${FIRM.phoneDisplay}.`,
    heroTitle: "A green card petition is a credibility file—officers are trained to find seams",
    heroSubtitle:
      "We build bona fide marriage packets, employment stacks, and adjustment strategies that survive interviews—not just inbox submissions.",
    painPoints: [
      "You are terrified the interview will feel like an interrogation about your marriage.",
      "You are paid under the table and do not know how to explain support without lying.",
      "You have a prior overstay or entry issue you have been avoiding thinking about.",
      "You received an RFE that reads like a demand for perfection yesterday.",
    ],
    overview: `Permanent residence pathways differ wildly: family petitions, employment sponsorship, special categories, and adjustment of status when eligible. Our ${c} team focuses on petition narratives supported by documentation—bank records, lease continuity, employer letters, and timelines that make sense. We flag inadmissibility issues early: unlawful presence, misrepresentation concerns, and criminal history intersections that require waivers or alternative strategies. We also prepare clients for interviews with realistic Q&A—not scripted fairy tales.`,
    examples: [
      "Marriage-based adjustment with complex joint financial interdependence",
      "Employment-based PERM/I-140 strategy at a planning level with HR partners",
      "Consular processing preparation when adjustment is not available",
      "I-751 removal of conditions with evidence when the marriage ended",
    ],
    whyMatters: `Agencies compare answers across years. A casual inconsistency can become a credibility crisis—especially in marriage-based cases.`,
    whyFirm: [
      "We build document checklists for your category—not generic forms",
      "We rehearse interviews with your real facts, including awkward ones",
      "We coordinate employers carefully when work authorization is sensitive",
    ],
    attorneyNote:
      "We would rather delay a filing than submit a packet that invites a fraud referral.",
    faqs: [
      {
        question: "Which is faster—family or employment?",
        answer:
          "Speed depends on category, country of chargeability, priority dates, and agency backlogs. We map timelines after reviewing eligibility—not headlines.",
      },
      {
        question: "What if I have an overstay?",
        answer:
          "Overstay can trigger bars and waiver needs. Analyze before filing—not after a denial.",
      },
      {
        question: "What is conditional residence?",
        answer:
          "Some marriage-based adjustments start as two-year conditional residence. I-751 timing and evidence are separate projects—plan early.",
      },
      {
        question: "Can I travel while pending?",
        answer:
          "Travel rules depend on status, parole, advance parole, and risks of abandonment. Get individualized guidance—airport surprises are expensive.",
      },
    ],
    localSeoHtml: `<p>Looking for a <strong>${c} green card attorney</strong> to navigate family-based or employment-based LPR? ${FIRM.name} prepares petitions with evidence discipline and interview readiness.</p>`,
    relatedPaths: ["immigration-law/citizenship-naturalization", "immigration-law", "family-law"],
    caseResultTags: ["gc", "imm"],
    relatedBlogSlugs: ["i-864-affidavit-support-enforcement-basics", "immigration-family-court-overlap"],
    sectionHeadings: {
      overview: "Green card pathways: evidence stacks, not vibes",
      painPoints: "What petitioners stress about before interviews",
      situations: "LPR scenarios we prepare for ${c}-area clients",
      whyMatters: "Why petitions fail on credibility—not ‘bad luck’",
      whyFirm: "How we build officer-ready packets",
      attorney: "Interview preparation philosophy",
      results: "Petition illustrations (demo)",
      resultsIntro:
        "Demo examples only. Approvals depend on agency discretion and complete, consistent evidence.",
      faq: "Green card FAQs—including the awkward money questions",
      local: `${c} adjustment interviews and filing practices`,
      resources: "Sponsor obligations and family petitions",
      related: "When LPR leads next to citizenship—or family court",
    },
    heroCtas: {
      primary: "Prepare my petition packet",
      secondary: `RFE urgent? ${FIRM.phoneDisplay}`,
    },
    midCta: {
      title: "RFE deadline approaching? Bring the notice—not a panic summary.",
      subtitle: "We help clients respond with targeted evidence—not volume for its own sake.",
    },
    closingCta: {
      title: "If your evidence has holes, officers will find them—plan before you file.",
      subtitle:
        "Same-week review for RFE deadlines and interview dates within two weeks.",
    },
    formHeadline: "Green card intake—category and filing history",
    formIntro:
      "Include receipt numbers, priority date if known, and any prior denials or entries.",
    chatContext: {
      focusLine: "Green card triage: family vs employment, adjustment vs consular, and RFE status.",
      prompts: [
        "Is your case pending USCIS or at NVC/consulate stage?",
        "Have you received an interview notice or RFE?",
        `Any prior visa denials or misrepresentation concerns? ${D}`,
      ],
    },
  },
  {
    kind: "child",
    segment: "citizenship-naturalization",
    parentSegment: "immigration-law",
    path: "immigration-law/citizenship-naturalization",
    name: "Citizenship / Naturalization",
    shortDescription:
      "N-400 preparation, GMC issues, travel history, and interview readiness—citizenship as a risk-managed milestone.",
    cardCta: "Naturalization readiness review",
    image:
      "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Flag civic imagery",
    metaTitle: `${c} Citizenship Lawyer | Naturalization & N-400 | ${FIRM.name}`,
    metaDescription: `Naturalization attorney in ${c}: N-400, continuous residence, tax alignment, interview prep. ${FIRM.phoneDisplay}.`,
    heroTitle: "Naturalization is the moment your travel history becomes math—and your past becomes questions",
    heroSubtitle:
      "We prepare N-400 answers, civics readiness, and good moral character issues before an officer turns your life into a checklist.",
    painPoints: [
      "You are proud to apply—but scared a forgotten citation will destroy everything.",
      "You took long trips for family emergencies and now you are terrified of ‘continuous residence.’",
      "You filed taxes inconsistently and you do not know how to fix it without raising flags.",
      "You want citizenship fast—but rushing the wrong filing is slower than waiting.",
    ],
    overview: `Naturalization is not a formality—it is a review of eligibility, travel, tax alignment, and good moral character. Our ${c} citizenship team prepares clients for N-400 accuracy: disclosure discipline, interview demeanor, and the civics/English requirements. When disability waivers apply, we map medical documentation appropriately. When clients have old arrests or citations, we analyze disclosure strategy with individualized risk—not bravado.`,
    examples: [
      "Travel-heavy professionals with complex residence narratives",
      "Older citations that must be disclosed accurately—not minimized",
      "Tax filing alignment questions for mixed employment histories",
      "Medical disability exceptions to testing requirements when eligible",
    ],
    whyMatters: `A wrong answer on N-400 can be more than a denial—it can trigger referrals depending on facts. Preparation is risk management, not pessimism.`,
    whyFirm: [
      "We rehearse interviews with your real history—including uncomfortable chapters",
      "We coordinate with tax and criminal counsel when issues overlap",
      "We advise delay when filing now is worse than waiting",
    ],
    attorneyNote:
      "Citizenship clients deserve attorneys who treat interviews as high-stakes audits—because that is what they are.",
    faqs: [
      {
        question: "How long do I need as an LPR?",
        answer:
          "Continuous residence and physical presence rules depend on category and travel. We evaluate eligibility before you pay filing fees twice.",
      },
      {
        question: "What counts as ‘good moral character’?",
        answer:
          "It is a statutory standard reviewed in a specific window. Old issues may matter depending on disposition and timing—get individualized analysis.",
      },
      {
        question: "What if I failed the test?",
        answer:
          "Re-examination rules may apply. Bring notices quickly—deadlines can be short.",
      },
      {
        question: "Can I apply if I filed taxes separately from my spouse?",
        answer:
          "Marital history questions are common in marriage-based LPR paths; naturalization interviews can revisit consistency. We review facts holistically.",
      },
    ],
    localSeoHtml: `<p>Searching for a <strong>${c} citizenship lawyer</strong> or naturalization counsel in ${cy}? ${FIRM.name} prepares clients for N-400 accuracy and interview credibility.</p>`,
    relatedPaths: ["immigration-law/green-cards", "immigration-law", "family-law/divorce"],
    caseResultTags: ["citizen", "imm"],
    relatedBlogSlugs: ["naturalization-trip-calculator-continuous-residence", "immigration-family-court-overlap"],
    sectionHeadings: {
      overview: "Naturalization: eligibility, disclosure, and interview reality",
      painPoints: "What lawful permanent residents fear on the path to citizenship",
      situations: "Naturalization cases that need tax and travel discipline",
      whyMatters: "Why rushing N-400 can be the slowest option",
      whyFirm: "Our preparation model for citizenship interviews",
      attorney: "Counsel approach on GMC and disclosure",
      results: "Naturalization illustrations (demo)",
      resultsIntro:
        "Demo summaries only. Naturalization grants depend on eligibility, interview performance, and agency discretion.",
      faq: "Citizenship FAQs—including travel and tax worries",
      local: `${c} interview scheduling and local office norms`,
      resources: "Travel history and tax alignment reading",
      related: "When divorce or criminal history affects naturalization",
    },
    heroCtas: {
      primary: "Review N-400 readiness",
      secondary: `Interview soon? ${FIRM.phoneDisplay}`,
    },
    midCta: {
      title: "Interview scheduled? Bring your travel log—not your memory under stress.",
      subtitle: "We run practice interviews with your actual dates and documents.",
    },
    closingCta: {
      title: "If you are not sure whether to disclose something, ‘guess’ is not a strategy.",
      subtitle:
        "We help clients correct filings responsibly when mistakes are caught early.",
    },
    formHeadline: "Naturalization intake—LPR history and interview date",
    formIntro:
      "List trips outside the U.S., any citations, and whether N-400 is already filed.",
    chatContext: {
      focusLine: "Naturalization triage: residence, travel, tax alignment, and arrests/citations.",
      prompts: [
        "Have you already submitted N-400—or are you planning to file?",
        "Any trips longer than six months abroad?",
        `Any criminal history—even if ‘dismissed’? ${D}`,
      ],
    },
  },
];
