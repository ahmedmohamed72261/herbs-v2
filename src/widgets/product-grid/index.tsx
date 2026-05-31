"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, Badge } from "@/src/shared/ui";
import { staggerContainer, staggerItem } from "@/src/shared/animations/stagger";
import { useLanguage } from "@/src/shared/providers/language-provider";
import { useState } from "react";
import type { Product } from "@/src/entities/product/types";

function ProductCard({ product }: { product: Product }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div variants={staggerItem}>
      <Link href={`/products/${product.id}`} className="group block">
        <Card variant="elevated" className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)]">
          <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[var(--color-primary)]/[0.06] to-[var(--color-accent)]/[0.06]">
            {product.image && !imgError ? (
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <span className="text-5xl transition-transform duration-500 group-hover:scale-110">🌿</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/[0.02] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute top-3 left-3">
              <Badge variant="outline" className="bg-[var(--color-surface-elevated)]/90 backdrop-blur-sm text-xs">
                {product.category}
              </Badge>
            </div>
          </div>
          <div className="p-5">
            <h3
              className="font-serif text-base font-medium transition-colors duration-200 line-clamp-2"
              style={{ color: "var(--color-text-primary)" }}
            >
              {product.name}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm" style={{ color: "var(--color-text-secondary)" }}>
              {product.description}
            </p>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}

interface ProductGridProps {
  products: Product[];
  showViewAll?: boolean;
}

export function ProductGrid({ products, showViewAll = false }: ProductGridProps) {
  const { t, lang } = useLanguage();

  return (
    <div className="space-y-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>

      {showViewAll && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-colors"
          >
            {t("home.viewAllProducts")}
            <ArrowRight className={`h-4 w-4 ${lang === "ar" ? "rotate-180" : ""}`} />
          </Link>
        </motion.div>
      )}
    </div>
  );
}
