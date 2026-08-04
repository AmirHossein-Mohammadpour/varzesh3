import type { League } from "@/_lib/types";

const LeagueTable = ({ league }: { league: League }) => {
  const points = (wins: number, draws: number) => (wins * 3 + draws * 1);
  const ranked = league.teams.sort((team1, team2) => (
    points(team2.wins, team2.draws) - points(team1.wins, team1.draws)
  ));
  return (
    <table className={`text-sm`}>
      <caption>{league.name}</caption>
      <thead>
        <tr>
          <th>رتبه</th>
          <th>تیم</th>
          <th>بازی</th>
          <th>امتیاز</th>
        </tr>
      </thead>
      <tbody>
        {ranked.map((team, index) => (
          <tr key={team.name}>
            <td>{index + 1}</td>
            <td>{team.name}</td>
            <td>{team.wins + team.draws + team.defeats}</td>
            <td>{team.wins * 3 + team.draws * 1}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeagueTable;
