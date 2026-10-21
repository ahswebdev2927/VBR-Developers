import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion, { AccordionItem } from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";

const homeFaqItems: AccordionItem[] = [
  {
    id: "faq-1",
    question: "What is VBR Developers?",
    answer:
      "VBR Developers is a property development company based in Hyderabad, specializing in residential plotted layout developments. We focus on transparent land plotting with verified layout details and dedicated client support.",
  },
  {
    id: "faq-2",
    question: "Which completed projects are listed on the website?",
    answer:
      "Our documented completed projects include Prakruti Vanam (10.5 acres in Sharajipet, Alair), Royal Serene City Phase 1 (6 acres, DTCP-approved in Wangapally), and Royal Smart City (23 acres, DTCP-approved with LP No. 55/2017/H).",
  },
  {
    id: "faq-3",
    question: "Where is Prakruti Vanam located?",
    answer:
      "Prakruti Vanam is located at Sharajipet, Alair in Telangana. It is a 10.5-acre residential plotted development completed in 2018.",
  },
  {
    id: "faq-4",
    question: "Is Royal Serene City Phase 1 a DTCP-approved layout?",
    answer:
      "Yes. Royal Serene City Phase 1 in Wangapally is a verified 6-acre DTCP-approved residential plotted development.",
  },
  {
    id: "faq-5",
    question: "What is the supplied LP number for Royal Smart City?",
    answer:
      "Royal Smart City carries the documented DTCP approval reference LP No. 55/2017/H across its 23-acre layout.",
  },
  {
    id: "faq-6",
    question: "How do I contact VBR Developers or enquire about plot availability?",
    answer:
      "You can call our team directly at +91 9666777487, chat with us on WhatsApp, submit the website enquiry form, or visit our office at Nagole X Roads, Hyderabad between 9:00 AM and 8:00 PM.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 lg:py-24 bg-brand-ivory">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Clear Answers to Common Enquiries"
          subtitle="Everything you need to know about our completed residential plotted projects, approvals, and contacting our team."
        />

        <div className="max-w-3xl mx-auto">
          <Accordion items={homeFaqItems} />

          <div className="mt-12 text-center p-8 rounded-2xl bg-white border border-brand-border">
            <h4 className="font-heading font-bold text-lg text-brand-midnight">
              Have specific questions about plot dimensions or site visits?
            </h4>
            <p className="text-sm text-brand-muted mt-2 max-w-md mx-auto">
              Our Hyderabad team is available daily from 9:00 AM to 8:00 PM to assist you with layout tours and documents.
            </p>
            <div className="mt-5 flex justify-center gap-3">
              <Button href="/contact" variant="primary" size="md">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
