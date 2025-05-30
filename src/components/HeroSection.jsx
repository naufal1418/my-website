import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Send,
  Code as LucideCode,
  Database,
  BarChart3,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const occupations = [
  "Full Stack Developer",
  "Data Scientist",
  "BI Developer",
  "Software Engineer",
];

const techStack = [
  { name: "Git", logoUrl: "/assets/logos/git.svg" },
  { name: "Power BI", logoUrl: "/assets/logos/powerbi.svg" },
  { name: "Tableau", logoUrl: "/assets/logos/tableau.svg" },
  { name: "Python", logoUrl: "/assets/logos/python.svg" },
  { name: "React Js", logoUrl: "/assets/logos/react.svg" },
  { name: "Javascript", logoUrl: "/assets/logos/javascript.svg" },
  { name: "Tailwind", logoUrl: "/assets/logos/tailwind.svg" },
  { name: ".NET Framework", logoUrl: "/assets/logos/dotnet.svg" },
];

const HeroSection = () => {
  const [currentOccupationIndex, setCurrentOccupationIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentOccupationIndex(
        (prevIndex) => (prevIndex + 1) % occupations.length
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="py-20 md:py-20 min-h-screen flex items-start">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="space-y-6 text-center md:text-left"
        >
          <p className="text-portfolio-primary font-semibold text-lg">
            Hello, I'm
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-black dark:bg-white bg-clip-text leading-tight">
            Naufal Nizarudeen
          </h1>
          <div className="h-12 md:h-14 relative">
            <AnimatePresence mode="wait">
              <motion.h2
                key={occupations[currentOccupationIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-2xl sm:text-3xl md:text-4xl font-semibold text-portfolio-accent absolute w-full"
              >
                {occupations[currentOccupationIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>
          <p className="text-base sm:text-lg text-portfolio-muted-foreground max-w-xl mx-auto md:mx-0">
            Crafting elegant digital solutions with 3.5+ years of experience.
            Specializing in full-stack development, data science, and creating
            exceptional user experiences that drive business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <Button
              size="lg"
              className="bg-portfolio-primary hover:bg-portfolio-secondary text-primary-foreground group whitespace-nowrap"
              onClick={scrollToProjects}
            >
              View My Work{" "}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10 group whitespace-nowrap"
              onClick={scrollToContact}
            >
              Get In Touch{" "}
              <Send className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>
          <div className="pt-8">
            <p className="text-portfolio-accent font-medium mb-3 text-center md:text-left">
              Tools:
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-3 md:gap-x-6 justify-center md:justify-start">
              {techStack.map((tech) => (
                <motion.div
                  key={tech.name}
                  className="flex items-center space-x-2 text-portfolio-card-foreground"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={tech.logoUrl}
                    alt={`${tech.name} Logo`}
                    className="h-6 w-6 object-contain"
                  />
                  {/* <span className="text-sm sm:text-base">{tech.name}</span> */}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="hidden md:flex justify-center items-start relative group"
        >
          <motion.img
            src="/assets/profile.png"
            alt="Naufal Nizarudeen"
            className="hidden sm:block z-30 rounded-full object-cover border-4 border-portfolio-primary shadow-xl mb-6 "
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
