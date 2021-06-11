import React from "react";
import styles from "./navbarStyle.module.css";
import { TimelineLite } from "gsap/gsap-core";

function Navbar() {
  const animationTimeline = new TimelineLite({ paused: true });
  return (
    <nav className={styles["container"]}>
      <a href="/" className={styles["logo"]}>
        LOGO
      </a>
      <div className={styles["menu"]}>
        <span>menu</span>
      </div>
    </nav>
  );
}

export default Navbar;
