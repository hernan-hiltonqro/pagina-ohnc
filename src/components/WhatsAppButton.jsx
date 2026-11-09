import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  return (
    <a
      href="#contacto"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-neutral-950 shadow-xl transition hover:scale-105 hover:bg-emerald-400"
      aria-label="Contacto por WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
};