"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container, Section, Heading, Text } from "@/src/shared/ui";
import { fadeUp } from "@/src/shared/animations/fade-up";
import { staggerContainer, staggerItem } from "@/src/shared/animations/stagger";
import { useLanguage } from "@/src/shared/providers/language-provider";
import categoriesData from "@/src/data/categories.json";

function CategoryCard({ cat }: { cat: (typeof categoriesData)[number] }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div variants={staggerItem}>
      <div className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] shadow-premium transition-all duration-300 hover:shadow-premium-lg hover:-translate-y-1 overflow-hidden">
        <div className="relative h-44 overflow-hidden bg-gradient-to-br from-[var(--color-primary)]/[0.06] to-[var(--color-accent)]/[0.06]">
          {cat.image && !imgError ? (
            <img
              src={cat.image}
              alt={cat.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex h-full items-center justify-center text-4xl">🌿</div>
          )}
        </div>
        <div className="p-5">
          <h3 className="font-serif text-lg font-medium" style={{ color: "var(--color-text-primary)" }}>
            {cat.name}
          </h3>
          <Text variant="body-sm" className="mt-2" style={{ color: "var(--color-text-secondary)" }}>
            {cat.description}
          </Text>
          <div className="mt-3 text-xs font-medium text-[var(--color-primary)]">
            {cat.productCount} products
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CategoriesPage() {
  const { t } = useLanguage();

  return (
    <Section spacing="lg" className="pt-32">
      <Container size="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <Heading variant="h1" align="center">{t("categories.title")}</Heading>
          <Text variant="body-lg" className="mt-4" style={{ color: "var(--color-text-secondary)" }}>
            {t("categories.subtitle")}
          </Text>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {categoriesData.map((cat) => (
            <CategoryCard key={cat.id} cat={cat} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
