import Link from "next/link";
import { investorRows, investorFootnote } from "@/lib/data/investor";
import { Arrow } from "@/components/ui/Arrow";

export function Investor() {
  return (
    <section className="investor" data-section="VII" data-title="Capital">
      <div className="container">
        <div className="investor-grid">
          <div className="investor-left">
            <div className="eyebrow">
              <span className="roman">VII.</span>Financial Footprint
            </div>
            <h2 className="h2">
              Scaled. Diversified.
              <br />
              <span style={{ fontStyle: "italic", color: "var(--ember)" }}>
                Capital-markets ready.
              </span>
            </h2>
            <p>
              An operating revenue base across all three essential pillars
              provides the foundation for continued expansion, operational
              integration, governance maturity and — in time — public capital
              markets access.
            </p>
            <Link
              href="/investor"
              className="investor-cta"
              data-link
              data-label="Enter"
            >
              Investor Centre
              <Arrow />
            </Link>
          </div>

          <div className="investor-table">
            <div className="investor-row header">
              <div>Division</div>
              <div>Key Activities</div>
              <div style={{ textAlign: "right" }}>Annual Revenue</div>
            </div>
            {investorRows.map((r) => (
              <div
                className={`investor-row${r.total ? " total" : ""}`}
                key={r.division}
              >
                <div className="div-name">{r.division}</div>
                <div className="activities">{r.activities}</div>
                <div className="rev">
                  ${r.revenue}
                  <span className="u">M</span>
                </div>
              </div>
            ))}
            <div className="investor-footnote">{investorFootnote}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
