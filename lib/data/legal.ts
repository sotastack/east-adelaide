export interface LegalDoc {
  slug: string;
  title: string;
  updated: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
}

const COUNSEL_NOTE =
  "This document is a template provided for completeness of the website and should be reviewed and finalised by the group's legal counsel before it is relied upon.";

export const legalDocs: LegalDoc[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    updated: "2026",
    intro:
      "East Adelaide Capital Group respects your privacy and is committed to handling personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.",
    sections: [
      {
        heading: "Information we collect",
        body: [
          "We collect personal information you provide directly — such as your name, email address, organisation and the contents of enquiries submitted through this website — and limited technical information (such as device and usage data) collected automatically when you visit.",
        ],
      },
      {
        heading: "How we use it",
        body: [
          "We use personal information to respond to enquiries, manage relationships with investors, partners and suppliers, improve our website, and meet legal and regulatory obligations. We do not sell personal information.",
        ],
      },
      {
        heading: "Disclosure & storage",
        body: [
          "Information may be shared with our operating businesses and trusted service providers under appropriate confidentiality arrangements. We take reasonable steps to protect personal information from misuse, loss and unauthorised access.",
        ],
      },
      {
        heading: "Access, correction & contact",
        body: [
          "You may request access to or correction of the personal information we hold about you. To make a request, or to raise a privacy concern, contact compliance@eastadelaidegroup.com.au.",
        ],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of Use",
    updated: "2026",
    intro:
      "These terms govern your use of this website. By accessing the site you agree to them.",
    sections: [
      {
        heading: "Use of the site",
        body: [
          "This website is provided for general information about East Adelaide Capital Group and its operating businesses. Content may change without notice and does not constitute financial, investment, legal or professional advice.",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          "All trademarks, logos, text and design elements on this site are the property of East Adelaide Capital Group or its licensors and may not be reproduced without permission. Partner and university logos remain the property of their respective owners.",
        ],
      },
      {
        heading: "No warranties & liability",
        body: [
          "While we take care to ensure information is accurate, the site is provided on an “as is” basis without warranties of any kind. To the extent permitted by law, the group is not liable for any loss arising from use of, or reliance on, this site.",
        ],
      },
      {
        heading: "Governing law",
        body: [
          "These terms are governed by the laws of Victoria, Australia.",
        ],
      },
    ],
  },
  {
    slug: "modern-slavery",
    title: "Modern Slavery Statement",
    updated: "2026",
    intro:
      "East Adelaide Capital Group is committed to identifying and addressing modern slavery risks across its operations and supply chains, consistent with the Modern Slavery Act 2018 (Cth).",
    sections: [
      {
        heading: "Our operations & supply chains",
        body: [
          "The group operates across building materials and construction, natural bioscience and food supply, sourcing goods and services from domestic and international suppliers. We recognise that such supply chains can carry modern slavery risks.",
        ],
      },
      {
        heading: "Assessing & addressing risk",
        body: [
          "We seek to work with suppliers who share our commitment to lawful, ethical labour practices, and we are progressively strengthening supplier due diligence, contractual standards and grievance mechanisms across the portfolio.",
        ],
      },
      {
        heading: "Reporting concerns",
        body: [
          "Concerns about modern slavery may be reported confidentially to compliance@eastadelaidegroup.com.au.",
        ],
      },
    ],
  },
  {
    slug: "whistleblower",
    title: "Whistleblower Policy",
    updated: "2026",
    intro:
      "East Adelaide Capital Group encourages the reporting of suspected misconduct and protects those who speak up in good faith.",
    sections: [
      {
        heading: "What can be reported",
        body: [
          "This policy covers reports of suspected illegal, unethical or improper conduct — including fraud, corruption, safety breaches and conduct that endangers people or the public interest — relating to the group or its operating businesses.",
        ],
      },
      {
        heading: "How to make a report",
        body: [
          "Reports may be made confidentially to security@eastadelaidegroup.com.au. You may choose to remain anonymous where permitted by law.",
        ],
      },
      {
        heading: "Protection for disclosers",
        body: [
          "The group does not tolerate detrimental conduct against anyone who makes a report in good faith. Reports are handled confidentially and investigated fairly.",
        ],
      },
    ],
  },
];

export const legalSlugs = legalDocs.map((d) => d.slug);

export function getLegalDoc(slug: string) {
  return legalDocs.find((d) => d.slug === slug);
}

export { COUNSEL_NOTE };
