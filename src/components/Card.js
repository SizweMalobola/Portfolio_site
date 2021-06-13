import React from "react";
import { Link } from "react-router-dom";
import styles from "./cardStyle.module.css";

function Card({ timeline, projectName, imgURL, height, more, id }) {
  return (
    <Link
      to={`/projects/${id}`}
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
    </Link>
  );
}

export default Card;
