import React from "react";
import {
  Code as LucideCode,
  Database,
  BarChart3,
  BrainCircuit,
  Paintbrush,
} from "lucide-react";

export const allProjectsData = [
  {
    id: "peak-energy",
    title: "Peak Energy Prediction System",
    category: "Machine Learning",
    description:
      "A sophisticated machine learning system designed to predict energy consumption patterns for the South West Interconnected System (SWIS).",
    tags: [
      "Python",
      "NumPy",
      "Pandas",
      "Power BI",
      "XGBoost",
      "CNN",
      "ARIMA",
      "Decision Tree",
      "API Integration",
      ,
    ],
    imageUrlKey: "mlSystem",
    liveLink: "#", // Placeholder, update if live
    viewCodeLink: "https://github.com/naufal1418/peak_energy_prediction",
    longDescription:
      "A machine learning project aimed at forecasting peak electricity demand days in Western Australia using 15 years of hourly energy and weather data. The model helps businesses reduce costs during high-demand periods by predicting the top four peak days in the summer. Techniques like XGBoost and feature engineering were used to capture time-dependent patterns, achieving high accuracy and interpretability. Forecasts are further enhanced with real-time weather API integration.",
    challenges:
      "Capturing temporal patterns in energy demand, working with limited weather feature availability, and ensuring interpretable yet accurate peak day predictions were key challenges.",
    learnings:
      "Understanding the significance of time-based feature engineering, evaluating model performance beyond accuracy metrics, and balancing interpretability with predictive power were key learnings.",
    client: "Data Analysis Australia (Capestone Project)",
    timeline: "6 Months (2022)",
    features: [
      {
        name: "Peak Day Forecasting",
        description:
          "Predicted peak energy consumption days using historical data and weather patterns.",
      },
      {
        name: "Machine Learning Model",
        description:
          "Implemented XGBoost for robust and interpretable energy demand forecasting.",
      },
      {
        name: "Time-Based Feature Engineering",
        description:
          "Extracted temporal patterns using date-time features like hour, day, and seasonality.",
      },
      {
        name: "Weather API Integration",
        description:
          "Fetched 14-day and 48-hour forecasts using external APIs for forward prediction.",
      },
      {
        name: "Performance Evaluation",
        description:
          "Assessed model using RMSE and MAPE to ensure prediction quality.",
      },
      {
        name: "Visualization",
        description:
          "Plotted predicted vs actual energy demand to validate model performance.",
      },
    ],
  },
  {
    id: "qa-model",
    title: "Advanced QA Model (NLP)",
    category: "Deep Learning",
    description:
      "A deep learning-based Question Answering system using Bi-RNNs, GRU, and attention mechanism on the WikiQA dataset.",
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
    liveLink: "#", // Placeholder
    viewCodeLink: "https://github.com/naufal1418/QA_Model",
    longDescription:
      "A deep learning-based Question Answering system built on the Microsoft Research WikiQA dataset. The project combines Bi-directional RNNs, GRU-based document modeling, and an attention mechanism to predict answer relevance for open-domain questions. It leverages advanced NLP preprocessing techniques including Word2Vec embeddings, POS tagging, NER, lemmatization, and TF-IDF to generate rich contextual representations and delivers high accuracy through extensive ablation studies and hyperparameter tuning.",
    challenges:
      "Handling complex question-document pairings, engineering effective input features, and designing an interpretable attention-based sequence model were key challenges.",
    learnings:
      "Deepened understanding of attention mechanisms in QA tasks, refined NLP preprocessing workflows, and learned the impact of ablation studies for model interpretability and tuning.",
    client: "Academic Project",
    timeline: "4 Months (2023)",
    features: [
      {
        name: "Question Summary Model",
        description:
          "Used Bi-directional RNNs to encode contextual information from user questions.",
      },
      {
        name: "Document Modeling",
        description:
          "Processed candidate answer documents with GRU architecture and embedding layers.",
      },
      {
        name: "Attention Mechanism",
        description:
          "Applied attention over document tokens using question summaries to improve focus.",
      },
      {
        name: "Advanced NLP Preprocessing",
        description:
          "Implemented POS tagging, NER, lemmatization, and TF-IDF to enrich document features.",
      },
      {
        name: "Embedding Techniques",
        description:
          "Utilized Word2Vec Skip-Gram embeddings to represent input tokens in semantic space.",
      },
      {
        name: "Ablation Testing",
        description:
          "Performed embedding, attention, and hyperparameter ablation to evaluate model performance.",
      },
    ],
  },
  {
    id: "portfolio-website-project",
    title: "Website - Ozviz Migration",
    category: "Web Development",
    description:
      "A responsive React + Vite website built for a migration consultancy, featuring client portal integration, form handling, and seamless deployment via Netlify.",
    tags: [
      "React",
      "TailwindCSS",
      "JavaScript",
      "Vite",
      "Netlify",
      "Responsive Design",
      "Framer Motion",
      "On-Page SEO",
    ],
    imageUrlKey: "portfolioSite",
    liveLink: "https://www.ozvizmigration.com/",
    viewCodeLink: "https://github.com/naufal1418/ozwiz-migration",
    longDescription:
      "A professionally crafted website for a migration consultancy, built with React + Vite and styled using Tailwind CSS. It features a responsive layout, integrated contact forms using free form services, and a secure client portal for updating content without developer intervention. Hosted on Netlify, the entire solution leverages open-source and free tools, making it highly cost-effective while maintaining performance and design quality.",
    challenges:
      "Coordinating real-time content updates, optimizing responsive design across devices, and integrating third-party form services without backend support were key challenges.",
    learnings:
      "Gained experience in modern frontend frameworks, form handling with third-party APIs, and static site deployment using Git and Netlify. Enhanced skills in responsive design and user experience optimization.",
    client: "Ozviz Migration",
    timeline: "April 2025",
    features: [
      {
        name: "Responsive Web Design",
        description:
          "Built with Tailwind CSS to ensure a seamless user experience across devices.",
      },
      {
        name: "React + Vite Setup",
        description:
          "Used a fast development environment with modern React tooling.",
      },
      {
        name: "Client Portal Integration",
        description:
          "Connected the site to a client portal allowing dynamic content updates.",
      },
      {
        name: "Form Handling",
        description:
          "Integrated free form services for secure contact submissions without a custom backend.",
      },
      {
        name: "GitHub Integration",
        description:
          "Linked with GitHub for continuous version control and collaboration.",
      },
      {
        name: "Netlify Deployment",
        description:
          "Deployed the static site using Netlify for free and fast hosting.",
      },
    ],
  },
  {
    id: "krz-engineering-website-project",
    title: "Website - KRZ Engineering",
    category: "Web Development",
    description:
      "A modern and SEO-ready website built for a mechanical engineering company, featuring responsive design, fast performance, and Netlify deployment.",
    tags: [
      "React",
      "TailwindCSS",
      "JavaScript",
      "Vite",
      "Netlify",
      "Responsive Design",
      "SEO",
      "Performance Optimization",
    ],
    imageUrlKey: "krzEngineeringSite",
    liveLink: "https://www.krzengineering.com.au/",
    viewCodeLink: "https://github.com/naufal1418/krz-engineering",
    longDescription:
      "A responsive business website developed for KRZ Engineering, showcasing their services and expertise in mechanical and structural fabrication. Built using React + Vite and styled with Tailwind CSS, the site is optimized for speed, mobile usability, and SEO best practices. Hosted on Netlify with fast global delivery and seamless deployment workflows.",
    challenges:
      "Ensuring optimal Core Web Vitals scores, integrating SEO metadata correctly, and refining responsive layout across breakpoints were major focuses during development.",
    learnings:
      "Improved skills in web performance tuning, on-page SEO, and deploying scalable, static sites. Gained experience using Lighthouse audits and preload strategies to enhance LCP and UX.",
    client: "KRZ Engineering",
    timeline: "June 2025",
    features: [
      {
        name: "Responsive Design",
        description:
          "Built with Tailwind CSS to ensure cross-device compatibility and fluid layouts.",
      },
      {
        name: "Optimized Performance",
        description:
          "Focused on Largest Contentful Paint (LCP) and preload strategies to improve load speed.",
      },
      {
        name: "SEO & Meta Tags",
        description:
          "Implemented structured metadata, custom page titles, and sitemap/robots.txt for improved search visibility.",
      },
      {
        name: "Static Deployment",
        description:
          "Deployed to Netlify with version control via GitHub for fast, reliable hosting.",
      },
      {
        name: "Accessibility-Friendly",
        description:
          "Used semantic HTML and tested for visual clarity and keyboard navigation.",
      },
      {
        name: "Clean UI",
        description:
          "Minimalist design focused on highlighting services, project history, and contact details.",
      },
    ],
  },
  // {
  //   id: "bi-dashboard",
  //   title: "Sales Performance BI Dashboard",
  //   category: "Business Intelligence",
  //   description:
  //     "Designed and implemented an interactive Power BI dashboard to track key sales metrics, providing actionable insights for business decision-making.",
  //   tags: ["Power BI", "DAX", "Data Modeling", "Data Visualization", "SQL"],
  //   imageUrlKey: "biDashboard",
  //   liveLink: "#", // Typically internal
  //   viewCodeLink: null,
  //   longDescription:
  //     "This project involved connecting to multiple data sources (SQL databases, Excel files), transforming and modeling data, and creating compelling visualizations in Power BI. The dashboard included KPIs for sales revenue, growth trends, regional performance, and product analysis. Utilized DAX for complex calculations and measures. Focused on user-centric design for easy interpretation by stakeholders.",
  //   challenges:
  //     "Integrating disparate data sources, ensuring data accuracy and consistency, and designing visualizations that are both informative and easy to understand for non-technical users. Optimizing DAX queries for large datasets.",
  //   learnings:
  //     "Strengthened expertise in data modeling, advanced DAX query writing, and the art of storytelling with data through effective dashboard design. Gained experience in stakeholder communication and requirement gathering for BI solutions.",
  //   client: "Corporate Project (Simulated)",
  //   timeline: "3 Months (2023)",
  //   features: [
  //     {
  //       name: "Interactive Visualizations",
  //       description: "Drill-down capabilities and dynamic filtering.",
  //     },
  //     {
  //       name: "KPI Tracking",
  //       description: "Real-time monitoring of key sales metrics.",
  //     },
  //     {
  //       name: "Data Modeling",
  //       description: "Efficient data relationships for accurate reporting.",
  //     },
  //     {
  //       name: "Actionable Insights",
  //       description: "Designed to support data-driven decision-making.",
  //     },
  //   ],
  // },
];

export const projectImagePlaceholders = {
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

  krzEngineeringSite: (
    <img
      alt="Portfolio Website design preview"
      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      src="/assets/images/krz.jpg"
    />
  ),
  biDashboard: (
    <img
      alt="BI Dashboard showing charts and graphs"
      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      src="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d"
    />
  ),
};
