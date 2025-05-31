import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Code,
  Facebook,
  Instagram,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

const socialLinks = [
  {
    name: "GitHub",
    icon: <Github className="h-5 w-5" />,
    href: "https://github.com/naufaln1418",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-5 w-5" />,
    href: "https://www.linkedin.com/in/naufal-n/",
  },
  {
    name: "Twitter",
    icon: <Twitter className="h-5 w-5" />,
    href: "https://twitter.com/Naufal18Naufal",
  },

  {
    name: "Facebook",
    icon: <Facebook className="h-5 w-5" />,
    href: "https://www.facebook.com/Naufalknight",
  },
  {
    name: "Instagram",
    icon: <Instagram className="h-5 w-5" />,
    href: "https://www.instagram.com/__.the__lone__wolf._",
  },
];

const quickLinks = [
  { name: "Home", href: "/", isPage: true },
  { name: "Experience", href: "#experience", isPage: false },
  { name: "Projects", href: "#projects", isPage: false },
  { name: "Education", href: "#education", isPage: false },
  { name: "Contact", href: "#contact", isPage: false },
];

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (href) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFooterLinkClick = (e, item) => {
    if (item.isPage) {
      if (item.href === "/") window.scrollTo(0, 0);
    } else {
      e.preventDefault();
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => scrollToSection(item.href), 100);
      } else {
        scrollToSection(item.href);
      }
    }
  };

  return (
    <footer className="bg-card border-t border-border py-10 md:py-12 mt-12 md:mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          <div className="space-y-3 md:col-span-1 flex flex-col items-center md:items-start">
            <RouterLink
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className="flex items-center space-x-2 text-xl font-bold text-foreground hover:text-portfolio-primary transition-colors"
            >
              <Code className="h-7 w-7 text-portfolio-primary" />
              <span>Naufal Nizarudeen</span>
            </RouterLink>
            <p className="text-sm text-portfolio-muted-foreground max-w-xs">
              Crafting digital experiences with passion and precision.
            </p>
          </div>

          <div className="md:col-span-1">
            <p className="font-semibold text-card-foreground mb-3">
              Quick Links
            </p>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.isPage ? (
                    <RouterLink
                      to={link.href}
                      onClick={(e) => handleFooterLinkClick(e, link)}
                      className="text-sm text-portfolio-muted-foreground hover:text-portfolio-primary transition-colors"
                    >
                      {link.name}
                    </RouterLink>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => handleFooterLinkClick(e, link)}
                      className="text-sm text-portfolio-muted-foreground hover:text-portfolio-primary transition-colors cursor-pointer"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <p className="font-semibold text-card-foreground mb-3 ">Connect</p>
            <div className="flex space-x-4 justify-center md:justify-start">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-portfolio-muted-foreground hover:text-portfolio-primary transition-colors duration-300 p-2 rounded-md hover:bg-secondary"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title={link.name}
                >
                  {link.icon}
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-portfolio-muted-foreground">
            &copy; {new Date().getFullYear()} Naufal Nizarudeen. All rights
            reserved.
          </p>
          {/* <p className="text-xs text-portfolio-muted-foreground mt-1">
            Built with React, Tailwind CSS, and Framer Motion. Hosted with ❤️.
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
