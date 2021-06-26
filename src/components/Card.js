import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./cardStyle.module.css";
import { gsap, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Card({ timeline, projectName, imgURL, height, more, id }) {
  let cardRef = null;
  useEffect(() => {
    gsap.from(cardRef, {
      scrollTrigger: { trigger: cardRef },
      duration: 0.8,
      y: 120,
      autoAlpha: 0,
    });
  }, [cardRef]);

  return (
    <Link
      ref={(card) => (cardRef = card)}
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
