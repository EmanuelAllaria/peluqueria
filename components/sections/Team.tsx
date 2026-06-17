import { team } from "@/data/salon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/Motion";
import Image from "next/image";

export function Team() {
  return (
    <section id="equipo" className="section-padding bg-surface">
      <div className="container-narrow px-6">
        <SectionHeading
          eyebrow="El equipo"
          title="Artistas del cabello"
          subtitle="Profesionales apasionados con formación internacional y un ojo inigualable para el detalle."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {team.map((member, index) => (
            <FadeIn key={member.id} delay={index * 0.12}>
              <div className="flex items-center gap-6 p-6 rounded-sm border border-border bg-background hover:border-gold/30 transition-all duration-500 group">
                <div className="relative h-24 w-24 shrink-0 rounded-full overflow-hidden border-2 border-gold/30 group-hover:border-gold/60 transition-colors">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl mb-1">{member.name}</h3>
                  <p className="text-gold text-sm mb-2">{member.role}</p>
                  <p className="text-muted text-sm">
                    {member.specialty} · {member.experience}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
