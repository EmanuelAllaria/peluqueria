"use client";

import { galleryImages } from "@/data/salon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/Motion";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

export function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const selectedImage = galleryImages.find((img) => img.id === selected);

  return (
    <section id="galeria" className="section-padding bg-background">
      <div className="container-narrow px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="Nuestra galería"
          subtitle="Cada imagen cuenta una historia de transformación, estilo y confianza."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px] md:auto-rows-[220px]">
          {galleryImages.map((image, index) => (
            <FadeIn
              key={image.id}
              delay={index * 0.08}
              className={cn(
                "relative overflow-hidden rounded-sm cursor-pointer group",
                image.span === "tall" && "row-span-2",
                image.span === "wide" && "col-span-2"
              )}
              onClick={() => setSelected(image.id)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-500 flex items-end p-4">
                <p className="text-foreground text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                  Ver imagen
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-6 right-6 text-foreground hover:text-gold transition-colors"
              onClick={() => setSelected(null)}
              aria-label="Cerrar galería"
            >
              <X size={32} />
            </button>
            <motion.div
              initial={prefersReducedMotion ? false : { scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-4xl aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
              <p className="text-center text-muted text-sm mt-4">
                {selectedImage.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
