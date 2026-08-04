import type { League } from "@/_lib/types";

const LeagueTable = ({ league, className }: { league: League, className?: string }) => {
  const points = (wins: number, draws: number) => (wins * 3 + draws * 1);
  const ranked = league.teams.sort((team1, team2) => (
    points(team2.wins, team2.draws) - points(team1.wins, team1.draws)
  ));
  return (
    <table className={`${className}`}>
      <caption className={`p-2 bg-amber-600 light:bg-amber-400 text-white`}>{`جدول ${league.name}`}</caption>
      <thead className={`bg-neutral-400 text-white`}>
        <tr className={``}>
          <th className={`py-2 font-normal`}>رتبه</th>
          <th className={`py-2 font-normal`}>تیم</th>
          <th className={`py-2 font-normal`}>بازی</th>
          <th className={`py-2 font-normal`}>امتیاز</th>
        </tr>
      </thead>
      <tbody className={`felx flex-row gap-2`}>
        {ranked.map((team, index) => (
          <tr key={team.name} className={`text-center even:bg-neutral-700 light:even:bg-neutral-200`}>
            <td className={`py-2`}>{index + 1}</td>
            <td className={`py-2`}>{team.name}</td>
            <td className={`py-2`}>{team.wins + team.draws + team.defeats}</td>
            <td className={`py-2`}>{team.wins * 3 + team.draws * 1}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeagueTable;
