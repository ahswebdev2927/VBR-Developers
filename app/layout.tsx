import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/constants";
import WhatsAppFloatingButton from "@/components/ui/WhatsAppFloatingButton";
import CallFloatingButton from "@/components/ui/CallFloatingButton";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "VBR Developers | Residential Plotted Developments in Telangana",
    template: "%s | VBR Developers",
  },
  description:
    "Discover thoughtfully developed residential layouts by VBR Developers. Explore verified completed projects including Prakruti Vanam, Royal Serene City Phase 1, and Royal Smart City.",
  keywords: [
    "VBR Developers",
    "Residential plots Hyderabad",
    "DTCP approved layouts Telangana",
    "Prakruti Vanam Sharajipet",
    "Royal Serene City Wangapally",
    "Royal Smart City",
    "Plots near Alair",
    "Plotted developments Hyderabad",
  ],
  authors: [{ name: "VBR Developers" }],
  creator: "VBR Developers",
  metadataBase: new URL(siteConfig.siteUrl),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.siteUrl,
    siteName: "VBR Developers",
    title: "VBR Developers | Residential Plotted Developments in Telangana",
    description:
      "Explore completed residential plotted layouts with transparent project details, DTCP references, and direct developer contact.",
    images: [
      {
        url: "/images/branding/logo.png",
        width: 800,
        height: 600,
        alt: "VBR Developers - Make Your Dreams Come True",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VBR Developers | Residential Plotted Developments in Telangana",
    description: "Explore completed residential plotted layouts in Telangana.",
  },
  icons: {
    icon: [
      { url: "/vbrlogo.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/vbrlogo.png",
    apple: "/vbrlogo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/vbrlogo.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/vbrlogo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/vbrlogo.png" />
      </head>
      <body className="min-h-screen flex flex-col font-body antialiased bg-brand-ivory text-brand-slate selection:bg-brand-orange/20 selection:text-brand-navy">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
        <CallFloatingButton />
      </body>
    </html>
  );
}
