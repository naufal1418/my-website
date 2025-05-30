import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const featuredProjects = [
  {
    id: "peak-energy",
    title: "Peak Energy Prediction Model",
    category: "Machine Learning",
    description:
      "A sophisticated machine learning system designed to predict energy consumption patterns for the South West Interconnected System (SWIS), aiding in resource management.",
    tags: [
      "Python",
      "NumPy",
      "Pandas",
      "XGBoost",
      "CNN",
      "ARIMA",
      "Decision Tree",
      "Power BI",
      "API Integration",
    ],
    imageUrlKey: "mlSystem",
    viewCodeLink: "https://github.com/naufal1418/peak_energy_prediction",
    learnMoreLink: "/project/peak-energy",
  },
  {
    id: "qa-model",
    title: "Advanced QA Model (NLP)",
    category: "Deep Learning",
    description:
      "Developed a cutting-edge natural language processing framework leveraging attention mechanisms for intelligent question answering and information retrieval.",
    tags: [
      "Python",
      "Jupyter",
      "TensorFlow",
      "Bi-RNN",
      "GRU",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Word2Vec (SkipGram)",
    ],
    imageUrlKey: "nlpModel",
    viewCodeLink: "https://github.com/naufal1418/QA_Model",
    learnMoreLink: "/project/qa-model",
  },
  {
    id: "portfolio-website-project", // Changed ID to avoid conflict if "portfolio-website" is used as a general page ID
    title: "Business Showcase Website",
    category: "Web Development",
    description:
      "A professionally crafted website for a migration consultancy, built with React + Vite and styled using Tailwind CSS. It features a responsive layout, integrated contact forms using free form services, and a secure client portal for updating content without developer intervention. Hosted on Netlify, the entire solution leverages open-source and free tools, making it highly cost-effective while maintaining performance and design quality.",
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Netlify",
      "Netlify Forms",
      "React Router",
      "Git",
      "GitHub",
      "Node.js",
      "npm",
    ],
    imageUrlKey: "portfolioSite",
    viewCodeLink: "https://github.com/naufal1418/ozwiz-migration",
    learnMoreLink: "/project/portfolio-website-project",
  },
];

const projectImagePlaceholders = {
  mlSystem: (
    <img
      alt="Peak Energy Prediction System abstract visualization"
      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      src="/assets/images/peakEnergyPrediction.webp"
    />
  ),
  nlpModel: (
    <img
      alt="Advanced QA Model abstract visualization"
      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      src="/assets/images/qaModel.webp"
    />
  ),
  portfolioSite: (
    <img
      alt="Portfolio Website design preview"
      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      src="/assets/images/ozviz.webp"
    />
  ),
};

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-12 md:mb-16">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3">
      {title}
    </h2>
    <p className="text-md sm:text-lg text-portfolio-primary font-medium">
      {subtitle}
    </p>
  </div>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-28">
      <SectionTitle
        title="Featured Projects"
        subtitle="Showcasing my best work in web development and data science"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <Card className="flex flex-col h-full overflow-hidden group bg-card text-card-foreground border-border shadow-lg hover:shadow-portfolio-primary/20 transition-all duration-300">
              <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                {projectImagePlaceholders[project.imageUrlKey]}
                <span className="absolute top-3 right-3 px-2.5 py-1 text-xs bg-black/50 text-white rounded-full backdrop-blur-sm">
                  {project.category}
                </span>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl sm:text-2xl text-foreground group-hover:text-portfolio-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow pb-4">
                <CardDescription className="text-portfolio-muted-foreground leading-relaxed mb-4 text-sm sm:text-base line-clamp-3">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs bg-secondary text-accent rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="space-x-2 sm:space-x-3 border-t border-border/20 pt-4">
                <Button
                  variant="outline"
                  className="flex-1 border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10 group/btn whitespace-nowrap text-xs sm:text-sm px-3 py-2 h-auto"
                  asChild
                >
                  <a
                    href={project.viewCodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Eye className="mr-1.5 h-4 w-4" /> View Code
                  </a>
                </Button>
                <Link to={project.learnMoreLink} className="flex-1">
                  <Button
                    variant="default"
                    className="w-full bg-portfolio-primary hover:bg-portfolio-secondary text-primary-foreground group/btn whitespace-nowrap text-xs sm:text-sm px-3 py-2 h-auto"
                  >
                    Learn More <ExternalLink className="ml-1.5 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12 md:mt-16">
        <Link to="/projects">
          <Button
            size="lg"
            className="bg-portfolio-primary hover:bg-portfolio-secondary text-primary-foreground group whitespace-nowrap"
          >
            View All Projects{" "}
            <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
