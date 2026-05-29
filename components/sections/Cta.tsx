import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";

export function Cta() {
  return (
    <section className="cta-strip">
      <div className="container">
        <div className="cta-grid">
          <h2 className="h2">
            A long-horizon operator across{" "}
            <span className="italic" style={{ fontStyle: "italic" }}>
              shelter
            </span>
            ,{" "}
            <span className="italic" style={{ fontStyle: "italic" }}>
              biotech
            </span>{" "}
            and{" "}
            <span className="italic" style={{ fontStyle: "italic" }}>
              food
            </span>{" "}
            in Australia.
          </h2>
          <div className="right">
            <Link href="/contact" data-link data-label="Contact">
              Speak with our team
              <Arrow />
            </Link>
            <Link
              href="/contact?topic=Investor%20relations"
              data-link
              data-label="Enquire"
            >
              Investor enquiries
              <Arrow />
            </Link>
            <Link href="/contact?topic=Careers" data-link data-label="Browse">
              Careers at the group
              <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
