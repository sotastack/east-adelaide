import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Speak with East Adelaide Capital Group — general, investor, partnership, careers and media enquiries.",
};

const channels = [
  { k: "General", v: "admin@eastadelaidegroup.com.au" },
  { k: "Compliance", v: "compliance@eastadelaidegroup.com.au" },
  { k: "Security & Whistleblower", v: "security@eastadelaidegroup.com.au" },
  { k: "Headquarters", v: "Unit A6, 2A Westall Road, Clayton, Victoria 3168" },
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const { topic } = await searchParams;

  return (
    <section className="contact" data-section="IX" data-title="Contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-intro">
            <div className="eyebrow">
              <span className="roman">IX.</span>Contact
            </div>
            <h2 className="h2">
              Speak with{" "}
              <span style={{ fontStyle: "italic", color: "var(--ember)" }}>
                our team
              </span>
              .
            </h2>
            <p className="lede">
              For investment, partnership, supply or media enquiries across the
              group&rsquo;s shelter, biotech and food divisions — send a note and
              the right team will respond.
            </p>
            <div className="contact-channels">
              {channels.map((c) => (
                <div className="contact-channel" key={c.k}>
                  <span className="ck">{c.k}</span>
                  <span className="cv">{c.v}</span>
                </div>
              ))}
            </div>
          </div>

          <ContactForm initialTopic={topic} />
        </div>
      </div>
    </section>
  );
}
