import * as React from "react";
import projects from "../projects.json";

export default function Projects() {
  /* DECLARE STYLE AND TRIGGER FOR WIGGLE EFFECT FROM TODO ON NEXT LINE */
  const projects_array = projects.projects
  return (
    <div className="page">
      <h1 className="title">Projects</h1>
      <div className="projects page-content">
        {projects_array.map((project) => (
          <div className="project">
          <img src={project.img} />
          <div>
            <h2>{project.name}</h2>
            <p>
              {project.description}
            </p>
            <a className="lrn-button" href={project.link}>
              Learn more
            </a>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}
