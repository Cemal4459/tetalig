import { Team } from "@/lib/data";

type Props = {
  title: string;
  teams: Team[];
};

export default function TeamCards({ title, teams }: Props) {
  return (
    <section>
      <div className="mb-7">
        <p className="section-kicker">TEAMS</p>
        <h1 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">
          Grup içerisindeki tüm takımları, oynanan maç sayılarını ve puan
          durumlarını premium kart yapısında görüntüle.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {teams.map((team, index) => (
          <article
            key={team.name}
            className="team-card-premium shine-card"
          >
            <div className="team-card-top">
              <div className="team-logo-box">{team.logoText}</div>

              <div className="team-rank-pill">
                #{index + 1}
              </div>
            </div>

            <h2 className="team-card-title">{team.name}</h2>

            <div className="team-card-stats">
              <div className="team-stat-row">
                <span>Oynadığı Maç</span>
                <strong>{team.played}</strong>
              </div>

              <div className="team-stat-row">
                <span>Puan</span>
                <strong>{team.points}</strong>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}