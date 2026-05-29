import Link from "next/link";
import type { Insight } from "@/lib/data/insights";

export function ArticleCard({ post }: { post: Insight }) {
  return (
    <Link
      className="article"
      href={`/insights/${post.slug}`}
      data-link
      data-label="Read"
    >
      <div className="img">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={post.image} alt="" />
        <div className="frame">{post.frame}</div>
      </div>
      <div className="meta">
        <span className="cat">{post.category}</span>
        <span>{post.kind}</span>
        <span>{post.readTime}</span>
      </div>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <div className="byline">
        Filed by <em>{post.author}</em> · {post.place} · {post.date}
      </div>
    </Link>
  );
}
