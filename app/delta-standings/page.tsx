import StandingsTable from "@/components/StandingsTable";
import { deltaStandings } from "@/lib/data";

export default function DeltaStandingsPage() {
  return <StandingsTable title="Delta Grup Puan Durumu" rows={deltaStandings} />;
}