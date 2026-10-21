import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions of use for the VBR Developers website.",
};

export default function TermsPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="container-custom max-w-4xl">
        {/* Breadcrumb */}
        <nav className="text-xs text-brand-muted mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-brand-orange">
            Home
          </Link>
          <span>/</span>
          <span className="text-brand-midnight font-bold">Terms &amp; Conditions</span>
        </nav>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border shadow-sm space-y-6 text-brand-slate leading-relaxed">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-midnight">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs text-brand-muted">
            Last Updated: October 2026
          </p>

          <section className="space-y-3 pt-4 border-t border-brand-border">
            <h2 className="font-heading font-bold text-xl text-brand-midnight">
              1. Website Informational Purpose
            </h2>
            <p className="text-sm">
              The content provided on this website is for general informational
              purposes regarding residential plotted layouts developed by{" "}
              {siteConfig.name}. While we strive to maintain accurate
              specifications and approval references, visitors are advised to
              verify formal legal documentation and physical site conditions
              directly with our sales office.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-brand-midnight">
              2. Intellectual Property
            </h2>
            <p className="text-sm">
              All branding, logos, graphics, text content, and layout
              photographs on this website are the property of {siteConfig.name}{" "}
              and protected by applicable copyright and trademark regulations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-brand-midnight">
              3. Layout Approvals &amp; Documentation
            </h2>
            <p className="text-sm">
              Specific project approvals (such as DTCP layout references or LP
              numbers) mentioned on project pages correspond to the respective
              government clearances as documented in our records. Any prospective
              buyer has the right to inspect original sanctioned layout copies at
              our corporate office.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-brand-midnight">
              4. Governing Law &amp; Jurisdiction
            </h2>
            <p className="text-sm">
              These terms are governed by and construed in accordance with the
              laws of the State of Telangana and the Republic of India. Any
              disputes shall be subject to the exclusive jurisdiction of the
              courts in Hyderabad, Telangana.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
