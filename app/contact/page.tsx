import { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import SectionHeading from "@/components/ui/SectionHeading";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us & Office Location",
  description:
    "Contact VBR Developers at Nagole X Roads, Hyderabad. Call +91 9666777487 or visit our office for residential plotted development inquiries.",
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="text-xs text-brand-muted mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-brand-orange">
            Home
          </Link>
          <span>/</span>
          <span className="text-brand-midnight font-bold">Contact Us</span>
        </nav>

        <SectionHeading
          align="left"
          eyebrow="Get In Touch"
          title="We're Here to Help You Find Your Next Plot"
          subtitle="Reach out to our Hyderabad development office via telephone, WhatsApp, or through our quick enquiry form."
          className="mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Business Info Column (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-border shadow-md space-y-6">
              <h3 className="font-heading font-extrabold text-xl text-brand-midnight pb-4 border-b border-brand-border">
                Corporate Office Information
              </h3>

              {/* Office Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-brand-midnight">
                    Office Address
                  </h4>
                  <p className="text-sm text-brand-muted mt-1 leading-relaxed">
                    {siteConfig.address.full}
                  </p>
                  <a
                    href={siteConfig.address.googleMapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:underline mt-2"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-navy/10 text-brand-navy flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-brand-midnight">
                    Phone Numbers
                  </h4>
                  <p className="text-sm text-brand-slate font-semibold mt-1">
                    <a
                      href={siteConfig.telLink}
                      className="hover:text-brand-orange transition-colors"
                    >
                      {siteConfig.displayPhone}
                    </a>
                  </p>
                  <p className="text-xs text-brand-muted mt-0.5">
                    Direct call assistance available daily
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-brand-midnight">
                    Email Address
                  </h4>
                  <p className="text-sm text-brand-slate font-semibold mt-1">
                    <a
                      href={siteConfig.mailtoLink}
                      className="hover:text-brand-orange transition-colors break-all"
                    >
                      {siteConfig.email}
                    </a>
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-green-light text-brand-green-dark flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-brand-midnight">
                    Office Hours
                  </h4>
                  <p className="text-sm text-brand-muted mt-1">
                    {siteConfig.officeTimings}
                  </p>
                </div>
              </div>

              {/* Social Media Link */}
              <div className="pt-4 border-t border-brand-border">
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-brand-ivory hover:bg-brand-cream border border-brand-border transition-colors text-sm font-semibold text-brand-midnight"
                >
                  <span>Follow VBR Developers on Facebook</span>
                  <ExternalLink className="w-4 h-4 text-brand-orange" />
                </a>
              </div>
            </div>

            {/* Instant WhatsApp banner */}
            <div className="bg-[#EEF7EB] rounded-2xl p-6 border border-brand-green/30 flex items-center justify-between gap-4">
              <div>
                <h4 className="font-heading font-bold text-base text-brand-green-dark">
                  Prefer WhatsApp?
                </h4>
                <p className="text-xs text-brand-green-dark/80 mt-0.5">
                  Get fast layout details &amp; location coordinates directly.
                </p>
              </div>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-lg bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba59] transition-colors flex items-center gap-1.5 flex-shrink-0 shadow-sm"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Chat Now</span>
              </a>
            </div>
          </div>

          {/* Form Column (Col 7) */}
          <div className="lg:col-span-7">
            <EnquiryForm source="Contact Page" />
          </div>
        </div>
      </div>
    </div>
  );
}
