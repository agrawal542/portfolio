"use client";

import { type FormEvent, useState } from "react";
import { contact } from "@/data/contact";

export type FormStatus = "idle" | "sending" | "success" | "error";

const { messages } = contact.form;

/** Submits the contact form to /api/contact and tracks its status. */
export function useContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result: { error?: string } = await response.json();

      if (!response.ok) {
        setStatus("error");
        setFeedback(result.error ?? messages.failed);
        return;
      }

      setStatus("success");
      setFeedback(messages.success);
      form.reset();
    } catch {
      setStatus("error");
      setFeedback(messages.network);
    }
  }

  return { status, feedback, submit };
}
