import PlayerStatsTable from "@/components/PlayerStatsTable";
import { assists, scorers } from "@/lib/data";

export default function TopStatsPage() {
  const topScorer = scorers[0];
  const topAssist = assists[0];

  return (
    <div className="space-y-8">
      <section className="grid gap-5 xl:grid-cols-2">
        <div className="card shine-card p-6 md:p-8">
          <p className="section-kicker">TOP SCORER</p>
          <h1 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
            Gol Lideri
          </h1>

          <div className="mt-8 flex items-start justify-between gap-4">
            <div>
              <p className="text-2xl font-extrabold text-white md:text-3xl">
                {topScorer.player}
              </p>
              <p className="mt-2 text-sm text-[var(--muted)]">
                {topScorer.team}
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--stroke)] bg-[var(--primary-soft)] px-5 py-4 text-center">
              <div className="text-3xl font-extrabold text-white">
                {topScorer.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                Gol
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="panel p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                Maç
              </p>
              <p className="mt-2 text-xl font-bold text-white">
                {topScorer.matches}
              </p>
            </div>

            <div className="panel p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                Oran
              </p>
              <p className="mt-2 text-xl font-bold text-white">
                {topScorer.ratio}
              </p>
            </div>
          </div>
        </div>

        <div className="card shine-card p-6 md:p-8">
          <p className="section-kicker">TOP ASSIST</p>
          <h1 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
            Asist Lideri
          </h1>

          <div className="mt-8 flex items-start justify-between gap-4">
            <div>
              <p className="text-2xl font-extrabold text-white md:text-3xl">
                {topAssist.player}
              </p>
              <p className="mt-2 text-sm text-[var(--muted)]">
                {topAssist.team}
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--stroke)] bg-[var(--primary-soft)] px-5 py-4 text-center">
              <div className="text-3xl font-extrabold text-white">
                {topAssist.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                Asist
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="panel p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                Maç
              </p>
              <p className="mt-2 text-xl font-bold text-white">
                {topAssist.matches}
              </p>
            </div>

            <div className="panel p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                Oran
              </p>
              <p className="mt-2 text-xl font-bold text-white">
                {topAssist.ratio}
              </p>
            </div>
          </div>
        </div>
      </section>

      <PlayerStatsTable title="Gol Krallığı" statLabel="Gol" rows={scorers} />
      <PlayerStatsTable title="Asist Krallığı" statLabel="Asist" rows={assists} />
    </div>
  );
}