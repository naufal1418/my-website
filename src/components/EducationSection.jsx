import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, MapPin, BookOpen, CalendarDays, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const educationHistory = [

  {
    degree: 'ACS Professional Year Program',
    institution: 'National Institute of Technology, Australia',
    location: 'Perth, Australia',
    period: '2025 - Present',
    relevantTopics: [
      'Professional Performance',
      'Workplace Communication',
      'Business Writing',
      'Reporting to Managers',
      'Performance in Business Meetings'
    ],
    icon: <GraduationCap className="h-8 w-8 text-portfolio-primary flex-shrink-0" />
  },
  {
    degree: 'Master of Data Science',

    award: 'Global Excellence Scholarship',
    institution: 'The University of Western Australia',
    location: 'Perth, Australia',
    period: '2021 - 2023',
    relevantTopics: [
      'Advanced Machine Learning',
      'Database Management Systems',
      'Business Intelligence',
      'Statistical Modelling & Inference',
      'Natural Language Processing',
      'Data Visualization',
      'Data Warehousing',
      'Project Management',

    ],
    icon: <GraduationCap className="h-8 w-8 text-portfolio-primary flex-shrink-0" />
  },
  {
    degree: 'Bachelor of Technology: Electrical and Electronics Engineering',
    institution: 'University of Kerala',
    location: 'Trivandrum, Kerala, India',
    period: '2014 - 2018',
    relevantTopics: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (C++)',
      'Digital Signal Processing',
      'Control Systems Engineering',
      'Embedded Systems Design'
    ],
    icon: <GraduationCap className="h-8 w-8 text-portfolio-primary flex-shrink-0" />
  },
];

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-16 md:mb-20">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3">{title}</h2>
    <p className="text-md sm:text-lg text-portfolio-primary font-medium">{subtitle}</p>
  </div>
);

const EducationSection = () => {
  return (
    <section id="education" className="py-20 md:py-28">
      <SectionTitle title="Academic Background" subtitle="Foundation of knowledge and continuous learning" />
      <div className="relative container mx-auto px-4 sm:px-0">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 bg-portfolio-secondary/30 transform sm:-translate-x-1/2 z-0"></div>

        <div className="space-y-12 md:space-y-16">
          {educationHistory.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-12 sm:pl-0"
            >
              <div className={`absolute left-0 sm:left-1/2 top-0 transform ${index % 2 === 0 ? 'sm:translate-x-[calc(-50%)]' : 'sm:translate-x-[calc(-50%)]'} flex items-center sm:flex-col z-10`}>
                <div className="absolute left-0 sm:left-1/2 top-1 transform -translate-x-1/2 translate-y-10 w-6 h-6 bg-portfolio-primary rounded-full border-4 border-portfolio-background z-20"></div>
                <div className={`hidden sm:block absolute top-10 left-[calc(80%-2rem)] transform text-s font-semibold text-portfolio-accent bg-card px-2 py-1 rounded-md shadow-md whitespace-nowrap ${index % 2 === 0 ? 'translate-x-[calc(50%)]' : '-translate-x-[calc(90%)]'}`}>
                  {edu.period}
                </div>
              </div>

              <div className={`flex ${index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'}`}>
                <div className="sm:w-[calc(50%-3rem)]">
                  <Card className={`w-full shadow-xl hover:shadow-portfolio-primary/40 transition-all duration-300 border-transparent hover:border-portfolio-primary/50`}>
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 gap-2">
                        <div className="flex items-center space-x-3">
                          {edu.icon}
                          <CardTitle className="text-xl sm:text-2xl text-foreground">{edu.degree}</CardTitle>
                        </div>
                        <span className="sm:hidden text-xs px-2.5 py-1 bg-secondary text-accent rounded-full whitespace-nowrap">{edu.period}</span>
                      </div>
                      <p className="text-portfolio-accent text-lg font-medium">{edu.institution}</p>
                      <div className="flex items-center text-sm text-portfolio-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1.5 flex-shrink-0" /> {edu.location}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm font-semibold text-portfolio-accent mb-1.5 flex items-center">
                        <BookOpen className="h-4 w-4 mr-2 flex-shrink-0" /> Key Modules:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-portfolio-muted-foreground pl-2">
                        {edu.relevantTopics.map(topic => (
                          <li key={topic}>{topic}</li>
                        ))}
                      </ul>

                      {edu.award && (
                        <div className="flex items-center text-sm text-yellow-400 pt-2">
                          <Award className="h-5 w-5 mr-2 flex-shrink-0" />
                          <span>{edu.award}</span>
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
    </section >
  );
};

export default EducationSection;