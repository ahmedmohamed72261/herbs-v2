"use client";

import { motion } from "framer-motion";
import { Container, Section, Heading, Text } from "@/src/shared/ui";
import { fadeUp } from "@/src/shared/animations/fade-up";
import { staggerContainer, staggerItem } from "@/src/shared/animations/stagger";
import { useLanguage } from "@/src/shared/providers/language-provider";
import { Shield, Globe, Award, Leaf, TrendingUp, Users } from "lucide-react";

const features = [
  { icon: Shield, titleKey: "Quality Assurance", descKey: "Every batch is tested in our GMP-certified laboratories to meet international pharmacopoeia standards including USP, EP, and JP." },
  { icon: Globe, titleKey: "Global Sourcing", descKey: "Direct partnerships with over 300 growers and cooperatives across 50+ countries ensure the finest raw materials year-round." },
  { icon: Award, titleKey: "Certified Excellence", descKey: "USDA Organic, EU Organic, Fair Trade, Non-GMO, ISO 22000, and FSSC 22000 certified across our entire supply chain." },
  { icon: Leaf, titleKey: "Sustainable Sourcing", descKey: "Committed to ethical sourcing, biodiversity preservation, regenerative agriculture, and carbon-neutral operations." },
  { icon: TrendingUp, titleKey: "Supply Reliability", descKey: "Advanced forecasting and strategic inventory management guarantee consistent supply year-round with 98.5% on-time delivery." },
  { icon: Users, titleKey: "Expert Team", descKey: "Phytochemists, botanists, regulatory specialists, and supply chain experts dedicated to your success." },
];

export function FeaturesSection() {
  const { t } = useLanguage();

  return (
    <Section background="cream" spacing="lg">
      <Container size="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <Heading variant="h2" align="center">
            {t("home.featuresTitle")}
          </Heading>
          <Text variant="body-lg" className="mt-4" style={{ color: "var(--color-text-secondary)" }}>
            {t("home.featuresSubtitle")}
          </Text>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                variants={staggerItem}
                className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-8 shadow-premium transition-all duration-300 hover:shadow-premium-lg hover:-translate-y-1"
              >
                <div className="mb-5 inline-flex rounded-xl bg-[var(--color-primary)]/[0.08] p-3.5">
                  <Icon className="h-5 w-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-serif text-lg font-medium" style={{ color: "var(--color-text-primary)" }}>
                  {feature.titleKey}
                </h3>
                <Text variant="body-sm" className="mt-2.5 leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  {feature.descKey}
                </Text>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
