import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { allProjectsData, projectImagePlaceholders } from "@/data/projectsData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ExternalLink,
  Eye,
  ArrowLeft,
  Code as LucideCode,
  Database,
  BarChart3,
  BrainCircuit,
  Paintbrush,
  Calendar,
  Users,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import ContactSection from "@/components/ContactSection";

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = allProjectsData.find((p) => p.id === projectId);

  useEffect(() => {
    if (!project) {
      navigate("/projects"); // Redirect if project not found
    }
  }, [project, navigate]);

  if (!project) {
    return null; // Or a loading/not found component
  }

  const otherProjects = allProjectsData
    .filter((p) => p.id !== projectId)
    .slice(0, 3);

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

    if (name.includes("seo"))
      return (
        <img src="/assets/logos/seo.svg" alt="SEO Logo" className="h-6 w-6" />
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
    if (name.includes("bert") || name.includes("transformers"))
      return <BrainCircuit className="h-6 w-6 text-blue-500" />;
    if (
      name.includes("sql") ||
      name.includes("database") ||
      name.includes("pandas") ||
      name.includes("api")
    )
      return <Database className="h-6 w-6 text-green-500" />;
    if (
      name.includes("framer motion") ||
      name.includes("design") ||
      name.includes("visualization")
    )
      return <Paintbrush className="h-6 w-6 text-pink-500" />;
    return <LucideCode className="h-6 w-6 text-gray-500" />;
  };

  const detailItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  const featureCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.15,
        type: "spring",
        stiffness: 150,
        damping: 15,
      },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-portfolio-background text-foreground py-12 md:py-16"
    >
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10 md:mb-12">
        <Link
          to="/projects"
          className="inline-flex items-center text-portfolio-primary hover:text-portfolio-accent mb-6 group"
        >
          <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          Back to All Projects
        </Link>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 mb-3 leading-tight pb-3"
        >
          {project.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-portfolio-muted-foreground"
        >
          {project.category}
        </motion.p>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10 md:gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="relative aspect-video rounded-xl shadow-2xl overflow-hidden group">
              {projectImagePlaceholders[project.imageUrlKey] || (
                <div className="w-full h-full bg-secondary flex items-center justify-center">
                  <LucideCode size={64} className="text-muted-foreground" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-3xl font-bold text-white leading-tight">
                  {project.title}
                </h3>
              </div>
            </div>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Project Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-portfolio-muted-foreground leading-relaxed text-base sm:text-lg">
                  {project.longDescription || project.description}
                </p>
              </CardContent>
            </Card>

            {project.challenges && project.learnings && (
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground flex items-center">
                      <ShieldCheck className="mr-2 h-6 w-6 text-portfolio-primary" />{" "}
                      Key Challenges
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-portfolio-muted-foreground text-sm sm:text-base">
                      {project.challenges}
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground flex items-center">
                      <Zap className="mr-2 h-6 w-6 text-portfolio-primary" />{" "}
                      Key Learnings
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-portfolio-muted-foreground text-sm sm:text-base">
                      {project.learnings}
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}

            {project.features && project.features.length > 0 && (
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">
                    Core Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      variants={featureCardVariants}
                      className="p-4 bg-secondary/30 rounded-lg"
                    >
                      <h4 className="font-semibold text-portfolio-accent mb-1">
                        {feature.name}
                      </h4>
                      <p className="text-sm text-portfolio-muted-foreground">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            )}
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-1 space-y-6"
          >
            <Card className="bg-card border-border sticky top-24">
              {" "}
              {/* Sticky for desktop */}
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Project Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {project.client && (
                  <motion.div
                    custom={0}
                    initial="hidden"
                    animate="visible"
                    variants={detailItemVariants}
                    className="flex items-start"
                  >
                    <Users className="h-5 w-5 text-portfolio-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-portfolio-accent">
                        Client
                      </p>
                      <p className="text-portfolio-muted-foreground text-sm">
                        {project.client}
                      </p>
                    </div>
                  </motion.div>
                )}
                {project.timeline && (
                  <motion.div
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    variants={detailItemVariants}
                    className="flex items-start"
                  >
                    <Calendar className="h-5 w-5 text-portfolio-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-portfolio-accent">
                        Timeline
                      </p>
                      <p className="text-portfolio-muted-foreground text-sm">
                        {project.timeline}
                      </p>
                    </div>
                  </motion.div>
                )}
                <motion.div
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={detailItemVariants}
                  className="flex items-start"
                >
                  <LucideCode className="h-5 w-5 text-portfolio-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-portfolio-accent mb-1">
                      Technologies Used
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="flex items-center px-2 py-0.5 text-xs bg-secondary text-accent rounded-full"
                        >
                          {getTechIcon(tag)}{" "}
                          <span className="ml-1.5">{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <div className="space-y-3 pt-3">
                  {project.liveLink && project.liveLink !== "#" && (
                    <Button
                      size="lg"
                      className="w-full bg-portfolio-primary hover:bg-portfolio-secondary text-primary-foreground group"
                      asChild
                    >
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Website{" "}
                        <ExternalLink className="ml-2 h-4 w-4 group-hover:rotate-3 transition-transform" />
                      </a>
                    </Button>
                  )}
                  {project.viewCodeLink && (
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10 group"
                      asChild
                    >
                      <a
                        href={project.viewCodeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Eye className="mr-2 h-4 w-4" /> View Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.aside>
        </div>
      </div>

      {otherProjects.length > 0 && (
        <section className="py-16 md:py-24 bg-secondary/20 mt-16 md:mt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-10 md:mb-12">
              Other Projects
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {otherProjects.map((op, index) => (
                <motion.div
                  key={op.id}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={featureCardVariants}
                >
                  <Link to={`/project/${op.id}`}>
                    <Card className="h-full group bg-card hover:shadow-portfolio-primary/20 transition-all duration-300">
                      <div className="relative h-40 sm:h-48 w-full overflow-hidden rounded-t-xl">
                        {projectImagePlaceholders[op.imageUrlKey] || (
                          <div className="w-full h-full bg-secondary flex items-center justify-center">
                            <LucideCode
                              size={40}
                              className="text-muted-foreground"
                            />
                          </div>
                        )}
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg sm:text-xl text-foreground group-hover:text-portfolio-primary transition-colors">
                          {op.title}
                        </CardTitle>
                        <p className="text-xs text-portfolio-accent">
                          {op.category}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-portfolio-muted-foreground line-clamp-2">
                          {op.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactSection />
    </motion.div>
  );
};

export default ProjectDetailPage;
