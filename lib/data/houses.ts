export interface House {
  id: string;
  division: string;
  /** two-letter monogram, or "leaf" for the Natural Biotech mark */
  mark: string;
  /** optional real logo path (e.g. /logos/houses/procon.svg); falls back to the monogram */
  logo?: string;
  /** optional chip background behind the logo (default white); use for logos with a baked dark background */
  logoBg?: string;
  name: string;
  em: string;
  desc: string;
  brands: string;
}

export interface HouseBand {
  roman: string;
  name: string;
  em: string;
  meta: string;
  houses: House[];
}

export const houseBands: HouseBand[] = [
  {
    roman: "I.",
    name: "Housing &",
    em: "Construction",
    meta: "Building materials, panels, aluminium fabrication, prefabrication and construction R&D.",
    houses: [
      {
        id: "01",
        division: "SHELTER",
        mark: "TT",
        logo: "/logos/tidytend-logo.jpg",
        name: "Tidy Tend",
        em: "Global",
        desc: "Building materials import and export, construction materials supply, technical coordination and parent custodian of construction-related IP and know-how.",
        brands: "Materials · Distribution · IP",
      },
      {
        id: "02",
        division: "SHELTER",
        mark: "AC",
        name: "Advanced Cladding",
        em: "Systems",
        desc: "Owner of the specialist building materials brand ProBoard — branded panel products engineered for performance, compliance and scalable Australian housing delivery.",
        brands: "ProBoard®",
      },
      {
        id: "03",
        division: "SHELTER",
        mark: "PM",
        logo: "/logos/procon-logo.svg",
        name: "Procon",
        em: "Material",
        desc: "Aluminium building products and fabricated components platform serving residential, commercial and prefabricated construction systems.",
        brands: "Aluminium · Fabrication",
      },
      {
        id: "04",
        division: "SHELTER",
        mark: "PB",
        logo: "/logos/promod_logo.webp",
        name: "Promod Building",
        em: "Group",
        desc: "Prefabricated housing solutions and the group's R&D function — technical validation of new building materials, sustainable construction systems and academic collaboration.",
        brands: "R&D · Prefab · IP",
      },
      {
        id: "05",
        division: "SHELTER",
        mark: "AB",
        name: "Advance Building",
        em: "Solutions",
        desc: "Fire-resistant tapes, hardware, small-format building materials, construction accessories and innovative supply solutions for the trade channel.",
        brands: "Fire · Hardware · Accessories",
      },
    ],
  },
  {
    roman: "II.",
    name: "Natural",
    em: "Biotech",
    meta: "Plant-, marine- and microbe-derived bioactives across cognitive, metabolic and longevity health.",
    houses: [
      {
        id: "06",
        division: "BIOTECH",
        mark: "leaf",
        name: "Natural Biotech",
        em: "Pty Ltd",
        desc: "South Australian innovation company contracted to the University of Adelaide. Develops enzyme-catalysed NMN (β-Nicotinamide Mononucleotide) for NAD+ support — manufactured in Australia, distributed globally.",
        brands: "NMN · NAD+ · Longevity",
      },
    ],
  },
  {
    roman: "III.",
    name: "Food",
    em: "Supply Chain",
    meta: "Seafood logistics, central kitchen, restaurant supply and customised event catering across Victoria.",
    houses: [
      {
        id: "07",
        division: "FOOD",
        mark: "LS",
        logo: "/logos/littleshell-logo.jpg",
        logoBg: "#000",
        name: "The Little Shell",
        em: "Catering",
        desc: "Food import and export, seafood supply chain, food logistics, restaurant supply, central kitchen support and catering — the group's full food platform.",
        brands: "Seafood · Logistics · Catering",
      },
    ],
  },
];
