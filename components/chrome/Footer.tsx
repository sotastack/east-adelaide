import Link from "next/link";
import { ReplayLink } from "./ReplayLink";

const houses = [
  "Tidy Tend Global",
  "Advanced Cladding Systems",
  "Procon Material",
  "Promod Building Group",
  "Advance Building Solutions",
  "Natural Biotech Pty Ltd",
  "Albio · Alpha Shaper",
  "Plasmalogen R&D",
  "Marine Bioactive Peptides",
  "The Little Shell Catering",
];

const group = [
  { label: "Our Company", href: "/about#our-company" },
  { label: "Leadership", href: "/about#leadership" },
  { label: "Board & Governance", href: "/about#governance" },
  { label: "Sustainability", href: "/about#sustainability" },
];

const investors = [
  { label: "Investor Centre", href: "/investor" },
  { label: "Financial Footprint", href: "/investor#financial-footprint" },
  { label: "Growth Strategy", href: "/investor#growth-strategy" },
  { label: "Capital Markets", href: "/investor#capital-markets" },
];

const connect = [
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/contact?topic=Careers" },
  { label: "Media & Press", href: "/insights" },
  { label: "Field Notes", href: "/insights" },
];

const legal = [
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Terms", href: "/legal/terms" },
  { label: "Modern Slavery Statement", href: "/legal/modern-slavery" },
  { label: "Whistleblower Policy", href: "/legal/whistleblower" },
];

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="wordmark">
              <span className="monogram" aria-hidden="true" />
              <span>
                <span className="name">East Adelaide Capital Group</span>
                <span className="sub">Est. Victoria · Australia</span>
              </span>
            </div>
            <p>
              A diversified Australian operating group across building
              materials, sustainable construction, natural bioscience, food
              supply chains and research-led product innovation.
            </p>
            <div className="abn">
              East Adelaide Capital Group Pty Ltd
              <br />
              Unit A6, 2A Westall Road, Clayton, Victoria 3168
            </div>
          </div>

          <div className="footer-col">
            <h4>Group</h4>
            <ul>
              {group.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} data-link data-label="View">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Houses</h4>
            <ul>
              {houses.map((h) => (
                <li key={h}>
                  <Link href="/divisions" data-link data-label="Open">
                    {h}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Investors</h4>
            <ul>
              {investors.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} data-link data-label="Enter">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              {connect.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} data-link data-label="View">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © 2026 East Adelaide Capital Group Pty Ltd. All rights reserved.
          </span>
          <div className="links">
            {legal.map((l) => (
              <Link key={l.label} href={l.href} data-link data-label="Read">
                {l.label}
              </Link>
            ))}
            <ReplayLink />
          </div>
        </div>
      </div>
    </footer>
  );
}
