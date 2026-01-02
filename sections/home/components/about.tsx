import React from "react";
import Link from "next/link";
import { FaScaleBalanced, FaShield, FaAward } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left column with image */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="overflow-hidden rounded-lg shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1000"
                  alt="Law firm building"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right column with content */}
          <div className="lg:col-span-7">
            <div className="max-w-2xl">
              <h2 className="text-sm font-medium text-primary uppercase tracking-wider">
                About Us
              </h2>
              <h3 className="mt-3 text-3xl md:text-4xl font-serif font-bold text-secondary mb-6">
                Innovative and Client-Focused Law Practice
              </h3>

              <p className="text-gray-700 mb-6">
                We are innovative and client focused law practice committed to
                delivering legal solutions that serve our client interests.
              </p>

              <p className="text-gray-700 mb-6">
                We recognise the importance of innovation in helping
                organisations and individuals to stay ahead of rapid
                developments in diverse sectors. We draw on our deep legal
                expertise to provide tailored and forward thinking advice.
              </p>

              <p className="text-gray-700 mb-6">
                We leverage technology, the unique skills of our people,
                strength of our affiliations and reputation to deliver practical
                and effective timely solutions to your legal challenges.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    icon: <FaScaleBalanced className="h-8 w-8 text-primary" />,
                    title: "Legal Expertise",
                    desc: "Deep legal knowledge across diverse sectors",
                  },
                  {
                    icon: <FaShield className="h-8 w-8 text-primary" />,
                    title: "Client Focused",
                    desc: "Committed to delivering solutions that serve your interests",
                  },
                  {
                    icon: <FaAward className="h-8 w-8 text-primary" />,
                    title: "Innovative Solutions",
                    desc: "Forward-thinking advice leveraging technology and expertise",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {item.icon}
                    <h4 className="mt-4 font-serif font-bold text-lg text-secondary">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
