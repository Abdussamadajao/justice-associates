import LegalDisclaimerPage from "@/sections/legal-disclaimer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Disclaimer | Justice & Associates",
  description:
    "Read the Legal Disclaimer for Justice & Associates. Important information about the limitations of our legal services and website content.",
  keywords: [
    "legal disclaimer",
    "disclaimer",
    "legal notice",
    "liability",
    "legal limitations",
    "Justice & Associates",
  ],
  openGraph: {
    title: "Legal Disclaimer | Justice & Associates",
    description:
      "Read the Legal Disclaimer for Justice & Associates. Important information about the limitations of our legal services.",
    url: "/legal-disclaimer",
    siteName: "Justice & Associates",
    images: [
      {
        url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000",
        width: 1200,
        height: 630,
        alt: "Justice & Associates - Legal Disclaimer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Disclaimer | Justice & Associates",
    description:
      "Read the Legal Disclaimer for Justice & Associates. Important information about the limitations of our legal services.",
    images: [
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000",
    ],
  },
  alternates: {
    canonical: "/legal-disclaimer",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const LegalDisclaimer = () => {
  return <LegalDisclaimerPage />;
};

export default LegalDisclaimer;

