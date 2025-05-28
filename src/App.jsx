import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import AllProjectsPage from '@/pages/AllProjectsPage';
import ProjectDetailPage from '@/pages/ProjectDetailPage';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AnimatePresence } from 'framer-motion';

// This component will handle scrolling to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Wrapper component to correctly use useLocation for AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<AllProjectsPage />} />
        <Route path="/project/:projectId" element={<ProjectDetailPage />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <ScrollToTop />
        <div className="bg-portfolio-background text-portfolio-card-foreground selection:bg-portfolio-primary selection:text-white flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-20"> {/* Added pt-20 to prevent overlap with sticky navbar */}
            <AnimatedRoutes />
          </main>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;