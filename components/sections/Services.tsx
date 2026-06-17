import { services } from "@/data/salon";
import { formatPrice } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import {
  Scissors,
  Palette,
  Sun,
  Sparkles,
  Crown,
  User,
  Droplets,
  Eye,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  scissors: Scissors,
  palette: Palette,
  sun: Sun,
  sparkles: Sparkles,
  crown: Crown,
  user: User,
  droplets: Droplets,
  eye: Eye,
};

export function Services() {
  return (
    <section id="servicios" className="section-padding bg-background">
      <div className="container-narrow px-6">
        <SectionHeading
          eyebrow="Nuestros servicios"
          title="Experiencias a tu medida"
          subtitle="Cada servicio es un ritual personalizado. Utilizamos técnicas de vanguardia y productos de las mejores casas del mundo."
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Scissors;
            return (
              <StaggerItem key={service.id}>
                <Card className="h-full flex flex-col group">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-sm border border-gold/30 text-gold group-hover:bg-gold/10 group-hover:border-gold/60 transition-all duration-300">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl mb-3">{service.title}</h3>
                  <p className="text-muted text-sm leading-relaxed flex-1 mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border text-xs">
                    <span className="text-muted tracking-wider">{service.duration}</span>
                    <span className="text-gold font-medium">
                      desde {formatPrice(service.priceFrom)}
                    </span>
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
