import { TeamGroup } from "@/models/team";
import TeamGroupItem from "./team-group-item";

type Props = {
  teams: TeamGroup[];
};

export default function TeamGroupList(props: Props) {
  const { teams } = props;
  return (
    <div className="team-group-list">
      {teams.map((team) => (
        <TeamGroupItem key={team.id} team={team} />
      ))}
    </div>
  );
}
