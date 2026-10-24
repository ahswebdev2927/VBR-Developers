export interface NavItem {
  title: string;
  href: string;
}

export const navigationLinks: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Our Projects", href: "/projects" },
  { title: "Contact Us", href: "/contact" },
];

export const footerQuickLinks: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About VBR Developers", href: "/about" },
  { title: "Completed Projects", href: "/projects" },
  { title: "Layout Gallery", href: "/gallery" },
  { title: "Frequently Asked Questions", href: "/faq" },
  { title: "Contact Our Team", href: "/contact" },
];

export const legalLinks: NavItem[] = [
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Terms & Conditions", href: "/terms" },
];
