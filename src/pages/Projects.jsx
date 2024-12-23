import React from "react";

function Projects() {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        <div className="project-card">
          <img src="./images-projects/SophieBluel.png" alt="Riding Cities" />
          <p className="projects-paragraph">Riding Cities</p>
        </div>
        <div className="project-card">
          <img src="./images-projects/SophieBluel.png" alt="Booki" />
          <p className="projects-paragraph">Booki</p>
        </div>
        <div className="project-card">
          <img src="./images-projects/SophieBluel.png" alt="Print it" />
          <p className="projects-paragraph">Print it</p>
        </div>
        <div className="project-card">
          <img src="./images-projects/Kasa-project.png" alt="Ohmyfood" />
          <p className="projects-paragraph">Ohmyfood</p>
        </div>
        <div className="project-card">
          <img src="path-to-image-03.jpg" alt="Sophie Bluel" />
          <p className="projects-paragraph">Sophie Bluel</p>
        </div>
        <div className="project-card">
          <img src="path-to-image-04.jpg" alt="Kasa" />
          <p className="projects-paragraph">Kasa</p>
        </div>
        <div className="project-card">
          <img src="path-to-image-04.jpg" alt="Nina Carducci" />
          <p className="projects-paragraph">Nina Carducci</p>
        </div>
        <div className="project-card">
          <img src="path-to-image-05.jpg" alt="Argent Bank" />
          <p className="projects-paragraph">Argent Bank</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
