import React from "react";
import styles from "./aboutStyle.module.css";
import Footer from "./Footer";
import GoToTop from "./GoToTop";

function About() {
  return (
    <>
      <div className={styles["container"]}>
        <h3 className={styles["subtitle"]}>A LITTLE ABOUT ME</h3>
        <h2 className={styles["title"]}>
          Yo, I’m Sizwe Malobola a self-taught, self-directed and
          self-discipline web developer. It’s surreal when I look back to when I
          started to learn web development. At the time I didn’t understand what
          functions, loops and data structures were but now I can build a
          responsive fullstack website and put it on the internet for people to
          experience
        </h2>
        <p className={styles["content"]}>
          I’m currently focusing on the frontend of web development. I’m also
          not a stranger to the backend, I’ve worked with Ruby & Ruby on Rails
          and I’m currently using Firebase a BAAS when I build fullstack
          websites. I’ve taken an interest in Node, Express and Mongo and I will
          be picking them up for my projects in the future. What motives me to
          keep pursuing a career in web development might be call intuition but
          I have a strong feeling that it’s something I’m supposed to be doing
          it’s also the right fit for my personality type, I enjoy it and I find
          it fulfilling. I believe that learning how to programme has helped me
          grow as an individual and bestowed to me important life lessons. I’ve
          learned how think critically & logically, collaborate with other
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
        <div className={styles["stack-grid"]}>
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>React</div>
        </div>
        <Footer />
      </div>
      <GoToTop />
    </>
  );
}

export default About;
