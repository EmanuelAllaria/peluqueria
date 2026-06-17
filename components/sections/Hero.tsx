"use client";

import { heroImage, salonInfo } from "@/data/salon";
import { Button } from "@/components/ui/Button";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Interior de salón de peluquería de lujo Maison Aurea"
          fill
          priority
          className="object-cover scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </div>

      <div className="relative z-10 container-narrow px-6 pt-32 pb-20 text-center md:text-left">
        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold text-xs md:text-sm tracking-[0.4em] uppercase mb-6"
        >
          Palermo · Buenos Aires
        </motion.p>

        <motion.h1
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] mb-8 max-w-4xl"
        >
          Donde el cabello{" "}
          <span className="gold-gradient-text italic">se convierte en arte</span>
        </motion.h1>

        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-muted text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
        >
          {salonInfo.description}
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <Button href="#reservas" size="lg">
            Reservar cita
          </Button>
          <Button href="#servicios" variant="outline" size="lg">
            Ver servicios
          </Button>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex items-center gap-8 justify-center md:justify-start text-sm text-muted"
        >
          <div>
            <span className="block font-serif text-3xl text-gold-light">
              {salonInfo.rating}
            </span>
            <span className="text-xs tracking-widest uppercase">
              {salonInfo.reviewCount} reseñas
            </span>
          </div>
          <div className="w-px h-12 bg-border" />
          <div>
            <span className="block font-serif text-3xl text-gold-light">
              15+
            </span>
            <span className="text-xs tracking-widest uppercase">
              Años de excelencia
            </span>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#servicios"
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60 hover:text-gold transition-colors"
        aria-label="Scroll hacia servicios"
      >
        <ChevronDown className="animate-bounce" size={28} />
      </motion.a>
    </section>
  );
}
