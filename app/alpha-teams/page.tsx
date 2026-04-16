import TeamCards from "@/components/TeamCards";
import { alphaTeams } from "@/lib/data";

export default function AlphaTeamsPage() {
  return <TeamCards title="Alpha Takımlar" teams={alphaTeams} />;
}