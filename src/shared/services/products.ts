import type { Product } from "@/src/entities/product/types";
import productsData from "@/src/data/products.json";

export async function getProducts(): Promise<Product[]> {
  return productsData as Product[];
}
