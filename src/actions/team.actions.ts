"use server";
import { redirect } from "next/navigation";

import { serverClientWithCookies } from "@/utils/amplify.utils";

export async function createTeamAction(formData: FormData) {
  try {
    const mantra = formData.get("mantra") as string;

    const { data: team } = await serverClientWithCookies.models.Team.create(
      {
        mantra,
      },
      {
        authMode: "userPool",
      }
    );
  } catch (err) {
    console.error(err);
    throw err;
  }

  redirect("/relations");
}
