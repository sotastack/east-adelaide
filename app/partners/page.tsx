import type { Metadata } from "next";
import Link from "next/link";
import { researchPartners, industryPartners, type Partner } from "@/lib/data/partners";
import { SectionHead } from "@/components/ui/SectionHead";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "East Adelaide Capital Group's research and industry partners — Australian universities, a leading Chinese research group, and partners across architecture, construction, technology and law.",
};

function PartnerCard({ p }: { p: Partner }) {
  const body = (
    <>
      {p.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="pp-logo" src={p.logo} alt={`${p.lead} ${p.em}`} loading="lazy" />
      ) : (
        <div className="mark on-light pc-mark">
          <div className="letters">{p.letters}</div>
          <div className="rule"></div>
        </div>
      )}
      <div className="pc-info">
        <span className="name">
          {p.lead} <em>{p.em}</em>
        </span>
        <span className="kind">{p.kind}</span>
      </div>
    </>
  );

  if (p.href) {
    return (
      <a
        className="pp-card"
        href={p.href}
        target="_blank"
        rel="noopener"
        data-link
        data-label="Visit"
      >
        {body}
      </a>
    );
  }
  return <div className="pp-card">{body}</div>;
}

function PartnerCTA({ name, em, kind }: { name: string; em: string; kind: string }) {
  return (
    <Link
      className="pp-card pp-cta"
      href="/contact?topic=Partnership"
      data-link
      data-label="Enquire"
    >
      <span className="pp-cta-mark" aria-hidden="true" />
      <div className="pc-info">
        <span className="name">
          {name} <em>{em}</em>
        </span>
        <span className="kind">{kind}</span>
      </div>
    </Link>
  );
}

export default function PartnersPage() {
  return (
    <section className="partners-page" data-section="—" data-title="Partners">
      <div className="container">
        <div className="page-intro" style={{ paddingTop: 0 }}>
          <div className="eyebrow">
            <span className="roman">—</span>Partners
          </div>
          <h1
            className="display"
            style={{ fontSize: "clamp(40px, 6vw, 88px)", margin: "18px 0 22px", maxWidth: "18ch" }}
          >
            Institutions and <span className="italic">operators</span> we build
            with.
          </h1>
          <p className="lede">
            We work with four Australian universities, a leading Chinese
            research group, and a tight cohort of industry partners across
            architecture, residential construction, technology and legal
            services.
          </p>
        </div>

        <div className="pp-group">
          <SectionHead
            roman="01."
            eyebrow="Research"
            title={<>University &amp; research partners.</>}
            meta="Collaborations spanning advanced materials, modular construction, AI and bioscience."
          />
          <div className="pp-grid">
            {researchPartners.map((p) => (
              <PartnerCard p={p} key={`${p.lead}-${p.em}`} />
            ))}
            <PartnerCTA
              name="Research"
              em="collaboration"
              kind="Open to new university partnerships →"
            />
          </div>
        </div>

        <div className="pp-group">
          <SectionHead
            roman="02."
            eyebrow="Industry"
            title={<>Industry &amp; commercial partners.</>}
            meta="Architecture, residential construction, technology and legal partners across the portfolio."
          />
          <div className="pp-grid">
            {industryPartners.map((p) => (
              <PartnerCard p={p} key={`${p.lead}-${p.em}`} />
            ))}
            <PartnerCTA
              name="Partner"
              em="with us"
              kind={"Industry & supply enquiries →"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
