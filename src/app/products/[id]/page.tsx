import { notFound } from "next/navigation";
import { use } from "react";
import productsData from "@/src/data/products.json";
import type { Product } from "@/src/entities/product/types";
import { ProductDetailClient } from "./product-detail-client";

const products = productsData as Product[];

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
