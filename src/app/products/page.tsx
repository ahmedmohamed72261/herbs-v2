"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Section, Heading, Text } from "@/src/shared/ui";
import { ProductGrid } from "@/src/widgets/product-grid";
import { useLanguage } from "@/src/shared/providers/language-provider";
import productsData from "@/src/data/products.json";
import type { Product } from "@/src/entities/product/types";

const products = productsData as Product[];

const categories = ["All", "Flowers", "Leaves", "Seeds", "Roots"];

export default function ProductsPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? products
        : products.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <Section spacing="lg" className="pt-32">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Heading variant="h1" align="center">
            {t("products.title")}
          </Heading>
          <Text variant="body-lg" className="mt-4" style={{ color: "var(--color-text-secondary)" }}>
            {t("products.subtitle")}
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-wrap justify-center gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "gradient-primary text-white shadow-md"
                  : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] bg-[var(--color-surface-elevated)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mt-8"
          >
            <ProductGrid products={filtered} />
          </motion.div>
        </AnimatePresence>
      </Container>
    </Section>
  );
}
