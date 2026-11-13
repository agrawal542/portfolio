"use client";

import { useEffect, useState } from "react";

/** Returns the id of the section currently in the middle of the screen. */
export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      // A thin band across the middle of the viewport.
      { rootMargin: "-45% 0px -50% 0px" },
    );

    ids.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
