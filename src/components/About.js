import React, { useEffect } from "react";
import styles from "./aboutStyle.module.css";
import Footer from "./Footer";
import GoToTop from "./GoToTop";
import Slideshow from "./Slideshow";
import { gsap, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const introLinesRef = [];
  const skillsRef = [];

  useEffect(() => {
    const tween = gsap.timeline();
    tween.staggerFrom(
      introLinesRef,
      0.8,
      { autoAlpha: 0, y: 20, ease: "power3.out" },
      0.4
    );
    gsap.from(skillsRef[0], {
      scrollTrigger: { trigger: skillsRef[0] },
      duration: 0.8,
      y: 100,
      autoAlpha: 0,
    });
    gsap.from(skillsRef[1], {
      scrollTrigger: { trigger: skillsRef[1] },
      duration: 0.8,
      y: 80,
      autoAlpha: 0,
    });
  }, []);
  return (
    <>
      <div className={styles["container"]}>
        <h3
          ref={(line1) => {
            introLinesRef.push(line1);
          }}
          className={styles["subtitle"]}
        >
          A LITTLE ABOUT ME
        </h3>
        <h2
          ref={(line2) => {
            introLinesRef.push(line2);
          }}
          className={styles["title"]}
        >
          Yo, I’m Sizwe Malobola a self-taught, self-directed and
          self-discipline web developer. It’s surreal when I look back to when I
          started to learn web development. At the time I didn’t understand what
          functions, loops and data structures were but now I can build a
          responsive fullstack website and put it on the internet for people to
          experience.
        </h2>
        <p
          ref={(line3) => {
            introLinesRef.push(line3);
          }}
          className={styles["content"]}
        >
          I’m currently focusing on the frontend of web development. I’m also
          not a stranger to the backend, I’ve worked with Ruby & Ruby on Rails
          and I’m currently using Firebase a BAAS when I build fullstack
          websites. I’ve taken an interest in Node, Express and Mongo and I will
          be picking them up for my projects in the future. What motivates me to
          keep pursuing a career in web development might be call intuition but
          I have a strong feeling that it’s something I’m supposed to be doing
          it’s also the right fit for my personality type, I enjoy it and I find
          it fulfilling. I believe that learning how to programme has helped me
          grow as an individual and bestowed to me important life lessons. I’ve
          learned how to think critically & logically, collaborate with
          different people from different walks of life and overcome obstacles
          that seem unsurmountable at first glance. Perhaps the most important
          lesson I’ve learned is that I shouldn’t fear failure. I spend most of
          my days reading docs, building projects, engaging in deliberate
          practice and honing my craft. I’m finally at the stage where I can
          build and collaborate meaningfully on real world projects. I’ve grown
          as a lot a developer by myself, now it’s time I learned from those
          much wiser than me. Whomever ends up giving me an opportunity to work
          and grow besides them will not regret taking their chance on me.
        </p>
        <Slideshow />
        <section className={styles["skills"]}>
          <div
            ref={(div1) => {
              skillsRef.push(div1);
            }}
          >
            <h2>Programming languages</h2>
            <div>
              <h3>HTML</h3>
            </div>
            <div>
              <h3>CSS</h3>
            </div>
            <div>
              <h3>SASS</h3>
            </div>
            <div>
              <h3>JavaScript</h3>
            </div>
            <div>
              <h3>Ruby</h3>
            </div>
          </div>
          <div
            ref={(div2) => {
              skillsRef.push(div2);
            }}
          >
            <h2>Frameworks, Libraries & Tools</h2>
            <div>
              <h3>ReactJS</h3>
            </div>
            <div>
              <h3>Redux</h3>
            </div>
            <div>
              <h3>Ruby On Rails</h3>
            </div>
            <div>
              <h3>Bootstrap 4 & 5</h3>
            </div>
            <div>
              <h3>MySQL</h3>
            </div>
            <div>
              <h3>Git & GitHub</h3>
            </div>
            <div>
              <h3>Jest</h3>
            </div>
            <div>
              <h3>JQuery</h3>
            </div>
            <div>
              <h3>Webpack</h3>
            </div>
            <div>
              <h3>NPM</h3>
            </div>
            <div>
              <h3>Heroku</h3>
            </div>
            <div>
              <h3>Firebase</h3>
            </div>
            <div>
              <h3>VS Code</h3>
            </div>
            <div>
              <h3>Figma</h3>
            </div>
            <div>
              <h3>Chrome Developer Tools</h3>
            </div>
          </div>
        </section>
        <Footer />
      </div>
      <GoToTop />
    </>
  );
}

export default About;
