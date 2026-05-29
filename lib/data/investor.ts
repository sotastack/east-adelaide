export interface InvestorRow {
  division: string;
  activities: string;
  revenue: string;
  total?: boolean;
}

export const investorRows: InvestorRow[] = [
  {
    division: "Housing & Construction",
    activities:
      "Building materials, ProBoard panels, Procon aluminium, building consumables, national distribution and construction R&D.",
    revenue: "45",
  },
  {
    division: "Natural Biotech",
    activities:
      "NMN (NAD+) capsules, metabolic chewables, plasmalogen R&D and marine bioactive peptides — manufactured in Australia, distributed globally.",
    revenue: "15",
  },
  {
    division: "Food Supply Chain",
    activities:
      "Restaurants, seafood supply chains, central kitchen operations and customised event catering.",
    revenue: "30",
  },
  {
    division: "Total Group",
    activities: "Diversified shelter, biotech & food operating platform.",
    revenue: "90",
    total: true,
  },
];

export const investorFootnote =
  "Indicative annual revenue profile · Australian operations. Natural Biotech division includes a portion of recurring international supplement sales.";
