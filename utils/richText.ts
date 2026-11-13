import type { RichText } from "@/data/types";

/** Flattens rich text to a plain string (used for the text resume). */
export function toPlainText(content: RichText) {
  if (typeof content === "string") return content;
  return content
    .map((part) => (typeof part === "string" ? part : part.strong))
    .join("");
}
