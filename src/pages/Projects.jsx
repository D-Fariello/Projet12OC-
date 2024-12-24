import React from "react";
import projectsData from "../data/projectsData";

function Projects() {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.alt} />
            <p className="projects-paragraph">{project.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
