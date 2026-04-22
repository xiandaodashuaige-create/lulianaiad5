export const WHATSAPP_NUMBER = "+60 10-651 9843";
export const WHATSAPP_LINK = "https://wa.me/60106519843?text=您好，我想了解鹿联AI广告服务";

// Google Ads 转化追踪：替换为你的「转化 ID/转化标签」
// 格式示例：'AW-1234567890/AbCdEfGhIjKlMnOp'
export const GOOGLE_ADS_CONVERSION_ID = "AW-18094778968/h91ICOKJvaAcENjUobRD";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackWhatsAppClick() {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: GOOGLE_ADS_CONVERSION_ID,
      event_category: "engagement",
      event_label: "whatsapp_click",
    });
  }
}
