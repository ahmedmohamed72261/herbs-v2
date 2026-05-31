import { cn } from "@/src/shared/utils/cn";
import type { HTMLAttributes } from "react";

type BadgeVariant = "default" | "primary" | "success" | "warning" | "accent" | "outline";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-[var(--color-primary)] text-[var(--color-surface)]",
  primary: "bg-[var(--color-primary)]/[0.1] text-[var(--color-primary)]",
  success: "bg-[var(--color-success)]/[0.1] text-[var(--color-success)]",
  warning: "bg-[var(--color-warning)]/[0.1] text-[var(--color-warning)]",
  accent: "bg-[var(--color-accent)] text-white",
  outline: "border border-[var(--color-border)] text-[var(--color-text-primary)]",
};

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
