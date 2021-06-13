import React from "react";
import styles from "./navbarStyle.module.css";
import { TimelineLite } from "gsap/gsap-core";
import { Link } from "react-router-dom";

function Navbar() {
  const animationTimeline = new TimelineLite({ paused: true });
  return (
    <nav className={styles["container"]}>
      <Link to="/" className={styles["logo"]}>
        <span>
          <b>S</b>
          <b>M</b>
        </span>
        <span>Web Developer</span>
      </Link>
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
