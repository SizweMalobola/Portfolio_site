import React from "react";
import styles from "./cardStyle.module.css";

function Card({ timeline, projectName, imgURL, height, more }) {
  return (
    <a
      style={{ height: `${height}px` }}
      className={styles["container"]}
      href="/#"
    >
      {/* add imgurl */}
      <div>
        <span>{timeline}</span>
        <h2>{projectName}</h2>
        <span>
          {more} -{">"}
        </span>
      </div>
    </a>
  );
}

export default Card;
