import { Member } from "@/models/member";
import MemberItem from "./member-item";

type Props = {
  members: Member[];
};

export default function MembersList(props: Props) {
  const { members } = props;
  return (
    <div className="members-list">
      {members.map((mem) => (
        <MemberItem key={mem.id} member={mem} />
      ))}
    </div>
  );
}
