export interface ProjectTag {
  label: string;
  partner?: boolean;
}

export interface Project {
  id: string;
  pillar: string;
  eyebrow: string;
  titlePre: string;
  titleEm: string;
  titlePost: string;
  desc: string;
  tags: ProjectTag[];
}

export const projects: Project[] = [
  {
    id: "P / 01",
    pillar: "Shelter",
    eyebrow: "AI-Enabled Modular Building Systems",
    titlePre: "Smart Energy ",
    titleEm: "Modular Buildings",
    titlePost: " — AI-enabled, low-carbon, scalable.",
    desc: "A scalable, AI-enabled, carbon-enhanced modular building system integrating carbon-based phase change materials (PCM), building-integrated photovoltaics (BIPV), battery storage and an AI-driven Building Energy Management System (BEMS) into prefabricated panels. Targets a 30–50% reduction in operational energy demand and 20–40 kWh/m²/year on-site renewable generation, with multi-state real-world demonstrations.",
    tags: [
      { label: "TRL 3 → 5" },
      { label: "CRC-P Pathway" },
      { label: "USyd", partner: true },
      { label: "RMIT", partner: true },
      { label: "Promod", partner: true },
      { label: "ALTA", partner: true },
      { label: "Sisley Prestige Homes", partner: true },
      { label: "Sotastack", partner: true },
    ],
  },
  {
    id: "P / 02",
    pillar: "Biotech",
    eyebrow: "NMN · NAD+ Precursor Capsules",
    titlePre: "Enzymatic NMN ",
    titleEm: "at scale",
    titlePost: " — manufactured in Australia.",
    desc: "Natural Biotech Pty Ltd's flagship 12,000 mg NMNs capsule line, manufactured in South Australia under a contracted research relationship with the University of Adelaide. Enzyme-catalysed synthesis pathway designed for purity, cost-efficient scale-up and a globally distributable supplement format addressing the well-documented age-linked decline in NAD+.",
    tags: [
      { label: "Commercial · Live" },
      { label: "Made in Australia" },
      { label: "University of Adelaide", partner: true },
      { label: "Natural Biotech Pty Ltd", partner: true },
    ],
  },
  {
    id: "P / 03",
    pillar: "Biotech",
    eyebrow: "Specialty Plasmalogen Synthesis",
    titlePre: "High-purity ",
    titleEm: "plasmalogens",
    titlePost: " for cognitive health.",
    desc: "A specialty phospholipid R&D programme developing high-purity plasmalogen (Pls) monomers via microbial enzymatic synthesis — addressing the membrane fluidity and free-radical-scavenging pathways implicated in age-related cognitive decline. Pre-clinical pipeline targeting functional food, supplement and pharmaceutical formats; clinical Phase 1–3 pathway under design.",
    tags: [
      { label: "Pre-clinical" },
      { label: "Functional Food + Pharma" },
      { label: "Zhejiang University (Prof. Tian)", partner: true },
      { label: "Natural Biotech", partner: true },
    ],
  },
  {
    id: "P / 04",
    pillar: "Biotech",
    eyebrow: "Tuna-Derived Anserine Peptides",
    titlePre: "Marine peptides for ",
    titleEm: "uric acid",
    titlePost: " and anti-fatigue.",
    desc: "Patented (ZL202211553053.7) enzymatic process producing bluefin tuna-derived small peptides containing 2–10% anserine — a buffering dipeptide with demonstrated XOD/ADA-pathway inhibition. Targets the hyperuricemia (180M+ patients in China) and anti-fatigue specialty-food categories with a clinically informed natural alternative to allopurinol.",
    tags: [
      { label: "Patent · ZL202211553053.7" },
      { label: "Specialty Food" },
      { label: "Lan Kun Marine Biotech", partner: true },
    ],
  },
  {
    id: "P / 05",
    pillar: "Biotech",
    eyebrow: "Alpha Shaper · Albio",
    titlePre: "Carbohydrate-absorption ",
    titleEm: "chewable",
    titlePost: " tablets.",
    desc: "A 100% Australian-owned chewable tablet line developed under the Albio brand. Pure plant extracts inhibit carbohydrate absorption to support a sugar-controlled metabolic pathway — positioned as a clinically considered alternative to dieting, stimulant fat-burners and surgical interventions across the weight-management category.",
    tags: [
      { label: "Commercial · Live" },
      { label: "100% Australian Owned" },
      { label: "GMP · H&L · Australian Made" },
    ],
  },
  {
    id: "P / 06",
    pillar: "Shelter",
    eyebrow: "Sustainable Construction Materials",
    titlePre: "Compliant panel composites for ",
    titleEm: "net-zero",
    titlePost: " housing delivery.",
    desc: "Promod's standing R&D function develops sustainable building material specifications, fire- and thermal-performance pathways, and IP suitable for prefabricated and standardised housing delivery — validated through accredited third-party testing (CSIRO Infrastructure Technologies, Warringtonfire Australia) and academic collaboration.",
    tags: [
      { label: "Specifications + Compliance" },
      { label: "University of Melbourne", partner: true },
      { label: "University of Sydney", partner: true },
      { label: "Promod", partner: true },
    ],
  },
];
