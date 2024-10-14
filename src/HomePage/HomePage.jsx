import React from "react";
import AboutMe from "../components/AboutMe.jsx";
import Projects from "../components/Projects.jsx";
import ContactMe from "../components/ContactMe.jsx";

function HomePage() {
  return (
    <div>
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default HomePage;
