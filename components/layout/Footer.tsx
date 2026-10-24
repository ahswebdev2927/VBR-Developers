"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { siteConfig } from "@/lib/constants";
import { footerQuickLinks, legalLinks } from "@/lib/navigation";
import { projects } from "@/lib/projects";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const completedProjects = projects.filter(
    (p) => p.status === "Completed Project"
  );

  return (
    <footer className="bg-brand-midnight text-white border-t-4 border-brand-orange">
      {/* Top Banner Accent */}
      <div className="bg-brand-navy/90 border-b border-white/10 py-6">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="font-heading font-bold text-white text-base">
                Transparent &amp; Verified Residential Plotted Layouts
              </p>
              <p className="text-slate-300 text-xs sm:text-sm">
                DTCP approved layouts &amp; documented acreage in Telangana.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.telLink}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              <span>Call: {siteConfig.displayPhone}</span>
            </a>
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] text-xs sm:text-sm font-semibold transition-colors"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Info (Col 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-3.5 rounded-xl inline-block max-w-[320px] shadow-md">
              <div className="relative h-16 w-64 sm:h-20 sm:w-72">
                <Image
                  src="/images/branding/logo.png"
                  alt="VBR Developers"
                  fill
                  sizes="(max-width: 640px) 256px, 288px"
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-sm italic font-serif text-brand-orange">
              &quot;{siteConfig.tagline}&quot;
            </p>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              VBR Developers is a property development company based in
              Hyderabad, delivering thoughtfully planned, completed residential
              plotted layouts with clear records and verified approvals.
            </p>
            <div className="pt-2">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-brand-orange transition-colors"
              >
                <span>Connect on Facebook</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links (Col 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider border-b border-brand-orange/40 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-orange transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-brand-orange" />
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Projects (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider border-b border-brand-orange/40 pb-2 inline-block">
              Completed Layouts
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              {completedProjects.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group block hover:text-brand-orange transition-colors"
                  >
                    <span className="font-semibold text-white group-hover:text-brand-orange transition-colors">
                      {project.name}
                    </span>
                    <span className="block text-xs text-slate-400">
                      {project.acreageDisplay}
                      {project.location ? ` • ${project.location}` : ""}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office & Contact (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider border-b border-brand-orange/40 pb-2 inline-block">
              Office Location
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {siteConfig.address.full}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <a
                  href={siteConfig.telLink}
                  className="hover:text-brand-orange transition-colors"
                >
                  {siteConfig.displayPhone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <a
                  href={siteConfig.mailtoLink}
                  className="hover:text-brand-orange transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span>{siteConfig.officeTimings}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 text-xs text-slate-400">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5 sm:gap-6 font-medium">
            {legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-brand-orange hover:underline transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
