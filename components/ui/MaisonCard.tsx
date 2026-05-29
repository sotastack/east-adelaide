import type { House } from "@/lib/data/houses";
import { Arrow } from "./Arrow";

export function Mark({ mark }: { mark: string }) {
  if (mark === "leaf") {
    return (
      <div className="nb-leaf" aria-hidden="true">
        <svg viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="14" cy="20" rx="10" ry="18" fill="#CFE6D6" />
          <ellipse cx="32" cy="20" rx="10" ry="18" fill="#3FB078" />
          <ellipse cx="50" cy="20" rx="10" ry="18" fill="#1F7A4A" />
        </svg>
      </div>
    );
  }
  return (
    <div className="mark">
      <div className="letters">{mark}</div>
      <div className="rule"></div>
    </div>
  );
}

export function MaisonCard({ house }: { house: House }) {
  return (
    <div className="maison" data-link data-label="Open House">
      <div className="mark-row">
        <Mark mark={house.mark} />
        <div className="idx-text">
          House {house.id} · <span className="div-text">{house.division}</span>
        </div>
      </div>
      <div className="name">
        {house.name} <em>{house.em}</em>
      </div>
      <div className="desc">{house.desc}</div>
      <div className="brands">{house.brands}</div>
      <div className="arrow-wrap">
        <Arrow />
      </div>
    </div>
  );
}
