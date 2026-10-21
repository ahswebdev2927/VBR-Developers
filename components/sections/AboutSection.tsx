import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase (Col 5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-orange-light">
              <Image
                src="/images/projects/prakruti-vanam/cover.jpg"
                alt="VBR Developers Plotted Layout Execution"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            {/* Overlapping Badge Card */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-6 bg-brand-midnight text-white p-5 rounded-xl shadow-xl max-w-[240px] border-2 border-brand-orange">
              <p className="font-heading font-extrabold text-2xl text-brand-orange">
                Since 2018
              </p>
              <p className="text-xs text-slate-300 mt-1">
                Delivering organized residential plotted layouts across Telangana.
              </p>
            </div>
          </div>

          {/* Editorial Content (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              align="left"
              eyebrow="About VBR Developers"
              title="Building Trust, One Plot at a Time."
              subtitle="VBR Developers helps property buyers explore residential plotted developments in and around Hyderabad and nearby locations. Our completed projects reflect our experience in developing organized layouts and helping customers take informed steps towards their property goals."
              className="mb-6"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-brand-ivory border border-brand-border">
                <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm text-brand-midnight">
                    Documented Layouts
                  </h4>
                  <p className="text-xs text-brand-muted mt-1">
                    Clear physical layouts, internal connectivity roads, and demarcated boundaries.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-brand-ivory border border-brand-border">
                <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm text-brand-midnight">
                    DTCP Approval Track Record
                  </h4>
                  <p className="text-xs text-brand-muted mt-1">
                    Demonstrated execution with verifiable LP numbers (e.g. LP No. 55/2017/H).
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button href="/about" variant="primary">
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/contact" variant="outline">
                <span>Visit Our Office in Nagole</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
