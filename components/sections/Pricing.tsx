import { pricingTiers } from "@/data/salon";
import { formatPrice } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/Motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="precios" className="section-padding bg-surface">
      <div className="container-narrow px-6">
        <SectionHeading
          eyebrow="Inversión"
          title="Paquetes diseñados para vos"
          subtitle="Elegí la experiencia que mejor se adapte a tus necesidades. Todos incluyen consulta personalizada y productos premium."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {pricingTiers.map((tier, index) => (
            <FadeIn key={tier.id} delay={index * 0.15}>
              <Card
                elevated={tier.popular}
                className={cn(
                  "h-full flex flex-col relative",
                  tier.popular && "md:-translate-y-4 md:scale-105 z-10"
                )}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-background text-[10px] tracking-[0.2em] uppercase px-4 py-1 rounded-sm font-medium">
                    Más elegido
                  </span>
                )}

                <div className="mb-8">
                  <h3 className="font-serif text-3xl mb-1">{tier.name}</h3>
                  <p className="text-muted text-sm">{tier.subtitle}</p>
                </div>

                <div className="mb-8">
                  <span className="text-muted text-xs uppercase tracking-widest">
                    {tier.period}
                  </span>
                  <p className="font-serif text-5xl text-gold-light mt-1">
                    {formatPrice(tier.price)}
                  </p>
                </div>

                <ul className="space-y-3 mb-10 flex-1">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-muted"
                    >
                      <Check
                        size={16}
                        className="text-gold mt-0.5 shrink-0"
                        strokeWidth={2}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href={`#reservas?tier=${tier.id}`}
                  variant={tier.popular ? "primary" : "outline"}
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
