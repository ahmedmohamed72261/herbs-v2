import type { Category } from "@/src/entities/category/types";
import categoriesData from "@/src/data/categories.json";

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getCategories(): Promise<Category[]> {
  await delay(100);
  return categoriesData as Category[];
}

export async function getCategoryBySlug(slug: string): Promise<Category | undefined> {
  const all = await getCategories();
  return all.find((c) => c.slug === slug);
}
