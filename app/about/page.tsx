import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MapPin, Phone, Building2, ShieldCheck, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about VBR Developers, our plotted residential developments across Telangana, and our dedication to clear records and transparent customer guidance.",
};

export default function AboutPage() {
  const completedCount = projects.filter((p) => p.status === "Completed Project").length;

  return (
    <div className="py-12 sm:py-16">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="text-xs text-brand-muted mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-brand-orange">
            Home
          </Link>
          <span>/</span>
          <span className="text-brand-midnight font-bold">About Us</span>
        </nav>

        {/* Hero Banner */}
        <div className="bg-brand-midnight rounded-3xl p-8 sm:p-12 lg:p-16 text-white mb-16 relative overflow-hidden border-2 border-brand-orange/40">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-orange bg-brand-orange/20 border border-brand-orange/40 px-3 py-1 rounded-full">
              Our Story &amp; Values
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Building Trust, One Plot at a Time.
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed pt-2">
              VBR Developers is a property development company based in Hyderabad,
              dedicated to creating organized residential plotted layouts across
              Telangana.
            </p>
            <p className="text-sm italic font-serif text-brand-orange">
              &quot;{siteConfig.tagline}&quot;
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6 text-brand-slate text-base sm:text-lg leading-relaxed">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-midnight">
              Our Vision for Plotted Developments
            </h2>
            <p>
              VBR Developers helps property buyers explore residential plotted
              developments in and around Hyderabad and nearby locations. Our
              completed projects reflect our experience in developing organized
              layouts and helping customers take informed steps towards their
              property goals.
            </p>
            <p className="text-brand-muted text-base">
              From our flagship 10.5-acre Prakruti Vanam development executed in
              2018 at Sharajipet, Alair, to verified DTCP-approved layouts such as
              Royal Serene City Phase 1 (6 acres in Wangapally) and Royal Smart
              City (23 acres, DTCP LP No. 55/2017/H), our work is anchored in
              verifiable layouts and transparent customer service.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-brand-border">
                <h3 className="font-heading font-bold text-base text-brand-midnight flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand-orange" />
                  <span>Fact-Based Guidance</span>
                </h3>
                <p className="text-xs text-brand-muted mt-2">
                  We state verified layout acreages, locations, and DTCP LP
                  numbers clearly so you make informed property decisions.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-brand-border">
                <h3 className="font-heading font-bold text-base text-brand-midnight flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-brand-green" />
                  <span>Accessible Hyderabad Office</span>
                </h3>
                <p className="text-xs text-brand-muted mt-2">
                  Meet our leadership team directly at our Nagole X Roads office
                  in Hyderabad, open 7 days a week from 9:00 AM to 8:00 PM.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-4 border-brand-orange-light shadow-xl">
              <Image
                src="/images/projects/royal-serene-phase-1/cover.jpg"
                alt="VBR Developers Completed Layout"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Corporate Summary Strip */}
        <div className="bg-brand-cream/60 rounded-2xl p-8 border border-brand-border mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <p className="text-xs uppercase font-bold text-brand-muted">
                Corporate Office
              </p>
              <p className="font-heading font-bold text-sm text-brand-midnight mt-1">
                Nagole X Roads, Hyderabad
              </p>
              <p className="text-xs text-brand-muted mt-0.5">
                Baddam Lalitha Complex, 3rd Floor
              </p>
            </div>

            <div>
              <p className="text-xs uppercase font-bold text-brand-muted">
                Documented Projects
              </p>
              <p className="font-heading font-bold text-sm text-brand-midnight mt-1">
                {completedCount} Completed Layouts Documented
              </p>
              <p className="text-xs text-brand-muted mt-0.5">
                Prakruti Vanam, Royal Serene Ph 1, Royal Smart City
              </p>
            </div>

            <div>
              <p className="text-xs uppercase font-bold text-brand-muted">
                Direct Contact
              </p>
              <p className="font-heading font-bold text-sm text-brand-midnight mt-1">
                {siteConfig.displayPhone}
              </p>
              <p className="text-xs text-brand-muted mt-0.5">
                {siteConfig.email}
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-4 max-w-xl mx-auto">
          <h2 className="font-heading font-bold text-2xl text-brand-midnight">
            Looking for More Information?
          </h2>
          <p className="text-sm text-brand-muted">
            Explore our complete project specifications or discuss layout availability with our team.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Button href="/projects" variant="primary">
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/contact" variant="outline">
              Contact Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
