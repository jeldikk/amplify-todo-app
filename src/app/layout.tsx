// import { Amplify } from "aws-amplify";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import config from "@/../amplify_outputs.json";
import "./globals.css";
import AmplifyAuthenticator from "@/context/todo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo List",
  description: "List of Todo Items",
};

// Amplify.configure(config, { ssr: true });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AmplifyAuthenticator>{children}</AmplifyAuthenticator>
      </body>
    </html>
  );
}
