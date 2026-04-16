"use client";

import { useMemo, useState } from "react";
import { Fixture } from "@/lib/data";

type Props = {
  title: string;
  rows: Fixture[];
};

export default function FixtureList({ title, rows }: Props) {
  const [selectedTeam, setSelectedTeam] = useState("Tüm Takımlar");
  const [selectedWeek, setSelectedWeek] = useState("Tüm Haftalar");

  const teams = useMemo(() => {
    const allTeams = rows.flatMap((match) => [match.home, match.away]);
    return ["Tüm Takımlar", ...Array.from(new Set(allTeams)).sort()];
  }, [rows]);

  const weeks = useMemo(() => {
    const allWeeks = rows.map((match) => match.week);
    return [
      "Tüm Haftalar",
      ...Array.from(new Set(allWeeks))
        .sort((a, b) => a - b)
        .map((w) => `Week ${w}`),
    ];
  }, [rows]);

  const filteredRows = useMemo(() => {
    return rows.filter((match) => {
      const teamMatch =
        selectedTeam === "Tüm Takımlar" ||
        match.home === selectedTeam ||
        match.away === selectedTeam;

      const weekMatch =
        selectedWeek === "Tüm Haftalar" ||
        `Week ${match.week}` === selectedWeek;

      return teamMatch && weekMatch;
    });
  }, [rows, selectedTeam, selectedWeek]);

  const getStatusLabel = (match: Fixture) => {
    if (match.status === "played") return "Oynandı";
    if (match.status === "rescheduled") return "Yeni Tarih";
    return "Yakında";
  };

  const getStatusClass = (match: Fixture) => {
    if (match.status === "played") return "status-played";
    if (match.status === "rescheduled") return "status-rescheduled";
    return "status-scheduled";
  };

  const getScoreText = (match: Fixture) => {
    if (match.homeScore !== null && match.awayScore !== null) {
      return `${match.homeScore} - ${match.awayScore}`;
    }
    return "Yakında";
  };

  return (
    <section className="card shine-card p-5 md:p-7">
      <div className="mb-7 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="section-kicker">FIXTURES</p>
          <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">
            Takıma veya haftaya göre filtrele, oynanan maçları ve yeni planlanan
            karşılaşmaları tek akışta takip et.
          </p>
        </div>

        <div className="grid gap-3 md:min-w-[360px] md:grid-cols-2">
          <select
            value={selectedTeam}
            onChange={(e) => setSelectedTeam(e.target.value)}
            className="fixture-filter-select"
          >
            {teams.map((team) => (
              <option
                key={team}
                value={team}
                className="bg-[var(--bg-soft)] text-white"
              >
                {team}
              </option>
            ))}
          </select>

          <select
            value={selectedWeek}
            onChange={(e) => setSelectedWeek(e.target.value)}
            className="fixture-filter-select"
          >
            {weeks.map((week) => (
              <option
                key={week}
                value={week}
                className="bg-[var(--bg-soft)] text-white"
              >
                {week}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-4">
        {filteredRows.length > 0 ? (
          filteredRows.map((match, index) => (
            <article
              key={`${match.home}-${match.away}-${index}`}
              className="fixture-card-premium shine-card"
            >
              <div className="fixture-card-topline">
                <span className="fixture-week">Week {match.week}</span>
                <span
                  className={`fixture-status-badge ${getStatusClass(match)}`}
                >
                  {getStatusLabel(match)}
                </span>
              </div>

              <div className="fixture-main-row">
                <div className="fixture-team fixture-team-left">
                  {match.home}
                </div>

                <div className="fixture-score-box-premium">
                  {getScoreText(match)}
                </div>

                <div className="fixture-team fixture-team-right">
                  {match.away}
                </div>
              </div>

              {match.note ? (
                <div className="fixture-note">
                  Yeni planlanan tarih: {match.note}
                </div>
              ) : null}
            </article>
          ))
        ) : (
          <div className="fixture-empty-state">
            Bu filtrelere uygun maç bulunamadı.
          </div>
        )}
      </div>
    </section>
  );
}