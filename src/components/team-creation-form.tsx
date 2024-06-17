import { Card, Label, TextInput, Button } from "flowbite-react";
import { createTeamAction } from "@/actions/team.actions";

export default function TeamCreationForm() {
  return (
    <div className="team-creation-form">
      <Card>
        <h1 className="text-xl text-center font-bold">Create Team</h1>
        <form action={createTeamAction}>
          <div className="my-2">
            <div className="mb-2 block">
              <Label htmlFor="mantra" value="Team Name" />
            </div>
            <TextInput
              id="mantra"
              type="text"
              name="mantra"
              placeholder="Name your team"
              required
            />
          </div>
          <Button type="submit">Create Team</Button>
        </form>
      </Card>
    </div>
  );
}
