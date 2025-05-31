import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Code, Menu, X, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { name: "Home", href: "/", isPage: true },
  { name: "Experience", href: "#experience", isPage: false },
  { name: "Projects", href: "#projects", isPage: false },
  { name: "Education", href: "#education", isPage: false },
  { name: "Contact", href: "#contact", isPage: false },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleNavClick = (e, item) => {
    setIsOpen(false);
    if (item.isPage) {
      // Already handled by Link component
      if (item.href === "/") window.scrollTo(0, 0);
    } else {
      e.preventDefault();
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => scrollToSection(item.href), 100); // Wait for navigation then scroll
      } else {
        scrollToSection(item.href);
      }
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? "bg-portfolio-background/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center space-x-2 text-2xl font-bold text-foreground hover:text-portfolio-primary transition-colors"
          >
            <Code className="h-8 w-8 text-portfolio-primary" />
            <span>Naufal.dev</span>
          </Link>

          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navItems.map((item) =>
              item.isPage ? (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="text-portfolio-accent hover:text-foreground font-medium transition-colors duration-300 relative group text-sm lg:text-base"
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-portfolio-primary transform ${
                      (location.pathname === item.href && item.href === "/") ||
                      (item.href !== "/" &&
                        location.pathname.startsWith(item.href))
                        ? "scale-x-100"
                        : "scale-x-0"
                    } group-hover:scale-x-100 transition-transform duration-300 ease-out`}
                  ></span>
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="text-portfolio-accent hover:text-foreground font-medium transition-colors duration-300 relative group text-sm lg:text-base"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-portfolio-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </a>
              )
            )}
            <Button
              variant="default"
              className="bg-portfolio-primary hover:bg-portfolio-secondary text-primary-foreground whitespace-nowrap text-sm lg:text-base px-4 py-2 lg:px-5 lg:py-2.5"
              onClick={() => window.open("/assets/resume.pdf", "_blank")}
            >
              Resume
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-portfolio-accent hover:text-foreground"
            >
              {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-portfolio-accent hover:text-foreground"
            >
              {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-portfolio-background/95 backdrop-blur-sm absolute top-20 left-0 right-0 shadow-xl pb-4"
        >
          <div className="flex flex-col items-center space-y-4 py-6">
            {navItems.map((item) =>
              item.isPage ? (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="text-portfolio-accent hover:text-foreground text-lg font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="text-portfolio-accent hover:text-foreground text-lg font-medium transition-colors"
                >
                  {item.name}
                </a>
              )
            )}
            <Button
              variant="default"
              className="bg-portfolio-primary hover:bg-portfolio-secondary text-primary-foreground w-3/4 whitespace-nowrap"
              onClick={() => window.open("/assets/resume.pdf", "_blank")}
            >
              Resume
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
