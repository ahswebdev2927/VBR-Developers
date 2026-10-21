import HeroSection from "@/components/sections/HeroSection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ProjectStatistics from "@/components/sections/ProjectStatistics";
import AboutSection from "@/components/sections/AboutSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import GallerySection from "@/components/sections/GallerySection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";
import EnquiryForm from "@/components/forms/EnquiryForm";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Featured Completed Projects */}
      <FeaturedProjects />

      {/* 3. Verified Statistics Strip */}
      <ProjectStatistics />

      {/* 4. About VBR Developers Overview */}
      <AboutSection />

      {/* 5. Why Choose VBR Developers */}
      <WhyChooseUs />

      {/* 6. Layout Showcase Gallery */}
      <GallerySection limit={6} />

      {/* 7. Homepage Direct Enquiry Section */}
      <section className="py-20 lg:py-24 bg-brand-cream/30 border-y border-brand-border/60">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Direct Enquiry"
            title="Speak With Our Property Specialists"
            subtitle="Request complete project brochures, DTCP layout maps, or schedule an in-person layout visit."
          />
          <div className="max-w-2xl mx-auto">
            <EnquiryForm source="Homepage Enquiry Section" />
          </div>
        </div>
      </section>

      {/* 8. Frequently Asked Questions */}
      <FAQSection />

      {/* 9. Final High-Converting CTA Banner */}
      <FinalCTA />
    </>
  );
}
