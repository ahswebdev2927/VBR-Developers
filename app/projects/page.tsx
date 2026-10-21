import { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/lib/projects";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Residential Projects",
  description:
    "Explore completed and upcoming residential plotted layouts by VBR Developers including Prakruti Vanam, Royal Serene City Phase 1, and Royal Smart City.",
};

export default function ProjectsPage() {
  const completedProjects = projects.filter(
    (p) => p.status === "Completed Project"
  );
  const otherProjects = projects.filter(
    (p) => p.status !== "Completed Project"
  );

  return (
    <div className="py-12 sm:py-16">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="text-xs text-brand-muted mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-brand-orange">
            Home
          </Link>
          <span>/</span>
          <span className="text-brand-midnight font-bold">Our Projects</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <SectionHeading
            align="left"
            eyebrow="Portfolio &amp; Developments"
            title="Residential Plotted Layouts"
            subtitle="Browse verified completed residential layouts with documented acreages, locations, and DTCP approvals across Telangana."
          />
        </div>

        {/* Section 1: Completed Projects */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-brand-border">
            <div>
              <h2 className="font-heading font-extrabold text-2xl text-brand-midnight">
                Completed Layout Projects
              </h2>
              <p className="text-xs sm:text-sm text-brand-muted mt-1">
                Verified plotted layouts with documented size and approval details.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-green-light text-brand-green-dark border border-brand-green/30">
              {completedProjects.length} Verified Projects
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>

        {/* Section 2: Other Listed Portfolio Layouts */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-brand-border">
            <div>
              <h2 className="font-heading font-extrabold text-2xl text-brand-midnight">
                Additional Portfolio Developments
              </h2>
              <p className="text-xs sm:text-sm text-brand-muted mt-1">
                Listed layout names under VBR Developers open for buyer inquiries.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-orange-light text-brand-orange border border-brand-orange/30">
              Enquiry Available
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>

        {/* Support Banner */}
        <div className="bg-brand-midnight rounded-2xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-brand-orange">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-heading font-extrabold text-2xl">
              Need Verification or Layout Site Visits?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Our Hyderabad property team will share layout maps, land records,
              and coordinate direct field visits for any project of your choice.
            </p>
          </div>
          <Button href="/contact" variant="primary" size="lg" className="flex-shrink-0">
            Contact Project Team
          </Button>
        </div>
      </div>
    </div>
  );
}
