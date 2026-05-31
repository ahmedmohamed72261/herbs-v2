"use client";

import { motion } from "framer-motion";
import { Container, Section, Heading, Text } from "@/src/shared/ui";
import { fadeUp } from "@/src/shared/animations/fade-up";
import { staggerContainer, staggerItem } from "@/src/shared/animations/stagger";
import { useLanguage } from "@/src/shared/providers/language-provider";
import industriesData from "@/src/data/industries.json";
import { FlaskConical, Pill, Wind, Utensils, Sparkles, Dog } from "lucide-react";

const industryIcons: Record<string, typeof Pill> = {
  pharmaceuticals: Pill,
  nutraceuticals: FlaskConical,
  aromatherapy: Wind,
  "food-beverage": Utensils,
  cosmetics: Sparkles,
  veterinary: Dog,
};

export default function IndustriesPage() {
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
          <Heading variant="h1" align="center">{t("industries.title")}</Heading>
          <Text variant="body-lg" className="mt-4" style={{ color: "var(--color-text-secondary)" }}>
            {t("industries.subtitle")}
          </Text>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {industriesData.map((ind) => {
            const Icon = industryIcons[ind.slug] || Pill;
            return (
              <motion.div
                key={ind.id}
                variants={staggerItem}
                className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-8 shadow-premium transition-all duration-300 hover:shadow-premium-lg hover:-translate-y-1"
              >
                <div className="mb-5 inline-flex rounded-xl bg-[var(--color-primary)]/[0.08] p-3.5">
                  <Icon className="h-5 w-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-serif text-lg font-medium" style={{ color: "var(--color-text-primary)" }}>
                  {ind.name}
                </h3>
                <Text variant="body-sm" className="mt-3 leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  {ind.description}
                </Text>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {ind.applications.map((app: string) => (
                    <span
                      key={app}
                      className="rounded-md border border-[var(--color-border)] px-2 py-0.5 text-[10px] font-medium"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
