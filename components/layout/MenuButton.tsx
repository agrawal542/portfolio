import { Menu, X } from "lucide-react";
import { navLabels } from "@/data/navigation";

type Props = { isOpen: boolean; onClick: () => void };

/** Hamburger button that opens the mobile menu. Hidden on desktop. */
export default function MenuButton({ isOpen, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? navLabels.closeMenu : navLabels.openMenu}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      className="-mr-2 grid size-10 place-items-center rounded-full text-heading md:hidden"
    >
      {isOpen ? <X size={20} /> : <Menu size={20} />}
    </button>
  );
}
