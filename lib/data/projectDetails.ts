// Extended detail for /projects/[slug], keyed by the slug in projectSlugs.ts.
// P/01 is drawn from the full project brief (archive/Projects/AI Project.pdf);
// the others expand on their source briefs. Deeper detail can be added from the
// remaining source PDFs (NMN, plasmalogen, tuna-peptide briefs).
export interface ProjectDetail {
  overview: string[];
  activities: string[];
  outcomes: string[];
  context: string;
  status: string;
}

export const projectDetails: Record<string, ProjectDetail> = {
  "ai-modular-buildings": {
    overview: [
      "This project delivers the development, demonstration and validation of an integrated Sustainable Modularised Building System tailored to Australian conditions. It adopts an end-to-end approach spanning product design, system integration, digital engineering, pilot-scale manufacturing, testing and industry adoption — with a strong emphasis on Design for Manufacture (DfM), digital design-to-manufacturing integration and scalable production pathways.",
      "At its core, the project designs a configurable modular façade and roof panel system that integrates multiple advanced technologies into a unified, standardised solution: carbon-enhanced Phase Change Materials (PCM) for thermal energy storage, Building-Integrated Photovoltaics (BIPV) for on-site generation, advanced external coatings, embedded sensor networks, and a cloud-connected, AI-enabled Building Energy Management System (BEMS).",
    ],
    activities: [
      "Product configuration & R&D — standardised panel geometries and cartridge-based PCM/PV subcomponents engineered for quick-connect assembly.",
      "Digital design-to-manufacturing — parametric modelling and BIM generating BOMs, CNC/CAM instructions and a digital twin for lifecycle tracking.",
      "Pilot-scale manufacturing & DfM — a CAPEX-efficient pilot line or co-manufacturing partnerships with automated, quality-controlled production.",
      "System integration & platform deployment — interoperability across PCM, BIPV, coatings, sensors and the AI-enabled BEMS.",
      "Testing, validation & compliance — accredited third-party testing (potentially CSIRO Infrastructure Technologies, Warringtonfire Australia) across thermal, fire, electrical and materials safety.",
      "Workforce development & industry engagement — university-partnered training in digital workflows, modular construction and digital-twin operation.",
    ],
    outcomes: [
      "30–50% reduction in operational energy demand versus conventional modular systems.",
      "15–25% reduction in heating and cooling loads through PCM-enhanced envelopes.",
      "2–4°C improvement in internal temperature stability under climate-dependent conditions.",
      "20–40 kWh/m²/year of on-site renewable generation from BIPV-integrated façade and roof systems.",
    ],
    context:
      "Globally, construction is shifting toward low-carbon, energy-integrated building systems, but integration at the whole-of-building level remains limited in modular and prefabricated construction. In Australia, high building energy demand, grid peak-load pressure and off-grid diesel reliance amplify the need. The project bridges the gap between research innovation and commercially deployable, climate-resilient buildings.",
    status: "TRL 3 → 5 · CRC-P pathway",
  },
  "nmn-nad-capsules": {
    overview: [
      "Natural Biotech Pty Ltd's flagship NMN (β-Nicotinamide Mononucleotide) capsule line is manufactured in South Australia under a contracted research relationship with the University of Adelaide. NMN is a direct precursor to NAD+, a coenzyme central to cellular energy metabolism whose levels decline with age.",
      "The programme is built around an enzyme-catalysed synthesis pathway designed for purity, cost-efficient scale-up and a globally distributable supplement format — manufactured in Australia and distributed internationally.",
    ],
    activities: [
      "Enzyme-catalysed NMN synthesis optimised for purity and yield.",
      "Australian manufacturing and quality control to supplement-grade standards.",
      "Contracted research relationship with the University of Adelaide.",
      "Global distribution of a 12,000 mg capsule format.",
    ],
    outcomes: [
      "Commercial, live product line manufactured in Australia.",
      "Cost-efficient, scalable enzymatic process.",
      "Globally distributable format addressing age-linked NAD+ decline.",
    ],
    context:
      "The longevity and healthy-ageing supplement category has grown rapidly, with NAD+ precursors among the most studied compounds. Reliable, high-purity, cost-effective manufacturing — and the institutional capacity to scale it — is the differentiator between a research molecule and a distributable product.",
    status: "Commercial · Live · Made in Australia",
  },
  "plasmalogen-synthesis": {
    overview: [
      "A specialty phospholipid R&D programme developing high-purity plasmalogen (Pls) monomers via microbial enzymatic synthesis. Plasmalogens are membrane phospholipids implicated in membrane fluidity and free-radical scavenging — pathways associated with age-related cognitive decline.",
      "The pipeline targets functional food, supplement and pharmaceutical formats, with a clinical Phase 1–3 pathway under design. The lab partnership is led with Prof. Tian at Zhejiang University.",
    ],
    activities: [
      "Microbial enzymatic synthesis of high-purity plasmalogen monomers.",
      "Pre-clinical pipeline development across food, supplement and pharma formats.",
      "Clinical Phase 1–3 pathway design.",
      "Research collaboration with Zhejiang University (Prof. Tian).",
    ],
    outcomes: [
      "High-purity plasmalogen monomers via a scalable synthesis route.",
      "Multi-format pipeline (functional food, supplement, pharmaceutical).",
      "Defined translational pathway from pre-clinical to clinical.",
    ],
    context:
      "Cognitive-health ingredients with credible mechanisms and manufacturable supply are scarce. The programme's emphasis on enzymatic synthesis and a staged regulatory pathway is designed to turn a promising molecule into a compliant, scalable product.",
    status: "Pre-clinical · Functional food + pharma",
  },
  "tuna-anserine-peptides": {
    overview: [
      "A patented (ZL202211553053.7) enzymatic process producing bluefin tuna-derived small peptides containing 2–10% anserine — a buffering dipeptide with demonstrated XOD/ADA-pathway inhibition, documented uric-acid reduction and anti-fatigue activity.",
      "The platform targets the hyperuricemia and anti-fatigue specialty-food categories with a clinically informed natural alternative, developed via the Lan Kun Marine Biotech partnership.",
    ],
    activities: [
      "Patented enzymatic extraction of tuna-derived peptides (ZL202211553053.7).",
      "Anserine concentration control (2–10%) for functional efficacy.",
      "Specialty-food product development for uric-acid and anti-fatigue use.",
      "Partnership with Lan Kun Marine Biotech.",
    ],
    outcomes: [
      "Patented, repeatable marine-peptide production process.",
      "Natural alternative positioning in the hyperuricemia category (180M+ patients in China).",
      "Anti-fatigue specialty-food applications.",
    ],
    context:
      "Hyperuricemia and fatigue are large, under-served categories where natural, clinically informed alternatives to pharmaceutical options are in demand. A patented process and controlled active concentration provide a defensible position.",
    status: "Patented · Specialty food",
  },
  "alpha-shaper-albio": {
    overview: [
      "A 100% Australian-owned chewable tablet line developed under the Albio brand. Pure plant extracts inhibit carbohydrate absorption to support a sugar-controlled metabolic pathway — positioned as a clinically considered alternative to dieting, stimulant fat-burners and surgical interventions across the weight-management category.",
    ],
    activities: [
      "Plant-extract carbohydrate-absorption inhibitor formulation.",
      "Chewable tablet manufacturing to GMP / Australian-made standards.",
      "Brand and channel development under the Albio brand.",
    ],
    outcomes: [
      "Commercial, live, 100% Australian-owned product line.",
      "GMP · H&L · Australian Made credentials.",
      "Metabolic / sugar-control positioning in weight management.",
    ],
    context:
      "Weight management is a crowded category dominated by dieting, stimulants and, increasingly, pharmaceutical and surgical interventions. A naturally derived, clinically considered carbohydrate-absorption approach offers a differentiated, lower-risk option.",
    status: "Commercial · Live · 100% Australian owned",
  },
  "sustainable-construction-materials": {
    overview: [
      "Promod's standing R&D function develops sustainable building-material specifications, fire- and thermal-performance pathways, and intellectual property suitable for prefabricated and standardised housing delivery.",
      "Specifications are validated through accredited third-party testing (CSIRO Infrastructure Technologies, Warringtonfire Australia) and academic collaboration, producing a translation pathway from material science to compliant construction product.",
    ],
    activities: [
      "Sustainable building-material specification development.",
      "Fire- and thermal-performance pathway validation.",
      "Accredited third-party testing (CSIRO, Warringtonfire).",
      "Academic collaboration across four Australian universities.",
    ],
    outcomes: [
      "Compliant panel-composite specifications for net-zero housing.",
      "Validated, certifiable IP suitable for prefabrication.",
      "A repeatable lab-to-site translation pathway.",
    ],
    context:
      "Closing Australia's housing supply gap depends on materials that are both deployable at scale and compliant. The programme turns material innovation into specifications builders can adopt with confidence.",
    status: "Specifications + compliance",
  },
};
