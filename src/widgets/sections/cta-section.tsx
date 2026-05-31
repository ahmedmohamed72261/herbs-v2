"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container, Section } from "@/src/shared/ui";
import { Button } from "@/src/shared/ui/button";
import { fadeUp } from "@/src/shared/animations/fade-up";
import { useLanguage } from "@/src/shared/providers/language-provider";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  const { t, lang } = useLanguage();

  return (
    <Section spacing="lg" background="dark">
      <Container size="sm">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative overflow-hidden rounded-3xl gradient-primary p-1"
        >
          <div className="relative rounded-[calc(1.5rem-1px)] bg-[var(--color-surface)] px-8 py-16 text-center sm:px-16">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/[0.02] to-transparent" />
            <div className="relative z-10">
              <h2 className="font-serif text-3xl font-light text-[var(--color-text-primary)] md:text-4xl">
                {t("home.ctaTitle")}
              </h2>
              <p className="mt-4 text-[var(--color-text-secondary)]">
                {t("home.ctaSubtitle")}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    {t("home.ctaButton")}
                    <ArrowRight className={`h-4 w-4 ${lang === "ar" ? "rotate-180" : ""}`} />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button variant="secondary" size="lg">
                    {t("home.ctaButton2")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
