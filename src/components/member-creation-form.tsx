import { Card, TextInput, Label, Button } from "flowbite-react";
import { createMemberAction } from "@/actions/member.actions";

export default function MemberCreationForm() {
  return (
    <div className="member-creation-form my-2">
      <Card>
        <h1 className="text-xl text-center font-bold">Create Member</h1>
        <form action={createMemberAction}>
          <div className="my-2">
            <div>
              <Label htmlFor="name" value="Member Name" />
            </div>
            <TextInput
              id="name"
              name="name"
              type="text"
              required
              placeholder="Enter Member Name"
            />
          </div>
          <div className="my-2">
            <div>
              <Label htmlFor="teamId" value="Team ID" />
            </div>
            <TextInput
              id="teamId"
              name="teamId"
              type="text"
              required
              placeholder="Enter Member Name"
            />
          </div>
          <Button type="submit">Create Member</Button>
        </form>
      </Card>
    </div>
  );
}
