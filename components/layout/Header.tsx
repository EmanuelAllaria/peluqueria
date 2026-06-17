"use client";

import { navLinks, salonInfo } from "@/data/salon";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-gold/20 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container-narrow flex items-center justify-between px-6">
          <a href="#" className="group flex flex-col">
            <span className="font-serif text-2xl tracking-wide text-foreground group-hover:text-gold-light transition-colors">
              {salonInfo.name}
            </span>
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold/70">
              Peluquería de autor
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-gold-light transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <Button href="#reservas" size="sm">
              Reservar
            </Button>
          </nav>

          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-background/90 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <nav className="absolute top-0 right-0 h-full w-72 bg-surface border-l border-border p-8 pt-24 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-serif text-foreground hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button
              href="#reservas"
              className="mt-4"
              onClick={() => setMenuOpen(false)}
            >
              Reservar cita
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}
