import React, { useEffect } from "react";
import styles from "./sectionHeaderStyle.module.css";
import { gsap, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function SectionHeader({ subtitle, title }) {
  let divRef = null;
  useEffect(() => {
    gsap.from(divRef, {
      scrollTrigger: { trigger: divRef },
      duration: 0.8,
      autoAlpha: 0,
      y: 130,
    });
  }, [divRef]);

  return (
    <div
      ref={(div) => {
        divRef = div;
      }}
    >
      <h3 className={styles["subtitle"]}>{subtitle.toUpperCase()}</h3>
      <h1 className={styles["title"]}>{title}</h1>
    </div>
  );
}

export default SectionHeader;
