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
      {showModal ? (
        <>
          <Link to="/" className={`${styles["logo"]} ${styles["logo-modal"]}`}>
            <span>
              <b>S</b>
              <b>M</b>
            </span>
            <span>Web Developer</span>
          </Link>
          <div onClick={clickHandler} className={styles["menu"]}>
            <span
              className={`${styles["menu-text"]} ${styles["menu-text-modal"]}`}
            >
              CLOSE
            </span>
            <b className={styles["menu-icons-modal"]}>
              <i></i>
              <i></i>
            </b>
          </div>
          <ModalPortal closeModal={clickHandler} />
        </>
      ) : (
        <>
          <Link to="/" className={`${styles["logo"]}`}>
            <span>
              <b>S</b>
              <b>M</b>
            </span>
            <span>Web Developer</span>
          </Link>
          <div onClick={clickHandler} className={styles["menu"]}>
            <span className={styles["menu-text"]}>MENU</span>
            <b className={styles["menu-icons"]}>
              <i></i>
              <i></i>
              <i></i>
            </b>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
