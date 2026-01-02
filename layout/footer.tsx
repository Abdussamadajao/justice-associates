import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { practiceAreas } from "@/constants/practice-areas";
import { FaPhone } from "react-icons/fa6";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Practice Areas", path: "/practice-areas" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-secondary text-white pt-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo and about */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <div className="font-serif text-2xl font-bold">
                <span className="text-primary font-serif text-2xl md:text-3xl font-bold">
                  Logo
                </span>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              We recognize the importance of innovation in helping organizations
              and individuals to stay ahead of rapid developments in diverse
              sectors. We draw on our deep legal expertise to provide tailored
              and forward thinking advice.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-primary transition-colors"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-primary transition-colors"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-primary transition-colors"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-primary transition-colors"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-gray-300 hover:text-primary transition-colors flex items-center"
                  >
                    <FaArrowRight size={14} className="mr-2" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Practice Areas */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-white">
              Practice Areas
            </h3>
            <ul className="space-y-2">
              {practiceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/practice-areas/${area.slug}`}
                    className="text-gray-300 hover:text-primary transition-colors flex items-center"
                  >
                    <FaArrowRight size={14} className="mr-2" />
                    <span>{area.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-white">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <FaMapMarkerAlt
                  size={18}
                  className="text-primary shrink-0 mr-3 mt-1"
                />
                <span className="text-gray-300 text-sm">
                  Suite C-007 Quad Plaza,
                  <br />
                  Ameh Ebute Street, Wuye District, FCT-Abuja.
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone size={18} className="text-primary shrink-0 mr-3" />
                <a
                  href="tel:+2348022138786"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  +2348022138786
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope size={18} className="text-primary shrink-0 mr-3" />
                <a
                  href="mailto:info@justicelaw.com"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  info@justicelaw.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Justice & Associates Law Firm. All rights
              reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <Link
                href="/terms"
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/disclaimer"
                className="hover:text-primary transition-colors"
              >
                Legal Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
