"use client";

import { salonInfo } from "@/data/salon";
import { buildWhatsAppUrl } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const url = buildWhatsAppUrl(
    salonInfo.whatsapp,
    `Hola ${salonInfo.name}, me gustaría consultar por un turno.`
  );

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-transform duration-300 hover:scale-110 hover:shadow-[0_6px_30px_rgba(37,211,102,0.5)]"
    >
      <MessageCircle className="h-7 w-7" fill="white" strokeWidth={0} />
    </a>
  );
}
