"use server";

import { z } from "zod";
import { Resend } from "resend";

export interface ContactState {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
}

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(120),
  email: z.string().trim().email("Please enter a valid email address"),
  organisation: z.string().trim().max(160).optional(),
  topic: z.string().trim().max(80).optional(),
  message: z
    .string()
    .trim()
    .min(10, "Please add a little more detail (10+ characters)")
    .max(4000),
});

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: bots fill hidden fields. Pretend success without sending.
  if (String(formData.get("company_website") ?? "").trim()) {
    return { status: "success", message: "Thank you — your message has been sent." };
  }

  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    organisation: formData.get("organisation") || undefined,
    topic: formData.get("topic") || undefined,
    message: formData.get("message"),
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "");
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      fieldErrors,
    };
  }

  const data = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      status: "error",
      message:
        "Messaging is not configured yet (missing RESEND_API_KEY). Your details validated correctly but were not sent.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const to = process.env.CONTACT_TO_EMAIL || "admin@eastadelaidegroup.com.au";
    const from =
      process.env.CONTACT_FROM_EMAIL ||
      "East Adelaide Capital Group <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `Website enquiry${data.topic ? ` · ${data.topic}` : ""} — ${data.name}`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Organisation: ${data.organisation ?? "—"}`,
        `Topic: ${data.topic ?? "—"}`,
        "",
        data.message,
      ].join("\n"),
    });

    if (error) {
      return {
        status: "error",
        message:
          "Something went wrong sending your message. Please email us directly.",
      };
    }

    return {
      status: "success",
      message:
        "Thank you — your message has been sent. We'll be in touch shortly.",
    };
  } catch {
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again.",
    };
  }
}
