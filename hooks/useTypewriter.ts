"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const TYPE_DELAY_MS = 90;
const HOLD_DELAY_MS = 1500;

/** Types each word letter by letter, pauses, then moves to the next one. */
export function useTypewriter(words: string[]) {
  const [wordIndex, setWordIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const word = words[wordIndex];
    const isTyping = typed.length < word.length;
    const timeout = setTimeout(
      () => {
        if (isTyping) {
          setTyped(word.slice(0, typed.length + 1));
        } else {
          setTyped("");
          setWordIndex((index) => (index + 1) % words.length);
        }
      },
      isTyping ? TYPE_DELAY_MS : HOLD_DELAY_MS,
    );

    return () => clearTimeout(timeout);
  }, [reduceMotion, typed, wordIndex, words]);

  return reduceMotion ? words[0] : typed;
}
