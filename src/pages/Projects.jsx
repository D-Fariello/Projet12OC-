import React, { useState } from "react";
import projectsData from "../data/projectsData";
import Modal from "../components/Modal";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="projects-buttons">
        <button className="buttons">All</button>
        <button className="buttons">JavaScript</button>
        <button className="buttons">React</button>
        <button className="buttons">Redux</button>
      </div>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => handleProjectClick(project)} // Gestore clic
          >
            <img src={project.image} alt={project.alt} />
            <p className="projects-paragraph">{project.title}</p>
          </div>
        ))}
      </div>
      {/* Modale */}
      <Modal show={showModal} onClose={closeModal} project={selectedProject} />
    </section>
  );
}

export default Projects;
