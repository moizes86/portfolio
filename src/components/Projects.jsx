import React from "react";
import {projects} from "../data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="section" id="projects">
      <h1>Projects</h1>

      <div className="projects-gallery">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title}/>
        ))}
      </div>
    </div>
  );
}
