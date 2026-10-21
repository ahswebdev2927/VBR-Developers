"use client";

import React, { useState } from "react";
import { PhoneCall } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export default function CallFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <aside
      aria-label="Direct telephone call"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 group"
    >
      {/* Button Container with Radar / Ping Rings */}
      <div className="relative flex items-center justify-center">
        {/* Radar Ring 1 */}
        <span
          className="absolute inset-0 rounded-full bg-brand-orange opacity-75 animate-ping pointer-events-none"
          style={{ animationDuration: "2s" }}
        />

        {/* Radar Ring 2 (Staggered Ping) */}
        <span
          className="absolute -inset-1.5 rounded-full border-2 border-brand-orange opacity-60 animate-ping pointer-events-none"
          style={{ animationDuration: "2.8s", animationDelay: "0.6s" }}
        />

        {/* Pulsing Soft Glow Background */}
        <span className="absolute -inset-1 rounded-full bg-brand-orange/40 blur-sm animate-pulse pointer-events-none" />

        {/* Actual Clickable Button */}
        <a
          id="floating-call-btn"
          href={siteConfig.telLink}
          aria-label={`Call VBR Developers at ${siteConfig.displayPhone}`}
          aria-describedby="call-tooltip"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="relative z-10 w-14 h-14 rounded-full bg-brand-navy text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:bg-brand-orange hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-orange/50 border-2 border-white/80"
        >
          <PhoneCall className="w-6 h-6 animate-pulse" />
        </a>
      </div>

      {/* Tooltip on Desktop */}
      <span
        role="tooltip"
        id="call-tooltip"
        className={`hidden md:block bg-brand-midnight text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg pointer-events-none transition-all duration-200 border border-brand-border/20 ${
          showTooltip ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
        }`}
      >
        Call VBR Developers ({siteConfig.displayPhone})
      </span>
    </aside>
  );
}
