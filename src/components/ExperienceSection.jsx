import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, MapPin, Award, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Tutor",
    company: "Tutor Lim",
    companyLink: "https://tutorlim.com.au",
    period: "June 2023 - Dec 2024",
    location: "Australia",
    aboutthecompany:
      "Tutor Lim is an Australian tutoring company specializing in personalized, high-quality education for university and high school students, focusing on STEM subjects like math, engineering, and science, with both in-person and online services. ",
    description: [
      "Mentored over 50 students in statistical analysis and data interpretation using Python and SQL.",
      "Designed tailored learning plans and created data-driven reports to guide teaching strategies.",
      "Simplified complex data concepts into practical applications for diverse learners.",
    ],
    tags: [
      "Bayesian Statistics",
      "Computing Theory",
      "Data Structures",
      "Python",
      "SQL",
    ],
  },
  {
    role: "Software Developer",
    company: "Quest Global Engineering Services",
    companyLink: "https://www.questglobal.com",
    period: "Sep 2018 - Jan 2022",
    location: "Trivandrum, India",
    aboutthecompany:
      "Quest Global, headquartered in Singapore, is a company that provides engineering solutions to renowned clients such as Airbus, Philips, HP, Hitachi, GE, and others. ",
    description: [
      "Designed Windows applications for medical imaging devices using DICOM formats and SQL Server.",
      "Deployed on-site to collaborate with clients in development, maintenance, testing, and bug fixing.",
      "Prepared comprehensive performance reports across 3+ client departments.",
      "Analysed client feedback to inform system enhancements and compliance improvements.",
    ],
    tags: [
      "C++",
      "C#.NET",
      "C",
      "WPF",
      "Google Tests",
      "IBM RTC",
      "Jenkins",
      "Azure",
      "SQL Server",
    ],
    award: "Fast Starter Award",
  },
];

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-16 md:mb-20">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3">
      {title}
    </h2>
    <p className="text-md sm:text-lg text-portfolio-primary font-medium">
      {subtitle}
    </p>
  </div>
);

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-28 items-start">
      <SectionTitle
        title="Professional Experience"
        subtitle="Building impactful solutions across industries"
      />
      <div className="relative container mx-auto px-4 sm:px-0">
        <div className="absolute left-[15%] sm: left-[12%] top-0 bottom-0 w-1 bg-portfolio-secondary/30 z-0"></div>

        <div className="space-y-12 md:space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-12 sm:pl-0"
            >
              <div className="absolute left-[15%] sm: left-[8%] top-0 transform -translate-x-1/2 flex items-center sm:flex-col z-10">
                <div className="absolute left-0 sm:left-1/2 top-1 transform -translate-x-2.5 translate-y-10 w-6 h-6 bg-portfolio-primary rounded-full border-4 border-portfolio-background z-20"></div>
                <div className="hidden sm:block absolute top-10 left-[calc(80%-2rem)] transform -translate-x-full  text-s font-semibold text-portfolio-accent bg-card px-2 py-1 rounded-md shadow-md whitespace-nowrap">
                  {exp.period}
                </div>
              </div>

              <div className="flex sm:justify-center">
                <div className="sm:w-[calc(70%-3rem)]">
                  <Card
                    className={`w-full shadow-xl hover:shadow-portfolio-primary/40 transition-all duration-300 border-transparent hover:border-portfolio-primary/50`}
                  >
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 gap-2">
                        <div className="flex items-center space-x-3">
                          <Briefcase className="h-8 w-8 text-portfolio-primary flex-shrink-0" />
                          <CardTitle className="text-xl sm:text-2xl text-foreground">
                            {exp.role}
                          </CardTitle>
                        </div>
                        <span className="sm:hidden text-xs px-2.5 py-1 bg-secondary text-accent rounded-full whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-portfolio-accent text-lg font-medium hover:text-foreground transition-colors duration-300 text-sm lg:text-base inline-block">
                        <a
                          href={exp.companyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative group inline-block"
                        >
                          {exp.company}
                          <span className="absolute bottom-0 left-0 h-0.5 bg-portfolio-primary w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
                        </a>
                      </p>

                      <div className="flex items-center text-sm text-portfolio-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1.5 flex-shrink-0" />{" "}
                        {exp.location}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-portfolio-accent text-m font-semibold">
                        About the Company
                      </p>
                      <p className="text-portfolio-card-foreground leading-relaxed text-sm sm:text-base">
                        {exp.aboutthecompany}
                      </p>

                      <p className="text-portfolio-accent text-m font-semibold">
                        Role Description
                      </p>

                      <ul className="list-disc list-inside text-portfolio-card-foreground leading-relaxed text-sm sm:text-base">
                        {exp.description.map((topic) => (
                          <li key={topic}>{topic}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-xs bg-secondary text-accent rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {exp.award && (
                        <div className="flex items-center text-sm text-yellow-400 pt-2">
                          <Award className="h-5 w-5 mr-2 flex-shrink-0" />
                          <span>{exp.award}</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
