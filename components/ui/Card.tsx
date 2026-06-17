import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  elevated?: boolean;
}

export function Card({
  className,
  hover = true,
  elevated = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-sm border border-border bg-surface p-6 transition-all duration-500",
        hover &&
          "hover:border-gold/40 hover:shadow-[0_0_40px_rgba(201,169,98,0.08)] hover:-translate-y-1",
        elevated && "bg-surface-elevated border-gold/30 shadow-[0_0_60px_rgba(201,169,98,0.12)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
