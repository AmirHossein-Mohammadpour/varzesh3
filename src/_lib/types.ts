export type NewsType = {
  id: string;
  title: string;
  subTitle: string;
  miniDescription: string;
  description: string[];
  imageURL: string;
  include1stBanner: boolean;
  include2ndBanner: boolean;
  scope: ('inside' | 'outside' | 'video');
  releaseTime: string;
  views: number;
  comments: number;
}[];

export type NewPaperType = {
  name: string;
  imageURL: string;
}[]

export type TeamStats = {
  name: string; // Team name in Farsi
  wins: number;
  draws: number;
  defeats: number;
  goalsScored: number;
  goalsConceded: number;
}

export type League = {
  name: string; // League name in Farsi
  country: string; // Country name in Farsi
  teams: TeamStats[];
};


export type Fixture = {
  id: string;
  homeTeam: string;
  awayTeam: string;
};

export type Week = {
  week: number;
  fixtures: Fixture[];
};

export type LeagueFixtures = {
  name: string;
  country: string;
  season: string;
  teamCount: number;
  weekCount: number;
  weeks: Week[];
};

export type FixturesData = {
  season: string;
  description: string;
  leagues: LeagueFixtures[];
};