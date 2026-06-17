import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  href?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-background hover:bg-gold-light border border-gold shadow-[0_0_30px_rgba(201,169,98,0.2)] hover:shadow-[0_0_40px_rgba(201,169,98,0.35)]",
  secondary:
    "bg-surface-elevated text-foreground border border-border hover:border-gold/50 hover:bg-surface",
  ghost: "text-foreground hover:text-gold hover:bg-gold/5",
  outline:
    "border border-gold/40 text-gold-light hover:bg-gold/10 hover:border-gold",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs tracking-widest uppercase",
  md: "px-6 py-3 text-sm tracking-widest uppercase",
  lg: "px-8 py-4 text-sm tracking-widest uppercase",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { className, variant = "primary", size = "md", href, children, ...props },
    ref
  ) {
    const classes = cn(
      "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
      variants[variant],
      sizes[size],
      className
    );

    if (href) {
      const { onClick } = props;
      return (
        <a
          href={href}
          className={classes}
          onClick={
            onClick
              ? (e) => onClick(e as unknown as React.MouseEvent<HTMLButtonElement>)
              : undefined
          }
        >
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);
