import { useEffect } from "react";
import { WHATSAPP_LINK, trackWhatsAppClick } from "@/lib/constants";

const SESSION_KEY = "wa_auto_opened";

export function WhatsAppPrompt() {
  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    // Wait 3 minutes, then redirect to WhatsApp
    const timer = setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, "1");
      trackWhatsAppClick();
      window.location.href = WHATSAPP_LINK;
    }, 3 * 60 * 1000);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
