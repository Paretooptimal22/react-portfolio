import React from "react";
import AboutMe from "../components/AboutMe.jsx";
import Projects from "../components/Projects.jsx";
import ContactMe from "../components/ContactMe.jsx";
import { Container } from "postcss";

function HomePage() {
  return (
    <div>
      <container class="mx-auto">
        <AboutMe />
        <Projects />
        <ContactMe />
      </container>
    </div>
  );
}

export default HomePage;
