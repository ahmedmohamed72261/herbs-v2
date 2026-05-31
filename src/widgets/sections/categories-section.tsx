"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section, Heading, Text } from "@/src/shared/ui";
import { fadeUp } from "@/src/shared/animations/fade-up";
import { staggerContainer, staggerItem } from "@/src/shared/animations/stagger";
import { useLanguage } from "@/src/shared/providers/language-provider";
import categoriesData from "@/src/data/categories.json";

function CategoryCard({ cat }: { cat: (typeof categoriesData)[number] }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div variants={staggerItem}>
      <Link
        href="/categories"
        className="group relative block overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] shadow-premium transition-all duration-300 hover:shadow-premium-lg hover:-translate-y-1 h-full"
      >
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-serif text-lg font-medium text-white drop-shadow-sm">
            {cat.name}
          </h3>
          <div className="mt-1 flex items-center gap-1 text-xs font-medium text-white/80">
            <span>{cat.productCount} products</span>
            <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function CategoriesSection() {
  const { t } = useLanguage();
  const categories = categoriesData.slice(0, 4);

  return (
    <Section spacing="lg">
      <Container size="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <Heading variant="h2" align="center">
            {t("home.categoriesTitle")}
          </Heading>
          <Text variant="body-lg" className="mt-4" style={{ color: "var(--color-text-secondary)" }}>
            {t("home.categoriesSubtitle")}
          </Text>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((cat) => (
            <CategoryCard key={cat.id} cat={cat} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
