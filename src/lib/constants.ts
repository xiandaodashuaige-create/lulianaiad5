export const WHATSAPP_NUMBER = "+60 10-651 9843";
export const WHATSAPP_LINK = "https://wa.me/60106519843?text=您好，我想了解鹿联AI广告服务";

export const GOOGLE_ADS_CONVERSION_ID = "AW-18094778968/h91ICOKJvaAcENjUobRD";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackWhatsAppClick() {
  if (typeof window !== "undefined") {
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: GOOGLE_ADS_CONVERSION_ID,
        event_category: "engagement",
        event_label: "whatsapp_click",
      });
    }
    if (typeof window.fbq === "function") {
      window.fbq("track", "Contact");
    }
  }
}
