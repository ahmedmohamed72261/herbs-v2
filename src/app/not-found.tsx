"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container, Section, Heading, Text } from "@/src/shared/ui";
import { Button } from "@/src/shared/ui/button";
import { useLanguage } from "@/src/shared/providers/language-provider";
import { Home } from "lucide-react";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <Section spacing="lg" className="pt-32">
      <Container size="sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mx-auto mb-8 inline-flex items-center justify-center rounded-3xl bg-[var(--color-primary)]/[0.08] p-8">
            <span className="font-serif text-8xl text-[var(--color-primary)]">404</span>
          </div>
          <Heading variant="h1" align="center">
            {t("notFound.title")}
          </Heading>
          <Text variant="body-lg" className="mt-4 text-center" style={{ color: "var(--color-text-secondary)" }}>
            {t("notFound.subtitle")}
          </Text>
          <div className="mt-10">
            <Link href="/">
              <Button variant="primary" size="lg">
                <Home className="h-4 w-4" />
                {t("notFound.button")}
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
