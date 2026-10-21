import { Metadata } from "next";
import Link from "next/link";
import GallerySection from "@/components/sections/GallerySection";

export const metadata: Metadata = {
  title: "Layout Photographs & Gallery",
  description:
    "View layout photographs, entrance arch designs, and internal road infrastructures of VBR Developers completed residential plotted projects.",
};

export default function GalleryPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="text-xs text-brand-muted mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-brand-orange">
            Home
          </Link>
          <span>/</span>
          <span className="text-brand-midnight font-bold">Project Gallery</span>
        </nav>

        <GallerySection />
      </div>
    </div>
  );
}
