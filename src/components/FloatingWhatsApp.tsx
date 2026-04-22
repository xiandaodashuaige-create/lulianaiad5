import React from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK, trackWhatsAppClick } from "@/lib/constants";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
      aria-label="WhatsApp 联系我们"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
