// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ image, name, details, description, githubLink }) => {
  return (
    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="block">
      <div className="h-full flex flex-col rounded overflow-hidden shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300">
        {/* Project Image */}
        <img className="w-full h-48 object-cover object-top" src={image} alt={name} />

        {/* Project Info */}
        <div className="px-6 py-4">
          {/* Project Name */}
          <div className="font-bold text-xl mb-2">{name}</div>
          {/* Project Details */}
          <p className="text-gray-700 text-base mb-2">{details}</p>
          {/* Project Description */}
          <p className="text-gray-700 text-sm">{description}</p>
        </div>
      </div>
    </a>

  );
};

export default ProjectCard;
