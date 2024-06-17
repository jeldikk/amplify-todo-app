export interface Member {
  teamId: string;
  id: string;
  name: string;
}

export type MemberWithTimestamps = Member & {
  createdAt: string;
  updatedAt: string;
};
