"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { navigationLinks } from "@/lib/navigation";
import { siteConfig } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "glass-header shadow-md border-b border-brand-border py-2.5"
            : "bg-white/95 backdrop-blur-sm border-b border-brand-border/60 py-3.5"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-orange rounded-lg py-1"
          >
            <div className="relative h-20 w-72 sm:h-24 sm:w-96 md:h-24 md:w-[420px] lg:h-24 lg:w-[460px] transition-transform duration-200 group-hover:scale-[1.02]">
              <Image
                src="/vbrlogo.png"
                alt="VBR Developers Logo"
                fill
                priority
                sizes="(max-width: 640px) 288px, (max-width: 1024px) 420px, 460px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2"
          >
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-md transition-colors ${
                    isActive
                      ? "text-brand-orange bg-brand-orange-light font-bold"
                      : "text-brand-midnight hover:text-brand-orange hover:bg-brand-cream/60"
                  }`}
                >
                  {link.title}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={siteConfig.telLink}
              className="hidden xl:flex items-center gap-2 text-sm font-bold text-brand-midnight hover:text-brand-orange transition-colors px-2 py-1"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              <span>{siteConfig.displayPhone}</span>
            </a>
            <Button href="/contact" variant="primary" size="sm">
              Enquire Now
            </Button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="sm:hidden text-xs px-2.5 py-1.5"
            >
              Enquire
            </Button>
            <button
              type="button"
              id="mobile-menu-toggle"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-brand-midnight hover:bg-brand-cream focus:outline-none focus:ring-2 focus:ring-brand-orange"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-brand-midnight" />
              ) : (
                <Menu className="w-6 h-6 text-brand-midnight" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 lg:hidden flex flex-col bg-brand-midnight/60 backdrop-blur-sm"
        >
          <div className="w-full max-w-sm ml-auto h-full bg-white flex flex-col shadow-2xl p-6 overflow-y-auto">
            {/* Drawer Top */}
            <div className="flex items-center justify-between pb-4 border-b border-brand-border">
              <div className="relative h-14 w-52">
                <Image
                  src="/vbrlogo.png"
                  alt="VBR Developers"
                  fill
                  sizes="208px"
                  className="object-contain object-left"
                />
              </div>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-brand-midnight hover:bg-brand-cream focus:outline-none focus:ring-2 focus:ring-brand-orange"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex-1 py-6 space-y-1">
              {navigationLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                      isActive
                        ? "bg-brand-orange-light text-brand-orange font-bold"
                        : "text-brand-midnight hover:bg-brand-cream"
                    }`}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </nav>

            {/* Bottom Actions inside Drawer */}
            <div className="pt-4 border-t border-brand-border space-y-3">
              <a
                href={siteConfig.telLink}
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-brand-cream text-brand-midnight font-semibold text-sm hover:bg-brand-border/60 transition-colors"
              >
                <Phone className="w-5 h-5 text-brand-orange" />
                <span>Call {siteConfig.displayPhone}</span>
              </a>

              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#EEF7EB] text-brand-green-dark font-semibold text-sm hover:bg-[#DFF1D9] transition-colors"
              >
                <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
                <span>WhatsApp Enquiry</span>
              </a>

              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request a Callback
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
