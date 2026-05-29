import type { Metadata } from "next";
import { Investor } from "@/components/sections/Investor";

export const metadata: Metadata = {
  title: "Investor Centre",
  description:
    "A diversified $90M operating revenue base across shelter, biotech and food — scaled, diversified and capital-markets ready.",
};

const sections = [
  {
    id: "growth-strategy",
    idx: "→",
    title: "Growth Strategy",
    paragraphs: [
      "The group's growth strategy pairs organic expansion of its seven operating businesses with disciplined, complementary acquisition. Within each division — shelter, natural biotech and food — the intent is to deepen capability, secure supply and standardise the inputs that customers depend on.",
      "Across divisions, the group invests in shared infrastructure: governance, capital allocation, research translation and route-to-market. A particular priority is moving bioscience products from validated R&D into compliant, globally distributed formats, manufactured in Australia.",
    ],
  },
  {
    id: "capital-markets",
    idx: "→",
    title: "Capital Markets",
    paragraphs: [
      "The group is privately held. Over the medium term it is building the governance, reporting and assurance maturity consistent with public-capital-markets access — strengthening board oversight, financial controls and disclosure in step with its scale.",
      "For investor introductions, financial information requests or partnership discussions, contact the group's investor relations team.",
    ],
  },
];

export default function InvestorPage() {
  return (
    <>
      <div id="financial-footprint">
        <Investor />
      </div>

      {sections.map((s) => (
        <section key={s.id} id={s.id} className="about-section">
          <div className="container">
            <div className="about-grid">
              <div className="about-head">
                <span className="idx num">{s.idx}</span>
                <h2 className="h2">{s.title}</h2>
              </div>
              <div className="about-body">
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
