import React from "react";
import styles from "./footerStyle.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className={styles["footer-top"]}>
        <div className={styles["contact-info"]}>
          <div>
            <h3>Contact information --</h3>
            <p>
              Feel free to reach out to me any time. I prefer to talk over
              email, especially since we may be a few time zones away.
            </p>
          </div>
          <div>
            <p>
              E: <span>scjmalobola@gmail.com</span>
            </p>
            <p>
              P: <span>+27 3823 8398</span>
            </p>
          </div>
        </div>
        <div className={styles["latest-project"]}>
          <h3>Latest projects -</h3>
          <a href="/#">Iceland</a>
          <a href="/#">Basic UX</a>
          <a href="/#">Triniso</a>
          <a href="/#">Symova</a>
          <a href="/#">PMR</a>
          <a href="/#">All projects</a>
        </div>
        <div className={styles["current-availability"]}>
          <h3>Current availability -</h3>
          <p>
            I usually work on several projects but I’ll be happy to discuss new
            opportunities. Let’s get in touch!
          </p>
        </div>
        <div className={styles["social-media"]}>
          <h3>Follow me on -</h3>
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
