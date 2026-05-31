"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { Container, Section, Heading, Text, Badge } from "@/src/shared/ui";
import { Button } from "@/src/shared/ui/button";
import { useLanguage } from "@/src/shared/providers/language-provider";
import type { Product } from "@/src/entities/product/types";

interface Props {
  product: Product;
}

export function ProductDetailClient({ product }: Props) {
  const { t, lang } = useLanguage();
  const [imgError, setImgError] = useState(false);

  const specs = [
    { label: "Moisture", value: product.specifications.moisture },
    { label: "Purity", value: product.specifications.purity },
    { label: "Ash Content", value: product.specifications.ashContent },
    { label: "Essential Oil", value: product.specifications.essentialOil },
    { label: "Packaging", value: product.specifications.packaging },
    { label: "Shelf Life", value: product.specifications.shelfLife },
  ];

  return (
    <Section spacing="lg" className="pt-32">
      <Container size="lg">
        <Link
          href="/products"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
        >
          <ArrowLeft className={`h-4 w-4 ${lang === "ar" ? "rotate-180" : ""}`} />
          {t("products.backToProducts")}
        </Link>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: lang === "ar" ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-80 lg:h-96 rounded-3xl bg-gradient-to-br from-[var(--color-primary)]/[0.08] to-[var(--color-accent)]/[0.08] flex items-center justify-center overflow-hidden">
              {product.image && !imgError ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={() => setImgError(true)}
                />
              ) : (
                <span className="text-8xl">🌿</span>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Badge variant="primary" className="mb-3 text-xs">
              {product.category}
            </Badge>

            <Heading variant="h1">{product.name}</Heading>

            <p className="mt-3 text-sm font-medium text-[var(--color-primary)]">
              {product.price}
            </p>

            <Text variant="body-lg" className="mt-6 leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              {product.description}
            </Text>

            <div className="mt-8 space-y-3">
              <h3 className="font-serif text-base font-medium" style={{ color: "var(--color-text-primary)" }}>
                {t("products.specifications")}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-4 py-3"
                  >
                    <div className="text-[10px] font-medium uppercase tracking-wider" style={{ color: "var(--color-text-muted)" }}>
                      {spec.label}
                    </div>
                    <div className="mt-0.5 text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  <ShoppingBag className="h-4 w-4" />
                  {t("products.inquire")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
