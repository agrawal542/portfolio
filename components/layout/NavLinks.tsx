"use client";

import { motion } from "framer-motion";
import { navLinks } from "@/data/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/utils/cn";

const sectionIds = navLinks.map((link) => link.href.slice(1));

/** Desktop navigation; a pill slides to the section currently on screen. */
export default function NavLinks() {
  const activeId = useActiveSection(sectionIds);

  return (
    <ul className="hidden items-center md:flex lg:gap-1">
      {navLinks.map((link) => {
        const isActive = link.href === `#${activeId}`;
        return (
          <li key={link.href}>
            <a
              href={link.href}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "relative block rounded-full px-3 py-2 text-sm font-medium transition-colors",
                isActive ? "text-primary" : "text-body hover:text-heading",
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-primary-soft"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <span className="relative">{link.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
