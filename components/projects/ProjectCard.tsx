import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { Project } from "@/lib/projects";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-brand-border hover:border-brand-orange/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Image Area */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-midnight">
        <Image
          src={project.coverImage}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {project.approvalType && (
            <Badge variant={project.approvalType.includes("DTCP") ? "green" : "navy"}>
              {project.approvalType}
            </Badge>
          )}
          {project.acreageDisplay && (
            <Badge variant="orange">{project.acreageDisplay}</Badge>
          )}
        </div>

        {/* Status Tag */}
        <div className="absolute bottom-3 right-3 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-brand-midnight/90 text-white backdrop-blur-sm border border-white/20">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
            {project.status}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex-1">
          {/* Location */}
          {project.location ? (
            <div className="flex items-center gap-1.5 text-xs font-medium text-brand-muted mb-2">
              <MapPin className="w-3.5 h-3.5 text-brand-orange" />
              <span>{project.location}</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-xs font-medium text-brand-muted mb-2">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>Location on enquiry</span>
            </div>
          )}

          {/* Title */}
          <h3 className="font-heading font-bold text-xl text-brand-midnight group-hover:text-brand-orange transition-colors">
            <Link href={`/projects/${project.slug}`}>{project.name}</Link>
          </h3>

          {/* LP or Special tag if available */}
          {project.approvalNumber && (
            <p className="mt-1 text-xs font-semibold text-[#8C6D23]">
              Approval Ref: {project.approvalNumber}
            </p>
          )}

          {/* Description */}
          <p className="mt-3 text-sm text-brand-muted leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <ul className="mt-4 space-y-1.5 border-t border-brand-border/60 pt-3">
              {project.highlights.slice(0, 2).map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-xs text-brand-slate/80"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Card Action Footers */}
        <div className="mt-6 pt-4 border-t border-brand-border flex items-center justify-between gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy hover:text-brand-orange transition-colors"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Button
            href={`/contact?project=${encodeURIComponent(project.name)}`}
            variant="primary"
            size="sm"
            className="text-xs py-1.5 px-3"
          >
            Enquire Now
          </Button>
        </div>
      </div>
    </article>
  );
}
