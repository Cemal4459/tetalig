import FixtureList from "@/components/FixtureList";
import { deltaFixtures } from "@/lib/data";

export default function DeltaFixturesPage() {
  return <FixtureList title="Delta Fikstür & Sonuçlar" rows={deltaFixtures} />;
}