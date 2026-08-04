// leagues-data.ts
import type { TeamStats, League } from "./types";

// لیگ برتر انگلستان (Premier League) - 2023/24 Season
export const premierLeague: League = {
  name: "پریمیر لیگ",
  country: "انگلستان",
  teams: [
    { name: "منچسترسیتی", wins: 28, draws: 7, defeats: 3, goalsScored: 96, goalsConceded: 34 },
    { name: "آرسنال", wins: 28, draws: 5, defeats: 5, goalsScored: 91, goalsConceded: 29 },
    { name: "لیورپول", wins: 24, draws: 10, defeats: 4, goalsScored: 86, goalsConceded: 41 },
    { name: "استون ویلا", wins: 20, draws: 8, defeats: 10, goalsScored: 76, goalsConceded: 61 },
    { name: "تاتنهام", wins: 20, draws: 6, defeats: 12, goalsScored: 74, goalsConceded: 61 },
    { name: "چلسی", wins: 18, draws: 9, defeats: 11, goalsScored: 77, goalsConceded: 63 },
    { name: "نیوکاسل", wins: 18, draws: 6, defeats: 14, goalsScored: 85, goalsConceded: 62 },
    { name: "منچستریونایتد", wins: 18, draws: 6, defeats: 14, goalsScored: 57, goalsConceded: 58 },
    { name: "وستهم", wins: 14, draws: 10, defeats: 14, goalsScored: 60, goalsConceded: 74 },
    { name: "کریستال پالاس", wins: 13, draws: 10, defeats: 15, goalsScored: 57, goalsConceded: 58 },
    { name: "برایتون", wins: 12, draws: 12, defeats: 14, goalsScored: 55, goalsConceded: 62 },
    { name: "بورنموث", wins: 13, draws: 9, defeats: 16, goalsScored: 54, goalsConceded: 67 },
    { name: "فولام", wins: 13, draws: 8, defeats: 17, goalsScored: 55, goalsConceded: 61 },
    { name: "ولورهمپتون", wins: 13, draws: 7, defeats: 18, goalsScored: 50, goalsConceded: 65 },
    { name: "اورتون", wins: 13, draws: 9, defeats: 16, goalsScored: 40, goalsConceded: 51 },
    { name: "برنتفورد", wins: 10, draws: 9, defeats: 19, goalsScored: 56, goalsConceded: 65 },
    { name: "ناتینگهام فارست", wins: 9, draws: 9, defeats: 20, goalsScored: 49, goalsConceded: 67 },
    { name: "لوتون تاون", wins: 6, draws: 8, defeats: 24, goalsScored: 52, goalsConceded: 85 },
    { name: "برنلی", wins: 5, draws: 9, defeats: 24, goalsScored: 41, goalsConceded: 78 },
    { name: "شفیلد یونایتد", wins: 3, draws: 7, defeats: 28, goalsScored: 35, goalsConceded: 104 }
  ]
};

// لا لیگا (اسپانیا) - 2023/24 Season
export const laLiga: League = {
  name: "لالیگا",
  country: "اسپانیا",
  teams: [
    { name: "رئال مادرید", wins: 29, draws: 8, defeats: 1, goalsScored: 87, goalsConceded: 26 },
    { name: "بارسلونا", wins: 26, draws: 7, defeats: 5, goalsScored: 79, goalsConceded: 44 },
    { name: "ژیرونا", wins: 25, draws: 6, defeats: 7, goalsScored: 85, goalsConceded: 46 },
    { name: "اتلتیکو مادرید", wins: 24, draws: 4, defeats: 10, goalsScored: 70, goalsConceded: 43 },
    { name: "اتلتیک بیلبائو", wins: 19, draws: 11, defeats: 8, goalsScored: 61, goalsConceded: 37 },
    { name: "رئال سوسیداد", wins: 16, draws: 12, defeats: 10, goalsScored: 51, goalsConceded: 39 },
    { name: "رئال بتیس", wins: 14, draws: 15, defeats: 9, goalsScored: 48, goalsConceded: 45 },
    { name: "ویارئال", wins: 14, draws: 11, defeats: 13, goalsScored: 65, goalsConceded: 65 },
    { name: "والنسیا", wins: 13, draws: 10, defeats: 15, goalsScored: 40, goalsConceded: 45 },
    { name: "آلاوس", wins: 12, draws: 10, defeats: 16, goalsScored: 36, goalsConceded: 46 },
    { name: "اوساسونا", wins: 12, draws: 9, defeats: 17, goalsScored: 45, goalsConceded: 56 },
    { name: "ختافه", wins: 10, draws: 13, defeats: 15, goalsScored: 42, goalsConceded: 54 },
    { name: "سلتاویگو", wins: 10, draws: 11, defeats: 17, goalsScored: 46, goalsConceded: 57 },
    { name: "سویا", wins: 10, draws: 11, defeats: 17, goalsScored: 48, goalsConceded: 54 },
    { name: "مایورکا", wins: 8, draws: 16, defeats: 14, goalsScored: 33, goalsConceded: 44 },
    { name: "لاس پالماس", wins: 10, draws: 10, defeats: 18, goalsScored: 33, goalsConceded: 47 },
    { name: "رایو وایکانو", wins: 8, draws: 14, defeats: 16, goalsScored: 29, goalsConceded: 48 },
    { name: "کادیس", wins: 6, draws: 15, defeats: 17, goalsScored: 26, goalsConceded: 55 },
    { name: "آلمریا", wins: 3, draws: 12, defeats: 23, goalsScored: 43, goalsConceded: 75 },
    { name: "گرانادا", wins: 4, draws: 9, defeats: 25, goalsScored: 38, goalsConceded: 79 }
  ]
};

// بوندسلیگا (آلمان) - 2023/24 Season
export const bundesliga: League = {
  name: "بوندسلیگا",
  country: "آلمان",
  teams: [
    { name: "بایر لورکوزن", wins: 28, draws: 6, defeats: 0, goalsScored: 89, goalsConceded: 24 },
    { name: "اشتوتگارت", wins: 23, draws: 4, defeats: 7, goalsScored: 78, goalsConceded: 39 },
    { name: "بایرن مونیخ", wins: 23, draws: 3, defeats: 8, goalsScored: 94, goalsConceded: 45 },
    { name: "آر‌بی لایپزیگ", wins: 19, draws: 8, defeats: 7, goalsScored: 77, goalsConceded: 39 },
    { name: "بوروسیا دورتموند", wins: 18, draws: 9, defeats: 7, goalsScored: 68, goalsConceded: 43 },
    { name: "آینتراخت فرانکفورت", wins: 11, draws: 14, defeats: 9, goalsScored: 51, goalsConceded: 50 },
    { name: "هوفنهایم", wins: 13, draws: 7, defeats: 14, goalsScored: 66, goalsConceded: 66 },
    { name: "هایدنهایم", wins: 10, draws: 12, defeats: 12, goalsScored: 50, goalsConceded: 55 },
    { name: "وردربرمن", wins: 11, draws: 9, defeats: 14, goalsScored: 48, goalsConceded: 54 },
    { name: "فرایبورگ", wins: 11, draws: 9, defeats: 14, goalsScored: 45, goalsConceded: 58 },
    { name: "آگسبورگ", wins: 10, draws: 9, defeats: 15, goalsScored: 50, goalsConceded: 60 },
    { name: "وولفسبورگ", wins: 10, draws: 7, defeats: 17, goalsScored: 41, goalsConceded: 56 },
    { name: "ماینتس", wins: 7, draws: 14, defeats: 13, goalsScored: 39, goalsConceded: 51 },
    { name: "بوروسیا مونشن گلادباخ", wins: 7, draws: 13, defeats: 14, goalsScored: 56, goalsConceded: 67 },
    { name: "یونیون برلین", wins: 9, draws: 6, defeats: 19, goalsScored: 33, goalsConceded: 58 },
    { name: "بخوم", wins: 7, draws: 12, defeats: 15, goalsScored: 42, goalsConceded: 74 },
    { name: "کلن", wins: 5, draws: 12, defeats: 17, goalsScored: 28, goalsConceded: 60 },
    { name: "دارمشتات", wins: 3, draws: 8, defeats: 23, goalsScored: 30, goalsConceded: 86 }
  ]
};

// سری آ (ایتالیا) - 2023/24 Season
export const serieA: League = {
  name: "سری آ",
  country: "ایتالیا",
  teams: [
    { name: "اینتر میلان", wins: 29, draws: 7, defeats: 2, goalsScored: 89, goalsConceded: 22 },
    { name: "آث میلان", wins: 22, draws: 9, defeats: 7, goalsScored: 76, goalsConceded: 49 },
    { name: "یوونتوس", wins: 19, draws: 14, defeats: 5, goalsScored: 54, goalsConceded: 31 },
    { name: "آتالانتا", wins: 21, draws: 6, defeats: 11, goalsScored: 72, goalsConceded: 42 },
    { name: "بولونیا", wins: 18, draws: 14, defeats: 6, goalsScored: 54, goalsConceded: 32 },
    { name: "آ اس رم", wins: 18, draws: 9, defeats: 11, goalsScored: 65, goalsConceded: 46 },
    { name: "لاتزیو", wins: 18, draws: 7, defeats: 13, goalsScored: 49, goalsConceded: 39 },
    { name: "فیورنتینا", wins: 17, draws: 9, defeats: 12, goalsScored: 61, goalsConceded: 46 },
    { name: "تورینو", wins: 13, draws: 14, defeats: 11, goalsScored: 36, goalsConceded: 36 },
    { name: "ناپولی", wins: 13, draws: 14, defeats: 11, goalsScored: 55, goalsConceded: 48 },
    { name: "جنوا", wins: 12, draws: 13, defeats: 13, goalsScored: 45, goalsConceded: 45 },
    { name: "مونتزا", wins: 11, draws: 12, defeats: 15, goalsScored: 39, goalsConceded: 51 },
    { name: "هلاس ورونا", wins: 9, draws: 11, defeats: 18, goalsScored: 38, goalsConceded: 51 },
    { name: "لچه", wins: 8, draws: 14, defeats: 16, goalsScored: 32, goalsConceded: 54 },
    { name: "اودینزه", wins: 6, draws: 19, defeats: 13, goalsScored: 37, goalsConceded: 53 },
    { name: "کالیاری", wins: 8, draws: 12, defeats: 18, goalsScored: 42, goalsConceded: 68 },
    { name: "امپولی", wins: 9, draws: 9, defeats: 20, goalsScored: 29, goalsConceded: 54 },
    { name: "فروزینونه", wins: 8, draws: 11, defeats: 19, goalsScored: 44, goalsConceded: 69 },
    { name: "ساسوئولو", wins: 7, draws: 9, defeats: 22, goalsScored: 43, goalsConceded: 74 },
    { name: "سالرنیتانا", wins: 2, draws: 11, defeats: 25, goalsScored: 32, goalsConceded: 81 }
  ]
};

// لیگ ۱ فرانسه - 2023/24 Season
export const ligue1: League = {
  name: "لیگ ۱",
  country: "فرانسه",
  teams: [
    { name: "پاری سن ژرمن", wins: 22, draws: 10, defeats: 2, goalsScored: 81, goalsConceded: 33 },
    { name: "موناکو", wins: 20, draws: 7, defeats: 7, goalsScored: 68, goalsConceded: 42 },
    { name: "برست", wins: 17, draws: 10, defeats: 7, goalsScored: 53, goalsConceded: 34 },
    { name: "لیل", wins: 16, draws: 11, defeats: 7, goalsScored: 52, goalsConceded: 34 },
    { name: "نیس", wins: 15, draws: 10, defeats: 9, goalsScored: 40, goalsConceded: 29 },
    { name: "لیون", wins: 16, draws: 5, defeats: 13, goalsScored: 49, goalsConceded: 55 },
    { name: "لانس", wins: 14, draws: 9, defeats: 11, goalsScored: 45, goalsConceded: 37 },
    { name: "مارسی", wins: 13, draws: 11, defeats: 10, goalsScored: 52, goalsConceded: 41 },
    { name: "ریمز", wins: 13, draws: 8, defeats: 13, goalsScored: 42, goalsConceded: 47 },
    { name: "رن", wins: 12, draws: 10, defeats: 12, goalsScored: 53, goalsConceded: 46 },
    { name: "تولوز", wins: 11, draws: 10, defeats: 13, goalsScored: 42, goalsConceded: 46 },
    { name: "مونپلیه", wins: 10, draws: 12, defeats: 12, goalsScored: 43, goalsConceded: 48 },
    { name: "استراسبورگ", wins: 10, draws: 9, defeats: 15, goalsScored: 38, goalsConceded: 50 },
    { name: "نانت", wins: 9, draws: 6, defeats: 19, goalsScored: 30, goalsConceded: 55 },
    { name: "لو اور", wins: 7, draws: 11, defeats: 16, goalsScored: 34, goalsConceded: 45 },
    { name: "متز", wins: 8, draws: 5, defeats: 21, goalsScored: 35, goalsConceded: 58 },
    { name: "لوریان", wins: 7, draws: 8, defeats: 19, goalsScored: 43, goalsConceded: 66 },
    { name: "کلرمون", wins: 5, draws: 10, defeats: 19, goalsScored: 26, goalsConceded: 60 }
  ]
};

// Combined export for all leagues
export const top5Leagues: League[] = [
  premierLeague,
  laLiga,
  bundesliga,
  serieA,
  ligue1
];

// Function to get a league by name (in Farsi)
export function getLeagueByName(name: string): League | undefined {
  return top5Leagues.find(league => league.name === name);
}

// Function to get a team from a specific league (in Farsi)
export function getTeamFromLeague(leagueName: string, teamName: string): TeamStats | undefined {
  const league = getLeagueByName(leagueName);
  if (!league) return undefined;
  return league.teams.find(team => team.name === teamName);
}

// Function to get all teams from all leagues
export function getAllTeams(): { league: string; team: TeamStats }[] {
  const allTeams: { league: string; team: TeamStats }[] = [];
  top5Leagues.forEach(league => {
    league.teams.forEach(team => {
      allTeams.push({ league: league.name, team });
    });
  });
  return allTeams;
}

export default top5Leagues;