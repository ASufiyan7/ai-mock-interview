import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react"; // Added Mail and Phone icons
import { Link } from "react-router-dom";
import { Container } from "@/components/container";
// Assuming MainRoutes and other helper functions exist
import { MainRoutes } from "@/lib/helpers"; // Make sure MainRoutes has { href, label } structure

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  ariaLabel: string; // Added for accessibility
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, ariaLabel }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel} // Accessibility improvement
      className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110" // Enhanced hover effect
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <li>
      <Link
        to={to}
        className="text-gray-400 hover:text-white transition-colors duration-300 block py-1" // Better hover and block for spacing
      >
        {children}
      </Link>
    </li>
  );
};

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-12 md:py-16 border-t border-gray-800">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* First Column: Company / Brand Info */}
          <div>
            <h3 className="font-bold text-xl text-white mb-5">AI Mock Interview</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering job seekers with AI-driven mock interviews and personalized feedback to confidently land their dream roles.
            </p>
            <div className="flex gap-5 mt-6">
              <SocialLink
                href="https://facebook.com/yourprofile"
                icon={<Facebook size={22} />}
                ariaLabel="Facebook"
              />
              <SocialLink
                href="https://twitter.com/yourprofile"
                icon={<Twitter size={22} />}
                ariaLabel="Twitter"
              />
              <SocialLink
                href="https://instagram.com/yourprofile"
                icon={<Instagram size={22} />}
                ariaLabel="Instagram"
              />
              <SocialLink
                href="https://linkedin.com/company/yourcompany"
                icon={<Linkedin size={22} />}
                ariaLabel="LinkedIn"
              />
            </div>
          </div>

          {/* Second Column: Quick Links */}
          <div>
            <h3 className="font-bold text-lg text-white mb-5">Quick Links</h3>
            <ul className="space-y-2">
              {/* Ensure MainRoutes is defined and imported correctly with { href, label } */}
              {MainRoutes.map((route) => (
                <FooterLink key={route.href} to={route.href}>
                  {route.label}
                </FooterLink>
              ))}
              <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink to="/terms-of-service">Terms of Service</FooterLink>
            </ul>
          </div>

          {/* Third Column: Solutions/Features */}
          <div>
            <h3 className="font-bold text-lg text-white mb-5">Solutions</h3>
            <ul className="space-y-2">
              <FooterLink to="/solutions/mock-interviews">
                AI Mock Interviews
              </FooterLink>
              <FooterLink to="/solutions/feedback-analysis">
                Personalized Feedback
              </FooterLink>
              <FooterLink to="/solutions/skill-assessment">
                Skill Assessment
              </FooterLink>
              <FooterLink to="/solutions/career-guidance">
                Career Guidance
              </FooterLink>
            </ul>
          </div>

          {/* Fourth Column: Contact Info */}
          <div>
            <h3 className="font-bold text-lg text-white mb-5">Get in Touch</h3>
            <p className="text-gray-400 mb-2 flex items-center gap-2">
              <Mail size={18} className="text-gray-500" />
              <a href="mailto:contact@aimockinterview.com" className="hover:underline hover:text-white transition-colors">
                contact@aimockinterview.com
              </a>
            </p>
            <p className="text-gray-400 mb-2 flex items-center gap-2">
              <Phone size={18} className="text-gray-500" />
              <a href="tel:+1234567890" className="hover:underline hover:text-white transition-colors">
                +1 (234) 567-890
              </a>
            </p>
            <p className="text-gray-400 mt-4">
              123 AI Boulevard, Innovation Hub, Tech City, XYZ 12345
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} AI Mock Interview. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};
// This code is a React component for a footer section of a website. It includes social media links, quick links, solutions/features, and contact information. The design is responsive and uses Tailwind CSS for styling. The component is structured to be easily maintainable and customizable.