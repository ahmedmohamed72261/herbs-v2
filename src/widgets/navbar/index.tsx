"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";
import { cn } from "@/src/shared/utils/cn";
import { navigationLinks } from "@/src/config/site";
import { ThemeToggle } from "@/src/widgets/theme-toggle";
import { LanguageSwitcher } from "@/src/widgets/language-switcher";
import { useLanguage } from "@/src/shared/providers/language-provider";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { lang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    setScrolled(window.scrollY > 20);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const linkLabel = (link: typeof navigationLinks[number]) => {
    const label = link.label as unknown as Record<string, string>;
    return label[lang] || label.en;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[var(--color-glass)] backdrop-blur-2xl saturate-200 border-b border-[var(--color-glass-border)] shadow-premium"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 group relative">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary shadow-premium transition-all duration-300 group-hover:scale-110 group-hover:shadow-premium-lg">
            <Leaf className="h-5 w-5 text-white" />
          </div>
          <span className="font-serif text-xl font-medium tracking-tight" style={{ color: "var(--color-text-primary)" }}>
            Premium<span className="text-[var(--color-primary)]">Botanical</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200",
                pathname === link.href
                  ? "text-[var(--color-primary)] bg-[var(--color-primary)]/8"
                  : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-border-light)]"
              )}
            >
              {linkLabel(link)}
              {pathname === link.href && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute bottom-0.5 left-2 right-2 h-0.5 rounded-full bg-[var(--color-primary)]"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1">
          {/* <ThemeToggle />
          <LanguageSwitcher /> */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 ml-1 flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-200 hover:bg-[var(--color-border-light)] md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-5 w-5 text-[var(--color-text-primary)]" />
            ) : (
              <Menu className="h-5 w-5 text-[var(--color-text-primary)]" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-x-4 top-20 md:hidden rounded-2xl border border-[var(--color-glass-border)] bg-[var(--color-glass)] backdrop-blur-2xl shadow-premium-lg overflow-hidden"
          >
            <div className="flex flex-col gap-1 p-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-xl px-4 py-3.5 text-base font-medium transition-all duration-200",
                    pathname === link.href
                      ? "gradient-primary text-white shadow-md"
                      : "text-[var(--color-text-primary)] hover:bg-[var(--color-border-light)]"
                  )}
                >
                  {linkLabel(link)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
