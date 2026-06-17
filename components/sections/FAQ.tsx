"use client";

import { faqs } from "@/data/salon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/Motion";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="faq" className="section-padding bg-surface">
      <div className="container-narrow px-6">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Todo lo que necesitás saber"
          subtitle="Si tenés otra consulta, no dudes en contactarnos."
        />

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <FadeIn key={faq.id} delay={index * 0.05}>
                <div className="border border-border rounded-sm overflow-hidden bg-background">
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gold/5 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg pr-4">{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className={cn(
                        "text-gold shrink-0 transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-muted text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
