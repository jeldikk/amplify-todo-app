import MemberCreationForm from "@/components/member-creation-form";
import MembersList from "@/components/members-list";
import TeamCreationForm from "@/components/team-creation-form";
import TeamGroupList from "@/components/team-group-list";
import { Member } from "@/models/member";
import { TeamGroup } from "@/models/team";
import { getAllMembers } from "@/operations/member";
import { getAllTeams, getAllTeamsWithMembers } from "@/operations/team";
import { isAuthenticated } from "@/utils/amplify.utils";
import { redirect } from "next/navigation";

export default async function RelationsPage() {
  const isAuthetic = await isAuthenticated();
  if (!isAuthetic) {
    redirect("/login");
  } else {
    const teamsWithMembers = await getAllTeamsWithMembers();
    const teams = await getAllTeams();
    const members = await getAllMembers();
    console.log({ teams });
    return (
      <div className="relations">
        <div className="container mx-auto flex gap-4">
          <div className="w-1/3">
            <TeamCreationForm />
            <MemberCreationForm />
          </div>
          <div className="w-1/3">
            <TeamGroupList teams={teamsWithMembers as TeamGroup[]} />
          </div>
          <div className="w-1/3">
            <MembersList members={members as Member[]} />
          </div>
        </div>
      </div>
    );
  }
}
