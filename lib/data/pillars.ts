export interface Subsidiary {
  name: string;
  tag: string;
}

export interface Pillar {
  slug: string;
  /** optional real division logo path (e.g. /logos/divisions/shelter.svg) */
  logo?: string;
  roman: string;
  corner: string;
  image: string;
  imageAlt: string;
  title: string;
  /** short label used in pillar bands / nav */
  short: string;
  blurb: string;
  subsidiaries: Subsidiary[];
  exploreLabel: string;
}

export const pillars: Pillar[] = [
  {
    slug: "shelter",
    roman: "I",
    corner: "PILLAR I · SHELTER",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Construction",
    title: "Housing & Construction",
    short: "Shelter",
    blurb:
      "A building materials, construction supply and construction-technology platform — branded panels, aluminium systems, fire-resistant components, prefabricated housing and a research-led innovation function. Positioned to participate in Australia's housing supply shortfall and net-zero construction agenda.",
    subsidiaries: [
      { name: "Tidy Tend Global", tag: "Materials & IP" },
      { name: "Advanced Cladding Systems", tag: "ProBoard" },
      { name: "Procon Material", tag: "Aluminium" },
      { name: "Promod Building Group", tag: "R&D / Prefab" },
      { name: "Advance Building Solutions", tag: "Fire & Accessories" },
    ],
    exploreLabel: "Explore Shelter",
  },
  {
    slug: "biotech",
    roman: "II",
    corner: "PILLAR II · BIOTECH",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Natural Biotech laboratory",
    title: "Natural Biotech",
    short: "Biotech",
    blurb:
      "An Australian-owned natural sciences platform headquartered in South Australia, developing and commercialising plant-, marine- and microbe-derived bioactive ingredients. Anchored by a contracted research relationship with the University of Adelaide and pre-clinical collaborations with Zhejiang University and partners across the Australian university network.",
    subsidiaries: [
      { name: "Natural Biotech Pty Ltd", tag: "NMN / NAD+" },
      { name: "Albio · Alpha Shaper", tag: "Metabolic" },
      { name: "Plasmalogen R&D", tag: "Cognitive" },
      { name: "Marine Bioactive Peptides", tag: "Anti-Fatigue" },
    ],
    exploreLabel: "Explore Biotech",
  },
  {
    slug: "food",
    roman: "III",
    corner: "PILLAR III · FOOD",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Central kitchen",
    title: "Food Supply Chain",
    short: "Food",
    blurb:
      "An integrated food service and supply-chain platform spanning frozen seafood import and export, temperature-controlled logistics, central kitchen operations, restaurant supply and customised event catering. Designed to serve both consumer and B2B demand with reliability and food safety as first principles.",
    subsidiaries: [
      { name: "The Little Shell Catering", tag: "Holding" },
      { name: "Seafood Sourcing & Import", tag: "Cold Chain" },
      { name: "Central Kitchen Operations", tag: "Production" },
      { name: "Restaurant & Food Service", tag: "Consumer" },
      { name: "Event & Catering Solutions", tag: "B2B" },
    ],
    exploreLabel: "Explore Food",
  },
];
