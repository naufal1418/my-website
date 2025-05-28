import React from 'react';
import { Code as LucideCode, Database, BarChart3, BrainCircuit, Paintbrush } from 'lucide-react';

export const allProjectsData = [
  {
    id: 'peak-energy',
    title: 'Peak Energy Prediction System',
    category: 'Machine Learning',
    description: 'A sophisticated machine learning system designed to predict energy consumption patterns for the South West Interconnected System (SWIS).',
    tags: ['Python', 'XGBoost', 'Time Series', 'Pandas', 'Scikit-learn', 'Flask', 'React', 'API'],
    imageUrlKey: 'mlSystem',
    liveLink: '#', // Placeholder, update if live
    viewCodeLink: 'https://github.com/naufaln18/Peak-Energy-Demand-Forecast',
    longDescription: "This project aimed to forecast peak energy demand critical for grid stability and resource allocation. I developed a robust pipeline involving data preprocessing, feature engineering from historical consumption and weather data, model training with XGBoost, and hyperparameter tuning. The model was exposed via a Flask API and integrated with a React-based dashboard for visualization and reporting.",
    challenges: "Handling large datasets, feature selection for optimal model performance, and ensuring near real-time prediction capabilities were key challenges.",
    learnings: "Gained deep insights into time series forecasting, ensemble methods, and MLOps practices for deploying ML models.",
    client: "Academic Research Project",
    timeline: "6 Months (2022)",
    features: [
        { name: "Time Series Forecasting", description: "Utilized XGBoost for accurate prediction of energy peaks." },
        { name: "Data Pipeline", description: "Automated data ingestion, preprocessing, and feature engineering." },
        { name: "API Integration", description: "Flask API for model serving and React frontend for visualization." },
        { name: "Performance Optimization", description: "Focused on model accuracy and inference speed." }
    ]
  },
  {
    id: 'qa-model',
    title: 'Advanced QA Model (NLP)',
    category: 'Deep Learning',
    description: 'Developed a cutting-edge natural language processing framework leveraging attention mechanisms (Transformers/BERT) for intelligent question answering.',
    tags: ['Python', 'PyTorch', 'NLP', 'Transformers', 'BERT', 'Hugging Face'],
    imageUrlKey: 'nlpModel',
    liveLink: '#', // Placeholder
    viewCodeLink: 'https://github.com/naufaln18/Advanced-QA-Model-with-Attention',
    longDescription: "The goal was to build a system capable of understanding and answering complex questions based on a given context. This involved fine-tuning pre-trained Transformer models like BERT on SQuAD-like datasets. Significant effort went into data preprocessing, model optimization for inference speed, and evaluating performance using metrics like F1 score and Exact Match.",
    challenges: "Managing computational resources for training large models, mitigating bias in datasets, and achieving high accuracy on diverse question types.",
    learnings: "Mastered Transformer architectures, transfer learning techniques in NLP, and the intricacies of building end-to-end question-answering systems.",
    client: "Personal Research",
    timeline: "4 Months (2023)",
    features: [
        { name: "Transformer-based Model", description: "Leveraged BERT for contextual understanding." },
        { name: "Fine-tuning", description: "Adapted pre-trained models for specific QA tasks." },
        { name: "Performance Evaluation", description: "Rigorous testing using F1 and Exact Match scores." },
        { name: "Scalable Architecture", description: "Designed for handling large text corpora." }
    ]
  },
  {
    id: 'portfolio-website-project',
    title: 'Interactive Portfolio Website',
    category: 'Web Development',
    description: 'This very portfolio! A modern, responsive single-page application built with React and Tailwind CSS, featuring smooth animations.',
    tags: ['React', 'TailwindCSS', 'Framer Motion', 'JavaScript', 'Responsive Design', 'Vite'],
    imageUrlKey: 'portfolioSite',
    liveLink: '/', 
    viewCodeLink: 'https://github.com/naufaln18/Portfolio-Website-React-Tailwind',
    longDescription: "Designed and developed this personal portfolio to showcase my skills and projects. Focused on creating a visually appealing and intuitive user interface with modern design principles. Implemented features like dark/light mode, smooth scrolling, and responsive layouts to ensure accessibility across devices. Utilized Vite for fast development and Framer Motion for engaging animations.",
    challenges: "Ensuring cross-browser compatibility, optimizing performance for animations, and structuring components for maintainability and reusability.",
    learnings: "Enhanced skills in frontend development with React, advanced TailwindCSS utility-first styling, and implementing complex, performant user interactions with Framer Motion. Deepened understanding of modern JavaScript and build tools.",
    client: "Personal Project",
    timeline: "Ongoing",
     features: [
        { name: "Responsive Design", description: "Adapts seamlessly to all screen sizes." },
        { name: "Dark/Light Mode", description: "User-selectable theme preference." },
        { name: "Smooth Animations", description: "Engaging transitions powered by Framer Motion." },
        { name: "Component-Based Architecture", description: "Modular and maintainable codebase using React." }
    ]
  },
  {
    id: 'bi-dashboard',
    title: 'Sales Performance BI Dashboard',
    category: 'Business Intelligence',
    description: 'Designed and implemented an interactive Power BI dashboard to track key sales metrics, providing actionable insights for business decision-making.',
    tags: ['Power BI', 'DAX', 'Data Modeling', 'Data Visualization', 'SQL'],
    imageUrlKey: 'biDashboard',
    liveLink: '#', // Typically internal
    viewCodeLink: null, 
    longDescription: "This project involved connecting to multiple data sources (SQL databases, Excel files), transforming and modeling data, and creating compelling visualizations in Power BI. The dashboard included KPIs for sales revenue, growth trends, regional performance, and product analysis. Utilized DAX for complex calculations and measures. Focused on user-centric design for easy interpretation by stakeholders.",
    challenges: "Integrating disparate data sources, ensuring data accuracy and consistency, and designing visualizations that are both informative and easy to understand for non-technical users. Optimizing DAX queries for large datasets.",
    learnings: "Strengthened expertise in data modeling, advanced DAX query writing, and the art of storytelling with data through effective dashboard design. Gained experience in stakeholder communication and requirement gathering for BI solutions.",
    client: "Corporate Project (Simulated)",
    timeline: "3 Months (2023)",
    features: [
        { name: "Interactive Visualizations", description: "Drill-down capabilities and dynamic filtering." },
        { name: "KPI Tracking", description: "Real-time monitoring of key sales metrics." },
        { name: "Data Modeling", description: "Efficient data relationships for accurate reporting." },
        { name: "Actionable Insights", description: "Designed to support data-driven decision-making." }
    ]
  },
];

export const projectImagePlaceholders = {
  mlSystem: <img  alt="Peak Energy Prediction System abstract visualization" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1604177420682-0c840feb01de" src="https://images.unsplash.com/photo-1604177420682-0c840feb01de" />,
  nlpModel: <img  alt="Advanced QA Model abstract visualization" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1549925245-f20a1bac6454" src="https://images.unsplash.com/photo-1549925245-f20a1bac6454" />,
  portfolioSite: <img  alt="Portfolio Website design preview" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3" src="https://images.unsplash.com/photo-1551033406-611cf9a28f67" />,
  biDashboard: <img  alt="BI Dashboard showing charts and graphs" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d" src="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d" />,
};
