"use client";
import { Authenticator } from "@aws-amplify/ui-react";
import { Button } from "flowbite-react";
import "@aws-amplify/ui-react/styles.css";
export default function LoginPage() {
  return (
    <div className="login-page">
      <Authenticator>
        {({ user, signOut }) => {
          console.log({ user });
          return (
            <div className="anon">
              <Button onClick={signOut}>Sign Out</Button>
            </div>
          );
        }}
      </Authenticator>
    </div>
  );
}
