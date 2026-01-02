import HomePage from "@/sections/home";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Justice & Associates | Dedicated Legal Expertise You Can Trust",
  description:
    "Justice & Associates offers comprehensive legal solutions with a commitment to excellence, integrity, and client success. Innovative and client-focused law practice delivering tailored legal services across Data Protection, Dispute Resolution, Corporate Law, Real Estate, Intellectual Property, and Investigations.",
  keywords: [
    "law firm",
    "legal services",
    "Nigerian law firm",
    "legal expertise",
    "corporate law",
    "dispute resolution",
    "data protection",
    "cybersecurity law",
    "real estate law",
    "intellectual property",
    "legal consultation",
    "business law",
    "commercial law",
    "legal representation",
    "Justice & Associates",
  ],
  openGraph: {
    title: "Justice & Associates | Dedicated Legal Expertise You Can Trust",
    description:
      "Justice & Associates offers comprehensive legal solutions with a commitment to excellence, integrity, and client success.",
    url: "/",
    siteName: "Justice & Associates",
    images: [
      {
        url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070",
        width: 1200,
        height: 630,
        alt: "Justice & Associates - Dedicated Legal Expertise",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Justice & Associates | Dedicated Legal Expertise You Can Trust",
    description:
      "Justice & Associates offers comprehensive legal solutions with a commitment to excellence, integrity, and client success.",
    images: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070",
    ],
  },
  alternates: {
    canonical: "/",
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

export default function Home() {
  return <HomePage />;
}
