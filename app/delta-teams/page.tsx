import TeamCards from "@/components/TeamCards";
import { deltaTeams } from "@/lib/data";

export default function DeltaTeamsPage() {
  return <TeamCards title="Delta Takımlar" teams={deltaTeams} />;
}