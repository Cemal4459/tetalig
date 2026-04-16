import { PlayerStat } from "@/lib/data";

type Props = {
  title: string;
  statLabel: string;
  rows: PlayerStat[];
};

export default function PlayerStatsTable({ title, statLabel, rows }: Props) {
  return (
    <section className="card overflow-hidden p-5">
      <h2 className="section-title">{title}</h2>
      <div className="overflow-x-auto">
        <table className="data-table min-w-[700px]">
          <thead>
            <tr>
              <th>#</th>
              <th>Oyuncu</th>
              <th>Takım</th>
              <th>{statLabel}</th>
              <th>Maç</th>
              <th>Oran</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={`${row.player}-${row.rank}`}>
                <td>{row.rank}</td>
                <td className="font-semibold text-white">{row.player}</td>
                <td>{row.team}</td>
                <td className="font-bold text-sky-300">{row.value}</td>
                <td>{row.matches}</td>
                <td>{row.ratio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}