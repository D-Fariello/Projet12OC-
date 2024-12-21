import React from "react";

function Experience() {
  return (
    <section id="experience-page">
      <h1 className="experience-title">Experiences</h1>

      {/* Experience 1 */}
      <div className="experience-item">
        <h2 className="experience-subtitle">Front-End Developer</h2>
        <p className="experience-paragraph">
          <span>Description: </span> Implemented responsive and user-friendly
          web interfaces, ensuring cross-browser compatibility and seamless user
          experiences.
          <br /> <span>Key Skills: </span> HTML, CSS, JavaScript, React,
          Responsive Design.
          <br /> <span>Highlight: </span> Focused on website performance
          optimization and dynamic user interface integration during your course
          at OpenClassrooms.
        </p>
      </div>

      {/* Experience 2 */}
      <div className="experience-item">
        <h2 className="experience-subtitle">Global Product Support Lead</h2>
        <p className="experience-paragraph">
          <span>Description: </span> Led a high-performing team to streamline
          workflows, resolve customer issues, and optimize collaboration between
          product and support teams.
          <br /> <span>Key Skills: </span> Team Leadership, Process Improvement,
          Communication, Coaching.
          <br /> <span>Highlight: </span> Enhanced efficiency by instituting
          streamlined communication processes between the Product and Support
          Teams.
        </p>
      </div>

      {/* Experience 3 */}
      <div className="experience-item">
        <h2 className="experience-subtitle">Italian Market Manager</h2>
        <p className="experience-paragraph">
          <span>Description: </span> Managed customer service, after-sales
          support, and marketplace performance for Italy and the UK, ensuring
          high customer satisfaction and effective logistics coordination.
          <br /> <span>Key Skills: </span> Customer Service, Logistics, Data
          Analysis, Performance Management.
          <br /> <span>Highlight: </span> Successfully controlled revenue,
          expenses, and stock replenishment while improving marketplace
          performance.
        </p>
      </div>
    </section>
  );
}

export default Experience;
