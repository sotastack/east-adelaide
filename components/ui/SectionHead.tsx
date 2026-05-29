import type { ReactNode } from "react";

export function SectionHead({
  roman,
  eyebrow,
  title,
  meta,
}: {
  roman: string;
  eyebrow: ReactNode;
  title: ReactNode;
  meta: ReactNode;
}) {
  return (
    <div className="section-head">
      <div>
        <div className="eyebrow">
          <span className="roman">{roman}</span>
          {eyebrow}
        </div>
        <h2 className="h2">{title}</h2>
      </div>
      <div className="head-meta">{meta}</div>
    </div>
  );
}
