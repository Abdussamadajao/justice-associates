import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { practiceAreas } from "@/constants/practice-areas";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const PracticeAreasSection = () => {
  return (
    <section className="section-padding bg-linear-to-b from-gray-50 via-white to-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider">
            Our Expertise
          </h2>
          <h3 className="mt-3 text-3xl md:text-4xl font-serif font-bold text-secondary mb-6">
            Our Practice Areas
          </h3>
          <p className="text-gray-700 text-lg">
            Our firm offers comprehensive legal services across multiple
            practice areas, providing expert counsel and representation tailored
            to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {practiceAreas.slice(0, 3).map((area, index) => {
            const IconComponent = area.icon;
            return (
              <Card
                key={area.slug}
                className="group relative bg-white border-0 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden opacity-0 animate-fade-in gap-2"
                style={{
                  animationDelay: `${0.1 * index}s`,
                  animationFillMode: "forwards",
                }}
              >
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative z-10 pb-2">
                  {/* Icon Container with Background */}
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-linear-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-secondary  group-hover:text-primary transition-colors duration-300 truncate">
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

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/practice-areas">View All Practice Areas</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
