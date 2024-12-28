import React from "react";

function AboutMe() {
  return (
    <div className="about-me-div">
      <section id="about-me">
        <h1 className="about-me-title">About Me</h1>
        <p className="about-me-paragraph">
          I am a passionate front-end developer and lifelong learner who thrives
          on creating engaging web experiences.
          <br />
          Fluent in Italian, Spanish, English, and French, I love connecting
          with people from diverse cultures and continuously expanding my
          horizons.
          <br />A travel enthusiast and dog lover, I enjoy exploring new places,
          embracing different languages, and enriching my perspective through
          learning and collaboration.
        </p>
      </section>
      <section className="image-section">
        <img
          className="about-me-image"
          src="./public/images-projects/Dalila-copy.png"
          alt="Dalila's photo"
        />
      </section>
    </div>
  );
}

export default AboutMe;
