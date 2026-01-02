import React from "react";
import PracticeAreasPage from "@/sections/practice-areas";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Practice Areas | Justice & Associates",
  description:
    "Comprehensive legal expertise across a wide range of specialties including Data Protection & Cybersecurity, Dispute Resolution, Corporate Law, Real Estate, Intellectual Property, and Investigations. Expert legal counsel tailored to your needs.",
  keywords: [
    "legal services",
    "practice areas",
    "data protection",
    "cybersecurity law",
    "dispute resolution",
    "corporate law",
    "real estate law",
    "intellectual property",
    "legal investigations",
    "Nigerian law firm",
    "legal expertise",
    "business law",
    "commercial law",
  ],
  openGraph: {
    title: "Our Practice Areas | Justice & Associates",
    description:
      "Comprehensive legal expertise across a wide range of specialties to meet all your legal needs with excellence and dedication.",
    url: "/practice-areas",
    siteName: "Justice & Associates",
    images: [
      {
        url: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg",
        width: 1200,
        height: 630,
        alt: "Justice & Associates - Our Practice Areas",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Practice Areas | Justice & Associates",
    description:
      "Comprehensive legal expertise across a wide range of specialties to meet all your legal needs with excellence and dedication.",
    images: [
      "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg",
    ],
  },
  alternates: {
    canonical: "/practice-areas",
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

const PracticeArea = () => {
  return <PracticeAreasPage />;
};

export default PracticeArea;
