import React from "react";
import styles from "./homeStyle.module.css";
import { TimelineLite } from "gsap/gsap-core";
import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import Card from "./Card";
import Footer from "./Footer";

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
                It was late 2019 that I decided to pursue a career in the
                software development industry and become a web developer. Since
                then I've had my ups and downs, made sacrifices and I've
                persevered. This is how badly I want to write code for a living.
              </p>
              <span>
                <a href="/#">View Projects</a> or{" "}
                <Link to="/about">Read About Me</Link>
              </span>
            </div>
          </div>
        </section>
        {/* projects section */}
        <section className={styles["projects"]}>
          <SectionHeader title="Case studies" subtitle="Selected projects" />
          <div className={styles["card-grid"]}>
            <Card
              timeline="2018 - 2019"
              projectName="Basic UX -- design resources for Virgin Studio"
              imgURL={null}
              height={800}
              more="View Case Study"
              id="1"
            />
            <Card
              timeline="2017"
              projectName="Tripo -- responsive eCommerce website design"
              imgURL={null}
              height={800}
              more="View Case Study"
              id="2"
            />
            <Card
              timeline="2017"
              projectName="Symbiyo -- responsive website design"
              imgURL={null}
              height={800}
              more="View Case Study"
              id="3"
            />
            <Card
              timeline="2016 - 2018"
              projectName="DVD -- online platform & website design"
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
              timeline="2021 - PRESENT"
              projectName="Photo gallery -- design resources for Virgin Studio"
              imgURL={null}
              height={500}
              more="View My Progress"
              id="5"
            />
            <Card
              timeline="2021 - PRESENT"
              projectName="Berserk Tribute -- responsive eCommerce website design"
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
    </>
  );
};

export default Home;
