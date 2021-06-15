import React from "react";
import { Link } from "react-router-dom";
import styles from "./fixedBottomStyle.module.css";

function FixedBottom() {
  // Todo put id of top to route for scroll up functionality to work
  return (
    <>
      <Link to="/contact" className={styles["envelope"]}>
        M <span>contact me</span>
      </Link>
      {/* this will stay hidden until the page has reached a certain point */}
      <a className={styles["scroll-up"]} href="#top">
        U
      </a>
    </>
  );
}

export default FixedBottom;
