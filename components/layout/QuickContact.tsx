"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { quickContact } from "@/data/cta";
import { useQuickContact } from "@/hooks/useQuickContact";
import { linkProps } from "@/utils/links";

const { email, linkedin } = quickContact;

/**
 * Floating email and LinkedIn shortcuts. Appears after the hero and hides
 * again at the contact section. A full-width bar on phones, a pill on desktop.
 */
export default function QuickContact() {
  const isVisible = useQuickContact("contact");

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="fixed inset-x-4 bottom-4 z-40 flex gap-2 rounded-full border border-line bg-card/90 p-1.5 shadow-raised backdrop-blur-xl sm:inset-x-auto sm:right-6 sm:bottom-6"
        >
          <a
            href={email.href}
            className="shine inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-hover"
          >
            <Mail size={16} aria-hidden="true" />
            {email.label}
          </a>
          <a
            href={linkedin.href}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-heading transition-colors hover:text-primary"
            {...linkProps(linkedin.href)}
          >
            <Linkedin size={16} aria-hidden="true" />
            {linkedin.label}
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
