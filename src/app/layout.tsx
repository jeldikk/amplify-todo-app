import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AmplifyAuthenticator from "@/context/todo";
import Navigation from "@/components/navigation";

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
        <AmplifyAuthenticator>
          <Navigation />
          {children}
        </AmplifyAuthenticator>
      </body>
    </html>
  );
}
