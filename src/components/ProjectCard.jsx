// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ image, name, details, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {/* Project Image */}
      <img className="w-full h-48 object-cover object-top" src={image} alt={name} />

      {/* Project Info */}
      <div className="px-6 py-4">
        {/* Project Name */}
        <div className="font-bold text-xl mb-2">{name}</div>
        {/* Project Details */}
        <p className="text-gray-700 text-base">{details}</p>
        {/* Project Description */}
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
