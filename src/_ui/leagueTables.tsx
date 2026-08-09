"use client";

import { League } from "@/_lib/types";
import { useState } from "react";
import LeagueTable from "./leagueTable";

const LeagueTables = ({ leagues }: { leagues: League[] }) => {
  const [league, setLeague] = useState(leagues[0].name);

  return (
    <div className={`flex flex-col gap-2`}>
      <select
        value={league}
        onChange={(e) => {setLeague(e.target.value)}}
        id="leagueSelection"
        className={`mx-2 p-1.5 text-sm font-bold rounded self-stretch border border-white/50 light:border-black/50 bg-black light:bg-white `}
      >
        {leagues.map((item) => (
          <option value={item.name} key={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      <LeagueTable league={leagues.find((item) => item.name === league) ?? leagues[0]}/>
    </div>
  );
};

export default LeagueTables;
