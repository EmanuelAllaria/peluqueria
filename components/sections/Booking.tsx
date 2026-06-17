"use client";

import { services, salonInfo } from "@/data/salon";
import {
  formatBookingDate,
  getAvailableSlots,
  isDateDisabled,
  type TimeSlot,
} from "@/lib/booking";
import { buildWhatsAppUrl } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/Motion";
import { DayPicker } from "react-day-picker";
import { es } from "react-day-picker/locale";
import { useState } from "react";
import { Calendar, Clock, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Step = 1 | 2 | 3 | 4;

export function Booking() {
  const [step, setStep] = useState<Step>(1);
  const [serviceId, setServiceId] = useState(services[0].id);
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState<TimeSlot | undefined>();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const selectedService = services.find((s) => s.id === serviceId)!;
  const slots = date ? getAvailableSlots(date) : [];

  const canProceedStep1 = !!serviceId;
  const canProceedStep2 = !!date;
  const canProceedStep3 = !!time;
  const canConfirm = name.trim().length >= 2 && phone.trim().length >= 8;

  function handleConfirm() {
    if (!date || !time || !canConfirm) return;

    const message = [
      `Hola ${salonInfo.name}, quiero reservar un turno:`,
      ``,
      `📋 Servicio: ${selectedService.title}`,
      `📅 Fecha: ${formatBookingDate(date)}`,
      `🕐 Hora: ${time}`,
      `👤 Nombre: ${name.trim()}`,
      `📱 Teléfono: ${phone.trim()}`,
    ].join("\n");

    const url = buildWhatsAppUrl(salonInfo.whatsapp, message);
    window.open(url, "_blank");
    setConfirmed(true);
  }

  const steps = [
    { num: 1, label: "Servicio", icon: Calendar },
    { num: 2, label: "Fecha", icon: Calendar },
    { num: 3, label: "Hora", icon: Clock },
    { num: 4, label: "Datos", icon: CheckCircle2 },
  ] as const;

  return (
    <section id="reservas" className="section-padding bg-surface">
      <div className="container-narrow px-6">
        <SectionHeading
          eyebrow="Reservas"
          title="Agendá tu experiencia"
          subtitle="Elegí servicio, fecha y horario. Confirmamos tu turno por WhatsApp en minutos."
        />

        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-between mb-10">
              {steps.map(({ num, label }) => (
                <div key={num} className="flex flex-col items-center gap-2 flex-1">
                  <div
                    className={cn(
                      "h-10 w-10 rounded-full flex items-center justify-center text-sm font-medium border transition-all duration-300",
                      step >= num
                        ? "bg-gold text-background border-gold"
                        : "border-border text-muted"
                    )}
                  >
                    {num}
                  </div>
                  <span
                    className={cn(
                      "text-xs tracking-wider uppercase hidden sm:block",
                      step >= num ? "text-gold" : "text-muted"
                    )}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {confirmed ? (
              <div className="text-center py-12 border border-gold/30 rounded-sm bg-gold/5">
                <CheckCircle2 className="mx-auto text-gold mb-4" size={48} />
                <h3 className="font-serif text-2xl mb-2">¡Reserva enviada!</h3>
                <p className="text-muted mb-6">
                  Te redirigimos a WhatsApp para confirmar tu turno. Si no se abrió,
                  contactanos directamente.
                </p>
                <Button onClick={() => { setConfirmed(false); setStep(1); }}>
                  Nueva reserva
                </Button>
              </div>
            ) : (
              <div className="border border-border rounded-sm bg-background p-6 md:p-8">
                {step === 1 && (
                  <div>
                    <h3 className="font-serif text-xl mb-6">Elegí tu servicio</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => setServiceId(service.id)}
                          className={cn(
                            "text-left p-4 rounded-sm border transition-all duration-300",
                            serviceId === service.id
                              ? "border-gold bg-gold/10 text-gold-light"
                              : "border-border hover:border-gold/40 text-muted"
                          )}
                        >
                          <span className="block font-medium text-foreground mb-1">
                            {service.title}
                          </span>
                          <span className="text-xs">{service.duration}</span>
                        </button>
                      ))}
                    </div>
                    <div className="mt-8 flex justify-end">
                      <Button
                        onClick={() => setStep(2)}
                        disabled={!canProceedStep1}
                      >
                        Siguiente
                      </Button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h3 className="font-serif text-xl mb-6">Elegí la fecha</h3>
                    <div className="flex justify-center">
                      <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={isDateDisabled}
                        locale={es}
                        weekStartsOn={1}
                      />
                    </div>
                    <div className="mt-8 flex justify-between">
                      <Button variant="ghost" onClick={() => setStep(1)}>
                        Atrás
                      </Button>
                      <Button
                        onClick={() => { setTime(undefined); setStep(3); }}
                        disabled={!canProceedStep2}
                      >
                        Siguiente
                      </Button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h3 className="font-serif text-xl mb-2">Elegí el horario</h3>
                    {date && (
                      <p className="text-muted text-sm mb-6 capitalize">
                        {formatBookingDate(date)}
                      </p>
                    )}
                    {slots.length === 0 ? (
                      <p className="text-muted text-center py-8">
                        No hay horarios disponibles para esta fecha. Elegí otro día.
                      </p>
                    ) : (
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                        {slots.map((slot) => (
                          <button
                            key={slot}
                            onClick={() => setTime(slot)}
                            className={cn(
                              "py-3 rounded-sm border text-sm transition-all duration-300",
                              time === slot
                                ? "border-gold bg-gold/10 text-gold-light"
                                : "border-border hover:border-gold/40 text-muted"
                            )}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    )}
                    <div className="mt-8 flex justify-between">
                      <Button variant="ghost" onClick={() => setStep(2)}>
                        Atrás
                      </Button>
                      <Button
                        onClick={() => setStep(4)}
                        disabled={!canProceedStep3}
                      >
                        Siguiente
                      </Button>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div>
                    <h3 className="font-serif text-xl mb-6">Tus datos</h3>
                    <div className="bg-surface rounded-sm border border-border p-4 mb-6 text-sm space-y-1">
                      <p>
                        <span className="text-muted">Servicio:</span>{" "}
                        {selectedService.title}
                      </p>
                      {date && (
                        <p className="capitalize">
                          <span className="text-muted">Fecha:</span>{" "}
                          {formatBookingDate(date)}
                        </p>
                      )}
                      {time && (
                        <p>
                          <span className="text-muted">Hora:</span> {time}
                        </p>
                      )}
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="booking-name" className="block text-xs tracking-widest uppercase text-muted mb-2">
                          Nombre completo
                        </label>
                        <input
                          id="booking-name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-surface border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-gold/50 transition-colors"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label htmlFor="booking-phone" className="block text-xs tracking-widest uppercase text-muted mb-2">
                          Teléfono / WhatsApp
                        </label>
                        <input
                          id="booking-phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-surface border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-gold/50 transition-colors"
                          placeholder="+54 11 ..."
                        />
                      </div>
                    </div>
                    <div className="mt-8 flex justify-between">
                      <Button variant="ghost" onClick={() => setStep(3)}>
                        Atrás
                      </Button>
                      <Button onClick={handleConfirm} disabled={!canConfirm}>
                        Confirmar por WhatsApp
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
