export interface Insight {
  slug: string;
  frame: string;
  image: string;
  category: string;
  kind: string;
  readTime: string;
  title: string;
  excerpt: string;
  author: string;
  place: string;
  date: string;
  body: string[];
}

export const insights: Insight[] = [
  {
    slug: "housing-supply-gap-materials-response",
    frame: "FN · 01",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
    category: "Shelter",
    kind: "Perspective",
    readTime: "06 min",
    title:
      "Australia's housing supply gap, and the materials response it demands.",
    excerpt:
      "The shortfall in domestic dwelling completion is no longer a forecasting question. It is a manufacturing, logistics and policy question — and a materials question.",
    author: "M. Hartley",
    place: "Dandenong, VIC",
    date: "12 Mar 2026",
    body: [
      "Australia's dwelling completion rate has fallen behind formation of new households for the better part of a decade. The gap is now structural, and closing it will not be achieved by financing or planning reform alone — it depends on the capacity to manufacture, move and assemble building materials at scale and at acceptable cost.",
      "For a diversified materials and construction platform, that reframes the opportunity. Branded panels, aluminium systems and fire-rated components are not commodities at the margin of a project; they are the rate-limiting inputs to delivery. Securing supply, compliance and standardisation across those inputs is where a materials operator earns its position.",
      "Our view is that the response is industrial: prefabrication, design-for-manufacture, and validated specifications that let builders deploy faster without trading away performance or compliance. The group's construction R&D function exists to translate that view into product.",
    ],
  },
  {
    slug: "cold-chain-seafood-logistics",
    frame: "FN · 02",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1400&q=80",
    category: "Food",
    kind: "Field Note",
    readTime: "04 min",
    title:
      "Reliability is the product: rebuilding Australia's cold-chain seafood logistics.",
    excerpt:
      "What makes a seafood supply chain trustworthy is not the catch — it is the unbroken temperature record between the boat and the plate.",
    author: "J. Nguyen",
    place: "Port of Melbourne",
    date: "04 Apr 2026",
    body: [
      "In food supply, trust is built or lost in the cold chain. A single break in temperature control — at the dock, in transit, or in storage — can compromise an entire consignment, and the customer never sees where it happened. The product that a serious food operator actually sells is reliability.",
      "That is why the group's food platform invests in temperature-controlled logistics, central-kitchen discipline and traceability as first-order capabilities, not afterthoughts. The unglamorous infrastructure — monitoring, handling protocols, redundancy — is what lets restaurants and B2B customers depend on supply.",
    ],
  },
  {
    slug: "validating-sustainable-panel-composites",
    frame: "FN · 03",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=80",
    category: "Research",
    kind: "Innovation",
    readTime: "08 min",
    title:
      "From lab bench to building site: validating sustainable panel composites.",
    excerpt:
      "Promod's collaboration with four Australian universities is producing a translation pathway from material science to compliant construction product.",
    author: "Dr. S. Okafor",
    place: "Promod Materials Lab",
    date: "22 Apr 2026",
    body: [
      "A promising composite in a laboratory is a long way from a product a builder can specify with confidence. Between the two sit fire and thermal performance pathways, accredited third-party testing, and the documentation that underpins certification — the work that turns innovation into something deployable.",
      "Working with four Australian research universities, the group's construction R&D function is building exactly that translation pathway: from material characterisation, through accredited testing with bodies such as CSIRO and Warringtonfire, to specifications suitable for prefabricated and standardised housing delivery.",
    ],
  },
  {
    slug: "translational-longevity-science",
    frame: "FN · 04",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1400&q=80",
    category: "Biotech",
    kind: "Field Note",
    readTime: "05 min",
    title:
      "NAD+, plasmalogens and the case for translational longevity science.",
    excerpt:
      "What turns a promising molecule into a manufacturable, regulated product is rarely the chemistry. It is the process — and the institutional capacity to scale it without losing the science.",
    author: "Dr. K. Tan",
    place: "Natural Biotech, Adelaide",
    date: "30 Apr 2026",
    body: [
      "Longevity science has no shortage of promising molecules. NAD+ precursors, plasmalogens and marine peptides each have a credible mechanistic story. The hard part is not the discovery — it is enzymatic synthesis at purity and scale, cost-efficient manufacturing, and the regulatory pathway that lets a product reach people.",
      "The group's bioscience platform is built around that translational step: a contracted research relationship with the University of Adelaide for enzymatic NMN, and pre-clinical collaborations for plasmalogens and tuna-derived peptides. The intent is to manufacture in Australia and distribute globally, with the science intact through scale-up.",
    ],
  },
];

export const insightSlugs = insights.map((i) => i.slug);

export function getInsight(slug: string) {
  return insights.find((i) => i.slug === slug);
}
