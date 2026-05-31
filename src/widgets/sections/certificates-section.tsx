"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section, Heading, Text } from "@/src/shared/ui";
import { fadeUp } from "@/src/shared/animations/fade-up";
import { staggerContainer, staggerItem } from "@/src/shared/animations/stagger";
import { useLanguage } from "@/src/shared/providers/language-provider";
import certificatesData from "@/src/data/certificates.json";

export function CertificatesSection() {
  const { t, lang } = useLanguage();
  const certificates = certificatesData.slice(0, 4);

  return (
    <Section spacing="lg" background="cream">
      <Container size="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <Heading variant="h2" align="center">
            {t("home.certificatesTitle")}
          </Heading>
          <Text variant="body-lg" className="mt-4" style={{ color: "var(--color-text-secondary)" }}>
            {t("home.certificatesSubtitle")}
          </Text>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={staggerItem}
            >
              <Link href={`/certificates/${cert.id}`} className="block group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-2 shadow-premium transition-all duration-300 hover:shadow-premium-lg hover:-translate-y-1 h-full">
                <div className="mb-4 h-56 overflow-hidden rounded-xl bg-[var(--color-surface-elevated)] p-3 flex items-center justify-center">
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
                <Text variant="body-sm" className="mt-2 line-clamp-3 leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            href="/certificates"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-colors"
          >
            {t("home.viewAllCertificates")}
            <ArrowRight className={`h-4 w-4 ${lang === "ar" ? "rotate-180" : ""}`} />
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
}
