import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and client data handling practices of VBR Developers.",
};

export default function PrivacyPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="container-custom max-w-4xl">
        {/* Breadcrumb */}
        <nav className="text-xs text-brand-muted mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-brand-orange">
            Home
          </Link>
          <span>/</span>
          <span className="text-brand-midnight font-bold">Privacy Policy</span>
        </nav>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border shadow-sm space-y-6 text-brand-slate leading-relaxed">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-midnight">
            Privacy Policy
          </h1>
          <p className="text-xs text-brand-muted">
            Last Updated: October 2026
          </p>

          <section className="space-y-3 pt-4 border-t border-brand-border">
            <h2 className="font-heading font-bold text-xl text-brand-midnight">
              1. Information We Collect
            </h2>
            <p className="text-sm">
              When you submit an enquiry through the {siteConfig.name} website,
              we may collect personal details including your full name, telephone
              number, email address, preferred communication channel, and your
              project of interest.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-brand-midnight">
              2. How We Use Your Information
            </h2>
            <p className="text-sm">
              The information you provide is used solely to respond to your
              property enquiries, provide project brochures and documentation,
              and coordinate site visits. We do not sell, rent, or trade your
              personal information to third-party marketing entities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-brand-midnight">
              3. Data Protection &amp; Confidentiality
            </h2>
            <p className="text-sm">
              We apply industry-standard measures to safeguard your personal
              information submitted via online forms. Access to enquiry records is
              limited to authorized VBR Developers sales and advisory personnel.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-brand-midnight">
              4. Contact for Privacy Inquiries
            </h2>
            <p className="text-sm">
              If you have any questions regarding your personal details or wish
              to have your contact records updated or removed, please contact us
              at:
            </p>
            <div className="p-4 rounded-xl bg-brand-ivory text-xs space-y-1">
              <p className="font-bold text-brand-midnight">{siteConfig.name}</p>
              <p>{siteConfig.address.full}</p>
              <p>Email: {siteConfig.email}</p>
              <p>Phone: {siteConfig.displayPhone}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
