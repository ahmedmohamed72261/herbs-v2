"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section, Heading, Text } from "@/src/shared/ui";
import { fadeUp } from "@/src/shared/animations/fade-up";
import { staggerContainer, staggerItem } from "@/src/shared/animations/stagger";
import { useLanguage } from "@/src/shared/providers/language-provider";
import teamData from "@/src/data/team.json";

export function TeamSection() {
  const { t, lang } = useLanguage();
  const members = teamData.slice(0, 4);

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
            {t("home.teamTitle")}
          </Heading>
          <Text variant="body-lg" className="mt-4" style={{ color: "var(--color-text-secondary)" }}>
            {t("home.teamSubtitle")}
          </Text>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {members.map((member) => (
            <motion.div key={member.id} variants={staggerItem} className="group text-center">
              <div className="relative mx-auto mb-5 h-24 w-24 overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/[0.1] to-[var(--color-accent)]/[0.1] ring-2 ring-[var(--color-border)] transition-all duration-300 group-hover:ring-[var(--color-primary)]/30 group-hover:shadow-premium">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="text-4xl">👤</span>
                  </div>
                )}
              </div>
              <h3 className="font-serif text-base font-medium" style={{ color: "var(--color-text-primary)" }}>
                {member.name}
              </h3>
              <Text variant="body-sm" className="mt-1 text-[var(--color-primary)]">
                {member.role}
              </Text>
              <Text variant="body-sm" className="mt-2 line-clamp-2" style={{ color: "var(--color-text-muted)" }}>
                {member.bio}
              </Text>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-colors"
          >
            {t("home.viewAllTeam")}
            <ArrowRight className={`h-4 w-4 ${lang === "ar" ? "rotate-180" : ""}`} />
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
}
