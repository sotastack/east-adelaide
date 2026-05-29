import type { ReactNode } from "react";
import { Arrow } from "@/components/ui/Arrow";

interface Note {
  frame: string;
  img: string;
  cat: string;
  kind: string;
  read: string;
  title: ReactNode;
  excerpt: string;
  byline: ReactNode;
}

const notes: Note[] = [
  {
    frame: "FN · 01",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
    cat: "Shelter",
    kind: "Perspective",
    read: "06 min",
    title:
      "Australia's housing supply gap, and the materials response it demands.",
    excerpt:
      "The shortfall in domestic dwelling completion is no longer a forecasting question. It is a manufacturing, logistics and policy question — and a materials question.",
    byline: (
      <>
        Filed by <em>M. Hartley</em> · Dandenong, VIC · 12 Mar 2026
      </>
    ),
  },
  {
    frame: "FN · 02",
    img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1000&q=80",
    cat: "Food",
    kind: "Field Note",
    read: "04 min",
    title:
      "Reliability is the product: rebuilding Australia's cold-chain seafood logistics.",
    excerpt:
      "What makes a seafood supply chain trustworthy is not the catch — it is the unbroken temperature record between the boat and the plate.",
    byline: (
      <>
        Filed by <em>J. Nguyen</em> · Port of Melbourne · 04 Apr 2026
      </>
    ),
  },
  {
    frame: "FN · 03",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",
    cat: "Research",
    kind: "Innovation",
    read: "08 min",
    title:
      "From lab bench to building site: validating sustainable panel composites.",
    excerpt:
      "Promod's collaboration with four Australian universities is producing a translation pathway from material science to compliant construction product.",
    byline: (
      <>
        Filed by <em>Dr. S. Okafor</em> · Promod Materials Lab · 22 Apr 2026
      </>
    ),
  },
  {
    frame: "FN · 04",
    img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80",
    cat: "Biotech",
    kind: "Field Note",
    read: "05 min",
    title: (
      <>
        NAD<sup>+</sup>, plasmalogens and the case for translational longevity
        science.
      </>
    ),
    excerpt:
      "What turns a promising molecule into a manufacturable, regulated product is rarely the chemistry. It is the process — and the institutional capacity to scale it without losing the science.",
    byline: (
      <>
        Filed by <em>Dr. K. Tan</em> · Natural Biotech, Adelaide · 30 Apr 2026
      </>
    ),
  },
];

export function FieldNotes() {
  return (
    <section className="insights" data-section="VIII" data-title="Field Notes">
      <div className="container">
        <div className="insights-head">
          <h2 className="h2">Field Notes from across the group.</h2>
          <a href="#" className="all" data-link data-label="View All">
            View archive <Arrow />
          </a>
        </div>
        <div className="insights-grid">
          {notes.map((n) => (
            <article className="article" data-link data-label="Read" key={n.frame}>
              <div className="img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={n.img} alt="" />
                <div className="frame">{n.frame}</div>
              </div>
              <div className="meta">
                <span className="cat">{n.cat}</span>
                <span>{n.kind}</span>
                <span>{n.read}</span>
              </div>
              <h3>{n.title}</h3>
              <p>{n.excerpt}</p>
              <div className="byline">{n.byline}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
