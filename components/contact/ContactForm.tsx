"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/lib/actions/contact";
import { Arrow } from "@/components/ui/Arrow";

const initial: ContactState = { status: "idle" };

const topics = [
  "General enquiry",
  "Investor relations",
  "Partnership",
  "Careers",
  "Media & press",
];

export function ContactForm({ initialTopic }: { initialTopic?: string }) {
  const [state, action, pending] = useActionState(submitContact, initial);
  const defaultTopic =
    initialTopic && topics.includes(initialTopic) ? initialTopic : topics[0];

  if (state.status === "success") {
    return (
      <div className="form-success" role="status">
        {state.message}
      </div>
    );
  }

  const err = state.fieldErrors ?? {};

  return (
    <form className="contact-form" action={action} noValidate>
      {state.status === "error" && state.message && (
        <p className="form-error" role="alert">
          {state.message}
        </p>
      )}

      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" />
        {err.name && <span className="field-err">{err.name}</span>}
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" />
        {err.email && <span className="field-err">{err.email}</span>}
      </div>

      <div className="field">
        <label htmlFor="organisation">Organisation</label>
        <input
          id="organisation"
          name="organisation"
          type="text"
          autoComplete="organization"
        />
      </div>

      <div className="field">
        <label htmlFor="topic">Topic</label>
        <select id="topic" name="topic" defaultValue={defaultTopic}>
          {topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="field full">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={6} />
        {err.message && <span className="field-err">{err.message}</span>}
      </div>

      {/* Honeypot — visually hidden, ignored by humans */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
        <label>
          Company website
          <input name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        type="submit"
        className="form-submit"
        data-link
        data-label="Send"
        disabled={pending}
      >
        {pending ? "Sending…" : "Send message"}
        <Arrow />
      </button>
    </form>
  );
}
