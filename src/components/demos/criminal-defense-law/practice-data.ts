import type { CdImageKey } from "./images";
import type { CdPracticeSlug } from "./site-config";
import { CD_DEMO_BASE } from "./site-config";

export type CdFaq = { q: string; a: string };

export type CriminalPracticeContent = {
  slug: CdPracticeSlug;
  label: string;
  shortLabel: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  imageKey: CdImageKey;
  chargesExplained: { title: string; body: string }[];
  consequences: { label: string; detail: string }[];
  whyDefense: string;
  howWeHelp: { title: string; body: string }[];
  faqs: CdFaq[];
};

export function practicePath(slug: CdPracticeSlug) {
  return `${CD_DEMO_BASE}/${slug}`;
}

export const PRACTICE_LINKS: {
  slug: CdPracticeSlug;
  label: string;
  description: string;
}[] = [
  {
    slug: "dui-dwi",
    label: "DUI / DWI Defense",
    description: "License issues, testing challenges, and court strategy.",
  },
  {
    slug: "drug-charges",
    label: "Drug Charges",
    description: "Possession, distribution, and search-and-seizure issues.",
  },
  {
    slug: "assault-violent-crimes",
    label: "Assault & Violent Crimes",
    description: "Self-defense, credibility disputes, and injury allegations.",
  },
  {
    slug: "theft-property-crimes",
    label: "Theft & Property Crimes",
    description: "Intent, value, restitution, and diversion pathways.",
  },
  {
    slug: "domestic-violence",
    label: "Domestic Violence",
    description: "Protective orders, sensitive facts, and defense planning.",
  },
];

export const PRACTICE_PAGES: Record<CdPracticeSlug, CriminalPracticeContent> = {
  "dui-dwi": {
    slug: "dui-dwi",
    label: "DUI / DWI Defense",
    shortLabel: "DUI / DWI",
    metaTitle: "DUI & DWI Lawyers in [City] | Your Criminal Defense Firm",
    metaDescription:
      "Charged with DUI or DWI in [City]? We challenge testing procedures, protect your license, and build a defense fast. Free confidential consultation—call now.",
    h1: "DUI & DWI Defense Built for What Happens Next—Not What Already Happened",
    intro:
      "A DUI charge can threaten your license, your job, and your future in days—not months. Prosecutors often treat these cases as routine. We don’t. We scrutinize stops, testing, and procedure because small errors can change outcomes when handled correctly and early.",
    imageKey: "dui",
    chargesExplained: [
      {
        title: "Impaired driving statutes",
        body: "States define impairment differently—through blood alcohol limits, drug metabolites, or officer observations. We map the exact theory the state is pursuing so your defense targets the weakest link.",
      },
      {
        title: "Administrative license actions",
        body: "Separate from criminal court, agencies may move to suspend driving privileges quickly. Missing deadlines can forfeit options—so we coordinate criminal defense with time-sensitive license issues.",
      },
      {
        title: "Field sobriety and testing",
        body: "Walk-and-turn, one-leg stand, and breath/blood testing all have protocols. When protocols fail, reliability fails—and reliability is the whole case.",
      },
      {
        title: "Prior offenses and enhancements",
        body: "Prior convictions or aggravating facts can increase penalties. We evaluate what is actually provable versus what is alleged on paper.",
      },
    ],
    consequences: [
      {
        label: "License suspension or revocation",
        detail: "Even first offenses can trigger restrictions that affect work, childcare, and travel.",
      },
      {
        label: "Fines and court costs",
        detail: "Financial penalties add up quickly—especially when programs and monitoring are required.",
      },
      {
        label: "Employment and professional licensing",
        detail: "Commercial drivers, healthcare workers, and other licensed professionals may face outsized career risk.",
      },
      {
        label: "Criminal record implications",
        detail: "A conviction can follow you in background checks—making early defense strategy essential.",
      },
    ],
    whyDefense:
      "DUI cases look simple on the surface. They rarely are. The difference between a bad outcome and a controlled outcome often comes down to evidence preservation, timely motions, and a lawyer who understands how these cases are actually built—and where they break.",
    howWeHelp: [
      {
        title: "Immediate intake and preservation",
        body: "We identify body-worn video, dispatch records, and testing documentation that may not stay available forever.",
      },
      {
        title: "Attack weak evidence—ethically and aggressively",
        body: "When stops or tests don’t meet standards, we file targeted challenges rather than generic arguments.",
      },
      {
        title: "Negotiate with leverage",
        body: "Prosecutors respond to preparedness. We present facts credibly to pursue reductions or alternatives when appropriate.",
      },
    ],
    faqs: [
      {
        q: "Will I lose my license automatically?",
        a: "Not always—and not immediately in every situation. There are often deadlines and hearings that affect your driving privileges. The sooner we intervene, the more options you may have.",
      },
      {
        q: "Can I refuse a breath test?",
        a: "Refusal can trigger legal consequences depending on your state and circumstances. Don’t guess—call us. The right answer depends on the facts and the jurisdiction.",
      },
      {
        q: "Is a first offense ‘not a big deal’?",
        a: "It is always serious enough to deserve a defense. Even first offenses can carry lasting consequences, especially with license and employment impacts.",
      },
    ],
  },
  "drug-charges": {
    slug: "drug-charges",
    label: "Drug Charges",
    shortLabel: "Drug Charges",
    metaTitle: "Drug Crime Defense Lawyers in [City] | Your Criminal Defense Firm",
    metaDescription:
      "Facing drug possession or distribution charges in [City]? We analyze searches, warrants, and lab reports. Confidential consultation—speak with a defense attorney today.",
    h1: "Drug Charges Demand a Defense That Starts With How Evidence Was Obtained",
    intro:
      "Drug cases often turn on Fourth Amendment issues, confidential informants, and forensic testing. If law enforcement cut corners, the case may not be as strong as it looks on the charging document. We treat every file like it could go to trial—because that mindset wins negotiations too.",
    imageKey: "drugs",
    chargesExplained: [
      {
        title: "Possession vs. intent to distribute",
        body: "The state may infer intent from packaging, quantity, messages, and location. We separate assumptions from proof and force the prosecution to meet its burden.",
      },
      {
        title: "Constructive possession",
        body: "You can be charged even when drugs aren’t on your person. We examine control, knowledge, and whether multiple people had access.",
      },
      {
        title: "Search warrants and warrantless searches",
        body: "Warrants must be specific; exceptions must be valid. When searches are overbroad or unsupported, evidence may be challenged.",
      },
      {
        title: "Lab testing and chain of custody",
        body: "Substances must be correctly identified and tracked. Breaks in chain of custody or unreliable testing can matter enormously.",
      },
    ],
    consequences: [
      {
        label: "Felony exposure",
        detail: "Certain quantities and facts can escalate charges dramatically, affecting sentencing ranges and collateral consequences.",
      },
      {
        label: "Mandatory minimums (where applicable)",
        detail: "Some statutes carry rigid penalties—making early factual and legal analysis critical.",
      },
      {
        label: "Collateral consequences",
        detail: "Housing, immigration, student aid, and employment can be impacted—defense strategy should account for your life, not just the courtroom.",
      },
      {
        label: "Probation and monitoring",
        detail: "Even negotiated outcomes can include tight conditions—so terms matter as much as the charge label.",
      },
    ],
    whyDefense:
      "Drug prosecutions depend on evidence continuity—from seizure to lab report. If one link is weak, the entire narrative can fracture. We build defense around facts, not fear, and we don’t accept police reports as the final word.",
    howWeHelp: [
      {
        title: "Suppression issues and motions practice",
        body: "When constitutional violations exist, we pursue remedies that can change what evidence a jury ever hears.",
      },
      {
        title: "Investigation and witness strategy",
        body: "We assess informant credibility, surveillance limits, and whether the story matches the physical evidence.",
      },
      {
        title: "Outcome-focused negotiation",
        body: "When trial isn’t your goal, we still prepare like it is—because leverage drives better resolutions.",
      },
    ],
    faqs: [
      {
        q: "What if the drugs weren’t mine?",
        a: "That defense depends on facts—who had access, who controlled the space, and what the state can prove about knowledge. We develop those facts with documentation and investigation.",
      },
      {
        q: "Can charges be reduced?",
        a: "Sometimes—depending on evidence, history, and jurisdiction. We don’t promise outcomes, but we do pursue every lawful pathway.",
      },
      {
        q: "Should I cooperate with police?",
        a: "Speak with counsel before making decisions that can lock in statements or expose you to new risk. What sounds like ‘cooperation’ can become evidence.",
      },
    ],
  },
  "assault-violent-crimes": {
    slug: "assault-violent-crimes",
    label: "Assault & Violent Crimes",
    shortLabel: "Assault",
    metaTitle: "Assault & Violent Crime Lawyers in [City] | Your Criminal Defense Firm",
    metaDescription:
      "Accused of assault or a violent offense in [City]? We investigate context, injuries, and credibility. Confidential defense consultation—call 24/7.",
    h1: "Violent Crime Allegations Require a Defense That Controls the Narrative Early",
    intro:
      "These cases are emotional—for everyone involved. Jurors and prosecutors often form early impressions based on a one-sided story. Our job is to ensure the full context is investigated: threats, self-defense, identity issues, and inconsistent statements.",
    imageKey: "assault",
    chargesExplained: [
      {
        title: "Degrees of assault",
        body: "Severity may hinge on injury level, weapon use, and protected classes of alleged victims. We align defense strategy with the exact statutory elements the state must prove.",
      },
      {
        title: "Self-defense and justification",
        body: "When force was used to protect yourself or someone else, the law may provide defenses—but they must be presented clearly and supported by evidence.",
      },
      {
        title: "Credibility and corroboration",
        body: "Witnesses can be mistaken, biased, or motivated. We cross-examine narratives with timelines, messages, and medical documentation when available.",
      },
      {
        title: "Domestic context overlap",
        body: "Some assault charges arise in relationships with parallel family court issues. Coordination matters to avoid accidental harm to your position in either venue.",
      },
    ],
    consequences: [
      {
        label: "Jail or prison exposure",
        detail: "Sentencing ranges can increase sharply with injury severity and criminal history.",
      },
      {
        label: "No-contact orders",
        detail: "Protective orders can reshape housing and parenting time overnight.",
      },
      {
        label: "Firearms and civil rights",
        detail: "Certain convictions carry long-term restrictions—another reason outcomes must be chosen carefully.",
      },
      {
        label: "Permanent record stigma",
        detail: "Violent crime allegations can affect employment and licensing even when charges are reduced.",
      },
    ],
    whyDefense:
      "Violent crime cases are won in the details: who started it, what was visible, what was said afterward, and what the medical evidence actually shows. We don’t let a charging narrative become the only narrative.",
    howWeHelp: [
      {
        title: "Rapid evidence collection",
        body: "Surveillance, medical records, and digital communications can disappear. We prioritize preservation immediately.",
      },
      {
        title: "Expert consultation when needed",
        body: "Injury mechanisms and timing aren’t always straightforward. Experts can clarify—or dismantle—assumptions.",
      },
      {
        title: "Trial-ready posture",
        body: "When the state won’t move, we prepare to challenge their story in court with discipline and clarity.",
      },
    ],
    faqs: [
      {
        q: "What if I was defending myself?",
        a: "Self-defense is fact-specific. We document threats, prior incidents (where admissible), and proportionality issues. Don’t try to explain it alone to investigators without counsel.",
      },
      {
        q: "The alleged victim wants to drop charges—does that end the case?",
        a: "Not necessarily. Prosecutors can proceed based on police reports and other evidence. You still need a defense strategy.",
      },
      {
        q: "Should I give my side to police?",
        a: "Talk to a lawyer first. Well-meaning explanations can be misinterpreted or partially quoted.",
      },
    ],
  },
  "theft-property-crimes": {
    slug: "theft-property-crimes",
    label: "Theft & Property Crimes",
    shortLabel: "Theft",
    metaTitle: "Theft & Property Crime Lawyers in [City] | Your Criminal Defense Firm",
    metaDescription:
      "Charged with theft, burglary, or property crimes in [City]? We analyze intent, value, and identification issues. Free consultation—speak with defense counsel today.",
    h1: "Theft Cases Turn on Intent, Value, and Proof—We Treat Them That Way",
    intro:
      "Property charges can sound straightforward until you unpack ownership disputes, mistaken identity, and whether intent existed at all. Retail cases, employee allegations, and financial misconduct each require a different playbook. We build the playbook from evidence—not labels.",
    imageKey: "theft",
    chargesExplained: [
      {
        title: "Intent and mistake",
        body: "Theft requires intentional taking. Lost items, borrowed property, and disputed ownership can look like theft without criminal intent.",
      },
      {
        title: "Value thresholds",
        body: "Charge severity may depend on dollar amounts. We scrutinize valuations, damage estimates, and whether the state’s math holds up.",
      },
      {
        title: "Identification and video evidence",
        body: "Surveillance can be grainy and incomplete. We evaluate whether identification is strong enough to survive scrutiny.",
      },
      {
        title: "Burglary vs. theft",
        body: "Unlawful entry allegations add elements and penalties. Facts must match the statute charged—not a generic story.",
      },
    ],
    consequences: [
      {
        label: "Felony vs. misdemeanor outcomes",
        detail: "Thresholds can change everything from sentencing to future opportunities.",
      },
      {
        label: "Restitution disputes",
        detail: "Financial remedies can balloon if not challenged with documentation.",
      },
      {
        label: "Employment and trust",
        detail: "Theft allegations can end careers even before a conviction—defense messaging matters.",
      },
      {
        label: "Immigration and licensing",
        detail: "Certain theft-related convictions carry outsized collateral consequences for non-citizens and regulated professions.",
      },
    ],
    whyDefense:
      "Prosecutors often treat property cases as easy wins. They aren’t—when defense counsel forces the state to prove intent, identity, and value with real evidence.",
    howWeHelp: [
      {
        title: "Evidence review and timelines",
        body: "Receipts, access logs, and witness statements can reframe what looked like a clean accusation.",
      },
      {
        title: "Negotiated resolutions when appropriate",
        body: "Diversion or reduced charges may be available depending on history and facts—without pretending the case is hopeless if it isn’t.",
      },
      {
        title: "Trial strategy for paper-thin cases",
        body: "When the state’s proof is weak, we don’t negotiate from weakness—we litigate from strength.",
      },
    ],
    faqs: [
      {
        q: "Can shoplifting charges be dismissed?",
        a: "Sometimes—depending on evidence, restitution, and program eligibility. We evaluate options based on your goals and the facts.",
      },
      {
        q: "What if I forgot to pay?",
        a: "Mistake and intent are central issues. We explore what supports an innocent explanation versus what the state can actually prove.",
      },
      {
        q: "Will I have to pay restitution immediately?",
        a: "Restitution disputes should be handled carefully with documentation. Don’t agree to numbers you don’t understand without counsel.",
      },
    ],
  },
  "domestic-violence": {
    slug: "domestic-violence",
    label: "Domestic Violence",
    shortLabel: "Domestic Violence",
    metaTitle: "Domestic Violence Defense Lawyers in [City] | Your Criminal Defense Firm",
    metaDescription:
      "Facing domestic violence allegations in [City]? Discreet, strategic defense for protective orders and criminal charges. Confidential consultation—call now.",
    h1: "Domestic Allegations Are Sensitive—Your Defense Should Be Discreet and Strategic",
    intro:
      "These cases move fast in court and in the courtroom of public opinion. A protective order can separate you from your home and children within hours. We respond with calm urgency: secure your immediate safety legally, protect your rights, and build a defense rooted in facts—not panic.",
    imageKey: "domestic",
    chargesExplained: [
      {
        title: "Criminal charges vs. civil protective orders",
        body: "You may face parallel proceedings with different standards of proof and timelines. Strategy must be coordinated—not improvised.",
      },
      {
        title: "He-said/she-said dynamics",
        body: "Credibility battles require disciplined investigation: messages, witnesses, medical documentation, and prior inconsistent statements where admissible.",
      },
      {
        title: "Mandatory arrest policies",
        body: "Police may make arrests quickly in domestic calls. That doesn’t mean the case is open-and-shut—it means you need counsel immediately.",
      },
      {
        title: "Children and family court overlap",
        body: "Criminal allegations can affect custody conversations. We help you avoid missteps that harm you in multiple forums.",
      },
    ],
    consequences: [
      {
        label: "No-contact and stay-away orders",
        detail: "Orders can reshape housing, parenting time, and daily movement—violations can create new charges.",
      },
      {
        label: "Firearms restrictions",
        detail: "Certain findings can trigger prohibitions that are enforced seriously—legal guidance matters.",
      },
      {
        label: "Employment and reputation",
        detail: "Allegations alone can trigger workplace consequences—we advise on communication boundaries.",
      },
      {
        label: "Treatment and monitoring requirements",
        detail: "Court-ordered programs may be negotiable in scope and timing depending on facts and jurisdiction.",
      },
    ],
    whyDefense:
      "Domestic cases are high-stakes emotionally and legally. The worst outcomes happen when people talk their way into trouble—online, to police, or through hostile contact. We give you a clear plan and a steady voice.",
    howWeHelp: [
      {
        title: "Immediate safety and compliance planning",
        body: "We help you understand what orders mean in real life—so you don’t accidentally violate terms.",
      },
      {
        title: "Evidence-based defense",
        body: "We build timelines, preserve communications, and challenge one-sided narratives with documentation.",
      },
      {
        title: "Negotiation without surrender",
        body: "When resolution is possible, we pursue outcomes that protect your future—not just the next court date.",
      },
    ],
    faqs: [
      {
        q: "Can I go home if there’s a protective order?",
        a: "Orders vary. Violating them—even unintentionally—can create new criminal exposure. Get written clarity on what is permitted and speak with counsel before making assumptions.",
      },
      {
        q: "What if the other person wants to reconcile?",
        a: "The court and prosecution may still proceed. Emotional reconciliation doesn’t automatically end legal proceedings.",
      },
      {
        q: "Should I delete messages?",
        a: "Don’t destroy potential evidence. Speak with counsel about preservation obligations and strategy.",
      },
    ],
  },
};
