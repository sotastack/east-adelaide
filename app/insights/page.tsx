import type { Metadata } from "next";
import { insights } from "@/lib/data/insights";
import { ArticleCard } from "@/components/ui/ArticleCard";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Field notes and perspectives from across East Adelaide Capital Group — shelter, biotech and food.",
};

export default function InsightsPage() {
  return (
    <section className="insights" data-section="—" data-title="Insights">
      <div className="container">
        <div className="page-intro" style={{ paddingTop: 0 }}>
          <div className="eyebrow">
            <span className="roman">—</span>Insights
          </div>
          <h1
            className="display"
            style={{ fontSize: "clamp(40px, 6vw, 88px)", margin: "18px 0 22px" }}
          >
            Field Notes from across the{" "}
            <span className="italic">group</span>.
          </h1>
          <p className="lede">
            Perspectives and dispatches on housing supply, food logistics,
            translational bioscience and the research behind them.
          </p>
        </div>

        <div className="insights-grid" style={{ marginTop: 56 }}>
          {insights.map((post) => (
            <ArticleCard post={post} key={post.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
