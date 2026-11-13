import { Check } from "lucide-react";
import Card from "@/components/common/Card";
import IconTile from "@/components/common/IconTile";
import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Card interactive className="flex h-full flex-col p-5 sm:p-6">
      <IconTile icon={service.icon} />
      <h3 className="mt-5 font-semibold text-heading sm:text-lg">{service.title}</h3>
      <p className="mt-2 text-sm leading-6">{service.description}</p>
      <ul className="mt-auto space-y-2 pt-5">
        {service.points.map((point) => (
          <li key={point} className="flex items-center gap-2 text-xs text-subtle">
            <Check size={14} className="shrink-0 text-primary" aria-hidden="true" />
            {point}
          </li>
        ))}
      </ul>
    </Card>
  );
}
