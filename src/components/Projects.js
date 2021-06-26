import React, { useEffect, useState } from "react";
import GoToTop from "./GoToTop";
import styles from "./projectsStyle.module.css";
import data from "../data.json";

function Projects({ match }) {
  const [projectData] = useState(() => {
    return data[match.params.id - 1];
  });

  useEffect(() => {}, []);

  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["project"]}>
          <div className={styles["project-overview"]}>
            <h3 className={styles["subtitle"]}>CASE STUDY</h3>
            <h2 className={styles["title"]}>{projectData.title}</h2>
            <h3 className={styles["subtitle"]}>TECH STACK USED</h3>
            <ul className={styles["list"]}>
              {projectData["tech_stack"].map((val, index) => {
                return <li key={index + 222}>{val}</li>;
              })}
            </ul>
            <a className={styles["link"]} href={projectData["code_url"]}>
              View Code
            </a>
            <a className={styles["link"]} href={projectData["preview_url"]}>
              Live Preview
            </a>
          </div>
          <div className={styles["project-details"]}>
            {projectData["paragraph_array"].map((val, index) => {
              return <p key={index + 222}>{val}</p>;
            })}
          </div>
        </div>
        <div className={styles["images-container"]}>
          <div className={styles["image"]}></div>
          <div className={styles["image"]}></div>
        </div>
      </div>
      <GoToTop />
    </>
  );
}

export default Projects;
