import { cn } from "@/src/shared/utils/cn";
import type { HTMLAttributes } from "react";

type TextVariant = "body" | "body-lg" | "body-sm" | "caption" | "label" | "muted";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: TextVariant;
  as?: "p" | "span" | "div";
  align?: "left" | "center" | "right";
}

const variantStyles: Record<TextVariant, string> = {
  "body": "text-base leading-relaxed",
  "body-lg": "text-lg leading-relaxed",
  "body-sm": "text-sm leading-relaxed",
  "caption": "text-xs leading-normal text-[#434843]",
  "label": "text-sm font-medium",
  "muted": "text-base leading-relaxed text-[#434843]",
};

const alignStyles: Record<NonNullable<TextProps["align"]>, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export function Text({
  className,
  variant = "body",
  as: Component = "p",
  align,
  children,
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(variantStyles[variant], align && alignStyles[align], className)}
      style={{ color: "var(--color-text-primary)" }}
      {...props}
    >
      {children}
    </Component>
  );
}
