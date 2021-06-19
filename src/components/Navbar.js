import React, { useEffect, useState } from "react";
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
  // when modal is open body overflow will be set to hidden
  //! fix change in width then scrollbar-y is removed
  useEffect(() => {
    const bodyElement = document.querySelector("body");
    showModal
      ? bodyElement.classList.toggle(styles["modal-open"], true)
      : bodyElement.classList.toggle(styles["modal-open"], false);
  }, [showModal]);
  return (
    <>
      <Link to="/" className={`${styles["logo"]}`}>
        <span
          style={
            showModal ? { color: "#8e8a8f", border: "4px solid #8e8a8f" } : null
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

        {showModal ? (
          <b className={styles["menu-icons-modal"]}>
            <i></i>
            <i></i>
          </b>
        ) : (
          <b className={styles["menu-icons"]}>
            <i></i>
            <i></i>
            <i></i>
          </b>
        )}
      </div>
      {showModal ? <ModalPortal closeModal={clickHandler} /> : null}
    </>
  );
}

export default Navbar;
