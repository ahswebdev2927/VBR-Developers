import React from "react";
import Image from "next/image";
import {
  Quote,
  ShieldCheck,
  Compass,
  CheckCircle2,
  Phone,
  ArrowRight,
  MapPin,
  Award,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";

interface FounderSectionProps {
  className?: string;
  theme?: "white" | "ivory";
}

export default function FounderSection({
  className = "",
  theme = "ivory",
}: FounderSectionProps) {
  const bgClass =
    theme === "white"
      ? "bg-white"
      : "bg-gradient-to-b from-brand-ivory via-white to-brand-ivory";

  return (
    <section
      id="founder"
      className={`py-20 lg:py-28 relative overflow-hidden border-y border-brand-border/60 ${bgClass} ${className}`}
    >
      {/* Subtle Background Glow Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-brand-navy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-brand-orange-light text-brand-orange border border-brand-orange/30 mb-3">
            <Award className="w-4 h-4 text-brand-orange" />
            <span>Leadership &amp; Vision</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-brand-midnight">
            Meet Our Founder &amp; Managing Director
          </h2>
          <p className="mt-3 text-base sm:text-lg text-brand-muted leading-relaxed">
            Leading VBR Developers with nearly two decades of real estate
            experience, grounded in thoughtful land selection, transparent
            dealings, and action-first commitments.
          </p>
        </div>

        {/* Balanced 50/50 Grid: Equal Size on Left and Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          {/* Left Column (50% Width): Portrait & Executive Details */}
          <div className="flex flex-col justify-between gap-6">
            {/* Portrait Frame */}
            <div className="relative group w-full">
              <div className="relative w-full aspect-[4/5] sm:aspect-[4/4.8] lg:aspect-[4/4.5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-brand-border bg-brand-midnight">
                <Image
                  src="/images/founder/ravi-kumar-bhethamalla.jpg"
                  alt="Ravi Kumar Bhethamalla - Founder & Managing Director of VBR Developers"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
                />

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/95 backdrop-blur-md text-brand-midnight shadow-lg border border-brand-border/60">
                    <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                    Founder &amp; MD
                  </span>
                </div>
              </div>
            </div>

            {/* Executive Profile & Direct MD Interaction Card */}
            <div className="p-6 rounded-3xl bg-white border border-brand-border shadow-sm flex flex-col justify-between space-y-4">
              {/* Name & Title Header */}
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-heading font-extrabold text-xl text-brand-midnight tracking-tight">
                    Ravi Kumar Bhethamalla
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-brand-orange mt-0.5">
                    Founder &amp; Managing Director | VBR Developers
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-orange-light text-brand-orange border border-brand-orange/30 whitespace-nowrap">
                  Est. 2018
                </span>
              </div>

              {/* Office Location Address */}
              <div className="flex items-center gap-2 text-xs text-brand-muted">
                <MapPin className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                <span>Nagole X Roads Corporate Office, Hyderabad</span>
              </div>

              {/* 2 Core Credential Chips */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-2xl bg-brand-ivory border border-brand-border">
                  <span className="block text-xl sm:text-2xl font-extrabold font-heading text-brand-orange">
                    Since 2007
                  </span>
                  <span className="text-[11px] sm:text-xs font-medium text-brand-muted leading-tight block mt-0.5">
                    18+ Years Real Estate Industry Experience
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-brand-ivory border border-brand-border">
                  <span className="block text-xl sm:text-2xl font-extrabold font-heading text-brand-green-dark">
                    Ground-First
                  </span>
                  <span className="text-[11px] sm:text-xs font-medium text-brand-muted leading-tight block mt-0.5">
                    Major Development Completed Before Launch
                  </span>
                </div>
              </div>

              {/* Direct MD Office Action Buttons */}
              <div className="pt-2 border-t border-brand-border/60 flex items-center gap-3">
                <a
                  href={siteConfig.telLink}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-navy hover:bg-brand-midnight text-white text-xs sm:text-sm font-semibold shadow-sm transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Call MD Office</span>
                </a>
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-semibold shadow-sm transition-colors"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>WhatsApp MD</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (50% Width): Quote, Narrative & CTAs */}
          <div className="flex flex-col justify-between space-y-6">
            {/* Featured Quote Callout */}
            <div className="relative p-6 sm:p-7 rounded-2xl bg-white border-l-4 border-l-brand-orange border-y border-r border-brand-border shadow-sm">
              <Quote className="w-8 h-8 text-brand-orange/20 absolute top-4 right-4" />
              <p className="text-base sm:text-lg font-heading font-semibold text-brand-midnight leading-relaxed italic">
                &ldquo;Keeping our word and delivering what we promise are the
                foundations of our success. At VBR Developers, our approach is to
                complete the major development works before formally launching a
                project, so customers can see our work on the ground.&rdquo;
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-orange">
                <span>Ravi Kumar Bhethamalla</span>
                <span className="text-brand-border">•</span>
                <span className="text-brand-muted font-normal">
                  Founder &amp; Managing Director
                </span>
              </div>
            </div>

            {/* Founder Narrative Paragraphs */}
            <div className="space-y-4 text-brand-slate text-base sm:text-[17px] leading-relaxed">
              <p>
                I began my real estate journey in{" "}
                <strong className="text-brand-midnight font-bold">2007</strong>,
                working in marketing with several real estate companies until
                2018. Those years gave me valuable insights into customer needs,
                market trends, and the importance of choosing the right
                location. Building on that experience, I established{" "}
                <strong className="text-brand-midnight font-bold">
                  VBR Developers in 2018
                </strong>
                .
              </p>

              <p>
                With nearly two decades of experience, I believe every promising
                project begins with{" "}
                <strong className="text-brand-midnight font-bold">
                  thoughtful land selection
                </strong>
                . I pay particular attention to a proper approach road,
                connectivity to main roads, proximity to highways and towns,
                nearby residential communities, and convenient access. I also
                assess the area’s development potential, suitability for future
                living, and the factors that may support future demand and
                resale opportunities.
              </p>

              <p>
                Helping customers understand where to buy and why a location
                matters is central to my approach. By clearly explaining each
                property’s advantages and long-term prospects, we help customers
                make informed decisions that suit their needs.
              </p>

              <p>
                Keeping our word and delivering what we promise are the
                foundations of our success. At VBR Developers, we take
                responsibility for fulfilling every commitment we make. Our
                approach is to{" "}
                <strong className="text-brand-midnight font-bold">
                  complete the major development works we have committed to
                  before formally launching a project
                </strong>
                . We believe customers should be able to see our work on the
                ground when they visit the site. This focus on action,
                accountability, and preparation is a defining strength of our
                company.
              </p>

              <p>
                For me, success means earning and maintaining our customers’
                trust through our actions. My vision is to grow VBR Developers
                through carefully selected locations, fulfilled commitments,
                transparent dealings, and responsible service—helping more
                families achieve their dream of owning land.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="primary">
                <span>Visit Corporate Office</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/projects" variant="outline">
                <span>Explore Completed Layouts</span>
              </Button>
            </div>
          </div>
        </div>

        {/* 4 Guiding Principles Strip - Full Width Foundation */}
        <div className="mt-14 pt-10 border-t border-brand-border/70">
          <div className="text-center sm:text-left mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-brand-orange-light px-3 py-1 rounded-full border border-brand-orange/30">
              Guiding Principles
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-midnight mt-2">
              Foundations Behind Every VBR Project
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-brand-border shadow-xs hover:border-brand-orange/40 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center mb-3">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-base text-brand-midnight mb-1.5">
                Thoughtful Land Selection
              </h4>
              <p className="text-xs text-brand-muted leading-relaxed">
                Prioritizing approach roads, main road connectivity, highway
                links, and high-growth potential corridors.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-brand-border shadow-xs hover:border-brand-green/40 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-brand-green-light text-brand-green-dark flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-base text-brand-midnight mb-1.5">
                Action on the Ground
              </h4>
              <p className="text-xs text-brand-muted leading-relaxed">
                Completing major development works prior to formal launch so
                buyers can physically verify site progress.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-brand-border shadow-xs hover:border-brand-navy/40 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-brand-navy/10 text-brand-navy flex items-center justify-center mb-3">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-base text-brand-midnight mb-1.5">
                Transparent Advisory
              </h4>
              <p className="text-xs text-brand-muted leading-relaxed">
                Guiding buyers clearly on where and why to buy, explaining
                location advantages and long-term prospects.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-brand-border shadow-xs hover:border-brand-orange/40 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-base text-brand-midnight mb-1.5">
                Fulfilled Commitments
              </h4>
              <p className="text-xs text-brand-muted leading-relaxed">
                Taking responsibility for every commitment, earning lasting trust
                through transparent action and accountability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
