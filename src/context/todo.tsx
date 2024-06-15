"use client";

import { Amplify } from "aws-amplify";
import config from "@/../../amplify_outputs.json";
import { Authenticator } from "@aws-amplify/ui-react";

Amplify.configure(config, { ssr: true });

type Props = {
  children: React.ReactNode;
};

export default function Auth(props: Props) {
  const { children } = props;
  return <Authenticator.Provider>{children}</Authenticator.Provider>;
}
