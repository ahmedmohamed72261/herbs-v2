import { cn } from "@/src/shared/utils/cn";
import type { HTMLAttributes } from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  variant?: "display" | "h1" | "h2" | "h3" | "h4";
  align?: "left" | "center" | "right";
}

const variantStyles = {
  display: "text-4xl md:text-5xl lg:text-6xl font-light tracking-tight",
  h1: "text-3xl md:text-4xl lg:text-5xl font-light tracking-tight",
  h2: "text-2xl md:text-3xl lg:text-4xl font-light tracking-tight",
  h3: "text-xl md:text-2xl lg:text-3xl font-normal",
  h4: "text-lg md:text-xl font-normal",
};

const alignStyles = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export function Heading({
  as: Component = "h2",
  variant,
  align = "left",
  className,
  children,
  ...props
}: HeadingProps) {
  const resolvedVariant = variant || Component;

  return (
    <Component
      className={cn(
        "font-serif",
        variantStyles[resolvedVariant],
        alignStyles[align],
        className
      )}
      style={{ color: "var(--color-text-primary)" }}
      {...props}
    >
      {children}
    </Component>
  );
}
