import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ExternalLink,
  Eye,
  ArrowLeft,
  Filter,
  Search,
  Code as LucideCode,
  Database,
  BarChart3,
  BrainCircuit,
  Paintbrush,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { allProjectsData, projectImagePlaceholders } from "@/data/projectsData"; // Assuming you move data here

const AllProjectsPage = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(allProjectsData);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Wait for elements to render before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
    }
  }, [location]);

  useEffect(() => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    const newFilteredProjects = allProjectsData.filter(
      (project) =>
        project.title.toLowerCase().includes(lowerSearchTerm) ||
        project.category.toLowerCase().includes(lowerSearchTerm) ||
        project.tags.some((tag) => tag.toLowerCase().includes(lowerSearchTerm))
    );
    setFilteredProjects(newFilteredProjects);
  }, [searchTerm]);

  const techIconVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: (i) => ({
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    }),
  };

  const getTechIcon = (techName) => {
    const name = techName.toLowerCase();
    if (name.includes("react"))
      return (
        <img
          src="/assets/logos/react.svg"
          alt="Python Logo"
          className="h-5 w-5"
        />
      );
    if (name.includes("python"))
      return (
        <img
          src="/assets/logos/python.svg"
          alt="Python Logo"
          className="h-5 w-5"
        />
      );

    if (name.includes("javascript"))
      return (
        <img
          src="/assets/logos/javascript.svg"
          alt="JavaScript Logo"
          className="h-5 w-5"
        />
      );
    if (name.includes("vite"))
      return (
        <img src="/assets/logos/vite.svg" alt="Vite Logo" className="h-5 w-5" />
      );

    if (name.includes("responsive design"))
      return (
        <img
          src="/assets/logos/responsivedesign.svg"
          alt="Responsive Design Logo"
          className="h-5 w-5"
        />
      );
    if (name.includes("pytorch"))
      return (
        <img
          src="/assets/logos/pytorch.svg"
          alt="Vite Logo"
          className="h-5 w-5"
        />
      );
    if (name.includes("xgboost"))
      return (
        <img
          src="/assets/logos/xgboost.png"
          alt="Vite Logo"
          className="h-5 w-5"
        />
      );

    if (name.includes("energy forecasting"))
      return (
        <img
          src="/assets/logos/energyforecast.svg"
          alt="Vite Logo"
          className="h-5 w-5"
        />
      );
    if (name.includes("tailwind"))
      return (
        <img
          src="/assets/logos/tailwind.svg"
          alt="Tailwind CSS Logo"
          className="h-6 w-6"
        />
      );
    if (name.includes("power bi") || name.includes("dax"))
      return (
        <img
          src="/assets/logos/powerbi.svg"
          alt="Power BI Logo"
          className="h-6 w-6"
        />
      );
    if (name.includes(".net"))
      return (
        <img
          src="/assets/logos/dotnet.svg"
          alt=".NET Logo"
          className="h-6 w-6"
        />
      );

    if (name.includes("api"))
      return (
        <img src="/assets/logos/api.svg" alt="API Logo" className="h-6 w-6" />
      );
    if (name.includes("numpy"))
      return (
        <img
          src="/assets/logos/numpy.svg"
          alt="numpy Logo"
          className="h-6 w-6"
        />
      );

    if (name.includes("pandas"))
      return (
        <img
          src="/assets/logos/pandas.svg"
          alt="PANDAS Logo"
          className="h-6 w-6"
        />
      );

    if (name.includes("scikit-learn"))
      return (
        <img
          src="/assets/logos/scikitlearn.svg"
          alt="Scikit-learn Logo"
          className="h-6 w-6"
        />
      );

    if (name.includes("netlify"))
      return (
        <img
          src="/assets/logos/netlify.svg"
          alt="Netlify Logo"
          className="h-6 w-6"
        />
      );

    if (name.includes("feature engineering"))
      return (
        <img
          src="/assets/logos/featureengineering.png"
          alt="Feature Engineering Logo"
          className="h-6 w-6"
        />
      );
    if (name.includes("machine learning"))
      return (
        <img
          src="/assets/logos/machinelearning.svg"
          alt="Machine Learning Logo"
          className="h-6 w-6"
        />
      );

    if (name.includes("nlp"))
      return (
        <img src="/assets/logos/nlp.png" alt="nlp Logo" className="h-6 w-6" />
      );
    if (
      name.includes("pytorch") ||
      name.includes("nlp") ||
      name.includes("bert") ||
      name.includes("transformers")
    )
      return <BrainCircuit className="h-5 w-5 text-blue-500" />;
    if (name.includes("tailwind"))
      return (
        <img
          src="/assets/logos/tailwind.svg"
          alt="Tailwind CSS Logo"
          className="h-5 w-5"
        />
      );
    if (name.includes(".net"))
      return (
        <img
          src="/assets/logos/dotnet.svg"
          alt=".NET Logo"
          className="h-5 w-5"
        />
      );
    if (name.includes("power bi") || name.includes("dax"))
      return (
        <img
          src="/assets/logos/powerbi.svg"
          alt="Power BI Logo"
          className="h-5 w-5"
        />
      );
    if (
      name.includes("sql") ||
      name.includes("database") ||
      name.includes("pandas") ||
      name.includes("api")
    )
      return <Database className="h-5 w-5 text-green-500" />;
    if (
      name.includes("framer motion") ||
      name.includes("design") ||
      name.includes("visualization")
    )
      return <Paintbrush className="h-5 w-5 text-pink-500" />;
    return <LucideCode className="h-5 w-5 text-gray-500" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-portfolio-background min-h-screen py-12 md:py-16 text-foreground"
    >
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <Link
            to="/"
            className="inline-flex items-center text-portfolio-primary hover:text-portfolio-accent mb-6 group"
          >
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 mb-4">
            All My Projects
          </h1>
          <p className="text-lg sm:text-xl text-portfolio-muted-foreground max-w-3xl mx-auto">
            A deeper dive into my technical journey, showcasing a variety of
            projects across different domains and technologies.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center items-center gap-3 sm:gap-4"
        >
          <Button
            variant="outline"
            className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10 whitespace-nowrap"
          >
            <Filter className="mr-2 h-4 w-4" /> Filter
          </Button>
          <div className="relative w-full max-w-xs sm:max-w-sm">
            <Input
              type="search"
              placeholder="Search projects..."
              className="pl-10 pr-4 py-2 w-full bg-input border-border focus:ring-portfolio-primary focus:border-portfolio-primary rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
        </motion.div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            id={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            className="h-full"
          >
            <Card className="flex flex-col h-full overflow-hidden group bg-card text-card-foreground border-border shadow-lg hover:shadow-portfolio-primary/20 transition-all duration-300">
              <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                {projectImagePlaceholders[project.imageUrlKey] || (
                  <div className="w-full h-full bg-secondary flex items-center justify-center">
                    <LucideCode size={48} className="text-muted-foreground" />
                  </div>
                )}
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
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-xs font-medium text-portfolio-accent">
                    Built with:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <motion.div
                        key={i}
                        custom={i}
                        initial="initial"
                        animate="animate"
                        variants={techIconVariants}
                        title={tag}
                      >
                        {getTechIcon(tag)}
                      </motion.div>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs text-portfolio-accent self-center">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
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
                {project.viewCodeLink && (
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
                )}
                <Link to={`/project/${project.id}`} className="flex-1">
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
        {filteredProjects.length === 0 && (
          <div className="md:col-span-2 lg:col-span-3 text-center py-12">
            <Search size={48} className="mx-auto text-muted-foreground mb-4" />
            <p className="text-xl text-muted-foreground">
              No projects found matching "{searchTerm}".
            </p>
            <p className="text-sm text-muted-foreground">
              Try a different search term or clear the search.
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AllProjectsPage;
