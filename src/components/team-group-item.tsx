import { Member } from "@/models/member";
import { Card } from "flowbite-react";
import { TeamGroup } from "@/models/team";
import MembersList from "./members-list";

type Props = {
  team: TeamGroup;
};

export default function TeamGroupItem(props: Props) {
  const { team } = props;
  return (
    <div className="team-group mb-2 shadow-md">
      <div className="p-4 border rounded-md">
        <h2>{team.mantra}</h2>
        <div className="font-mono text-sm">{team.id}</div>
        <div className="members">
          <MembersList members={team.members} />
        </div>
      </div>
    </div>
  );
}
