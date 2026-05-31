"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container, Section, Heading, Text } from "@/src/shared/ui";
import { fadeUp } from "@/src/shared/animations/fade-up";
import { staggerContainer, staggerItem } from "@/src/shared/animations/stagger";
import { useLanguage } from "@/src/shared/providers/language-provider";
import certificatesData from "@/src/data/certificates.json";

export default function CertificatesPage() {
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
          <Heading variant="h1" align="center">{t("certificates.title")}</Heading>
          <Text variant="body-lg" className="mt-4" style={{ color: "var(--color-text-secondary)" }}>
            {t("certificates.subtitle")}
          </Text>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {certificatesData.map((cert) => (
            <motion.div key={cert.id} variants={staggerItem}>
              <Link href={`/certificates/${cert.id}`} className="block group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-2 shadow-premium transition-all duration-300 hover:shadow-premium-lg hover:-translate-y-1 h-full">
                <div className="mb-4 h-56 overflow-hidden rounded-xl bg-[var(--color-surface)] p-3 flex items-center justify-center">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-3xl">📜</span>
                  )}
                </div>
                <h3 className="font-serif text-base font-medium" style={{ color: "var(--color-text-primary)" }}>
                  {cert.title}
                </h3>
                <Text variant="body-sm" className="mt-2" style={{ color: "var(--color-text-secondary)" }}>
                  {cert.description}
                </Text>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  <span
                    className="rounded-md border border-[var(--color-border)] px-2 py-0.5 text-[10px] font-medium"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {cert.badge}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
