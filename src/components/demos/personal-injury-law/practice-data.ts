import type { PiPracticeSlug } from "./site-config";
import { PI_DEMO_BASE } from "./site-config";
import { piImages } from "./images";

export type PiFaq = { q: string; a: string };

export type PracticePageContent = {
  slug: PiPracticeSlug;
  label: string;
  shortLabel: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  imageKey: keyof typeof piImages;
  causes: { title: string; body: string }[];
  injuries: string[];
  compensation: { label: string; detail: string }[];
  whyLegal: string;
  howWeHelp: { title: string; body: string }[];
  faqs: PiFaq[];
};

export const PRACTICE_LINKS: {
  slug: PiPracticeSlug;
  label: string;
  description: string;
}[] = [
  {
    slug: "car-accidents",
    label: "Car Accidents",
    description: "Rear-end, intersection, and distracted driving crashes.",
  },
  {
    slug: "truck-accidents",
    label: "Truck Accidents",
    description: "FMCSA violations, jackknife, and underride cases.",
  },
  {
    slug: "motorcycle-accidents",
    label: "Motorcycle Accidents",
    description: "Bias from insurers and serious road rash or fractures.",
  },
  {
    slug: "slip-and-fall",
    label: "Slip & Fall",
    description: "Unsafe premises, wet floors, and negligent maintenance.",
  },
  {
    slug: "wrongful-death",
    label: "Wrongful Death",
    description: "Full accountability when negligence takes a life.",
  },
  {
    slug: "pedestrian-accidents",
    label: "Pedestrian Accidents",
    description: "Crosswalks, DUI, and speeding in urban corridors.",
  },
];

export const PRACTICE_PAGES: Record<PiPracticeSlug, PracticePageContent> = {
  "car-accidents": {
    slug: "car-accidents",
    label: "Car Accidents",
    shortLabel: "Car Accident",
    metaTitle: "Car Accident Lawyers in [City] | Personal Injury Lawyers",
    metaDescription:
      "Injured in a car crash in [City]? We pursue medical bills, lost wages, and pain and suffering. Free case review. No fee unless we win.",
    h1: "Car Accident Lawyers Who Fight Insurance Companies—Not Excuses",
    intro:
      "A serious car accident can derail your health, your job, and your family’s stability in a single afternoon. Insurance carriers move fast to minimize payouts. We move faster to document liability, preserve evidence, and build a claim that reflects the full scope of your injuries—not their spreadsheet.",
    imageKey: "carRoad",
    causes: [
      {
        title: "Distracted driving",
        body: "Phones, navigation, and in-cab distractions cause delayed reaction times at intersections and on highways.",
      },
      {
        title: "Speeding and aggressive lane changes",
        body: "Excess speed reduces stopping distance and turns minor collisions into major injury events.",
      },
      {
        title: "Impaired driving",
        body: "Alcohol and substances impair judgment; we subpoena records and work with experts when impairment is suspected.",
      },
      {
        title: "Failure to yield",
        body: "Left turns, merges, and four-way stops generate disputed liability—witness statements and scene data matter.",
      },
    ],
    injuries: [
      "Whiplash and cervical spine injuries",
      "Concussions and post-concussion syndrome",
      "Herniated discs and radiculopathy",
      "Fractures and soft-tissue tears",
      "PTSD and chronic pain syndromes",
    ],
    compensation: [
      {
        label: "Medical expenses",
        detail: "Emergency care, surgery, PT, imaging, future treatment plans.",
      },
      {
        label: "Lost income",
        detail: "Missed shifts, reduced earning capacity, and career disruption.",
      },
      {
        label: "Pain and suffering",
        detail: "Human losses that do not fit neatly on a medical bill.",
      },
      {
        label: "Property and out-of-pocket",
        detail: "Vehicle damage, rental, mileage, and household help.",
      },
    ],
    whyLegal:
      "Car crash cases often hinge on timing: securing dashcam footage, EDR data, and witness statements before they disappear. Without counsel, injured people routinely accept “quick” settlements that ignore future care. We align medical documentation with legal strategy so your recovery story is credible—and complete.",
    howWeHelp: [
      {
        title: "Scene and liability investigation",
        body: "We coordinate investigators, obtain police reports, and map fault factors for disputed claims.",
      },
      {
        title: "Medical narrative development",
        body: "We work with treating providers so your injuries are documented with clarity and consistency.",
      },
      {
        title: "Negotiation and litigation",
        body: "We prepare every case for trial, which pressures carriers to offer fair value during negotiation.",
      },
    ],
    faqs: [
      {
        q: "What should I do immediately after a car accident?",
        a: "Call 911 if there are injuries, exchange information, photograph the scene and vehicles, seek medical care, and avoid recorded statements with insurers until you understand your rights.",
      },
      {
        q: "Who pays my medical bills while the case is pending?",
        a: "Coverage sources can include PIP/MedPay (where applicable), health insurance, and liens—strategically coordinated so treatment continues while your claim develops.",
      },
      {
        q: "How long do I have to file a claim?",
        a: "Deadlines vary by state and claim type. Contact us promptly so evidence is preserved and filing windows are protected.",
      },
      {
        q: "What if I was partially at fault?",
        a: "Many states apply comparative fault rules. You may still recover damages—often more than an adjuster initially admits.",
      },
      {
        q: "Do I have to go to court?",
        a: "Many cases resolve without trial, but we prepare for court from day one—because readiness drives better settlements.",
      },
    ],
  },
  "truck-accidents": {
    slug: "truck-accidents",
    label: "Truck Accidents",
    shortLabel: "Truck Accident",
    metaTitle: "Truck Accident Attorneys in [City] | Personal Injury Lawyers",
    metaDescription:
      "Catastrophic injuries demand trucking expertise. We analyze logs, maintenance, and carrier liability after semi-truck crashes in [City]. Free consultation.",
    h1: "Truck Accident Attorneys Who Understand Regulations—and Exploit Negligence",
    intro:
      "Commercial trucks can weigh 20–30 times more than a passenger vehicle. When safety rules break down—hours-of-service violations, overloaded trailers, or negligent hiring—the consequences are devastating. We pursue carriers, brokers, and maintenance vendors when their systems fail.",
    imageKey: "truck",
    causes: [
      {
        title: "Driver fatigue and log falsification",
        body: "Electronic logging devices and carrier policies must be scrutinized when fatigue is suspected.",
      },
      {
        title: "Improper loading",
        body: "Shifted cargo causes rollovers and jackknifes; bills of lading tell part of the story.",
      },
      {
        title: "Poor maintenance",
        body: "Brakes, tires, and coupling systems require disciplined inspection intervals.",
      },
      {
        title: "Inadequate training",
        body: "Carriers must vet and train drivers; shortcuts create public risk.",
      },
    ],
    injuries: [
      "Traumatic brain injuries",
      "Spinal cord trauma",
      "Internal organ damage",
      "Crush injuries and amputations",
      "Fatalities and life-altering disability",
    ],
    compensation: [
      {
        label: "Lifetime medical and care",
        detail: "Surgeries, rehab, home modifications, and attendant care projections.",
      },
      {
        label: "Lost earnings and benefits",
        detail: "Executive compensation, union benefits, and pension impacts.",
      },
      {
        label: "Pain, suffering, and loss of enjoyment",
        detail: "Non-economic damages that reflect human harm—not just bills.",
      },
      {
        label: "Punitive avenues (fact-specific)",
        detail: "Where egregious conduct is documented, we explore every available remedy.",
      },
    ],
    whyLegal:
      "Trucking cases are not oversized car cases. They involve federal rules, multi-party liability, and aggressive defense teams. Early preservation of black box data, driver qualification files, and maintenance records can determine outcomes.",
    howWeHelp: [
      {
        title: "Evidence preservation letters",
        body: "We notify carriers and insurers to preserve logs, cameras, and maintenance files.",
      },
      {
        title: "Expert reconstruction",
        body: "Accident reconstruction and biomechanics experts translate physics into persuasive narratives.",
      },
      {
        title: "Corporate accountability",
        body: "We map the chain of responsibility—from driver decisions to dispatch incentives.",
      },
    ],
    faqs: [
      {
        q: "Who can be liable besides the truck driver?",
        a: "Depending on the facts: the motor carrier, trailer owner, maintenance vendor, shipper, or broker—each relationship must be examined.",
      },
      {
        q: "What makes truck cases different from car crashes?",
        a: "Federal regulations, heavier insurance policies, and corporate defendants change discovery strategy and case value.",
      },
      {
        q: "How quickly should I act?",
        a: "Immediately. Critical data can be overwritten or “lost” without prompt legal preservation steps.",
      },
      {
        q: "Can I afford representation?",
        a: "We work on a contingency fee—no attorney fee unless we recover compensation for you (costs may still apply).",
      },
      {
        q: "What if the insurer blames me?",
        a: "We challenge one-sided investigations with independent analysis and witness development.",
      },
    ],
  },
  "motorcycle-accidents": {
    slug: "motorcycle-accidents",
    label: "Motorcycle Accidents",
    shortLabel: "Motorcycle Accident",
    metaTitle: "Motorcycle Accident Lawyers in [City] | Personal Injury Lawyers",
    metaDescription:
      "Serious road rash, fractures, and bias from insurers—we fight for riders in [City]. Contingency representation. Call now.",
    h1: "Motorcycle Crash Lawyers Who Refuse Rider Stereotypes",
    intro:
      "Riders face visibility challenges—and unfair blame after a wreck. We counter bias with facts: sightlines, speed analysis, roadway defects, and witness accounts. If you were hurt because another driver failed to share the road, we build a case that respects what you endured.",
    imageKey: "motorcycle",
    causes: [
      {
        title: "Left-turn collisions",
        body: "Drivers misjudge approach speed or fail to yield across oncoming lanes.",
      },
      {
        title: "Lane changes without checking blind spots",
        body: "Motorcycles occupy less visual space—driver inattention becomes catastrophic.",
      },
      {
        title: "Road hazards",
        body: "Pavement seams, gravel, and debris create loss-of-control events.",
      },
      {
        title: "Dooring and urban conflicts",
        body: "Dense traffic increases close-proximity collisions at intersections and curbside zones.",
      },
    ],
    injuries: [
      "Road rash requiring debridement or grafting",
      "Complex fractures and joint injuries",
      "Helmet-related TBIs (even with helmets)",
      "Nerve damage and scarring",
      "Psychological trauma after violent impacts",
    ],
    compensation: [
      {
        label: "Reconstructive care",
        detail: "Orthopedic repair, wound care, and scar revision where appropriate.",
      },
      {
        label: "Lost mobility and earnings",
        detail: "Recovery timelines for physical jobs can be long—documentation matters.",
      },
      {
        label: "Pain and suffering",
        detail: "Chronic pain and visible scarring can alter daily life—your claim should reflect that.",
      },
      {
        label: "Bike and gear replacement",
        detail: "Property losses and safety equipment costs.",
      },
    ],
    whyLegal:
      "Motorcycle claims often attract low initial offers. We translate medical realities into numbers insurers cannot ignore—while preparing for trial if necessary.",
    howWeHelp: [
      {
        title: "Bias-resistant storytelling",
        body: "We present objective evidence that dismantles lazy narratives about rider recklessness.",
      },
      {
        title: "Medical clarity",
        body: "We coordinate clear specialty opinions for orthopedic and neurological harm.",
      },
      {
        title: "Aggressive negotiation",
        body: "We leverage readiness—because riders deserve parity, not excuses.",
      },
    ],
    faqs: [
      {
        q: "I wasn’t wearing a helmet—can I still recover?",
        a: "Helmet use can affect comparative fault and damages in some jurisdictions. Speak with us—do not assume you have no case.",
      },
      {
        q: "The driver says they didn’t see me—is that a defense?",
        a: "“I didn’t see you” is not a free pass. We examine duties to keep a proper lookout and obey traffic laws.",
      },
      {
        q: "What if I lane-split where it’s controversial?",
        a: "Fault analysis is fact-specific. We evaluate video, witness statements, and local traffic norms.",
      },
      {
        q: "How long will my case take?",
        a: "It depends on injury severity and disputes. We prioritize your health timeline while pushing the legal process forward.",
      },
      {
        q: "Will my case go to trial?",
        a: "Only if needed—but we prepare as if it will, which improves settlement leverage.",
      },
    ],
  },
  "slip-and-fall": {
    slug: "slip-and-fall",
    label: "Slip & Fall",
    shortLabel: "Slip & Fall",
    metaTitle: "Slip and Fall Attorneys in [City] | Personal Injury Lawyers",
    metaDescription:
      "Hurt on dangerous property in [City]? We prove notice, hazard duration, and building code issues. Free consultation.",
    h1: "Premises Liability Lawyers Who Prove Notice—Not Excuses",
    intro:
      "Property owners must keep spaces reasonably safe—or warn visitors when hazards exist. Slip and fall cases are won on timing: how long a hazard existed, whether staff knew, and whether maintenance routines were real or cosmetic. We investigate with purpose.",
    imageKey: "slip",
    causes: [
      {
        title: "Wet floors without warnings",
        body: "Mopping, spills, and tracked rain require cones and protocols.",
      },
      {
        title: "Poor lighting",
        body: "Dim stairwells and parking structures hide defects until it’s too late.",
      },
      {
        title: "Broken handrails and steps",
        body: "Building codes exist because predictable failures cause predictable injuries.",
      },
      {
        title: "Neglected maintenance cycles",
        body: "Work orders and vendor logs reveal whether hazards were ignored.",
      },
    ],
    injuries: [
      "Hip and wrist fractures",
      "Shoulder and rotator cuff tears",
      "Head trauma from backward falls",
      "Back and spinal injuries",
      "Knee ligament damage",
    ],
    compensation: [
      {
        label: "Medical treatment and rehab",
        detail: "Surgery, PT, injections, and mobility aids.",
      },
      {
        label: "Lost wages",
        detail: "Time off for recovery and job restrictions.",
      },
      {
        label: "Pain and suffering",
        detail: "Loss of independence and chronic pain after falls—especially for older adults.",
      },
      {
        label: "Future care needs",
        detail: "When injuries reduce long-term stability and safety at home.",
      },
    ],
    whyLegal:
      "Premises cases require proof of notice and causation. Insurers love to blame victims. We build timelines, obtain surveillance, and depose employees when necessary.",
    howWeHelp: [
      {
        title: "Rapid evidence collection",
        body: "We seek video, incident reports, and cleaning schedules before they disappear.",
      },
      {
        title: "Code and standards review",
        body: "We evaluate applicable building codes and industry standards for maintenance.",
      },
      {
        title: "Medical causation",
        body: "We connect mechanism of injury to documented harm—clearly and credibly.",
      },
    ],
    faqs: [
      {
        q: "Isn’t slip and fall hard to win?",
        a: "It can be—because notice must be proven. That’s why investigation speed and documentation are critical.",
      },
      {
        q: "What if I’m partially at fault?",
        a: "Comparative fault may apply, but it doesn’t automatically eliminate recovery.",
      },
      {
        q: "Do I sue the store or the landlord?",
        a: "It depends on lease duties, control of the premises, and contractual maintenance obligations.",
      },
      {
        q: "How fast should I report the fall?",
        a: "Report it immediately if safe to do so, seek care, and contact counsel quickly for evidence preservation.",
      },
      {
        q: "What evidence helps most?",
        a: "Photos/video, witness names, incident reports, footwear documentation, and timely medical records.",
      },
    ],
  },
  "wrongful-death": {
    slug: "wrongful-death",
    label: "Wrongful Death",
    shortLabel: "Wrongful Death",
    metaTitle: "Wrongful Death Lawyers in [City] | Personal Injury Lawyers",
    metaDescription:
      "Compassionate, relentless advocacy after a fatal accident in [City]. We pursue accountability and financial security for eligible survivors.",
    h1: "Wrongful Death Attorneys Who Honor Lives With Diligent Advocacy",
    intro:
      "No legal outcome replaces a loved one. What a wrongful death claim can do is expose negligence, stabilize a family’s finances, and force systems to answer for preventable loss. We handle these cases with gravity—paired with disciplined investigation and trial preparation.",
    imageKey: "memorial",
    causes: [
      {
        title: "Fatal motor vehicle collisions",
        body: "Cars, trucks, motorcycles, and impaired driving cases with catastrophic outcomes.",
      },
      {
        title: "Unsafe premises",
        body: "Fires, structural failures, and violent crime on negligently secured property (fact-specific).",
      },
      {
        title: "Medical negligence (referral when appropriate)",
        body: "Some matters require specialized medical malpractice counsel—we advise honestly.",
      },
      {
        title: "Workplace incidents",
        body: "Third-party claims may exist alongside workers’ compensation—coordination matters.",
      },
    ],
    injuries: [
      "Loss of companionship, guidance, and household stability",
      "Funeral and burial expenses",
      "Lost financial support and benefits",
      "Lost household services and childcare",
      "Emotional and psychological harms to eligible survivors",
    ],
    compensation: [
      {
        label: "Economic damages",
        detail: "Lost income, benefits, and household contributions over projected lifetimes.",
      },
      {
        label: "Funeral and burial",
        detail: "Reasonable expenses tied to memorial needs.",
      },
      {
        label: "Non-economic harms (jurisdiction-specific)",
        detail: "Varies by state—eligible survivors may recover for loss of consortium or society.",
      },
      {
        label: "Estate claims",
        detail: "Survival actions may exist for pre-death pain and suffering depending on jurisdiction.",
      },
    ],
    whyLegal:
      "Wrongful death statutes are strict about who can sue, deadlines, and recoverable damages. Early legal guidance prevents costly mistakes during grief.",
    howWeHelp: [
      {
        title: "Estate setup coordination",
        body: "We work with probate counsel when necessary to authorize claims properly.",
      },
      {
        title: "Financial modeling",
        body: "Economists help translate loss into understandable, defensible numbers.",
      },
      {
        title: "Respectful communication",
        body: "We shield families from insurer pressure while advancing the case.",
      },
    ],
    faqs: [
      {
        q: "Who can file a wrongful death claim?",
        a: "Eligibility is statute-driven—often spouses, children, and sometimes parents or dependents. We advise based on your state’s rules.",
      },
      {
        q: "How long do these cases take?",
        a: "Complex liability and damages modeling can extend timelines. We set expectations early and communicate often.",
      },
      {
        q: "Will I have to talk to insurance adjusters?",
        a: "We handle insurer communications so your family isn’t pressured during grief.",
      },
      {
        q: "What if criminal charges are filed?",
        a: "Criminal cases proceed separately. Civil claims can still pursue accountability for negligence and damages.",
      },
      {
        q: "Is there a fee unless we win?",
        a: "We typically handle these cases on contingency—details are explained clearly in writing at intake.",
      },
    ],
  },
  "pedestrian-accidents": {
    slug: "pedestrian-accidents",
    label: "Pedestrian Accidents",
    shortLabel: "Pedestrian Accident",
    metaTitle: "Pedestrian Accident Lawyers in [City] | Personal Injury Lawyers",
    metaDescription:
      "Hit while walking in [City]? We pursue drivers and policies that try to shift blame. Free consultation. Serious injury focus.",
    h1: "Pedestrian Injury Lawyers for Crosswalks, Intersections, and Urban Streets",
    intro:
      "Pedestrians have minimal protection. A single impact can cause fractures, head trauma, and long recoveries—while insurers rush to blame visibility or “darting.” We reconstruct scenes, analyze lighting and signage, and hold drivers accountable when they fail to yield the right-of-way.",
    imageKey: "pedestrian",
    causes: [
      {
        title: "Failure to yield at crosswalks",
        body: "Turning vehicles often strike pedestrians with right-of-way in marked crossings.",
      },
      {
        title: "Speeding in urban corridors",
        body: "Higher speed increases injury severity and reduces reaction time.",
      },
      {
        title: "DUI and impairment",
        body: "Late-night risk spikes; toxicology and bar liability may matter.",
      },
      {
        title: "Distracted driving",
        body: "Screens and notifications cause drivers to miss people in plain view.",
      },
    ],
    injuries: [
      "Traumatic brain injuries",
      "Spinal fractures",
      "Lower-extremity crush injuries",
      "Internal trauma",
      "Severe orthopedic injuries requiring surgery",
    ],
    compensation: [
      {
        label: "Emergency and surgical care",
        detail: "Trauma centers, orthopedics, and neuro care can generate substantial bills quickly.",
      },
      {
        label: "Lost income and earning capacity",
        detail: "Recovery windows can be long—especially for physical occupations.",
      },
      {
        label: "Pain and suffering",
        detail: "Pedestrian impacts often cause lasting disability—your claim should reflect reality.",
      },
      {
        label: "Future needs",
        detail: "Mobility aids, therapy, and home support when injuries are permanent.",
      },
    ],
    whyLegal:
      "Pedestrian cases frequently involve disputed fault. We build clarity with scene documentation, expert analysis, and witness development—before narratives harden against you.",
    howWeHelp: [
      {
        title: "Scene documentation",
        body: "We move quickly to capture signals, signage, and sightline issues.",
      },
      {
        title: "Insurance stacking analysis",
        body: "We evaluate UM/UIM and multiple policies when damages exceed minimum limits.",
      },
      {
        title: "Medical management storytelling",
        body: "We connect injury severity to long-term consequences insurers try to downplay.",
      },
    ],
    faqs: [
      {
        q: "I was outside the crosswalk—do I still have a case?",
        a: "Possibly. Comparative fault may apply, but drivers still owe a duty of care. Don’t assume you’re barred from recovery.",
      },
      {
        q: "What if the driver fled?",
        a: "UM/UIM and crime victim funds may be options—depending on coverage and state programs.",
      },
      {
        q: "How do you prove the driver was at fault?",
        a: "Witnesses, video, skid marks, phone records, and expert reconstruction can all play a role.",
      },
      {
        q: "Should I speak to the driver’s insurance?",
        a: "Talk to us first—recorded statements are often used to minimize claims.",
      },
      {
        q: "What does contingency mean?",
        a: "We are paid a percentage of the recovery—no attorney fee unless we win your case (costs may still apply).",
      },
    ],
  },
};

export function practicePath(slug: PiPracticeSlug): string {
  return `${PI_DEMO_BASE}/${slug}`;
}
