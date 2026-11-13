import { Fragment } from "react";
import type { RichText as RichTextContent } from "@/data/types";

/** Renders text from the data folder, emphasising its `strong` parts. */
export default function RichText({ content }: { content: RichTextContent }) {
  if (typeof content === "string") return content;

  return content.map((part, index) =>
    typeof part === "string" ? (
      <Fragment key={index}>{part}</Fragment>
    ) : (
      <strong key={index} className="font-semibold text-heading">
        {part.strong}
      </strong>
    ),
  );
}
