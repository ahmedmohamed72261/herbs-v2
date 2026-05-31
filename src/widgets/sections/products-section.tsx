"use client";

import { motion } from "framer-motion";
import { Container, Section, Heading, Text } from "@/src/shared/ui";
import { ProductGrid } from "@/src/widgets/product-grid";
import { fadeUp } from "@/src/shared/animations/fade-up";
import { useLanguage } from "@/src/shared/providers/language-provider";
import productsData from "@/src/data/products.json";
import type { Product } from "@/src/entities/product/types";

export function ProductsSection() {
  const { t } = useLanguage();
  const featured = (productsData as Product[]).slice(0, 4);

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
            {t("home.productsTitle")}
          </Heading>
          <Text variant="body-lg" className="mt-4" style={{ color: "var(--color-text-secondary)" }}>
            {t("home.productsSubtitle")}
          </Text>
        </motion.div>

        <div className="mt-12">
          <ProductGrid products={featured} showViewAll />
        </div>
      </Container>
    </Section>
  );
}
