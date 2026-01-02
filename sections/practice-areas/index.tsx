import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { practiceAreas } from "@/constants/practice-areas";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const PracticeAreasPage = () => {
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
                Our Practice Areas
              </h1>
              <p className="text-white/95 text-xl md:text-2xl mb-8 leading-relaxed max-w-2xl mx-auto">
                Comprehensive legal expertise across a wide range of specialties
                to meet all your legal needs with excellence and dedication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid Section */}
      <section className="section-padding bg-linear-to-b from-gray-50 via-white to-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {practiceAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <Card
                  key={area.slug}
                  className="group relative bg-white border-0 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden opacity-0 animate-fade-in"
                  style={{
                    animationDelay: `${0.1 * index}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  {/* Hover Gradient Effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <CardHeader className="relative z-10 pb-4">
                    {/* Icon Container with Background */}
                    <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-linear-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-2xl font-serif font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300 truncate">
                      {area.title}
                    </h4>
                  </CardHeader>

                  <CardContent className="relative z-10 flex flex-col flex-1">
                    <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                      {area.shortDescription}
                    </p>
                    <Link
                      href={`/practice-areas/${area.slug}`}
                      className="inline-flex items-center text-secondary font-semibold hover:text-primary transition-all duration-300 group/link"
                    >
                      <span className="group-hover/link:translate-x-1 transition-transform duration-300">
                        Learn More
                      </span>
                      <FaArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </CardContent>

                  {/* Decorative Corner Element */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default PracticeAreasPage;
