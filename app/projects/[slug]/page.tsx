import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Calendar,
  Layers,
  FileCheck2,
  CheckCircle2,
  Phone,
  ArrowLeft,
  Share2,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { projects, getProjectBySlug } from "@/lib/projects";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { siteConfig } from "@/lib/constants";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    return {
      title: "Project Not Found | VBR Developers",
    };
  }

  return {
    title: `${project.name} | Residential Plots | VBR Developers`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter((p) => p.slug !== project.slug && p.featured)
    .slice(0, 2);

  return (
    <div className="py-10 sm:py-16">
      <div className="container-custom">
        {/* Breadcrumb & Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <nav className="text-xs text-brand-muted flex items-center gap-2">
            <Link href="/" className="hover:text-brand-orange">
              Home
            </Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-brand-orange">
              Projects
            </Link>
            <span>/</span>
            <span className="text-brand-midnight font-bold">{project.name}</span>
          </nav>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy hover:text-brand-orange"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Project Header Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-brand-border shadow-md mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="orange">{project.status}</Badge>
            {project.approvalType && (
              <Badge variant={project.approvalType.includes("DTCP") ? "green" : "navy"}>
                {project.approvalType}
              </Badge>
            )}
            {project.approvalNumber && (
              <Badge variant="gold">{project.approvalNumber}</Badge>
            )}
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-midnight">
            {project.name}
          </h1>

          <p className="mt-2 text-base sm:text-lg text-brand-muted font-medium">
            {project.tagline}
          </p>

          {project.location && (
            <div className="mt-4 flex items-center gap-2 text-sm text-brand-slate font-semibold">
              <MapPin className="w-4 h-4 text-brand-orange" />
              <span>
                {project.location}
                {project.district ? `, ${project.district}` : ""}
              </span>
            </div>
          )}
        </div>

        {/* Main Content & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Column (Col 8) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Primary Cover Image */}
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-lg border border-brand-border bg-brand-midnight">
              <Image
                src={project.coverImage}
                alt={project.name}
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Quick Specs Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-brand-cream/50 border border-brand-border text-center">
              <div className="p-3 bg-white rounded-xl shadow-xs">
                <Layers className="w-5 h-5 text-brand-orange mx-auto mb-1" />
                <p className="text-[11px] uppercase font-bold text-slate-500">
                  Project Size
                </p>
                <p className="font-heading font-bold text-sm sm:text-base text-brand-midnight mt-0.5">
                  {project.acreageDisplay || "On Enquiry"}
                </p>
              </div>

              <div className="p-3 bg-white rounded-xl shadow-xs">
                <FileCheck2 className="w-5 h-5 text-brand-green mx-auto mb-1" />
                <p className="text-[11px] uppercase font-bold text-slate-500">
                  Approval
                </p>
                <p className="font-heading font-bold text-xs sm:text-sm text-brand-midnight mt-0.5">
                  {project.approvalType || "Plotted Layout"}
                </p>
              </div>

              <div className="p-3 bg-white rounded-xl shadow-xs">
                <Calendar className="w-5 h-5 text-brand-navy mx-auto mb-1" />
                <p className="text-[11px] uppercase font-bold text-slate-500">
                  Timeline
                </p>
                <p className="font-heading font-bold text-xs sm:text-sm text-brand-midnight mt-0.5">
                  {project.year ? `Year ${project.year}` : project.status}
                </p>
              </div>

              <div className="p-3 bg-white rounded-xl shadow-xs">
                <MapPin className="w-5 h-5 text-brand-orange mx-auto mb-1" />
                <p className="text-[11px] uppercase font-bold text-slate-500">
                  Location
                </p>
                <p className="font-heading font-bold text-xs sm:text-sm text-brand-midnight mt-0.5 line-clamp-1">
                  {project.location || "Telangana"}
                </p>
              </div>
            </div>

            {/* Project Overview */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-border shadow-sm space-y-4">
              <h2 className="font-heading font-bold text-2xl text-brand-midnight">
                Project Overview
              </h2>
              <p className="text-base sm:text-lg text-brand-slate leading-relaxed">
                {project.longDescription}
              </p>

              {project.highlights && project.highlights.length > 0 && (
                <div className="pt-4 border-t border-brand-border">
                  <h3 className="font-heading font-bold text-base text-brand-midnight mb-3">
                    Key Project Highlights
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2.5 text-sm text-brand-slate"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Gallery Section */}
            {project.gallery && project.gallery.length > 1 && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-border shadow-sm space-y-4">
                <h2 className="font-heading font-bold text-2xl text-brand-midnight">
                  Layout Photographs &amp; Landmarks
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-[16/10] rounded-xl overflow-hidden border border-brand-border bg-brand-midnight"
                    >
                      <Image
                        src={img}
                        alt={`${project.name} layout view ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky Sidebar Form Column (Col 4) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <EnquiryForm
              defaultProject={project.name}
              source={`Project Detail - ${project.name}`}
            />

            {/* Direct Call Card */}
            <div className="p-6 rounded-2xl bg-brand-midnight text-white border-2 border-brand-orange">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base">
                    Speak With Project Head
                  </h4>
                  <p className="text-xs text-slate-300">
                    Immediate guidance &amp; site visit booking
                  </p>
                </div>
              </div>

              <a
                href={siteConfig.telLink}
                className="block text-center w-full py-2.5 rounded-lg bg-white text-brand-midnight font-heading font-bold text-sm hover:bg-brand-cream transition-colors mt-2"
              >
                Call {siteConfig.displayPhone}
              </a>

              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#25D366] text-white font-heading font-bold text-sm hover:bg-[#20ba59] transition-colors mt-2"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
              <div className="p-6 rounded-2xl bg-white border border-brand-border">
                <h4 className="font-heading font-bold text-base text-brand-midnight mb-3">
                  Other Completed Layouts
                </h4>
                <div className="space-y-3">
                  {relatedProjects.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/projects/${rel.slug}`}
                      className="group block p-3 rounded-xl bg-brand-ivory hover:bg-brand-cream border border-brand-border/60 transition-colors"
                    >
                      <p className="font-heading font-bold text-sm text-brand-midnight group-hover:text-brand-orange">
                        {rel.name}
                      </p>
                      <p className="text-xs text-brand-muted mt-0.5">
                        {rel.acreageDisplay} {rel.location ? `• ${rel.location}` : ""}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
