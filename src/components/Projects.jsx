import React, { useEffect } from "react";
import { projects } from "../data";
import ProjectCard from "./ProjectCard";

export default function Projects() {

  // Entry animation
  useEffect(() => {
    const projectsCards = document.querySelectorAll(".projects-gallery .card");
    projectsCards.forEach((card) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            card.classList.add("animate-card");
          }
        });
      });

      observer.observe(card);
    });
  }, []);

  return (
    <div className="section mb-4" id="projects">
      <h1>Projects</h1>

      <div className="projects-gallery">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </div>
  );
}
