import { SectionHead } from "@/components/ui/SectionHead";

interface Partner {
  letters?: string;
  logo?: { src: string; href: string };
  lead: string;
  em: string;
  kind: string;
}

const partners: Partner[] = [
  { letters: "US", lead: "University of", em: "Sydney", kind: "Research · PCM Materials" },
  { letters: "UM", lead: "University of", em: "Melbourne", kind: "Research · Materials Science" },
  { letters: "RM", lead: "RMIT", em: "University", kind: "Research · Modular DfM + BIM" },
  { letters: "UA", lead: "University of", em: "Adelaide", kind: "Research · NMN + Biotech" },
  { letters: "ZJ", lead: "Zhejiang", em: "University", kind: "Research · Plasmalogens" },
  {
    logo: {
      src: "https://altaarchitecture.com/wp-content/themes/The_Mighty_Wonton/assets/img/alta_logo_word.svg",
      href: "https://altaarchitecture.com",
    },
    lead: "ALTA",
    em: "Architecture",
    kind: "Industry · Architecture · Melbourne",
  },
  { letters: "SP", lead: "Sisley", em: "Prestige Homes", kind: "Industry · Residential Builder · Doncaster VIC" },
  { letters: "SS", lead: "Sota", em: "stack", kind: "Industry · AI + Digital Platform" },
  { letters: "LC", lead: "Lexcord", em: "Lawyers", kind: "Industry · Corporate Counsel" },
  { letters: "LK", lead: "Lan Kun", em: "Marine Biotech", kind: "Industry · Marine Peptides · Yantai" },
];

function Cell({ p, ghost }: { p: Partner; ghost?: boolean }) {
  if (p.logo) {
    return (
      <div className="partner-cell" aria-hidden={ghost || undefined}>
        <a
          className="partner-link"
          href={p.logo.href}
          target="_blank"
          rel="noopener"
          data-link={ghost ? undefined : true}
          data-label={ghost ? undefined : "Visit"}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="logo-img"
            src={p.logo.src}
            alt={ghost ? "" : `${p.lead} ${p.em}`}
            loading="lazy"
          />
        </a>
      </div>
    );
  }
  return (
    <div className="partner-cell" aria-hidden={ghost || undefined}>
      <div className="mark on-light pc-mark">
        <div className="letters">{p.letters}</div>
        <div className="rule"></div>
      </div>
      <div className="pc-info">
        <span className="name">
          {p.lead} <em>{p.em}</em>
        </span>
        <span className="kind">{p.kind}</span>
      </div>
    </div>
  );
}

export function Partners() {
  return (
    <section className="partners" data-section="VI" data-title="Partners">
      <div className="container">
        <SectionHead
          roman="VI."
          eyebrow="Research & Industry Partners"
          title={
            <>
              A network of{" "}
              <span style={{ fontStyle: "italic", color: "var(--ember)" }}>
                institutions
              </span>{" "}
              and{" "}
              <span style={{ fontStyle: "italic", color: "var(--ember)" }}>
                operators
              </span>
              .
            </>
          }
          meta="We work with four Australian universities, a leading Chinese research group, and a tight cohort of industry partners across architecture, residential construction, technology and legal services."
        />

        <div className="partners-carousel" aria-label="Research and industry partners">
          <div className="partners-track">
            {partners.map((p, i) => (
              <Cell key={`a-${i}`} p={p} />
            ))}
            {partners.map((p, i) => (
              <Cell key={`b-${i}`} p={p} ghost />
            ))}
          </div>
        </div>

        <div className="partners-foot">
          <span>
            <span className="pf-key">●</span> Research
          </span>
          <span>
            <span className="pf-key">●</span> Industry
          </span>
          <span>Hover the strip to pause.</span>
        </div>
      </div>
    </section>
  );
}
