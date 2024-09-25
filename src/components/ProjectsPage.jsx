import React from 'react';
import ProjectCard from './ProjectCard';

// Import the images directly
import PRMImage from '../assets/images/PRM2.png';
import GameVaultImage from '../assets/images/gamevault.png';
import MERNProduct from '../assets/images/mernProduct.png';

function ProjectsPage() {
  const projects = [
    {
      name: 'MERN Product Store',
      image: MERNProduct, // Replace with your actual image path
      details: 'Team: 1 member | Duration: 2 days',
      description: 'Using MERN stack and Vite, this is a sleek Product store that handles CRUD.',
      link: 'https://mern-product-store-zakd.onrender.com/'
    },
    {
      name: 'PRM - Personal Relationship Management',
      image: PRMImage, // Replace with your actual image path
      details: 'Team: 4 members | Duration: 2 weeks',
      description: 'A modern relationship management app built with Rails that helps users manage their personal network.',
      link: 'https://www.theprm.tech/'
    },
    {
      name: 'Game Vault',
      image: GameVaultImage, // Replace with your actual image path
      details: 'Team: 4 members | Duration: 5 days',
      description: 'An app that allows users to rent and offer video games for rent. Built with Rails.',
      link: 'https://github.com/Paretooptimal22/game-vault'
    },

  ];

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>

      {/* Project Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            name={project.name}
            details={project.details}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
