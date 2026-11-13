"use client";

import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";
import MenuButton from "@/components/layout/MenuButton";
import MobileMenu from "@/components/layout/MobileMenu";
import NavLinks from "@/components/layout/NavLinks";
import ScrollProgress from "@/components/layout/ScrollProgress";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { navCta, navLabels } from "@/data/navigation";
import { useMobileMenu } from "@/hooks/useMobileMenu";

export default function Navbar() {
  const menu = useMobileMenu();

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-line bg-background/85 backdrop-blur-xl"
    >
      <nav aria-label={navLabels.main}>
        <Container className="flex h-17 items-center justify-between gap-4">
          <Logo onClick={menu.close} />
          <NavLinks />
          <div className="flex items-center gap-2">
            <span className="hidden sm:block md:hidden lg:block">
              <Button href={navCta.href} size="sm">
                {navCta.label}
              </Button>
            </span>
            <ThemeToggle />
            <MenuButton isOpen={menu.isOpen} onClick={menu.toggle} />
          </div>
        </Container>
        <AnimatePresence>
          {menu.isOpen && <MobileMenu onNavigate={menu.close} />}
        </AnimatePresence>
      </nav>
      <ScrollProgress />
    </motion.header>
  );
}
