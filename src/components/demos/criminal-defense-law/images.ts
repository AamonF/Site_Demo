/** Curated Unsplash + Pexels URLs — dark, serious, premium tone. */
export const cdImages = {
  hero: {
    src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2400&q=80",
    alt: "Courthouse columns at dusk — symbolizing criminal defense and due process",
  },
  skylineNight: {
    src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=2000&q=80",
    alt: "City skyline at night — urgent legal help when stakes are highest",
  },
  attorney: {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1400&q=80",
    alt: "Criminal defense attorney in professional attire in a law office",
  },
  lawBooks: {
    src: "https://images.unsplash.com/photo-1505664063603-28e48ca204eb?auto=format&fit=crop&w=1600&q=80",
    alt: "Law books and legal research materials on a desk",
  },
  documents: {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=80",
    alt: "Legal documents and pen — confidential case preparation",
  },
  courthouseInterior: {
    src: "https://images.pexels.com/photos/6077327/pexels-photo-6077327.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Courthouse hallway — calm, authoritative setting",
  },
  dui: {
    src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1600&q=80",
    alt: "Highway at dusk — context for DUI and DWI defense",
  },
  drugs: {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
    alt: "Laboratory glassware — serious context for drug charge investigations",
  },
  assault: {
    src: "https://images.unsplash.com/photo-1589829085413-e56a887ac754?auto=format&fit=crop&w=1600&q=80",
    alt: "Gavel on wood — courtroom representation for violent crime allegations",
  },
  theft: {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    alt: "Office desk with paperwork — property and theft allegations",
  },
  domestic: {
    src: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Private consultation — sensitive domestic violence defense matters",
  },
} as const;

export type CdImageKey = keyof typeof cdImages;
