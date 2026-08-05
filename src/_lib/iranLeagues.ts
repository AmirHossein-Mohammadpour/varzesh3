// iran-football-leagues.ts

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
}

// Persian Gulf Pro League (Iran Premier League) - 2024-25 Season Data
export const persianGulfProLeague: League = {
  name: "لیگ برتر خلیج فارس",
  country: "ایران",
  teams: [
    { name: "پرسپولیس", wins: 12, draws: 5, defeats: 3, goalsScored: 35, goalsConceded: 18 },
    { name: "استقلال", wins: 11, draws: 6, defeats: 3, goalsScored: 32, goalsConceded: 16 },
    { name: "سپاهان", wins: 10, draws: 7, defeats: 3, goalsScored: 30, goalsConceded: 17 },
    { name: "تراکتور", wins: 9, draws: 8, defeats: 3, goalsScored: 28, goalsConceded: 19 },
    { name: "ملوان", wins: 8, draws: 7, defeats: 5, goalsScored: 24, goalsConceded: 20 },
    { name: "ذوب آهن", wins: 7, draws: 8, defeats: 5, goalsScored: 22, goalsConceded: 21 },
    { name: "گل گهر", wins: 7, draws: 7, defeats: 6, goalsScored: 25, goalsConceded: 23 },
    { name: "مس رفسنجان", wins: 6, draws: 8, defeats: 6, goalsScored: 23, goalsConceded: 24 },
    { name: "فولاد", wins: 6, draws: 7, defeats: 7, goalsScored: 20, goalsConceded: 22 },
    { name: "آلومینیوم", wins: 5, draws: 9, defeats: 6, goalsScored: 19, goalsConceded: 20 },
    { name: "پیکان", wins: 5, draws: 8, defeats: 7, goalsScored: 18, goalsConceded: 23 },
    { name: "نفت مسجدسلیمان", wins: 4, draws: 9, defeats: 7, goalsScored: 17, goalsConceded: 22 },
    { name: "هوادار", wins: 4, draws: 8, defeats: 8, goalsScored: 16, goalsConceded: 24 },
    { name: "صنعت نفت", wins: 3, draws: 9, defeats: 8, goalsScored: 15, goalsConceded: 25 },
    { name: "شمس آذر", wins: 3, draws: 7, defeats: 10, goalsScored: 14, goalsConceded: 28 },
    { name: "نساجی", wins: 2, draws: 7, defeats: 11, goalsScored: 12, goalsConceded: 30 }
  ]
};

// Azadegan League (Iran Division 1) - 2024-25 Season Data
export const azadeganLeague: League = {
  name: "لیگ آزادگان",
  country: "ایران",
  teams: [
    { name: "فجر سپاسی", wins: 10, draws: 6, defeats: 4, goalsScored: 28, goalsConceded: 16 },
    { name: "خلیج فارس ماهشهر", wins: 9, draws: 7, defeats: 4, goalsScored: 26, goalsConceded: 17 },
    { name: "چادرملو", wins: 9, draws: 6, defeats: 5, goalsScored: 24, goalsConceded: 18 },
    { name: "مس سونگون", wins: 8, draws: 8, defeats: 4, goalsScored: 23, goalsConceded: 16 },
    { name: "سایپا", wins: 8, draws: 7, defeats: 5, goalsScored: 22, goalsConceded: 18 },
    { name: "آریو اسلامشهر", wins: 7, draws: 8, defeats: 5, goalsScored: 21, goalsConceded: 19 },
    { name: "استقلال خوزستان", wins: 7, draws: 7, defeats: 6, goalsScored: 20, goalsConceded: 20 },
    { name: "شاهین بندر عامری", wins: 6, draws: 9, defeats: 5, goalsScored: 19, goalsConceded: 18 },
    { name: "نیروی زمینی", wins: 6, draws: 8, defeats: 6, goalsScored: 18, goalsConceded: 19 },
    { name: "مس کرمان", wins: 5, draws: 9, defeats: 6, goalsScored: 17, goalsConceded: 19 },
    { name: "شهرداری آستارا", wins: 5, draws: 8, defeats: 7, goalsScored: 16, goalsConceded: 21 },
    { name: "پارس جنوبی", wins: 4, draws: 9, defeats: 7, goalsScored: 15, goalsConceded: 20 },
    { name: "سپیدرود", wins: 4, draws: 8, defeats: 8, goalsScored: 14, goalsConceded: 22 },
    { name: "نوژن", wins: 3, draws: 9, defeats: 8, goalsScored: 13, goalsConceded: 23 },
    { name: "مس شهر بابک", wins: 3, draws: 8, defeats: 9, goalsScored: 12, goalsConceded: 24 },
    { name: "شهر راز", wins: 2, draws: 7, defeats: 11, goalsScored: 10, goalsConceded: 28 }
  ]
};

// Iran Division 2 (League 2) - 2024-25 Season Data
export const iranDivision2: League = {
  name: "لیگ دسته دوم",
  country: "ایران",
  teams: [
    { name: "کاسپین قزوین", wins: 8, draws: 5, defeats: 3, goalsScored: 22, goalsConceded: 14 },
    { name: "بعثت کرمانشاه", wins: 7, draws: 6, defeats: 3, goalsScored: 20, goalsConceded: 13 },
    { name: "نفت امیدیه", wins: 7, draws: 5, defeats: 4, goalsScored: 19, goalsConceded: 15 },
    { name: "فولاد نوین", wins: 6, draws: 7, defeats: 3, goalsScored: 18, goalsConceded: 14 },
    { name: "پاس همدان", wins: 6, draws: 6, defeats: 4, goalsScored: 17, goalsConceded: 15 },
    { name: "ابومسلم", wins: 5, draws: 8, defeats: 3, goalsScored: 16, goalsConceded: 13 },
    { name: "شهرداری بم", wins: 5, draws: 7, defeats: 4, goalsScored: 15, goalsConceded: 14 },
    { name: "مقاومت تهران", wins: 5, draws: 6, defeats: 5, goalsScored: 14, goalsConceded: 15 },
    { name: "آسیای جنوبی", wins: 4, draws: 8, defeats: 4, goalsScored: 13, goalsConceded: 13 },
    { name: "راه آهن", wins: 4, draws: 7, defeats: 5, goalsScored: 12, goalsConceded: 14 },
    { name: "برق شیراز", wins: 3, draws: 8, defeats: 5, goalsScored: 11, goalsConceded: 15 },
    { name: "نیروی هوایی", wins: 3, draws: 7, defeats: 6, goalsScored: 10, goalsConceded: 16 },
    { name: "شهرداری ماهشهر", wins: 2, draws: 7, defeats: 7, goalsScored: 9, goalsConceded: 18 },
    { name: "گسترش فولاد", wins: 1, draws: 5, defeats: 10, goalsScored: 6, goalsConceded: 24 }
  ]
};

// All leagues combined
export const iranLeagues: League[] = [
  persianGulfProLeague,
  azadeganLeague,
  iranDivision2
];

export default iranLeagues;