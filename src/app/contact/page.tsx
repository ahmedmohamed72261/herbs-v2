"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Container, Section, Heading, Text } from "@/src/shared/ui";
import { Button } from "@/src/shared/ui/button";
import { Input, Textarea } from "@/src/shared/ui";
import { fadeUp } from "@/src/shared/animations/fade-up";
import { useLanguage } from "@/src/shared/providers/language-provider";
import { siteConfig } from "@/src/config/site";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  message: z.string().min(10),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const { t, lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (_data: ContactForm) => {
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
  };

  const inputs = [
    { label: "name", field: "name" as const, type: "text" },
    { label: "email", field: "email" as const, type: "email" },
    { label: "company", field: "company" as const, type: "text" },
  ];

  const contactInfo = [
    { icon: Mail, value: siteConfig.email },
    { icon: Phone, value: siteConfig.phone },
    { icon: MapPin, value: `${siteConfig.address.city}, ${siteConfig.address.state}` },
    { icon: Clock, value: t("contact.info.hours") },
  ];

  if (submitted) {
    return (
      <Section spacing="lg" className="pt-32">
        <Container size="sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="mb-6 inline-flex rounded-2xl bg-[var(--color-success)]/[0.08] p-4">
              <CheckCircle className="h-8 w-8 text-[var(--color-success)]" />
            </div>
            <Heading variant="h2" align="center">{t("contact.success.title")}</Heading>
            <Text variant="body-lg" className="mt-4" style={{ color: "var(--color-text-secondary)" }}>
              {t("contact.success.message")}
            </Text>
          </motion.div>
        </Container>
      </Section>
    );
  }

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
          <Heading variant="h1" align="center">{t("contact.title")}</Heading>
          <Text variant="body-lg" className="mt-4" style={{ color: "var(--color-text-secondary)" }}>
            {t("contact.subtitle")}
          </Text>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: lang === "ar" ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-start gap-4">
                  <div className="inline-flex shrink-0 rounded-xl bg-[var(--color-primary)]/[0.08] p-3">
                    <Icon className="h-4 w-4 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={handleSubmit(onSubmit)}
            className="lg:col-span-3 space-y-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-8 shadow-premium"
          >
            {inputs.map(({ label, field, type }) => (
              <div key={field}>
                <Input
                  label={t(`contact.form.${label}`)}
                  type={type}
                  error={errors[field]?.message}
                  {...register(field)}
                />
              </div>
            ))}
            <div>
              <Textarea
                label={t("contact.form.message")}
                rows={5}
                error={errors.message?.message}
                {...register("message")}
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  {t("contact.form.sending")}
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  {t("contact.form.submit")}
                </span>
              )}
            </Button>
          </motion.form>
        </div>
      </Container>
    </Section>
  );
}
