import { cn } from "@/src/shared/utils/cn";
import { type HTMLAttributes, forwardRef } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  background?: "white" | "cream" | "dark" | "green";
  spacing?: "sm" | "md" | "lg" | "xl";
}

const backgroundStyles = {
  white: "bg-[var(--color-surface)]",
  cream: "bg-[var(--color-surface-alt)]",
  dark: "bg-[#1b3022] text-white",
  green: "bg-[var(--color-primary)]/[0.05]",
};

const spacingStyles = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-20 md:py-32",
  xl: "py-24 md:py-40",
};

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, background = "white", spacing = "md", children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(backgroundStyles[background], spacingStyles[spacing], className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);
Section.displayName = "Section";

export { Section };
