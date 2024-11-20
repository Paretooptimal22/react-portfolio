import React from "react";
import ProjectCard from "./ProjectCard";

// Import the images directly
import PRMImage from "../assets/images/PRM2.png";
import GameVaultImage from "../assets/images/gamevault.png";
import MERNProduct from "../assets/images/mernProduct.png";
import xClone from "../assets/images/xClone.png";
import chatApp from "../assets/images/chatApp.png";

function Projects() {
  const projects = [
    {
      name: "Chat App",
      image: chatApp, // Replace with your actual image path
      details: "Team: 1 member | Duration: 2 weeks",
      description:
        "Chat app built with TypeScript + Socket.io + Prisma + TailwindCSS + PostgreSQL + Express + React + Node",
      link: "https://pern-chat-app-m493.onrender.com/",
    },
    {
      name: "X Clone",
      image: xClone, // Replace with your actual image path
      details: "Team: 1 member | Duration: 7 days",
      description:
        "MERN stack and TailwindCSS: made a clone of X. Features include: auth w/ JWT, React Query for data fetching and caching, suggest users, create posts, delete posts, commenting on posts, liking posts, edit profile, image uploads w/ Cloudinary, and notifications.",
      link: "https://x-clone-rzzc.onrender.com/",
    },
    {
      name: "MERN Product Store",
      image: MERNProduct, // Replace with your actual image path
      details: "Team: 1 member | Duration: 2 days",
      description:
        "Using MERN stack and Vite, this is a sleek Product store that handles CRUD.",
      link: "https://mern-product-store-zakd.onrender.com/",
    },
    {
      name: "PRM - Personal Relationship Management",
      image: PRMImage, // Replace with your actual image path
      details: "Team: 4 members | Duration: 2 weeks",
      description:
        "A modern relationship management app built with Rails that helps users manage their personal network.",
      link: "https://www.theprm.tech/",
    },
    {
      name: "Game Vault",
      image: GameVaultImage, // Replace with your actual image path
      details: "Team: 4 members | Duration: 5 days",
      description:
        "An app that allows users to rent and offer video games for rent. Built with Rails.",
      link: "https://github.com/Paretooptimal22/game-vault",
    },
  ];

  return (
    <div className="flex-1 px-6 pb-6 ">
      <h1 className="mb-4 text-4xl font-bold">Projects</h1>

      {/* Project Cards Container */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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

export default Projects;
