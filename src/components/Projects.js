import React, { useEffect, useState } from "react";
import GoToTop from "./GoToTop";
import styles from "./projectsStyle.module.css";
import data from "../data.json";
import { gsap, ScrollTrigger, TimelineLite } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Projects({ match }) {
  const [projectData] = useState(() => {
    return data[match.params.id - 1];
  });
  const introLinesRef = [];
  const secondLinesRef = [];
  const paragraphsRef = [];
  const imagesRef = [];
  useEffect(() => {
    const myTween = gsap.timeline();
    myTween
      .from(introLinesRef, { y: 60, autoAlpha: 0, duration: 0.5 })
      .from(secondLinesRef, { y: 60, autoAlpha: 0, duration: 0.5 })
      .from(paragraphsRef, {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.25,
      });
    gsap.from(imagesRef[0], {
      scrollTrigger: { trigger: imagesRef[0] },
      duration: 0.8,
      y: 250,
      autoAlpha: 0,
    });
    gsap.from(imagesRef[1], {
      scrollTrigger: { trigger: imagesRef[1] },
      duration: 0.8,
      y: 150,
      autoAlpha: 0,
    });
  }, []);

  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["project"]}>
          <div className={styles["project-overview"]}>
            <h3
              ref={(line1) => {
                introLinesRef.push(line1);
              }}
              className={styles["subtitle"]}
            >
              CASE STUDY
            </h3>
            <h2
              ref={(line2) => {
                introLinesRef.push(line2);
              }}
              className={styles["title"]}
            >
              {projectData.title}
            </h2>
            <h3
              ref={(line0) => {
                secondLinesRef.push(line0);
              }}
              className={styles["subtitle"]}
            >
              TECH STACK USED
            </h3>
            <ul
              ref={(line1) => secondLinesRef.push(line1)}
              className={styles["list"]}
            >
              {projectData["tech_stack"].map((val, index) => {
                return <li key={index + 222}>{val}</li>;
              })}
            </ul>
            <a
              ref={(line2) => secondLinesRef.push(line2)}
              className={styles["link"]}
              href={projectData["code_url"]}
            >
              View Code
            </a>
            <a
              ref={(line3) => secondLinesRef.push(line3)}
              className={styles["link"]}
              href={projectData["preview_url"]}
            >
              Live Preview
            </a>
          </div>
          <div className={styles["project-details"]}>
            {projectData["paragraph_array"].map((val, index) => {
              return (
                <p
                  ref={(paragraph) => {
                    paragraphsRef.push(paragraph);
                  }}
                  key={index + 222}
                >
                  {val}
                </p>
              );
            })}
          </div>
        </div>
        <div className={styles["images-container"]}>
          <div
            ref={(image) => imagesRef.push(image)}
            className={styles["image"]}
          ></div>
          <div
            ref={(image2) => imagesRef.push(image2)}
            className={styles["image"]}
          ></div>
        </div>
      </div>
      <GoToTop />
    </>
  );
}

export default Projects;
