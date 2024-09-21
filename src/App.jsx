import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import AboutMePage from './components/AboutMePage';  // Existing component
import ProjectsPage from './components/ProjectsPage';  // New ProjectsPage component

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Router basename="/react-portfolio">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar on the left */}
        <Sidebar isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />

        {/* Main content area on the right, changes based on the route */}
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<AboutMePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
