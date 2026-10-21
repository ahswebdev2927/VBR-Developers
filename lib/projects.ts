export interface Project {
  slug: string;
  name: string;
  tagline: string;
  location?: string;
  district?: string;
  acreage?: number;
  acreageDisplay?: string;
  year?: number;
  status: "Completed Project" | "Enquiry Available";
  approvalType?: "DTCP-Approved Layout" | "Plotted Layout";
  approvalNumber?: string;
  description: string;
  longDescription: string;
  coverImage: string;
  gallery: string[];
  featured: boolean;
  highlights: string[];
  verifiedDetailsAvailable: boolean;
}

export const projects: Project[] = [
  {
    slug: "prakruti-vanam",
    name: "Prakruti Vanam",
    tagline: "Completed 10.5-Acre Plotted Layout in Sharajipet, Alair",
    location: "Sharajipet, Alair",
    district: "Yadadri Bhuvanagiri / Telangana",
    acreage: 10.5,
    acreageDisplay: "10.5 Acres",
    year: 2018,
    status: "Completed Project",
    approvalType: "Plotted Layout",
    description: "A completed 10.5-acre plotted layout in Sharajipet, Alair.",
    longDescription:
      "Prakruti Vanam represents a completed 10.5-acre residential plotted development executed in 2018 at Sharajipet, Alair. Thoughtfully planned with demarcated plots and internal connectivity, it offers buyers peace of mind and an established plotted footprint in a developing corridor.",
    coverImage: "/images/projects/prakruti-vanam/cover.jpg",
    gallery: [
      "/images/projects/prakruti-vanam/cover.jpg",
      "/images/projects/prakruti-vanam/entrance-arch.jpg",
      "/images/projects/prakruti-vanam/avenue-road.jpg",
      "/images/projects/prakruti-vanam/demarcation-plots.jpg",
      "/images/projects/prakruti-vanam/boundary-development.jpg",
      "/images/projects/prakruti-vanam/layout-sector.jpg",
    ],
    featured: true,
    highlights: [
      "10.5 Acres layout size",
      "Completed in 2018",
      "Strategically situated at Sharajipet, Alair",
      "Demarcated residential plot boundaries",
    ],
    verifiedDetailsAvailable: true,
  },
  {
    slug: "royal-serene-city-phase-1",
    name: "Royal Serene City Phase 1",
    tagline: "DTCP-Approved 6-Acre Layout in Wangapally",
    location: "Wangapally",
    district: "Telangana",
    acreage: 6,
    acreageDisplay: "6 Acres",
    status: "Completed Project",
    approvalType: "DTCP-Approved Layout",
    description: "A completed 6-acre DTCP-approved layout in Wangapally.",
    longDescription:
      "Royal Serene City Phase 1 is a verified 6-acre DTCP-approved residential plotted development located in Wangapally. Completed with attention to layout guidelines, clear access roads, and structured plotting, it stands as an exemplary benchmark in organized plotting.",
    coverImage: "/images/projects/royal-serene-phase-1/cover.jpg",
    gallery: [
      "/images/projects/royal-serene-phase-1/cover.jpg",
      "/images/projects/royal-serene-phase-1/entrance-gate.jpg",
      "/images/projects/royal-serene-phase-1/internal-roads.jpg",
      "/images/projects/royal-serene-phase-1/plotted-sectors.jpg",
      "/images/projects/royal-serene-phase-1/demarcated-stones.jpg",
      "/images/projects/royal-serene-phase-1/plantation-avenue.jpg",
    ],
    featured: true,
    highlights: [
      "6 Acres development area",
      "DTCP-Approved Layout status",
      "Located in Wangapally",
      "Verified completed project",
    ],
    verifiedDetailsAvailable: true,
  },
  {
    slug: "royal-smart-city",
    name: "Royal Smart City",
    tagline: "Completed 23-Acre Layout with DTCP LP No. 55/2017/H",
    location: "Location confirmed on enquiry",
    acreage: 23,
    acreageDisplay: "23 Acres",
    status: "Completed Project",
    approvalType: "DTCP-Approved Layout",
    approvalNumber: "LP No. 55/2017/H",
    description: "A completed 23-acre layout with the supplied DTCP approval reference (LP No. 55/2017/H).",
    longDescription:
      "Royal Smart City is an expansive 23-acre completed plotted development carrying documented DTCP layout approval reference LP No. 55/2017/H. Designed to high spatial planning standards, this completed community reflects VBR Developers' track record in executing large-scale layouts.",
    coverImage: "/images/projects/royal-smart-city/cover.jpg",
    gallery: [
      "/images/projects/royal-smart-city/cover.jpg",
      "/images/projects/royal-smart-city/entrance-arch.jpg",
      "/images/projects/royal-smart-city/main-road.jpg",
      "/images/projects/royal-smart-city/layout-overview.jpg",
      "/images/projects/royal-smart-city/curb-stones.jpg",
    ],
    featured: true,
    highlights: [
      "23 Acres expansive layout size",
      "DTCP Approved with LP No. 55/2017/H",
      "Organized residential plotted community",
      "Verified completed layout",
    ],
    verifiedDetailsAvailable: true,
  },
  {
    slug: "royal-serene-city",
    name: "Royal Serene City",
    tagline: "Plotted Development Portfolio Project",
    status: "Enquiry Available",
    description: "A listed development from VBR Developers available for buyer inquiries.",
    longDescription:
      "Royal Serene City is one of the residential plotted layout developments in the VBR Developers portfolio. To receive confirmed location specifications, current status, and site details, please reach out directly to our team.",
    coverImage: "/images/projects/royal-serene-city.jpg",
    gallery: ["/images/projects/royal-serene-city.jpg"],
    featured: false,
    highlights: [
      "Residential plotted portfolio",
      "Direct developer assistance",
      "Detailed project specifications available upon request",
    ],
    verifiedDetailsAvailable: false,
  },
  {
    slug: "royal-serene-city-2",
    name: "Royal Serene City 2",
    tagline: "Plotted Development Portfolio Project",
    status: "Enquiry Available",
    description: "A listed plotted development in the VBR Developers portfolio.",
    longDescription:
      "Royal Serene City 2 is a residential plotted layout under VBR Developers. Connect with our Hyderabad office for verified layout details and personalized guidance.",
    coverImage: "/images/projects/royal-serene-city-2.jpg",
    gallery: ["/images/projects/royal-serene-city-2.jpg"],
    featured: false,
    highlights: [
      "Plotted development portfolio",
      "Information and site visits on enquiry",
    ],
    verifiedDetailsAvailable: false,
  },
  {
    slug: "temple-view-farms",
    name: "Temple View Farms",
    tagline: "Plotted Development Portfolio Project",
    status: "Enquiry Available",
    description: "A listed development from VBR Developers open for project enquiries.",
    longDescription:
      "Temple View Farms is listed in the VBR Developers layout portfolio. Prospective buyers seeking location confirmation, layout documentation, and related details are encouraged to connect with our team.",
    coverImage: "/images/projects/temple-view-farms.jpg",
    gallery: ["/images/projects/temple-view-farms.jpg"],
    featured: false,
    highlights: [
      "Residential and farm plot portfolio",
      "Enquiries and consultations available",
    ],
    verifiedDetailsAvailable: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
