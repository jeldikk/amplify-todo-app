import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Relations with Amplify",
  description: "hands on trials with relations in amplify",
};

export default function RelationsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="relations-layout">{children}</div>;
}
