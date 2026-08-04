'use client'

import { League } from "@/_lib/types";
import { useState } from "react";
import LeagueTable from "./leagueTable";

const LeagueTables = ({leagues}: {leagues: League[]}) => {
  const [league, setLeague] = useState(leagues[0].name);

  return (
    <div>
      <select value={league} onChange={e => {setLeague(e.target.value)}} id="leagueSelection" className={`w-9/10 border bg-amber-600`}>
        {leagues.map(item => (
          <option value={item.name} key={item.name}>{item.name}</option>
        ))}
      </select>
      {(<LeagueTable league={leagues.find(item => (item.name === league)) ?? leagues[0]}/>)}
    </div>
  );
}

export default LeagueTables;