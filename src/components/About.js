import React from "react";
import styles from "./aboutStyle.module.css";

function About() {
  return (
    <div id="top" className={styles["container"]}>
      <h3 className={styles["subtitle"]}>A LITTLE ABOUT ME</h3>
      <h2 className={styles["title"]}>
        I'm Sizwe Malobola, I'm a self-taught web developer with aspiration to
        become the best. I have put more thought into this, so this shall server
        as my placeholder until I'm able to come up with something.
      </h2>
      <p className={styles["content"]}>
        This paragrath down here is also a placeholder, I thought I'd just wing
        it. Boy was I wrong.
      </p>
      <div className={styles["stack-grid"]}>
        <div>HTML</div>
        <div>CSS</div>
        <div>JavaScript</div>
        <div>React</div>
      </div>
    </div>
  );
}

export default About;
