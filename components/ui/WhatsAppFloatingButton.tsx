"use client";

import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { siteConfig } from "@/lib/constants";

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <aside
      aria-label="WhatsApp quick contact"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group"
    >
      {/* Tooltip on Desktop */}
      <span
        role="tooltip"
        id="whatsapp-tooltip"
        className={`hidden md:block bg-brand-midnight text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg pointer-events-none transition-all duration-200 border border-brand-border/20 ${
          showTooltip ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        Chat with us on WhatsApp
      </span>

      {/* Button Container with Radar / Ping Rings */}
      <div className="relative flex items-center justify-center">
        {/* Radar Ring 1 */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none"
          style={{ animationDuration: "2s" }}
        />

        {/* Radar Ring 2 (Staggered Ping) */}
        <span
          className="absolute -inset-1.5 rounded-full border-2 border-[#25D366] opacity-60 animate-ping pointer-events-none"
          style={{ animationDuration: "2.8s", animationDelay: "0.6s" }}
        />

        {/* Pulsing Soft Glow Background */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 blur-sm animate-pulse pointer-events-none" />

        {/* Actual Clickable Button */}
        <a
          id="floating-whatsapp-btn"
          href={siteConfig.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with VBR Developers on WhatsApp"
          aria-describedby="whatsapp-tooltip"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="relative z-10 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
        >
          <FaWhatsapp className="w-8 h-8 text-white fill-current" />
        </a>
      </div>
    </aside>
  );
}
