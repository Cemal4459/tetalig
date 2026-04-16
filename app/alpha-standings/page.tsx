import StandingsTable from "@/components/StandingsTable";
import { alphaStandings } from "@/lib/data";

export default function AlphaStandingsPage() {
  return <StandingsTable title="Alpha Grup Puan Durumu" rows={alphaStandings} />;
}