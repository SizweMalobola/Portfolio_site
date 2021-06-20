import React from "react";
import styles from "./homeStyle.module.css";
import { TimelineLite } from "gsap/gsap-core";
import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import Card from "./Card";
import Footer from "./Footer";
import GoToTop from "./GoToTop";

const Home = () => {
  const animationTimeline = new TimelineLite({ paused: true });
  return (
    <>
      <div className={styles["container"]}>
        {/* home top section */}
        <h1 className={styles["showcase"]}>web developer.</h1>
        <section className={styles["home-top"]}>
          <div className={styles["intro-div"]}>
            <div className={styles["row"]}>
              <h3>SIZWE MALOBOLA</h3>
              <h1>Self taught web developer</h1>
              <p>
                2019 was the year I decided to teach myself how to programme.
                Now I'm finally at a place where I can contribute meaningfully
                to building amazing user interfaces & web experiences for
                people. Don’t take my word for it, go through my portfolio and
                judge for yourself.
              </p>
              <span>
                <span
                  onClick={() => {
                    window.scrollTo(0, 1000);
                  }}
                >
                  View Projects
                </span>{" "}
                or
                <Link to="/about"> Read About Me</Link>
              </span>
            </div>
          </div>
        </section>
        {/* projects section */}
        <section className={styles["projects"]}>
          <SectionHeader title="Case studies" subtitle="Selected projects" />
          <div className={styles["card-grid"]}>
            <Card
              timeline="2021"
              projectName="Where Is Waldo -- fullstack photo tagging web app"
              imgURL={null}
              height={800}
              more="View Case Study"
              id="1"
            />
            <Card
              timeline="2021"
              projectName="Battleship -- recreation of the classic Battleship board game with ReactJS"
              imgURL={null}
              height={800}
              more="View Case Study"
              id="2"
            />
            <Card
              timeline="2021"
              projectName="Memory Card -- memory card game built with React"
              imgURL={null}
              height={800}
              more="View Case Study"
              id="3"
            />
            <Card
              timeline="2021"
              projectName="Wheather App -- retrieves a forecast based on a user's chosen location"
              imgURL={null}
              height={800}
              more="View Case Study"
              id="4"
            />
          </div>
        </section>
        {/* personal projects section --add as coming soon */}
        <section className={`${styles["projects"]} ${styles["in-progress"]}`}>
          <SectionHeader
            title="Coming soon"
            subtitle="Projects I'm currently working on"
          />
          <div className={styles["card-grid"]}>
            <Card
              timeline="2021"
              projectName="Personal Blog"
              imgURL={null}
              height={500}
              more="View My Progress"
              id="5"
            />
            <Card
              timeline="2021"
              projectName="Berserk Tribute"
              imgURL={null}
              height={500}
              more="View My Progress"
              id="6"
            />
          </div>
        </section>
        {/* contact section */}
        <section className={styles["contact-me"]}>
          <h3>NEED A WED DEVELOPER ?</h3>
          <Link to="/contact">
            <h1>Let's work together</h1>
          </Link>
        </section>
        {/* footer */}
        <Footer />
      </div>
      <GoToTop />
    </>
  );
};

export default Home;
