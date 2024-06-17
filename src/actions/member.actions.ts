"use server";
import { redirect } from "next/navigation";
import { serverClientWithCookies } from "@/utils/amplify.utils";

export async function createMemberAction(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const teamId = formData.get("teamId") as string;

    const { data: member } = await serverClientWithCookies.models.Member.create(
      {
        name,
        teamId,
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
