import { Member } from "@/models/member";

type Props = {
  member: Member;
};

export default function MemberItem(props: Props) {
  const { member } = props;
  return (
    <div className="member-item border rounded-lg border-blue-500 px-2 py-1 my-1">
      <h3>{member.name}</h3>
    </div>
  );
}
