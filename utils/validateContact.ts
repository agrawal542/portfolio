import { contactLimits } from "@/data/contact";

export type ContactMessage = { name: string; email: string; message: string };

type Result =
  | { ok: true; data: ContactMessage }
  | { ok: false; reason: "incomplete" | "invalid" };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isBetween(value: string, min: number, max: number) {
  return value.length >= min && value.length <= max;
}

/** Checks an untrusted contact form payload and returns trimmed fields. */
export function validateContact(payload: unknown): Result {
  if (
    typeof payload !== "object" ||
    payload === null ||
    !("name" in payload) ||
    !("email" in payload) ||
    !("message" in payload)
  ) {
    return { ok: false, reason: "incomplete" };
  }

  const { name, email, message } = payload;
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return { ok: false, reason: "invalid" };
  }

  const data = {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
  };
  const { nameMin, nameMax, messageMin, messageMax } = contactLimits;
  const valid =
    isBetween(data.name, nameMin, nameMax) &&
    emailPattern.test(data.email) &&
    isBetween(data.message, messageMin, messageMax);

  return valid ? { ok: true, data } : { ok: false, reason: "invalid" };
}
