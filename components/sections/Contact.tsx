"use client";

import { salonInfo } from "@/data/salon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/Motion";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Consulta de ${form.name} - ${salonInfo.name}`
    );
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nTeléfono: ${form.phone}\nEmail: ${form.email}\n\nMensaje:\n${form.message}`
    );
    window.location.href = `mailto:${salonInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section id="contacto" className="section-padding bg-background">
      <div className="container-narrow px-6">
        <SectionHeading
          eyebrow="Contacto"
          title="Estamos para vos"
          subtitle="Visitános, escribinos o completá el formulario. Respondemos en menos de 2 horas."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeIn>
            <div className="space-y-6 mb-8">
              {[
                { icon: MapPin, label: "Dirección", value: salonInfo.address },
                { icon: Phone, label: "Teléfono", value: salonInfo.phone, href: `tel:${salonInfo.phone.replace(/\s/g, "")}` },
                { icon: Mail, label: "Email", value: salonInfo.email, href: `mailto:${salonInfo.email}` },
                { icon: Clock, label: "Horarios", value: salonInfo.hours },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-sm border border-gold/30 text-gold">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted mb-1">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-foreground hover:text-gold-light transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-foreground">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-sm overflow-hidden border border-border h-64 lg:h-80">
              <iframe
                src={salonInfo.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Ubicación de ${salonInfo.name}`}
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center border border-gold/30 rounded-sm bg-gold/5 p-12">
                <CheckCircle2 className="text-gold mb-4" size={48} />
                <h3 className="font-serif text-2xl mb-2">¡Mensaje preparado!</h3>
                <p className="text-muted mb-6">
                  Se abrió tu cliente de correo. Si no apareció, escribinos a{" "}
                  {salonInfo.email}
                </p>
                <Button onClick={() => setSubmitted(false)} variant="outline">
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border border-border rounded-sm bg-surface p-6 md:p-8 space-y-5"
              >
                <div>
                  <label htmlFor="contact-name" className="block text-xs tracking-widest uppercase text-muted mb-2">
                    Nombre
                  </label>
                  <input
                    id="contact-name"
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-gold/50 transition-colors"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs tracking-widest uppercase text-muted mb-2">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-gold/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs tracking-widest uppercase text-muted mb-2">
                      Teléfono
                    </label>
                    <input
                      id="contact-phone"
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-gold/50 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-xs tracking-widest uppercase text-muted mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-gold/50 transition-colors resize-none"
                    placeholder="Contanos qué necesitás..."
                  />
                </div>
                <Button type="submit" className="w-full">
                  Enviar mensaje
                </Button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
