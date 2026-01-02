import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { PATHS } from "@/routes";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Check initial path and set scrolled state accordingly for pages with dark headers
  useEffect(() => {
    // Handle scroll effect for other pages with transparent headers
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    handleScroll(); // Check initial scroll position
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll to about section
  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === PATHS.root) {
      e.preventDefault();
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const headerHeight = 80; // Approximate header height
        const elementPosition = aboutSection.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      setIsMenuOpen(false);
    }
  };

  // Handle hash navigation to about section
  useEffect(() => {
    if (pathname === PATHS.root && window.location.hash === "#about") {
      setTimeout(() => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
          const headerHeight = 80;
          const elementPosition = aboutSection.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [pathname]);

  // Navigation items
  const navItems = [
    { name: "Practice Areas", path: PATHS.practiceAreas, isScroll: false },
    { name: "Contact Us", path: PATHS.contact, isScroll: false },
    { name: "About Us", path: PATHS.root, isScroll: true },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link href={PATHS.root} className="flex items-center">
          <div
            className={cn(
              "font-serif text-xl md:text-2xl font-bold transition-colors duration-300",
              scrolled ? "text-primary" : "text-white"
            )}
          >
            <span className="text-primary">Logo</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive =
              pathname === item.path ||
              (item.path === PATHS.practiceAreas &&
                pathname.startsWith(PATHS.practiceAreas + "/"));

            if (item.isScroll && item.name === "About Us") {
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={handleAboutClick}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium link-underline cursor-pointer",
                    scrolled
                      ? "text-secondary hover:text-secondary"
                      : "text-white hover:text-white"
                    // isActive && "text-primary"
                  )}
                >
                  {item.name}
                </Link>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium link-underline",
                  scrolled
                    ? "text-secondary hover:text-secondary"
                    : "text-white hover:text-white",
                  isActive && "text-primary"
                )}
              >
                {item.name}
              </Link>
            );
          })}

          {/* Call Us Button */}
          <a
            href="tel:+15551234567"
            className="ml-6 flex items-center px-4 py-2 bg-primary text-white rounded font-medium hover:bg-opacity-90 transition-all"
          >
            <Phone className="h-4 w-4 mr-2" />
            Call Us Now
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="flex xl:hidden">
          <a
            href="tel:+15551234567"
            className="mr-2 flex items-center px-3 py-1.5 bg-primary text-white rounded text-sm font-medium hover:bg-opacity-90 transition-all"
          >
            <Phone className="h-3 w-3 mr-1" />
            Call Now
          </a>

          <button
            onClick={toggleMenu}
            className={cn(
              "p-2 rounded-md",
              scrolled ? "text-primary" : "text-white"
            )}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.path ||
                  (item.path === PATHS.practiceAreas &&
                    pathname.startsWith(PATHS.practiceAreas + "/"));

                if (item.isScroll && item.name === "About Us") {
                  return (
                    <a
                      key={item.name}
                      href={item.path}
                      onClick={(e) => {
                        handleAboutClick(e);
                        setIsMenuOpen(false);
                      }}
                      className={cn(
                        "px-3 py-2 rounded-md text-primary hover:bg-law-light-gray transition-all cursor-pointer",
                        isActive && "text-primary font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={cn(
                      "px-3 py-2 rounded-md text-primary hover:bg-law-light-gray transition-all",
                      isActive && "text-primary font-medium"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
