"use client";

import { Send } from "lucide-react";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import FormField, { fieldStyles } from "@/components/sections/contact/FormField";
import FormStatus from "@/components/sections/contact/FormStatus";
import { contact, contactLimits as limits } from "@/data/contact";
import { useContactForm } from "@/hooks/useContactForm";

const { form } = contact;

export default function ContactForm() {
  const { status, feedback, submit } = useContactForm();
  const isSending = status === "sending";

  return (
    <Card className="p-5 sm:p-7">
      <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
        <FormField label={form.name.label}>
          <input
            name="name"
            type="text"
            required
            minLength={limits.nameMin}
            maxLength={limits.nameMax}
            autoComplete="name"
            placeholder={form.name.placeholder}
            className={fieldStyles}
          />
        </FormField>
        <FormField label={form.email.label}>
          <input
            name="email"
            type="email"
            required
            maxLength={limits.emailMax}
            autoComplete="email"
            placeholder={form.email.placeholder}
            className={fieldStyles}
          />
        </FormField>
        <FormField label={form.message.label} className="block sm:col-span-2">
          <textarea
            name="message"
            required
            minLength={limits.messageMin}
            maxLength={limits.messageMax}
            rows={5}
            placeholder={form.message.placeholder}
            className={`${fieldStyles} resize-y leading-6`}
          />
        </FormField>

        <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
          <Button type="submit" disabled={isSending} className="w-full sm:w-auto">
            {isSending ? form.sending : form.submit}
            <Send size={14} aria-hidden="true" />
          </Button>
          <FormStatus status={status} message={feedback} />
        </div>
      </form>
    </Card>
  );
}
