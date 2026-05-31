"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Container, Section, Heading, Text } from "@/src/shared/ui";
import { fadeUp } from "@/src/shared/animations/fade-up";
import { staggerContainer, staggerItem } from "@/src/shared/animations/stagger";
import { useLanguage } from "@/src/shared/providers/language-provider";
import teamData from "@/src/data/team.json";

export default function TeamPage() {
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
          <Heading variant="h1" align="center">{t("team.title")}</Heading>
          <Text variant="body-lg" className="mt-4" style={{ color: "var(--color-text-secondary)" }}>
            {t("team.subtitle")}
          </Text>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {teamData.map((member) => (
            <motion.div
              key={member.id}
              variants={staggerItem}
              className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 shadow-premium transition-all duration-300 hover:shadow-premium-lg hover:-translate-y-1"
            >
              <div className="mx-auto mb-5 h-24 w-24 overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/[0.1] to-[var(--color-accent)]/[0.1] ring-2 ring-[var(--color-border)] transition-all duration-300 group-hover:ring-[var(--color-primary)]/30">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="text-4xl transition-transform duration-300 group-hover:scale-110">👤</span>
                  </div>
                )}
              </div>
              <h3 className="font-serif text-lg font-medium text-center" style={{ color: "var(--color-text-primary)" }}>
                {member.name}
              </h3>
              <p className="mt-1 text-center text-sm font-medium text-[var(--color-primary)]">{member.role}</p>
              <Text variant="body-sm" className="mt-3 text-center" style={{ color: "var(--color-text-secondary)" }}>
                {member.bio}
              </Text>
              {member.social?.linkedin && (
                <div className="mt-4 flex justify-center">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-colors"
                  >
                    <ExternalLink className="h-3 w-3" />
                    LinkedIn
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
