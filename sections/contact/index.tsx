import React from "react";
import ContactSection from "./components/contact-form";

const ContactPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000')",
            }}
          />
          <div className="absolute inset-0 bg-linear-to-b from-secondary/65 via-secondary/50 to-secondary/65" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationFillMode: "forwards" }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                Contact Us
              </h1>
              <p className="text-white/95 text-xl md:text-2xl mb-8 leading-relaxed max-w-2xl mx-auto">
                Have a legal question or need representation? Contact our team
                for a confidential consultation to discuss your legal needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />
    </>
  );
};

export default ContactPage;
