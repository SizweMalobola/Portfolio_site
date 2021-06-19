import React from "react";
import { Link } from "react-router-dom";
import styles from "./fixedBottomStyle.module.css";
import { FaArrowUp, FaEnvelope } from "react-icons/fa";

function FixedBottom() {
  // Todo put id of top to route for scroll up functionality to work
  return (
    <>
      <Link to="/contact" className={styles["envelope"]}>
        <FaEnvelope /> <span>contact me</span>
      </Link>
      {/* this will stay hidden until the page has reached a certain point */}
      <button
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        className={styles["scroll-up"]}
      >
        <FaArrowUp />
      </button>
    </>
  );
}

export default FixedBottom;
