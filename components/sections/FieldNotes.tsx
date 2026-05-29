import Link from "next/link";
import { insights } from "@/lib/data/insights";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { Arrow } from "@/components/ui/Arrow";

export function FieldNotes() {
  return (
    <section className="insights" data-section="VIII" data-title="Field Notes">
      <div className="container">
        <div className="insights-head">
          <h2 className="h2">Field Notes from across the group.</h2>
          <Link href="/insights" className="all" data-link data-label="View All">
            View archive <Arrow />
          </Link>
        </div>
        <div className="insights-grid">
          {insights.map((post) => (
            <ArticleCard post={post} key={post.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
