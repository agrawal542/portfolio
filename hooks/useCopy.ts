"use client";

import { useState } from "react";

const RESET_MS = 2000;

/** Copies text to the clipboard and reports "copied" for a moment. */
export function useCopy(text: string) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), RESET_MS);
    } catch {
      // Clipboard access can be blocked; the text is still visible to select.
    }
  }

  return { copied, copy };
}
