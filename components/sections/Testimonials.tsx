"use client";

import { testimonials } from "@/data/salon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/Motion";
import { Star, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [playing]);

  const testimonial = testimonials[current];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[20rem] text-gold select-none">
          &ldquo;
        </div>
      </div>

      <div className="container-narrow px-6 relative z-10">
        <SectionHeading
          eyebrow="Testimonios"
          title="Lo que dicen nuestros clientes"
          subtitle="Más de 280 reseñas con 5 estrellas. Tu satisfacción es nuestra mayor recompensa."
        />

        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-8">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="text-gold fill-gold"
                />
              ))}
            </div>

            <blockquote className="font-serif text-2xl md:text-3xl italic leading-relaxed text-foreground/90 mb-8 min-h-[120px] transition-opacity duration-500">
              &ldquo;{testimonial.text}&rdquo;
            </blockquote>

            <div className="mb-10">
              <p className="font-medium text-gold-light">{testimonial.name}</p>
              <p className="text-muted text-sm">{testimonial.service}</p>
            </div>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() =>
                  setCurrent(
                    (prev) => (prev - 1 + testimonials.length) % testimonials.length
                  )
                }
                className="p-2 text-muted hover:text-gold transition-colors"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={() => setPlaying(!playing)}
                className="p-2 text-muted hover:text-gold transition-colors"
                aria-label={playing ? "Pausar" : "Reproducir"}
              >
                {playing ? <Pause size={20} /> : <Play size={20} />}
              </button>

              <button
                onClick={() =>
                  setCurrent((prev) => (prev + 1) % testimonials.length)
                }
                className="p-2 text-muted hover:text-gold transition-colors"
                aria-label="Siguiente testimonio"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    index === current
                      ? "w-8 bg-gold"
                      : "w-1.5 bg-border hover:bg-gold/50"
                  )}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
