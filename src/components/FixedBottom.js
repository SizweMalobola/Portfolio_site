import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./fixedBottomStyle.module.css";
import { FaArrowUp, FaEnvelope } from "react-icons/fa";

function FixedBottom() {
  const [scrollPos, setScrollPos] = useState(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPos(document.documentElement.scrollTop);
    });
  });
  return (
    <>
      <Link to="/contact" className={styles["envelope"]}>
        <FaEnvelope /> <span>contact me</span>
      </Link>
      {/* this will stay hidden until the page has reached a certain point */}
      {scrollPos > 500 ? (
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={styles["scroll-up"]}
        >
          <FaArrowUp />
        </button>
      ) : null}
    </>
  );
}

export default FixedBottom;
