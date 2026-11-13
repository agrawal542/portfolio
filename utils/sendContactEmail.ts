import { Resend } from "resend";
import { contact } from "@/data/contact";
import { site } from "@/data/site";
import type { ContactMessage } from "@/utils/validateContact";

type MailConfig = { apiKey: string; from: string };

/** Reads the Resend settings; returns null when the form isn't configured. */
export function getMailConfig(): MailConfig | null {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  return apiKey && from ? { apiKey, from } : null;
}

/** Emails a contact form message to the site owner. Returns true on success. */
export async function sendContactEmail(config: MailConfig, message: ContactMessage) {
  const { name, email, message: text } = message;

  const { error } = await new Resend(config.apiKey).emails.send({
    from: config.from,
    to: site.email,
    replyTo: email,
    subject: `${contact.api.subjectPrefix} ${name}`,
    text: `From: ${name} <${email}>\n\n${text}`,
  });

  if (error) console.error("Resend contact email failed:", error.message);
  return !error;
}
