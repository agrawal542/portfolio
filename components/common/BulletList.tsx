import RichText from "@/components/common/RichText";
import type { RichText as RichTextContent } from "@/data/types";
import { cn } from "@/utils/cn";

type Props = {
  items: RichTextContent[];
  /** Lay the items out in two columns on larger screens. */
  columns?: boolean;
};

/** List with blue dot markers. */
export default function BulletList({ items, columns }: Props) {
  return (
    <ul className={cn("grid gap-3", columns && "md:grid-cols-2 md:gap-x-10")}>
      {items.map((item, index) => (
        <li key={index} className="flex gap-3 text-sm leading-6">
          <span
            className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary"
            aria-hidden="true"
          />
          <span className="min-w-0">
            <RichText content={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}
