import ArrowLink from "@/components/common/ArrowLink";
import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";
import SocialLinks from "@/components/common/SocialLinks";
import { footer } from "@/data/footer";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-5 py-8 md:flex-row md:items-center md:justify-between">
        <Logo />
        <p className="text-xs text-subtle">
          {footer.note} · © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <SocialLinks />
          <ArrowLink href={footer.backToTop.href} size="xs">
            {footer.backToTop.label}
          </ArrowLink>
        </div>
      </Container>
    </footer>
  );
}
