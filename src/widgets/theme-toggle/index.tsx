"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/src/shared/providers/theme-provider";
import { useLanguage } from "@/src/shared/providers/language-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <button
      onClick={toggleTheme}
      className="flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-200 hover:bg-[var(--color-border-light)]"
      aria-label={theme === "light" ? t("theme.dark") : t("theme.light")}
      title={theme === "light" ? t("theme.dark") : t("theme.light")}
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4 text-[var(--color-text-secondary)]" />
      ) : (
        <Sun className="h-4 w-4 text-[var(--color-text-secondary)]" />
      )}
    </button>
  );
}
