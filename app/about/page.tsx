import type { Metadata } from "next";
import { aboutSections } from "@/lib/data/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "East Adelaide Capital Group — a diversified Australian operating group across shelter, biotech and food. Company, leadership, governance and sustainability.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-intro" data-section="—" data-title="About">
        <div className="container">
          <div className="eyebrow">
            <span className="roman">—</span>About the Group
          </div>
          <h1
            className="display"
            style={{
              fontSize: "clamp(40px, 6vw, 88px)",
              margin: "18px 0 22px",
              maxWidth: "16ch",
            }}
          >
            A diversified Australian{" "}
            <span className="italic">operating group</span>.
          </h1>
          <p className="lede">
            Headquartered in Victoria, East Adelaide Capital Group owns and
            operates ten businesses across the three essentials of daily life —
            shelter, natural bioscience and food.
          </p>
        </div>
      </section>

      {aboutSections.map((s) => (
        <section key={s.id} id={s.id} className="about-section">
          <div className="container">
            <div className="about-grid">
              <div className="about-head">
                <span className="idx num">{s.roman}</span>
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
