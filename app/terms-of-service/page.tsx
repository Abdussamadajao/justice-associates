import TermsOfServicePage from "@/sections/terms-of-service";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Justice & Associates",
  description:
    "Read the Terms of Service for Justice & Associates. Understand the terms and conditions governing the use of our legal services and website.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "legal terms",
    "law firm terms",
    "service agreement",
    "Justice & Associates",
  ],
  openGraph: {
    title: "Terms of Service | Justice & Associates",
    description:
      "Read the Terms of Service for Justice & Associates. Understand the terms and conditions governing the use of our legal services.",
    url: "/terms-of-service",
    siteName: "Justice & Associates",
    images: [
      {
        url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000",
        width: 1200,
        height: 630,
        alt: "Justice & Associates - Terms of Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Justice & Associates",
    description:
      "Read the Terms of Service for Justice & Associates. Understand the terms and conditions governing the use of our legal services.",
    images: [
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000",
    ],
  },
  alternates: {
    canonical: "/terms-of-service",
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

const TermsOfService = () => {
  return <TermsOfServicePage />;
};

export default TermsOfService;

