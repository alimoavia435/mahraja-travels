import { MessageCircle } from "lucide-react";

const WHATSAPP = "447000000000";

export const WhatsAppFab = () => (
  <a
    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hello Maharaj Travelling, I'd like to plan a trip.")}`}
    target="_blank"
    rel="noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-40 group"
  >
    <span className="absolute inset-0 rounded-full bg-whatsapp/40 animate-ping" />
    <span className="relative h-14 w-14 rounded-full bg-whatsapp text-white grid place-items-center shadow-elevated hover:scale-110 transition-transform duration-300">
      <MessageCircle className="h-6 w-6" />
    </span>
    <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs px-3 py-2 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-soft pointer-events-none">
      Chat with us
    </span>
  </a>
);
