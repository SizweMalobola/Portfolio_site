import React from "react";
import styles from "./homeStyle.module.css";
import { TimelineLite } from "gsap/gsap-core";
import SectionHeader from "./SectionHeader";
import Card from "./Card";

const HOme = () => {
  const animationTimeline = new TimelineLite({ paused: true });
  return (
    <>
      <div className={styles["container"]}>
        {/* home top section */}
        <section className={styles["home-top"]}>
          <h1>web developer.</h1>
          <div className={styles["intro-div"]}>
            <div className={styles["row"]}>
              {/* I might replace this with the section header component */}
              <h3>VICTOR VON DOOM</h3>
              <h1>Self taught web developer</h1>
              <p>
                It was late 2019 that I decided to pursue a career in the
                software development industry and become a web developer. Since
                then I've had my ups and downs, made sacrifices and I've
                persevered. This is how badly I want to write code for a living.
              </p>
              <span>
                <a href="/#">View Projects</a> or <a href="/#">Read About Me</a>
              </span>
            </div>
          </div>
        </section>
        {/* fixed bottom section */}
        <div className={styles["fixed-bottom"]}>
          <a className={styles["envelope"]} href="/#">
            M <span>contact me</span>
          </a>
          {/* this will stay hidden until the page has reached a certain point */}
          <a className={styles["scroll-up"]} href="/#">
            U
          </a>
        </div>
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
            />
            <Card
              timeline="2017"
              projectName="Tripo -- responsive eCommerce website design"
              imgURL={null}
              height={800}
              more="View Case Study"
            />
            <Card
              timeline="2017"
              projectName="Symbiyo -- responsive website design"
              imgURL={null}
              height={800}
              more="View Case Study"
            />
            <Card
              timeline="2016 - 2018"
              projectName="DVD -- online platform & website design"
              imgURL={null}
              height={800}
              more="View Case Study"
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
            />
            <Card
              timeline="2021 - PRESENT"
              projectName="Berserk Tribute -- responsive eCommerce website design"
              imgURL={null}
              height={500}
              more="View My Progress"
            />
          </div>
        </section>
        {/* contact section */}
        <section className={styles["contact-me"]}>
          <h3>NEED A WED DEVELOPER ?</h3>
          <a href="/#">
            <h1>Let's work together -{">"}</h1>
          </a>
        </section>
        {/* footer */}
      </div>
    </>
  );
};

export default HOme;
