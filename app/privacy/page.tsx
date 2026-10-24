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

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border shadow-sm space-y-8 text-brand-slate leading-relaxed">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-orange bg-brand-orange/20 border border-brand-orange/40 px-3 py-1 rounded-full">
              Legal &amp; Data Transparency
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-midnight mt-3">
              Privacy Policy
            </h1>
            <p className="text-xs text-brand-muted mt-2">
              Effective Date: October 2026 | Applicable to VBR Developers and associated digital touchpoints
            </p>
          </div>

          <section className="space-y-3 pt-6 border-t border-brand-border">
            <h2 className="font-heading font-bold text-xl text-brand-midnight">
              1. Introduction &amp; Commitment
            </h2>
            <p className="text-sm">
              At <strong>{siteConfig.name}</strong>, we respect your personal privacy and are committed to protecting any personal data you share with us. This Privacy Policy details how we collect, store, handle, and utilize information gathered through our website, WhatsApp interaction channels, telephone calls, and physical office visits at Nagole X Roads, Hyderabad.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-brand-midnight">
              2. Information We Collect
            </h2>
            <p className="text-sm">
              When prospective property buyers or investors interact with {siteConfig.name}, we may collect the following details:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1.5 text-brand-slate/90">
              <li><strong>Contact Information:</strong> Full name, telephone/mobile number, email address, and residential city.</li>
              <li><strong>Project Preferences:</strong> Specific residential layouts of interest (e.g., Prakruti Vanam, Royal Serene City Phase 1, Royal Smart City, or general plotted layout enquiries).</li>
              <li><strong>Communication Preferences:</strong> Preferred mode of contact, such as direct telephone call, WhatsApp message, or email.</li>
              <li><strong>Enquiry Details:</strong> Specific queries regarding plot dimensions, layout approvals, DTCP reference verifications, pricing guidelines, or site tour requests.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-brand-midnight">
              3. Purpose &amp; Use of Information
            </h2>
            <p className="text-sm">
              The information collected is strictly utilized for legitimate property consultation purposes:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1.5 text-brand-slate/90">
              <li>To answer your specific layout enquiries and share relevant plot brochures, pricing sheets, and location plans.</li>
              <li>To verify DTCP approval details (including LP references such as LP No. 55/2017/H for Royal Smart City).</li>
              <li>To schedule and coordinate in-person site visits to our completed residential layout developments across Telangana.</li>
              <li>To facilitate seamless communication via WhatsApp or phone between you and our development advisors.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-brand-midnight">
              4. WhatsApp &amp; Electronic Communication
            </h2>
            <p className="text-sm">
              When you submit a contact request or initiate a WhatsApp chat through our website, your messages are processed in accordance with standard end-to-end encrypted messaging protocols. We do not transmit unsolicited marketing spam, and you may request cessation of electronic communications at any time.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-brand-midnight">
              5. Non-Disclosure &amp; Information Security
            </h2>
            <p className="text-sm">
              We uphold strict confidentiality. <strong>We do not sell, rent, trade, or distribute your personal data to external marketing agencies or unverified third parties.</strong> Personal enquiry information is restricted to authorized sales managers, project coordinators, and executive leadership at VBR Developers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-brand-midnight">
              6. Data Rights &amp; Contact Information
            </h2>
            <p className="text-sm">
              You retain the right to review, rectify, or request removal of your personal information from our prospective client registry. For any privacy queries or data requests, please contact our corporate office:
            </p>
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
