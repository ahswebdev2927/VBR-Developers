import React from "react";
import { FolderCheck, FileText, Compass, Users } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: FolderCheck,
      title: "Completed Project Portfolio",
      description:
        "Explore completed layouts and review the project information available for each development.",
    },
    {
      icon: FileText,
      title: "Clear Project Information",
      description:
        "Understand the available project details, location information, and approval references before making an enquiry.",
    },
    {
      icon: Compass,
      title: "Local Market Familiarity",
      description:
        "Connect with a team familiar with plotted developments in Hyderabad and nearby Telangana locations.",
    },
    {
      icon: Users,
      title: "Personalised Assistance",
      description:
        "Speak with our team to learn more about project availability, location, and the next steps.",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-brand-ivory">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Designed for Transparency &amp; Peace of Mind"
          subtitle="We focus on factual disclosures, completed layouts, and accessible support for home builders and property buyers."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-7 rounded-2xl border border-brand-border hover:border-brand-orange/40 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-brand-midnight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
