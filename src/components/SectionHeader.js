import React from "react";
import styles from "./sectionHeaderStyle.module.css";

function SectionHeader({ subtitle, title }) {
  return (
    <div>
      <h3 className={styles["subtitle"]}>{subtitle.toUpperCase()}</h3>
      <h1 className={styles["title"]}>{title}</h1>
    </div>
  );
}

export default SectionHeader;
