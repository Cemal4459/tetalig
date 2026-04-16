import { Standing } from "@/lib/data";

type Props = {
  title: string;
  rows: Standing[];
};

export default function StandingsTable({ title, rows }: Props) {
  return (
    <section className="card shine-card overflow-hidden p-5 md:p-7">
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="section-kicker">TETA LEAGUE</p>
          <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
            {title}
          </h2>
        </div>

        <div className="text-sm text-[var(--muted)]">
          Güncel sıralama tablosu
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="data-table min-w-[880px] standings-custom-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Takım</th>
              <th>O</th>
              <th>G</th>
              <th>B</th>
              <th>M</th>
              <th>AG</th>
              <th>YG</th>
              <th>AV</th>
              <th>P</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => {
              const rowClass =
                row.rank <= 3
                  ? "is-top"
                  : row.rank >= rows.length - 2
                  ? "is-bottom"
                  : "is-mid";

              return (
                <tr key={row.team} className={rowClass}>
                  <td className="rank-cell">
                    <span className="rank-badge">{row.rank}</span>
                  </td>

                  <td className="team-name-cell">
                    <div className="team-name-wrap">
                      <span className="team-name">{row.team}</span>
                    </div>
                  </td>

                  <td>{row.mp}</td>
                  <td>{row.w}</td>
                  <td>{row.d}</td>
                  <td>{row.l}</td>
                  <td>{row.gf}</td>
                  <td>{row.ga}</td>
                  <td>{row.gd}</td>

                  <td className="points-cell">
                    <span className="points-pill">{row.pts}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-5 text-xs leading-6 text-[var(--muted)]">
        O: Oynanan Maç &nbsp; // &nbsp; G: Galibiyet &nbsp; // &nbsp; B:
        Beraberlik &nbsp; // &nbsp; M: Mağlubiyet &nbsp; // &nbsp; P: Puan
      </div>
    </section>
  );
}