import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import Button from "@/components/ui/Button";
import { getFeaturedProjects } from "@/lib/projects";

export default function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="py-20 lg:py-24 bg-brand-cream/40">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Portfolio Showcase"
          title="Our Completed Projects"
          subtitle="Explore our completed plotted developments and discover the locations that may be right for your next property decision."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {featured.map((project) => (
            <div key={project.slug} className="h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button href="/projects" variant="outline" size="lg">
            <span>View All Projects &amp; Upcoming Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
