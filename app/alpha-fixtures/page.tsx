import FixtureList from "@/components/FixtureList";
import { alphaFixtures } from "@/lib/data";

export default function AlphaFixturesPage() {
  return <FixtureList title="Alpha Fikstür & Sonuçlar" rows={alphaFixtures} />;
}