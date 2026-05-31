"use client";

import { useLanguage } from "@/src/shared/providers/language-provider";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex h-9 items-center gap-1.5 rounded-lg px-2.5 text-sm font-medium text-[var(--color-text-secondary)] transition-all duration-200 hover:bg-[var(--color-border-light)]"
      >
        <Globe className="h-4 w-4" />
        <span>{lang === "en" ? "EN" : "AR"}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 min-w-[140px] overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-1 shadow-premium-lg">
          <button
            onClick={() => { setLang("en"); setOpen(false); }}
            className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
              lang === "en"
                ? "bg-[var(--color-primary)] text-[var(--color-surface)]"
                : "text-[var(--color-text-primary)] hover:bg-[var(--color-border-light)]"
            }`}
          >
            <span className="text-base">🇬🇧</span>
            {t("language.english")}
          </button>
          <button
            onClick={() => { setLang("ar"); setOpen(false); }}
            className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
              lang === "ar"
                ? "bg-[var(--color-primary)] text-[var(--color-surface)]"
                : "text-[var(--color-text-primary)] hover:bg-[var(--color-border-light)]"
            }`}
          >
            <span className="text-base">🇸🇦</span>
            {t("language.arabic")}
          </button>
        </div>
      )}
    </div>
  );
}
