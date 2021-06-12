import React from "react";
import styles from "./navbarStyle.module.css";
import { TimelineLite } from "gsap/gsap-core";

function Navbar() {
  const animationTimeline = new TimelineLite({ paused: true });
  return (
    <nav className={styles["container"]}>
      <a href="/" className={styles["logo"]}>
        <span>
          <b>S</b>
          <b>M</b>
        </span>
        <span>Web Developer</span>
      </a>
      <div className={styles["menu"]}>
        <span className={styles["menu-text"]}>MENU</span>
        <b className={styles["menu-icons"]}>
          <i></i>
          <i></i>
          <i></i>
        </b>
      </div>
    </nav>
  );
}

export default Navbar;
