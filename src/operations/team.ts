import { serverClientWithCookies } from "@/utils/amplify.utils";

export async function getAllTeamsWithMembers() {
  try {
    const { data: teams } = await serverClientWithCookies.models.Team.list({
      selectionSet: ["id", "mantra", "members.*"],
      authMode: "userPool",
    });

    return teams;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function getAllTeams() {
  try {
    const { data: teams } = await serverClientWithCookies.models.Team.list({
      selectionSet: ["id", "mantra"],
      authMode: "userPool",
    });
    return teams;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
