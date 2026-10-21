import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={`max-w-3xl mb-12 ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-block text-xs md:text-sm font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${
            isDark
              ? "bg-brand-orange/20 text-brand-orange border border-brand-orange/40"
              : "bg-brand-orange-light text-brand-orange border border-brand-orange/30"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight ${
          isDark ? "text-white" : "text-brand-midnight"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-slate-300" : "text-brand-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
