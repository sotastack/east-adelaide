import Link from "next/link";

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
              Headquartered in Victoria, Australia
            </div>
          </div>

          <div className="footer-col">
            <h4>Group</h4>
            <ul>
              <li>
                <a href="#" data-link data-label="View">
                  Our Company
                </a>
              </li>
              <li>
                <a href="#" data-link data-label="View">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#" data-link data-label="View">
                  Board &amp; Governance
                </a>
              </li>
              <li>
                <a href="#" data-link data-label="View">
                  Sustainability
                </a>
              </li>
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
              <li>
                <Link href="/investor" data-link data-label="Enter">
                  Investor Centre
                </Link>
              </li>
              <li>
                <Link href="/investor" data-link data-label="View">
                  Financial Footprint
                </Link>
              </li>
              <li>
                <Link href="/investor" data-link data-label="Read">
                  Growth Strategy
                </Link>
              </li>
              <li>
                <Link href="/investor" data-link data-label="View">
                  Capital Markets
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li>
                <Link href="/contact" data-link data-label="Contact">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" data-link data-label="Browse">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" data-link data-label="View">
                  Media &amp; Press
                </a>
              </li>
              <li>
                <a href="#" data-link data-label="Read">
                  Field Notes
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © 2026 East Adelaide Capital Group Pty Ltd. All rights reserved.
          </span>
          <div className="links">
            <a href="#" data-link data-label="Read">
              Privacy
            </a>
            <a href="#" data-link data-label="Read">
              Terms
            </a>
            <a href="#" data-link data-label="Read">
              Modern Slavery Statement
            </a>
            <a href="#" data-link data-label="Read">
              Whistleblower Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
