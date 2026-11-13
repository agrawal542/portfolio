"use client";

import { hero } from "@/data/hero";
import { useTypewriter } from "@/hooks/useTypewriter";

const { prefix, words } = hero.typewriter;

/** "currently building with …" line that types through the tech list. */
export default function Typewriter() {
  const typed = useTypewriter(words);

  return (
    <p className="mt-5 flex flex-col gap-x-2 gap-y-1 font-mono text-sm sm:flex-row sm:items-center">
      <span className="text-subtle">{prefix}</span>
      <span className="typing-caret min-h-5 font-medium text-primary">{typed}</span>
    </p>
  );
}
