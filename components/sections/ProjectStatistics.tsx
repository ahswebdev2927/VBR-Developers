"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { siteConfig } from "@/lib/constants";

export default function ProjectStatistics() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="py-16 bg-brand-midnight text-white relative overflow-hidden border-y border-brand-orange/30"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
          {siteConfig.stats.map((stat, idx) => (
            <div key={idx} className="px-4 py-6 md:py-2">
              <div className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-brand-orange">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    decimals={stat.decimals || 0}
                    duration={2.2}
                    suffix={stat.suffix}
                  />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <h3 className="mt-3 text-lg font-bold text-white tracking-wide">
                {stat.label}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-300">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-400 italic">
          *Figures represent verified projects documented in our portfolio and verified business disclosures.
        </p>
      </div>
    </section>
  );
}
