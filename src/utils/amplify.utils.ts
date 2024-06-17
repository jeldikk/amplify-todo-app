import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import config from "@/../amplify_outputs.json";
import { cookies } from "next/headers";
import { fetchAuthSession } from "aws-amplify/auth/server";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/api";

export const client = generateClient<Schema>();

export const serverClientWithCookies = generateServerClientUsingCookies<Schema>(
  {
    config,
    cookies,
    authMode: "iam",
  }
);

export const { runWithAmplifyServerContext } = createServerRunner({ config });

export async function isAuthenticated() {
  return await runWithAmplifyServerContext({
    nextServerContext: { cookies },
    operation: async function (contextSpecs) {
      try {
        const session = await fetchAuthSession(contextSpecs);
        return (
          session.tokens?.accessToken !== undefined &&
          session.tokens?.idToken !== undefined
        );
      } catch (err) {
        console.error(err);
        return false;
      }
    },
  });
}
