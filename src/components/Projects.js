import React, { useEffect, useState } from "react";
import GoToTop from "./GoToTop";
import styles from "./projectsStyle.module.css";

function Projects({ match }) {
  const [data, setData] = useState();
  const getData = () => {
    fetch("/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setData(data[match.params.id - 1]);
        console.log(data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["project"]}>
          <div className={styles["project-overview"]}>
            <h3 className={styles["subtitle"]}>CASE STUDY</h3>
            <h2 className={styles["title"]}>{data && data.title}</h2>
            <h3 className={styles["subtitle"]}>TECH STACK USED</h3>
            <ul className={styles["list"]}>
              {data &&
                data["tech_stack"].map((val, index) => {
                  return <li key={index + 222}>{val}</li>;
                })}
            </ul>
            <a className={styles["link"]} href={data && data["code_url"]}>
              View Code
            </a>
            <a className={styles["link"]} href={data && data["preview_url"]}>
              Live Preview
            </a>
          </div>
          <div className={styles["project-details"]}>
            {data &&
              data["paragraph_array"].map((val, index) => {
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
