import React, { useState } from "react";
import styles from "./navbarStyle.module.css";
import { TimelineLite } from "gsap/gsap-core";
import { Link } from "react-router-dom";
import ModalPortal from "./ModalPortal";

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const animationTimeline = new TimelineLite({ paused: true });
  const clickHandler = () => {
    showModal ? setShowModal(false) : setShowModal(true);
  };
  return (
    <>
      <nav className={styles["container"]}>
        <Link to="/" className={`${styles["logo"]}`}>
          <span
            style={
              showModal
                ? { color: "#8e8a8f", border: "4px solid #8e8a8f" }
                : null
            }
          >
            <b>S</b>
            <b>M</b>
          </span>
          <span style={showModal ? { color: "#8e8a8f" } : null}>
            Web Developer
          </span>
        </Link>
        <div
          onClick={clickHandler}
          style={showModal ? { color: "#8e8a8f" } : null}
          className={styles["menu"]}
        >
          <span className={styles["menu-text"]}>MENU</span>
          {/* change color of bars if showModal is true */}
          <b className={styles["menu-icons"]}>
            <i></i>
            <i></i>
            <i></i>
          </b>
        </div>
      </nav>
      {showModal ? <ModalPortal /> : null}
    </>
  );
}

export default Navbar;
