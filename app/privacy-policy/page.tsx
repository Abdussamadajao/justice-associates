import PrivacyPolicyPage from "@/sections/privacy-policy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Justice & Associates",
  description:
    "Read the Privacy Policy for Justice & Associates. Learn how we collect, use, and protect your personal information in accordance with data protection laws.",
  keywords: [
    "privacy policy",
    "data protection",
    "privacy",
    "personal information",
    "data privacy",
    "GDPR",
    "Justice & Associates",
  ],
  openGraph: {
    title: "Privacy Policy | Justice & Associates",
    description:
      "Read the Privacy Policy for Justice & Associates. Learn how we collect, use, and protect your personal information.",
    url: "/privacy-policy",
    siteName: "Justice & Associates",
    images: [
      {
        url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000",
        width: 1200,
        height: 630,
        alt: "Justice & Associates - Privacy Policy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Justice & Associates",
    description:
      "Read the Privacy Policy for Justice & Associates. Learn how we collect, use, and protect your personal information.",
    images: [
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000",
    ],
  },
  alternates: {
    canonical: "/privacy-policy",
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

const PrivacyPolicy = () => {
  return <PrivacyPolicyPage />;
};

export default PrivacyPolicy;

