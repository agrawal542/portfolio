"use client";

import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import { navLinks } from "@/data/navigation";

/** Dropdown navigation for phones. Slides open; closes when a link is chosen. */
export default function MobileMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <motion.div
      id="mobile-menu"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden border-t border-line bg-background md:hidden"
    >
      <Container className="max-h-[calc(100svh-4.25rem)] overflow-y-auto overscroll-contain py-3">
        <ul>
          {navLinks.map((link, index) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 + index * 0.04 }}
            >
              <a
                href={link.href}
                onClick={onNavigate}
                className="block rounded py-3 font-medium text-heading hover:text-primary"
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </Container>
    </motion.div>
  );
}
