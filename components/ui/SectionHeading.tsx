import { cn } from "@/lib/utils";
import { FadeIn } from "./Motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <FadeIn
      className={cn(
        "mb-16",
        align === "center" && "text-center mx-auto max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4 font-medium">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
        {title}
      </h2>
      <div
        className={cn(
          "gold-line w-24 mb-6",
          align === "center" && "mx-auto"
        )}
      />
      {subtitle && (
        <p className="text-muted text-lg leading-relaxed">{subtitle}</p>
      )}
    </FadeIn>
  );
}
