"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

interface GalleryItem {
  id: string;
  title: string;
  project: string;
  image: string;
  category: "Roads" | "Plots" | "Entrance";
}

const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Grand Layout Entrance Arch & Security Gate",
    project: "Prakruti Vanam",
    image: "/images/projects/prakruti-vanam/entrance-arch.jpg",
    category: "Entrance",
  },
  {
    id: "g2",
    title: "Wide Internal Blacktop Layout Road with Avenue Plantation",
    project: "Prakruti Vanam",
    image: "/images/projects/prakruti-vanam/avenue-road.jpg",
    category: "Roads",
  },
  {
    id: "g3",
    title: "Organized Plot Demarcation & Boundary Stones",
    project: "Prakruti Vanam",
    image: "/images/projects/prakruti-vanam/demarcation-plots.jpg",
    category: "Plots",
  },
  {
    id: "g4",
    title: "Main Entrance Gateway & Landscaped Entrance",
    project: "Royal Serene City Phase 1",
    image: "/images/projects/royal-serene-phase-1/entrance-gate.jpg",
    category: "Entrance",
  },
  {
    id: "g5",
    title: "Completed Asphalt Internal Layout Roads & Electric Lines",
    project: "Royal Serene City Phase 1",
    image: "/images/projects/royal-serene-phase-1/internal-roads.jpg",
    category: "Roads",
  },
  {
    id: "g6",
    title: "Plotted Development Sectors with Curb Stones",
    project: "Royal Serene City Phase 1",
    image: "/images/projects/royal-serene-phase-1/plotted-sectors.jpg",
    category: "Plots",
  },
  {
    id: "g7",
    title: "23-Acre DTCP Layout Entrance & Welcome Landmark",
    project: "Royal Smart City",
    image: "/images/projects/royal-smart-city/entrance-arch.jpg",
    category: "Entrance",
  },
  {
    id: "g8",
    title: "Spacious Central Layout Main Road",
    project: "Royal Smart City",
    image: "/images/projects/royal-smart-city/main-road.jpg",
    category: "Roads",
  },
  {
    id: "g9",
    title: "Comprehensive Layout Overview & Boundary Development",
    project: "Royal Smart City",
    image: "/images/projects/royal-smart-city/layout-overview.jpg",
    category: "Plots",
  },
];

export default function GallerySection({ limit }: { limit?: number }) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredItems = galleryItems.filter((item) =>
    activeFilter === "All" ? true : item.category === activeFilter
  );

  const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Layout Gallery"
          title="Completed Development Showcase"
          subtitle="Explore layout roads, entrance landmarks, and demarcated plots across our projects in Telangana."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {["All", "Entrance", "Roads", "Plots"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFilter === category
                  ? "bg-brand-orange text-white shadow-md shadow-brand-orange/20"
                  : "bg-brand-ivory text-brand-midnight hover:bg-brand-cream border border-brand-border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-[16/11] rounded-2xl overflow-hidden bg-brand-midnight cursor-pointer border border-brand-border shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight/90 via-brand-midnight/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-bold text-brand-orange uppercase tracking-wider">
                  {item.project}
                </span>
                <h4 className="font-heading font-bold text-sm sm:text-base mt-0.5 line-clamp-1">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {selectedImage && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 bg-brand-midnight/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-brand-midnight rounded-2xl overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close image modal"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-brand-orange transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6 bg-brand-midnight border-t border-white/10 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">
                    {selectedImage.project}
                  </span>
                  <h3 className="font-heading font-bold text-lg">
                    {selectedImage.title}
                  </h3>
                </div>
                <span className="text-xs text-slate-400">
                  Category: {selectedImage.category}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
