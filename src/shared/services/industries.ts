import type { Industry } from "@/src/entities/industry/types";
import industriesData from "@/src/data/industries.json";

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getIndustries(): Promise<Industry[]> {
  await delay(100);
  return industriesData as Industry[];
}

export async function getIndustryBySlug(slug: string): Promise<Industry | undefined> {
  const all = await getIndustries();
  return all.find((ind) => ind.slug === slug);
}
