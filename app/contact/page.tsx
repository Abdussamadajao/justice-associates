import ContactPage from "@/sections/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Justice & Associates",
  description:
    "Get in touch with Justice & Associates for expert legal consultation. Located in Abuja, Nigeria. Contact us via phone, email, or visit our office at Suite C-007 Quad Plaza, Ameh Ebute Street, Wuye District, FCT-Abuja.",
  keywords: [
    "contact",
    "legal consultation",
    "law firm contact",
    "Abuja law firm",
    "Nigerian law firm",
    "legal services",
    "legal advice",
    "consultation",
    "Justice & Associates contact",
  ],
  openGraph: {
    title: "Contact Us | Justice & Associates",
    description:
      "Get in touch with Justice & Associates for expert legal consultation. We're here to help with all your legal needs.",
    url: "/contact",
    siteName: "Justice & Associates",
    images: [
      {
        url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000",
        width: 1200,
        height: 630,
        alt: "Justice & Associates - Contact Us",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Justice & Associates",
    description:
      "Get in touch with Justice & Associates for expert legal consultation. We're here to help with all your legal needs.",
    images: [
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000",
    ],
  },
  alternates: {
    canonical: "/contact",
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

const Contact = () => {
  return <ContactPage />;
};

export default Contact;
