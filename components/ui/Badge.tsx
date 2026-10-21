import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "navy" | "orange" | "green" | "gold" | "outline";
  className?: string;
}

export default function Badge({
  children,
  variant = "navy",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    navy: "bg-brand-navy/10 text-brand-navy border-brand-navy/20",
    orange: "bg-brand-orange-light text-brand-orange border-brand-orange/30 font-medium",
    green: "bg-brand-green-light text-brand-green-dark border-brand-green/30 font-medium",
    gold: "bg-[#FFF8E7] text-[#9A7328] border-[#E8D49E] font-medium",
    outline: "bg-transparent text-brand-slate border-brand-border",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full border tracking-wide uppercase ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
