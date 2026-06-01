import React, { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { WHATSAPP_LINK, WHATSAPP_NUMBER, trackWhatsAppClick } from "@/lib/constants";

const DELAY_MS = 5000;
const SESSION_KEY = "wa_prompt_dismissed";

export function WhatsAppPrompt() {
  const [visible, setVisible] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const timer = setTimeout(() => {
      setVisible(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimateIn(true));
      });
    }, DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  function handleDismiss() {
    setAnimateIn(false);
    sessionStorage.setItem(SESSION_KEY, "1");
    setTimeout(() => setVisible(false), 300);
  }

  function handleClick() {
    trackWhatsAppClick();
    sessionStorage.setItem(SESSION_KEY, "1");
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-24 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      aria-live="polite"
    >
      <div
        className={`
          pointer-events-auto
          flex items-center gap-3
          bg-white border border-gray-200
          rounded-2xl shadow-2xl
          px-4 py-3 max-w-sm w-full
          transition-all duration-300 ease-out
          ${animateIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
      >
        <div className="flex-shrink-0 w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center shadow">
          <MessageCircle className="w-5 h-5 text-white" />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-900 leading-tight">想了解AI获客方案？</p>
          <p className="text-xs text-gray-500 mt-0.5">立即 WhatsApp，30分钟内回复</p>
        </div>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="flex-shrink-0 bg-[#25D366] text-white text-xs font-semibold px-3 py-2 rounded-xl hover:bg-[#1ebe5d] transition-colors whitespace-nowrap"
          aria-label={`WhatsApp 联系 ${WHATSAPP_NUMBER}`}
        >
          立即咨询
        </a>

        <button
          onClick={handleDismiss}
          className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
          aria-label="关闭提示"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
