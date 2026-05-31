"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/src/shared/ui";
import { staggerContainer, staggerItem } from "@/src/shared/animations/stagger";
import { useLanguage } from "@/src/shared/providers/language-provider";
import { Package, Globe, Users, Award } from "lucide-react";

const stats = [
  { icon: Package, key: "statsProducts" },
  { icon: Globe, key: "statsCountries" },
  { icon: Users, key: "statsPartners" },
  { icon: Award, key: "statsExperience" },
];

const statValues = ["500+", "50+", "300+", "30+"];

export function StatsSection() {
  const { t } = useLanguage();

  return (
    <Section background="dark" spacing="md">
      <Container size="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 gap-8 lg:grid-cols-4"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                variants={staggerItem}
                className="relative text-center group"
              >
                <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-2xl bg-white/[0.08] p-4 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/[0.12] group-hover:scale-110">
                  <Icon className="h-6 w-6 text-[var(--color-accent)]" />
                </div>
                <div className="font-serif text-4xl font-light text-white md:text-5xl">
                  {statValues[i]}
                </div>
                <p className="mt-2 text-sm text-white/60">
                  {t(`home.${stat.key}`)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
