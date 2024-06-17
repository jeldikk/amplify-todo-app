import { serverClientWithCookies } from "@/utils/amplify.utils";

export async function getAllMembers() {
  try {
    const { data: members } = await serverClientWithCookies.models.Member.list({
      authMode: "userPool",
    });

    return members;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
