import { navLabels } from "@/data/navigation";
import { site } from "@/data/site";

/** The `<gautam/>` wordmark; links back to the top of the page. */
export default function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <a
      href="#home"
      onClick={onClick}
      aria-label={navLabels.home}
      className="rounded font-mono text-sm font-semibold tracking-tight text-heading"
    >
      <span className="text-primary">&lt;</span>
      {site.logo}
      <span className="text-primary">/&gt;</span>
    </a>
  );
}
