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

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border shadow-sm space-y-8 text-brand-slate leading-relaxed">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-orange bg-brand-orange/20 border border-brand-orange/40 px-3 py-1 rounded-full">
              Terms of Use &amp; Regulatory Disclosures
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-midnight mt-3">
              Terms &amp; Conditions
            </h1>
            <p className="text-xs text-brand-muted mt-2">
              Last Updated: October 2026 | Governing all user interactions with VBR Developers
            </p>
          </div>

          <section className="space-y-3 pt-6 border-t border-brand-border">
            <h2 className="font-heading font-bold text-xl text-brand-midnight">
              1. Website Informational Purpose &amp; Accuracy
            </h2>
            <p className="text-sm">
              The content published on this website is intended solely for general informational guidance regarding residential plotted layouts developed by <strong>{siteConfig.name}</strong>. While every reasonable effort is made to present accurate project sizes, location descriptions, and layout boundaries, all prospective purchasers are strongly advised to inspect original sanctioned layout copies, title deeds, and physical boundary marks directly with our sales team prior to entering into any transaction.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-brand-midnight">
              2. Plotted Layout Approvals &amp; Documentation
            </h2>
            <p className="text-sm">
              References to specific regulatory approvals (such as <strong>DTCP-Approved Layout</strong> status or <strong>LP No. 55/2017/H</strong> for Royal Smart City) represent documented approvals granted by the competent town planning authorities for those respective projects.
            </p>
            <p className="text-sm text-brand-slate/90">
              Prospective buyers are welcome to examine sanctioned layout plans, revenue survey numbers, and municipal approvals in person at our registered office in Nagole X Roads, Hyderabad during regular business hours.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-brand-midnight">
              3. Plot Dimensions, Availability &amp; Commercial Terms
            </h2>
            <p className="text-sm">
              Plot numbers, dimensions, road widths, and layout availability are subject to periodic confirmation based on actual sales records. Website representations do not constitute a formal binding commercial contract or offer of sale. A formal allotment or sale agreement is finalized solely through executed legal documents between the developer and the buyer.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-brand-midnight">
              4. Intellectual Property Rights
            </h2>
            <p className="text-sm">
              All website content, photographs of completed layouts, architectural entrance drawings, logos, brand elements, and written materials are the exclusive intellectual property of {siteConfig.name}. Unauthorized reproduction, commercial distribution, or republication of these assets without written authorization is prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-brand-midnight">
              5. Site Visits &amp; Field Inquiries
            </h2>
            <p className="text-sm">
              Site visits to our completed layouts in Sharajipet (Alair), Wangapally, and related Telangana locations can be scheduled via our website enquiry form, phone call, or WhatsApp. Site inspections are conducted with designated company representatives to ensure transparency and safety.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-brand-midnight">
              6. Governing Law &amp; Jurisdiction
            </h2>
            <p className="text-sm">
              These terms and all matters arising out of or related to website usage and project enquiries are governed by the laws of the State of Telangana and the Republic of India. The courts situated in Hyderabad, Telangana shall have exclusive jurisdiction over any legal proceedings.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-brand-midnight">
              7. Office Address for Regulatory Inquiries
            </h2>
            <div className="p-5 rounded-2xl bg-brand-ivory border border-brand-border text-xs space-y-2">
              <p className="font-bold text-brand-midnight text-sm">{siteConfig.name}</p>
              <p className="text-slate-600">{siteConfig.address.full}</p>
              <p><span className="font-semibold text-brand-midnight">Phone:</span> {siteConfig.displayPhone}</p>
              <p><span className="font-semibold text-brand-midnight">Email:</span> {siteConfig.email}</p>
              <p><span className="font-semibold text-brand-midnight">Office Timings:</span> {siteConfig.officeTimings}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
