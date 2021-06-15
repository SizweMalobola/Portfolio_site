import React from "react";
import styles from "./projectsStyle.module.css";

function Projects({ match }) {
  return (
    <div className={styles["container"]}>
      <div className={styles["project-details"]}>
        <div className={styles["left"]}>
          <h3>CASE STUDY</h3>
          {/* <h2>{projectTitle}</h2> */}
        </div>
        <div className={styles["right"]}></div>
      </div>
      <div className={styles["images-grid"]}></div>
    </div>
  );
}

export default Projects;
