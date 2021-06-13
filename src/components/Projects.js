import React from "react";
import styles from "./projectsStyle.module.css";
function Projects({ match }) {
  return (
    <div>
      <h1>this is projects path {match.params.id}</h1>
    </div>
  );
}

export default Projects;
