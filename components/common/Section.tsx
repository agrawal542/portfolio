import type { ReactNode } from "react";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import type { SectionHeadingContent } from "@/data/types";
import { cn } from "@/utils/cn";

type Props = {
  id: string;
  heading: SectionHeadingContent;
  /** Use the tinted background to alternate with white sections. */
  tinted?: boolean;
  children: ReactNode;
};

/** Page section with consistent spacing, anchor id and heading. */
export default function Section({ id, heading, tinted, children }: Props) {
  return (
    <section
      id={id}
      className={cn(
        "border-t border-line py-16 sm:py-24 lg:py-28",
        tinted && "bg-surface",
      )}
    >
      <Container>
        <SectionHeading {...heading} />
        {children}
      </Container>
    </section>
  );
}
