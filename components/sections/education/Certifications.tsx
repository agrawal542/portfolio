import { Award } from "lucide-react";
import Card from "@/components/common/Card";
import IconTile from "@/components/common/IconTile";
import { education } from "@/data/education";

/** Grid of certification cards shown under the degree. */
export default function Certifications() {
  return (
    <ul className="mt-3 grid gap-3 sm:mt-4 sm:grid-cols-2 sm:gap-4">
      {education.certifications.map((certification) => (
        <li key={certification.title}>
          <Card className="flex h-full items-start gap-4 p-5">
            <IconTile icon={Award} size="sm" />
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-heading">
                {certification.title}
              </h3>
              <p className="mt-1 text-xs text-subtle">
                {certification.issuer} · {certification.issued}
              </p>
            </div>
          </Card>
        </li>
      ))}
    </ul>
  );
}
