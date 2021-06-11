import React from "react";
import styles from "./homeStyle.module.css";
import { TimelineLite } from "gsap/gsap-core";

const HOme = () => {
  const animationTimeline = new TimelineLite({ paused: true });
  return (
    <>
      <div className={styles["container"]}></div>
    </>
  );
};

export default HOme;
