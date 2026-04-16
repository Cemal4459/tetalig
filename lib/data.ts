import alphaStandingsData from "@/data/alpha-standings.json";
import deltaStandingsData from "@/data/delta-standings.json";
import alphaFixturesData from "@/data/alpha-fixtures.json";
import deltaFixturesData from "@/data/delta-fixtures.json";
import scorersData from "@/data/scorers.json";
import assistsData from "@/data/assists.json";
import alphaTeamsData from "@/data/alpha-teams.json";
import deltaTeamsData from "@/data/delta-teams.json";

export type Standing = {
  rank: number;
  team: string;
  mp: number;
  w: number;
  d: number;
  l: number;
  gf: number;
  ga: number;
  gd: number;
  pts: number;
};

export type Fixture = {
  week: number;
  home: string;
  away: string;
  homeScore: number | null;
  awayScore: number | null;
  status?: "played" | "scheduled" | "rescheduled";
  note?: string;
};

export type PlayerStat = {
  rank: number;
  player: string;
  team: string;
  value: number;
  matches: number;
  ratio: string;
};

export type Team = {
  name: string;
  captain: string;
  played: number;
  points: number;
  logoText: string;
};

export const alphaStandings = alphaStandingsData as Standing[];
export const deltaStandings = deltaStandingsData as Standing[];
export const alphaFixtures = alphaFixturesData as Fixture[];
export const deltaFixtures = deltaFixturesData as Fixture[];
export const scorers = scorersData as PlayerStat[];
export const assists = assistsData as PlayerStat[];
export const alphaTeams = alphaTeamsData as Team[];
export const deltaTeams = deltaTeamsData as Team[];