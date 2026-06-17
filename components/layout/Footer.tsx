import { navLinks, salonInfo } from "@/data/salon";
import { Share2, Globe } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-narrow section-padding !py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-3xl mb-4">{salonInfo.name}</h3>
            <p className="text-muted text-sm leading-relaxed mb-6">
              {salonInfo.description}
            </p>
            <div className="flex gap-4">
              <a
                href={salonInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted hover:text-gold transition-colors"
              >
                <Share2 size={20} />
              </a>
              <a
                href={salonInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-muted hover:text-gold transition-colors"
              >
                <Globe size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
              Navegación
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted text-sm hover:text-gold-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-muted">
              <li>{salonInfo.address}</li>
              <li>
                <a
                  href={`tel:${salonInfo.phone.replace(/\s/g, "")}`}
                  className="hover:text-gold-light transition-colors"
                >
                  {salonInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${salonInfo.email}`}
                  className="hover:text-gold-light transition-colors"
                >
                  {salonInfo.email}
                </a>
              </li>
              <li>{salonInfo.hours}</li>
            </ul>
          </div>
        </div>

        <div className="gold-line mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted">
          <p>
            © {year} {salonInfo.name}. Todos los derechos reservados.
          </p>
          <p className="tracking-widest uppercase">
            Diseñado con pasión · Buenos Aires
          </p>
        </div>
      </div>
    </footer>
  );
}
