"use client";

import { useState } from "react";
import Link from "next/link";
import { Leaf, Mail, Phone, MapPin, ArrowUp, Send, ExternalLink, Camera } from "lucide-react";
import { Container } from "@/src/shared/ui";
import { Button } from "@/src/shared/ui/button";
import { useLanguage } from "@/src/shared/providers/language-provider";
import { siteConfig, navigationLinks } from "@/src/config/site";

export function Footer() {
  const { t, lang } = useLanguage();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const linkLabel = (link: typeof navigationLinks[number]) => {
    const label = link.label as unknown as Record<string, string>;
    return label[lang] || label.en;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative border-t border-[var(--color-border)] bg-[var(--color-surface-alt)]">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/[0.02] to-transparent pointer-events-none" />

      <Container size="lg" className="relative py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary shadow-premium transition-transform duration-300 group-hover:scale-105">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="font-serif text-xl font-medium" style={{ color: "var(--color-text-primary)" }}>
                Premium<span className="text-[var(--color-primary)]">Botanical</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              {t("footer.tagline")}
            </p>
            <div className="flex gap-3">
              {[
                { label: "USDA", value: "Organic" },
                { label: "GMP", value: "Certified" },
                { label: "ISO", value: "22000" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-center"
                >
                  <div className="text-xs font-semibold text-[var(--color-text-primary)]">{item.label}</div>
                  <div className="text-[10px] text-[var(--color-text-muted)]">{item.value}</div>
                </div>
              ))}
            </div>
            <div className="flex gap-3 pt-1">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text-muted)] transition-all duration-200 hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)]"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text-muted)] transition-all duration-200 hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)]"
              >
                <Camera className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--color-primary)" }}>
              {t("footer.navigation")}
            </h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-all duration-200 hover:translate-x-1 inline-block"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {linkLabel(link)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--color-primary)" }}>
              {t("footer.contact")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm" style={{ color: "var(--color-text-muted)" }}>
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
                {siteConfig.email}
              </li>
              <li className="flex items-start gap-3 text-sm" style={{ color: "var(--color-text-muted)" }}>
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
                {siteConfig.phone}
              </li>
              <li className="flex items-start gap-3 text-sm" style={{ color: "var(--color-text-muted)" }}>
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
                <span>
                  {siteConfig.address.city}, {siteConfig.address.state}, {siteConfig.address.country}
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--color-primary)" }}>
              {t("footer.certifications")}
            </h3>
            <div className="flex flex-wrap gap-2">
              {["USDA Organic", "EU Organic", "GMP", "ISO 22000", "Fair Trade", "Non-GMO", "OU Kosher", "FSSC 22000"].map(
                (cert) => (
                  <Link
                    key={cert}
                    href="/certificates"
                    className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 text-[11px] font-medium transition-all duration-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {cert}
                  </Link>
                )
              )}
            </div>
            <div className="pt-2">
              <h3 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-primary)" }}>
                Newsletter
              </h3>
              {subscribed ? (
                <p className="text-sm font-medium text-[var(--color-success)]">Thank you for subscribing!</p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    required
                    className="flex-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm outline-none transition-all duration-200 focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]/20"
                    style={{ color: "var(--color-text-primary)" }}
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    size="icon"
                    className="shrink-0"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-[var(--color-border)]">
        <Container size="lg" className="flex items-center justify-between py-6">
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            © {new Date().getFullYear()} Premium Botanical Export Experience. {t("footer.copyright")}
          </p>
          <button
            onClick={scrollToTop}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--color-border)] text-[var(--color-text-muted)] transition-all duration-200 hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)]"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </Container>
      </div>
    </footer>
  );
}
