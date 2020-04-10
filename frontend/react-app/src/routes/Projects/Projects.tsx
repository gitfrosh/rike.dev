import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <>
      <span className="title">
        <h2>projects</h2>
      </span>
      <section>
        <p className="project-info">
          <b>Bot on Tap</b>. You need help setting up your own Twitter bot? We
          are here to help you developing and even running and maintaining it as
          "bot as a service".
        </p>

        <p className="project-info">
          <b>The Lord of the Rings API</b>. lorem ipsum.
        </p>

        <p className="project-info">
          <b>The friendly @femtech_ bot</b>
        </p>

        <p className="project-info">
          <b>queersplitter.de</b>. lorem
        </p>

        <p className="project-info">
          <b>the false quote generator</b>. fun project
        </p>
      </section>
    </>
  );
}

export default Projects;
