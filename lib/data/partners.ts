export interface Partner {
  letters: string; // monogram fallback when no logo asset
  logo?: string; // path under /logos/partners or /partners, or an external URL
  href?: string; // external website (industry partners)
  lead: string;
  em: string;
  kind: string;
}

// Australian universities — real logos live in public/partners/*.svg.
export const universities: Partner[] = [
  { letters: "US", logo: "/partners/usyd.svg", lead: "University of", em: "Sydney", kind: "Research · PCM Materials" },
  { letters: "UM", logo: "/partners/unimelb.svg", lead: "University of", em: "Melbourne", kind: "Research · Materials Science" },
  { letters: "RM", logo: "/partners/rmit.svg", lead: "RMIT", em: "University", kind: "Research · Modular DfM + BIM" },
  { letters: "UA", logo: "/partners/adelaide.svg", lead: "University of", em: "Adelaide", kind: "Research · NMN + Biotech" },
];

export const researchPartners: Partner[] = [
  ...universities,
  { letters: "ZJ", lead: "Zhejiang", em: "University", kind: "Research · Plasmalogens (China)" },
];

// Industry partners. Drop real logos into public/logos/partners/ and set `logo`.
export const industryPartners: Partner[] = [
  {
    letters: "AL",
    logo: "https://altaarchitecture.com/wp-content/themes/The_Mighty_Wonton/assets/img/alta_logo_word.svg",
    href: "https://altaarchitecture.com",
    lead: "ALTA",
    em: "Architecture",
    kind: "Industry · Architecture · Melbourne",
  },
  { letters: "SP", lead: "Sisley", em: "Prestige Homes", kind: "Industry · Residential Builder · Doncaster VIC" },
  { letters: "SS", lead: "Sota", em: "stack", kind: "Industry · AI + Digital Platform" },
  { letters: "LC", lead: "Lexcord", em: "Lawyers", kind: "Industry · Corporate Counsel" },
  { letters: "LK", lead: "Lan Kun", em: "Marine Biotech", kind: "Industry · Marine Peptides · Yantai" },
];
