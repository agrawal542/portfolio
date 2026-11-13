"use client";

import { Check, Copy } from "lucide-react";
import { contact } from "@/data/contact";
import { useCopy } from "@/hooks/useCopy";

/** Small button that copies `text` and briefly confirms it. */
export default function CopyButton({ text }: { text: string }) {
  const { copied, copy } = useCopy(text);
  const Icon = copied ? Check : Copy;

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line-strong bg-card px-3 py-1.5 text-xs font-medium text-body transition-colors hover:border-primary hover:text-primary"
    >
      <Icon size={13} aria-hidden="true" />
      {copied ? contact.copy.done : contact.copy.idle}
    </button>
  );
}
