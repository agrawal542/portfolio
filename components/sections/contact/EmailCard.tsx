import { Mail } from "lucide-react";
import Card from "@/components/common/Card";
import CopyButton from "@/components/common/CopyButton";
import IconTile from "@/components/common/IconTile";
import Tag from "@/components/common/Tag";
import { contact } from "@/data/contact";
import { site } from "@/data/site";

/** The most direct way to reach out: email address, copy button, and what I'm open to. */
export default function EmailCard() {
  return (
    <Card className="p-5">
      <div className="flex items-center gap-3">
        <IconTile icon={Mail} />
        <div className="min-w-0 flex-1">
          <p className="text-xs text-subtle">{contact.emailLabel}</p>
          <a
            href={`mailto:${site.email}`}
            className="block font-medium break-all text-heading transition-colors hover:text-primary"
          >
            {site.email}
          </a>
        </div>
        <CopyButton text={site.email} />
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-line pt-4">
        <span className="font-mono text-xs text-subtle uppercase">
          {contact.openTo.label}
        </span>
        {contact.openTo.items.map((item) => (
          <Tag key={item} tone="primary">
            {item}
          </Tag>
        ))}
      </div>
    </Card>
  );
}
