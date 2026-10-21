"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, MapPin, Award } from "lucide-react";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-[82vh] lg:min-h-[88vh] flex items-center justify-center overflow-hidden bg-brand-midnight">
      {/* Background Plotted Landscape with Responsive Dark Navy Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/layout-hero.svg"
          alt="Residential Plotted Layouts - VBR Developers"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-85 scale-105 animate-pulse duration-1000"
        />
        {/* Subtle Dark Forest/Navy Gradient for pristine contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-midnight/95 via-brand-navy/90 to-brand-midnight/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight via-transparent to-brand-midnight/40" />
      </div>

      <div className="container-custom relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content (Col 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs sm:text-sm font-bold tracking-widest uppercase backdrop-blur-md"
            >
              <Award className="w-4 h-4" />
              <span>Trusted Plotted Developments in Telangana</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Find the Right Plot. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-[#FF9254] to-yellow-300">
                Build the Future You Imagine.
              </span>
            </h1>

            {/* Subtitle with authentic brand mission */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal">
              Discover thoughtfully developed residential layouts from VBR
              Developers. Explore our completed projects and take the next step
              towards owning a place you can call your own.
            </p>

            {/* Tagline quote */}
            <p className="text-sm sm:text-base italic font-serif text-brand-orange/90">
              &quot;{siteConfig.tagline}&quot;
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="/projects" variant="primary" size="lg">
                <span>Explore Our Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button
                href={siteConfig.telLink}
                variant="white"
                size="lg"
                className="gap-2"
              >
                <Phone className="w-4 h-4 text-brand-orange" />
                <span>Talk to Our Team</span>
              </Button>
            </div>

            {/* Supporting Trust Badge Strip */}
            <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-green" />
                <span>Completed Layout Projects</span>
              </div>
              <div className="hidden sm:block text-slate-500">•</div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-orange" />
                <span>Local Telangana Expertise</span>
              </div>
              <div className="hidden sm:block text-slate-500">•</div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-yellow-400" />
                <span>Personalised Assistance</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Snapshot / Highlights Card (Col 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl glass-dark border border-white/20 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-xs uppercase font-bold text-brand-orange tracking-wider">
                    Quick Portfolio Snapshot
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5">
                    Verified Completed Layouts
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-brand-green/20 text-brand-green text-xs font-bold border border-brand-green/30">
                  Active
                </span>
              </div>

              <div className="divide-y divide-white/10 text-sm mt-3">
                <div className="py-3 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white">Prakruti Vanam</p>
                    <p className="text-xs text-slate-400">Sharajipet, Alair (2018)</p>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-white/10 text-slate-200">
                    10.5 Acres
                  </span>
                </div>

                <div className="py-3 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white">Royal Serene City Ph 1</p>
                    <p className="text-xs text-brand-green">DTCP-Approved Layout</p>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-white/10 text-slate-200">
                    6 Acres
                  </span>
                </div>

                <div className="py-3 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white">Royal Smart City</p>
                    <p className="text-xs text-yellow-300">DTCP LP: 55/2017/H</p>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-white/10 text-slate-200">
                    23 Acres
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">Nagole X Roads, Hyderabad</p>
                  <p className="text-xs font-bold text-white">{siteConfig.displayPhone}</p>
                </div>
                <Button href="/contact" variant="primary" size="sm">
                  Book Site Discussion
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
