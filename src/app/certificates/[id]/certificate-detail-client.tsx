"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Building2, ShieldCheck } from "lucide-react";
import { Container, Section, Heading, Text } from "@/src/shared/ui";
import { useLanguage } from "@/src/shared/providers/language-provider";

interface Cert {
  id: string;
  title: string;
  issuer: string;
  description: string;
  badge: string;
  image: string;
  issuedDate: string;
  expiryDate: string | null;
}

interface Props {
  cert: Cert;
}

export function CertificateDetailClient({ cert }: Props) {
  const { t, lang } = useLanguage();

  return (
    <Section spacing="lg" className="pt-32">
      <Container size="md">
        <Link
          href="/certificates"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
        >
          <ArrowLeft className={`h-4 w-4 ${lang === "ar" ? "rotate-180" : ""}`} />
          {t("certificates.title")}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-8 md:p-12 shadow-premium"
        >
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex h-40 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/[0.06] to-[var(--color-accent)]/[0.06] border border-[var(--color-border)] p-4">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-auto max-w-full object-contain"
                  />
                ) : (
                  <ShieldCheck className="h-16 w-16 text-[var(--color-primary)]" />
                )}
              </div>
              <div className="mt-4 text-center">
                <span className="inline-block rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/[0.06] px-4 py-1 text-xs font-semibold text-[var(--color-primary)]">
                  {cert.badge}
                </span>
              </div>
            </motion.div>

            <div>
              <Heading variant="h2">{cert.title}</Heading>
              <div className="mt-3 space-y-2">
                <div className="flex items-center gap-2 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                  <Building2 className="h-4 w-4 text-[var(--color-primary)]" />
                  <span className="font-medium">{t("certificates.issuedBy")}:</span>
                  <span>{cert.issuer}</span>
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                  <Calendar className="h-4 w-4 text-[var(--color-primary)]" />
                  <span className="font-medium">{t("certificates.issued")}:</span>
                  <span>{new Date(cert.issuedDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                  <Calendar className="h-4 w-4 text-[var(--color-primary)]" />
                  <span className="font-medium">{t("certificates.expires")}:</span>
                  <span>
                    {cert.expiryDate
                      ? new Date(cert.expiryDate).toLocaleDateString()
                      : t("certificates.noExpiry")}
                  </span>
                </div>
              </div>
              <Text variant="body-lg" className="mt-6 leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                {cert.description}
              </Text>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
