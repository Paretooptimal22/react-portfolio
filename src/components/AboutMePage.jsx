import React, { useState } from 'react';
import Sidebar from './sidebar'; // Import the sidebar component

function AboutMePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar: hidden on small screens */}
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />

      <main className="flex-1 p-6">
        {/* About Me Section */}
        <section id="about" className="mb-8">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>

          <div className="flex flex-col md:flex-row items-start">
            {/* Image */}
            <img
              src="/me.jpeg" // Replace this with the actual path to your image
              alt="Kevin Young"
              className="w-48 h-48 rounded-lg mb-4 md:mb-0 md:mr-6"
            />

            {/* Text */}
            <div>
              <p className="text-2xl mb-4">
                Hello! I'm Kevin, a full-stack web developer based in Japan. I have experience working with React, Rails,
                and more. I love creating applications that make life easier.
              </p>

              <p className="text-2xl">
                When I am not coding, I like to play sports, exercise, take photos, study Japanese, and learn new technologies!
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p className="text-lg">
            Here are some of the projects I've worked on, including a dating app, a video game rental service, and a recruiting app for founders.
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-lg">
            Feel free to reach out to me on LinkedIn or via email!
          </p>
        </section>
      </main>
    </div>
  );
}

export default AboutMePage;
