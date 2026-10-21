import Link from "next/link";
import { ArrowLeft, Home, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16">
      <div className="container-custom text-center max-w-xl">
        <div className="inline-block p-4 rounded-3xl bg-brand-orange-light text-brand-orange mb-6 font-heading font-extrabold text-5xl">
          404
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-midnight">
          Page Not Found
        </h1>

        <p className="mt-3 text-base text-brand-muted leading-relaxed">
          The property page or layout you are looking for may have been moved,
          renamed, or is currently undergoing documentation update.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="primary" size="md">
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Button>

          <Button href="/projects" variant="outline" size="md">
            <span>Explore All Projects</span>
          </Button>

          <Button href={siteConfig.telLink} variant="white" size="md">
            <Phone className="w-4 h-4 text-brand-orange" />
            <span>Call Support</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
