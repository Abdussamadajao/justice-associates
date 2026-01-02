"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  return (
    <section
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(10, 36, 99, 0.85), rgba(10, 36, 99, 0.85)), url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070')",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-black/50 to-transparent"></div>

      <div className="container-custom relative z-10">
        <div className="">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif font-bold mb-6 leading-tight animate-fade-in">
            Dedicated Legal Expertise <br />
            You Can Trust
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-200 mb-8 opacity-0 animate-slide-in"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            Justice & Associates offers comprehensive legal solutions with a
            commitment to excellence, integrity, and client success.
          </p>
          <div
            className="flex flex-wrap gap-4 opacity-0 animate-slide-in"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            <Button
              size={"lg"}
              onClick={() => router.push("/contact")}
              className="text-secondary text-base font-medium"
            >
              Request Consultation
            </Button>
            <Button
              size={"lg"}
              variant={"outline"}
              onClick={() => router.push("/practice-areas")}
              className="text-white text-base font-medium"
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      {/* <div className="hidden md:block absolute bottom-0 left-0 right-0 bg-gradient-to-t from-law-navy/90 to-law-navy/60 py-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "30+", label: "Years of Experience" },
              { number: "5,000+", label: "Cases Won" },
              { number: "100+", label: "Expert Attorneys" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center opacity-0 animate-fade-in delayed-animation"
                style={{
                  animationDelay: `${0.3 + index * 0.2}s`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="text-law-gold text-3xl md:text-4xl font-serif font-bold">
                  {stat.number}
                </div>
                <div className="text-white text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
