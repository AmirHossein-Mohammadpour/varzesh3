"use client";

import { FixturesData } from "@/_lib/types";
import { useEffect, useState } from "react";

const LeagueFixtures = ({ leagues }: { leagues: FixturesData }) => {
  const [league, setLeague] = useState(leagues.leagues[0].name);
  const [week, setWeek] = useState(1);
  useEffect(() => {
    if (
      (league === "بوندسلیگا آلمان" || league === "لیگ ۱ فرانسه") &&
      week > 34
    ) {
      setWeek(34);
    }
  }, [league]);
  return (
    <div className={`flex flex-col`}>
      <div className={`flex`}>
        <select
          name=""
          id=""
          value={league}
          onChange={(e) => setLeague(e.currentTarget.value)}
          className={`mx-2 p-1.5 text-sm font-bold rounded self-stretch border border-white/50 light:border-black/50 bg-black light:bg-white flex-1 `}
        >
          {leagues.leagues.map((item) => (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        <select
          name=""
          id=""
          value={week}
          onChange={(e) => setWeek(Number(e.currentTarget.value))}
          className={`mx-2 p-1.5 text-sm font-bold rounded self-stretch border border-white/50 light:border-black/50 bg-black light:bg-white flex-1`}
        >
          {leagues.leagues
            .find((item) => item.name === league)
            ?.weeks.map((week) => (
              <option key={week.week} value={week.week}>
                {`هفته ${week.week}`}
              </option>
            ))}
        </select>
      </div>
      <p
        className={`p-2 mt-2 bg-amber-600 light:bg-amber-400 text-white text-center`}
      >
        {league}
      </p>
      <ul>
        {leagues.leagues
          .find((item) => item.name === league)
          ?.weeks.find((item) => item.week === week)
          ?.fixtures.map((game) => (
            <li
              key={game.id}
              className={`flex py-2 font-normal odd:bg-neutral-700 light:odd:bg-neutral-200`}
            >
              <span className={`flex-1 text-end`}>{game.homeTeam}</span>
              <span className={`flex-1 text-center`}>-</span>
              <span className={`flex-1 text-start`}>{game.awayTeam}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LeagueFixtures;
