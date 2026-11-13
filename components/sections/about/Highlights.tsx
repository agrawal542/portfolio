import BulletList from "@/components/common/BulletList";
import Card from "@/components/common/Card";
import { about } from "@/data/about";

/** Card listing the headline career results. */
export default function Highlights() {
  return (
    <Card className="p-5 sm:p-8">
      <h3 className="mb-5 font-semibold text-heading sm:text-lg">
        {about.highlightsTitle}
      </h3>
      <BulletList items={about.highlights} columns />
    </Card>
  );
}
