import { cn } from "@/src/shared/utils/cn";
import { type HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  variant?: "default" | "elevated" | "bordered" | "glass";
}

const variantStyles = {
  default: "bg-[var(--color-surface)]",
  elevated:
    "bg-[var(--color-surface-elevated)] shadow-premium hover:shadow-premium-lg",
  bordered:
    "bg-[var(--color-surface)] border border-[var(--color-border)]",
  glass:
    "bg-[var(--color-glass)] backdrop-blur-md border border-[var(--color-glass-border)]",
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, variant = "default", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl transition-all duration-300",
          variantStyles[variant],
          hover && "hover:-translate-y-1 hover:shadow-premium-lg",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

export { Card };
