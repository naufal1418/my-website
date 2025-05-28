import React from 'react';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import { motion } from 'framer-motion';

const HomePage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <>
      <motion.div initial="hidden" animate="visible" variants={sectionVariants} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={sectionVariants} className="container mx-auto px-4 sm:px-6 lg:px-8">
       <ExperienceSection />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={sectionVariants} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectsSection />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={sectionVariants} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <EducationSection />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={sectionVariants} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ContactSection />
      </motion.div>
    </>
  );
};

export default HomePage;