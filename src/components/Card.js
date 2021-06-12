import React from "react";
import styles from "./cardStyle.module.css";

function Card({ timeline, projectName, imgURL }) {
  return (
    <a href="/#">
      {/* add imgurl */}
      <div>
        <span>{timeline}</span>
        <h2>{projectName}</h2>
        <span>View Case Study -{">"}</span>
      </div>
    </a>
  );
}

export default Card;
