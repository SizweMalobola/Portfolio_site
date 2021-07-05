import React, { useEffect } from "react";
import styles from "./homeStyle.module.css";
import { gsap, ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import Card from "./Card";
import Footer from "./Footer";
import GoToTop from "./GoToTop";
import data from "../data.json";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  let showcaseRef = null;
  let introLinesRef = [];
  let contactMeRef = null;
  const myTween = gsap.timeline();
  useEffect(() => {
    if (showcaseRef) {
      myTween
        .from(showcaseRef, 0.8, {
          autoAlpha: 0,
          scale: 1,
          color: "gray",
        })
        .staggerFrom(
          introLinesRef,
          0.8,
          { autoAlpha: 0, y: 60, ease: "power3.out" },
          0.15
        );
    } else {
      myTween.staggerFrom(
        introLinesRef,
        0.8,
        { autoAlpha: 0, y: 60, ease: "power3.out" },
        0.15
      );
    }
    gsap.from(contactMeRef, {
      scrollTrigger: { trigger: contactMeRef },
      duration: 0.8,
      y: 130,
      autoAlpha: 0,
    });
  }, []);
  return (
    <>
      <div className={styles["container"]}>
        {/* home top section */}
        <h1 ref={(h1) => (showcaseRef = h1)} className={styles["showcase"]}>
          web developer.
        </h1>
        <section className={styles["home-top"]}>
          <div className={styles["intro-div"]}>
            <div className={styles["row"]}>
              <h3 ref={(line1) => introLinesRef.push(line1)}>SIZWE MALOBOLA</h3>
              <h1 ref={(line2) => introLinesRef.push(line2)}>
                Self taught web developer
              </h1>
              <p ref={(line3) => introLinesRef.push(line3)}>
                2019 was the year I decided to teach myself how to programme.
                Now I'm finally at a place where I can contribute meaningfully
                to building amazing user interfaces & web experiences for
                people. Don’t take my word for it, go through my portfolio and
                judge for yourself.
              </p>
              <span ref={(line4) => introLinesRef.push(line4)}>
                <span
                  onClick={() => {
                    window.scrollTo({ top: 1000, behavior: "smooth" });
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
            {data.map((obj, index) => {
              return (
                <Card
                  key={index + obj.id}
                  timeline="2021"
                  projectName={obj.title}
                  imgURL={obj["assets_url"][0]}
                  height={800}
                  more="View Case Study"
                  id={obj.id}
                />
              );
            })}
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
              id="in_the_works"
            />
            <Card
              timeline="2021"
              projectName="Berserk Tribute"
              imgURL={null}
              height={500}
              more="View My Progress"
              id="in_the_works"
            />
          </div>
        </section>
        {/* contact section */}
        <section
          ref={(section) => {
            contactMeRef = section;
          }}
          className={styles["contact-me"]}
        >
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
