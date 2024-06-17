import { Member } from "./member";

export interface Team {
  id: string;
  name: string;
}

export type TeamWithTimestamps = Team & {
  createdAt: string;
  updatedAt: string;
};

export interface TeamGroup {
  id: string;
  mantra: string;
  members: Member[];
}
