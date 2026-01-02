import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { type PracticeArea } from "@/constants/practice-areas";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PracticeAreaHero from "@/sections/practice-areas/components/practice-area-hero";
// Helper function to parse description with newlines and bullet points
const parseDescription = (description: string) => {
  const paragraphs = description.split("\n\n");
  return paragraphs.map((paragraph, index) => {
    // Check if paragraph contains bullet points
    if (paragraph.trim().startsWith("-")) {
      const items = paragraph
        .split("\n")
        .filter((line) => line.trim().startsWith("-"))
        .map((line) => line.trim().substring(1).trim());

      return (
        <ul key={index} className="list-disc list-inside space-y-2 mb-4">
          {items.map((item, itemIndex) => (
            <li key={itemIndex} className="text-gray-700 leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    }

    // Regular paragraph
    if (paragraph.trim()) {
      return (
        <p key={index} className="text-gray-700 leading-relaxed mb-4">
          {paragraph.trim()}
        </p>
      );
    }

    return null;
  });
};

const PracticeSlug = ({ practiceArea }: { practiceArea: PracticeArea }) => {
  const descriptionContent = parseDescription(practiceArea.description);

  // Get image URL
  const imageUrl = practiceArea?.image
    ? practiceArea.image
    : "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000";
  return (
    <>
      {/* Hero Section with Loading */}
      <PracticeAreaHero
        title={practiceArea.title}
        shortDescription={practiceArea.shortDescription}
        iconName={practiceArea.iconName}
        imageUrl={imageUrl}
      />

      {/* Main Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 text-lg leading-relaxed">
                {descriptionContent}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-linear-to-b from-gray-50 via-white to-gray-50">
        <div className="container-custom">
          <Card className="bg-secondary/45 border-0 shadow-lg">
            <div className="p-8 md:p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
                Contact us today to discuss how we can help you with your legal
                needs. Our experienced team is ready to provide expert guidance
                and representation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-secondary"
                  >
                    <FaPhone className="mr-2 h-4 w-4" />
                    Schedule a Consultation
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  <Link
                    href="mailto:info@justiceandassociates.com"
                    className="inline-flex items-center"
                  >
                    <FaEnvelope className="mr-2 h-4 w-4" />
                    Send Us a Message
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
};

export default PracticeSlug;
