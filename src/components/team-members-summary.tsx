"use client";
import { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import { generateClient } from "aws-amplify/api";
import type { Schema } from "../../amplify/data/resource";

const client = generateClient<Schema>();

export default function TeamMembersSummary() {
  const [teamCount, setTeamCount] = useState<number>(0);
  const [membersCount, setMembersCount] = useState<number>(0);

  useEffect(() => {
    const todoSubs = client.models.Team.observeQuery({
      authMode: "userPool",
    }).subscribe({
      next: ({ items, isSynced }) => {
        console.log({ items, isSynced });
        setTeamCount(items.length);
      },
      error: (err) => {
        console.error({ err });
      },
    });

    const memberSubs = client.models.Member.observeQuery({
      authMode: "userPool",
    }).subscribe({
      next: ({ items, isSynced }) => {
        console.log({ items, isSynced });
        setMembersCount(items.length);
      },
      error: (err) => {
        console.error({ err });
      },
    });

    return () => {
      todoSubs.unsubscribe();
      memberSubs.unsubscribe();
    };
  }, []);
  return (
    <div className="team-members-summary">
      <Card>
        <div className="flex justify-between">
          <span className="font-bold">Team Count</span>
          <span>{teamCount}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold">Members Count</span>
          <span>{membersCount}</span>
        </div>
      </Card>
    </div>
  );
}
