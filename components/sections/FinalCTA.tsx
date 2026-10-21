import React from "react";
import { ArrowRight, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-r from-brand-midnight via-brand-navy to-brand-midnight text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-orange/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-brand-green/10 blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10 text-center max-w-4xl mx-auto space-y-6">
        <span className="inline-block text-xs uppercase font-extrabold tracking-widest text-brand-orange bg-brand-orange/20 border border-brand-orange/40 px-3.5 py-1.5 rounded-full">
          Take the Next Step
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Your Next Property Decision Starts Here.
        </h2>

        <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto">
          Explore our completed projects or speak with the VBR Developers team to
          learn more about the layouts that interest you.
        </p>

        <p className="text-sm italic font-serif text-brand-orange">
          &quot;{siteConfig.tagline}&quot;
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Button href="/projects" variant="primary" size="lg">
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Button>

          <Button
            href={siteConfig.telLink}
            variant="white"
            size="lg"
            className="gap-2"
          >
            <Phone className="w-4 h-4 text-brand-orange" />
            <span>Call {siteConfig.displayPhone}</span>
          </Button>

          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#25D366] text-white font-heading font-semibold hover:bg-[#20ba59] transition-all text-sm sm:text-base shadow-md"
          >
            <FaWhatsapp className="w-5 h-5 text-white" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>

        <div className="pt-8 text-xs text-slate-400 border-t border-white/10 mt-8 max-w-lg mx-auto">
          <p>Office: {siteConfig.address.full}</p>
          <p className="mt-1">Timings: {siteConfig.officeTimings}</p>
        </div>
      </div>
    </section>
  );
}
