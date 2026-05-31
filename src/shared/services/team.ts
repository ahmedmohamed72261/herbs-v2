import type { TeamMember } from "@/src/entities/team-member/types";
import teamData from "@/src/data/team.json";

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  await delay(100);
  return (teamData as TeamMember[]).sort((a, b) => a.order - b.order);
}
