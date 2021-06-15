import React from "react";
import styles from "./projectsStyle.module.css";

function Projects({ match }) {
  return (
    <div className={styles["container"]}>
      <div className={styles["project"]}>
        <div className={styles["project-overview"]}>
          <h3 className={styles["subtitle"]}>CASE STUDY</h3>
          <h2 className={styles["title"]}>
            Basic UX — design resources for InVision Studio
          </h2>
          <h3 className={styles["subtitle"]}>TECH STACK USED</h3>
          <ul className={styles["list"]}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <a className={styles["link"]} href="/#">
            View Code
          </a>
          <a className={styles["link"]} href="/#">
            Live Preview
          </a>
        </div>
        <div className={styles["project-details"]}>
          <p>
            Studio is a new powerful tool where you can design, prototype and
            animate your projects easily. One of InVision's initiatives is the
            Design Forward Fund, a $5 million fund dedicated to investing in the
            future of design. I'm happy to say that my idea was among several
            selected for implementation and shortly after the initial
            interviews, we began shaping requirements for the Basic UX project.
          </p>
          <p>
            Our goal was to create an extensive library of components and assets
            to help designers wireframe their web projects faster. Over the
            course of 5 months I designed more than 400 layout components in 30
            categories (each prepared for desktop, tablet & phone screens), 128
            icons, 56 user journey map elements and over 100 user interface
            elements. You can easily customize and combine them when working on
            your wireframes.
          </p>
          <p>
            Aside from that, I was in touch with the Director of Product and the
            InVision tech team to report issues and bugs that I found within the
            software, as well as to propose improvements regarding certain
            functionalities. It was exciting to see how the product evolved and
            improved with each update during this short time.
          </p>
        </div>
      </div>
      <div className={styles["images-container"]}>
        <div className={styles["image"]}></div>
        <div className={styles["image"]}></div>
        <div className={styles["image"]}></div>
        <div className={styles["image"]}></div>
      </div>
    </div>
  );
}

export default Projects;
