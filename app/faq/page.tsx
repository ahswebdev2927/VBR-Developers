import { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion, { AccordionItem } from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions regarding residential plotted developments, layout approvals, DTCP references, and site visits by VBR Developers.",
};

const fullFaqList: AccordionItem[] = [
  {
    id: "faq-what-is-vbr",
    question: "What is VBR Developers?",
    answer:
      "VBR Developers is a property development company based in Hyderabad, Telangana. We specialize in residential plotted developments and layout projects, focusing on clear documentation, organized planning, and personalized buyer guidance.",
  },
  {
    id: "faq-projects-listed",
    question: "Which completed projects are listed on the website?",
    answer:
      "The completed projects featured on our website include Prakruti Vanam (10.5 acres in Sharajipet, Alair), Royal Serene City Phase 1 (6-acre DTCP-approved layout in Wangapally), and Royal Smart City (23-acre DTCP-approved layout with LP No. 55/2017/H).",
  },
  {
    id: "faq-prakruti-vanam",
    question: "Where is Prakruti Vanam located?",
    answer:
      "Prakruti Vanam is located in Sharajipet, Alair in Telangana. It is a 10.5-acre plotted residential layout project completed in 2018.",
  },
  {
    id: "faq-royal-serene-dtcp",
    question: "Is Royal Serene City Phase 1 a DTCP-approved layout?",
    answer:
      "Yes. Royal Serene City Phase 1 is a verified 6-acre DTCP-approved residential plotted development located in Wangapally.",
  },
  {
    id: "faq-smart-city-lp",
    question: "What is the supplied LP number for Royal Smart City?",
    answer:
      "The supplied DTCP approval LP reference for the 23-acre Royal Smart City development is LP No. 55/2017/H.",
  },
  {
    id: "faq-plot-availability",
    question: "Can I request more information about plot availability and pricing?",
    answer:
      "Yes. Because layout availability and resale or remaining plots can change, we invite prospective buyers to contact our sales team directly at 9666777487 or via our online enquiry form for up-to-date availability and current plot sizes.",
  },
  {
    id: "faq-site-visits",
    question: "How can I arrange a site visit or discussion with the team?",
    answer:
      "You can arrange a site visit by calling our office at +91 9666777487, sending a message on WhatsApp, or visiting our office at Baddam Lalitha Complex, Nagole X Roads, Hyderabad.",
  },
  {
    id: "faq-office-timings",
    question: "What are the office timings for VBR Developers?",
    answer:
      "Our office at Nagole X Roads, Hyderabad is open from 9:00 AM to 8:00 PM, Monday through Sunday.",
  },
];

export default function FAQPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="text-xs text-brand-muted mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-brand-orange">
            Home
          </Link>
          <span>/</span>
          <span className="text-brand-midnight font-bold">Frequently Asked Questions</span>
        </nav>

        <SectionHeading
          eyebrow="Help &amp; Answers"
          title="Frequently Asked Questions"
          subtitle="Clear, verified answers about VBR Developers' completed plotted projects, locations, and documentation."
          className="mb-12"
        />

        <div className="max-w-3xl mx-auto space-y-12">
          <Accordion items={fullFaqList} />

          <div className="p-8 rounded-2xl bg-brand-midnight text-white text-center space-y-4 border-2 border-brand-orange">
            <h3 className="font-heading font-extrabold text-2xl">
              Still Have Questions?
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              Our real estate team in Nagole X Roads is ready to assist you with
              accurate answers and documentation details.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <Button href="/contact" variant="primary">
                Contact Our Office
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
