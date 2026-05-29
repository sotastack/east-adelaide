export interface AboutSection {
  id: string;
  roman: string;
  title: string;
  paragraphs: string[];
}

export const aboutSections: AboutSection[] = [
  {
    id: "our-company",
    roman: "01",
    title: "Our Company",
    paragraphs: [
      "East Adelaide Capital Group is a diversified Australian operating group, headquartered in Victoria, with interests across three essentials of daily life: shelter, natural bioscience and food. The group is structured as a long-horizon operator — providing capital, governance and shared technical infrastructure to ten operating businesses while each retains its own brand, leadership and customer relationships.",
      "Across its divisions the group represents an indicative combined annual revenue of approximately $90M, spanning building materials and sustainable construction, natural-bioscience product development, and integrated food supply chains. Inspired by the diversified industrial discipline of operators such as Wesfarmers, the group's intent is durable, compounding ownership rather than short-cycle trading.",
    ],
  },
  {
    id: "leadership",
    roman: "02",
    title: "Leadership",
    paragraphs: [
      "The group is led by an executive team with operating experience across construction and building materials, life-sciences commercialisation and food supply. Day-to-day management sits with the leadership of each operating business; the group executive concentrates on capital allocation, strategy, risk and the standards shared across the portfolio.",
      "Leadership profiles will be published here. For introductions or media enquiries, please contact the group.",
    ],
  },
  {
    id: "governance",
    roman: "03",
    title: "Board & Governance",
    paragraphs: [
      "The group operates a governance framework appropriate to a diversified, multi-entity operator: a group board with oversight of strategy, capital and risk; defined delegations to divisional leadership; and group-wide policies covering compliance, financial controls, work health and safety, and responsible sourcing.",
      "As the group matures toward public-capital-markets readiness, its governance, reporting and assurance practices are being strengthened in step. Detailed board composition and committee charters will be published here.",
    ],
  },
  {
    id: "sustainability",
    roman: "04",
    title: "Sustainability",
    paragraphs: [
      "Sustainability is built into what the divisions make. In shelter, the group's research function develops sustainable building materials and net-zero-oriented construction systems; in bioscience, it pursues responsibly sourced, naturally derived ingredients; in food, it invests in reliable, low-waste cold-chain logistics.",
      "The group is committed to lawful, ethical and transparent operations across its supply chains, including the standards described in its Modern Slavery Statement.",
    ],
  },
];
