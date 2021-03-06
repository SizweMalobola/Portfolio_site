import React from "react";
import styles from "./footerStyle.module.css";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className={styles["footer-top"]}>
        <div className={styles["contact-info"]}>
          <div>
            <h3>Contact information -</h3>
            <p>
              Feel free to reach out to me any time. I prefer to talk over
              email.
            </p>
          </div>
          <div>
            <p>
              E: <span>scjmalobola@gmail.com</span>
            </p>
            <p>
              P: <span>+27 76 447 2201</span>
            </p>
          </div>
        </div>
        <div className={styles["latest-project"]}>
          <h3>Latest projects -</h3>
          <Link to="/projects/1">Where is waldo</Link>
          <Link to="/projects/2">Battleship</Link>
          <Link to="/projects/3">Memory card</Link>
          <Link to="/projects/4">Weather app</Link>
          <Link to="/">All projets</Link>
        </div>
        <div className={styles["current-availability"]}>
          <h3>Current availability -</h3>
          <p>
            Currently available and I'm open to discussing new opportunities.
            Let’s get in touch!
          </p>
        </div>
        <div className={styles["social-media"]}>
          <h3>Follow me on -</h3>
          <a
            href="https://www.linkedin.com/in/SizweMalobola"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/SizweMalobola"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <div className={styles["footer-bottom"]}>
        <Link to="/" className={styles["logo"]}>
          <span>
            <b>S</b>
            <b>M</b>
          </span>
          <span>Web Developer</span>
        </Link>
        <div>
          <span>&copy; 2021 Sizwe Malobola.</span>
          <span>Go forth be conquered.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
