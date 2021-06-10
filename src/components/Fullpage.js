import React, { useEffect, useRef } from "react";
import styles from "./fullpageStyle.module.css";
import { gsap } from "gsap";
import { TweenLite, TimelineLite } from "gsap/gsap-core";

const Fullpage = () => {
  const logo = useRef();
  const listRef = [];
  const tl = new TimelineLite({ paused: true });
  useEffect(() => {
    tl.to(logo.current, { duration: 2, autoAlpha: 0, scale: 8 })
      .from(`.${styles["home"]} > p`, {
        x: -500,
        duration: 2,
        autoAlpha: 0,
        ease: "back",
      })
      .from(`.${styles["home"]} > button`, {
        y: -500,
        x: 500,
        duration: 2,
        rotate: 720,
        ease: "back",
        autoAlpha: 0,
      })
      .staggerFrom(listRef, 1, { y: 500, autoAlpha: 0, ease: "back" }, 0.1)
      .play();
  }, []);
  return (
    <>
      <div className={`section ${styles["home"]} ${styles["center"]}`}>
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "green",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
          ref={logo}
        >
          <h1>Logo</h1>
        </div>
        <p>Section 1 (welcome to fullpage.js)</p>
        <button>Click me to move down</button>
        <ul>
          {[
            "steve",
            "jimmy lee",
            " curtis jackson",
            "tobbie",
            "Sam",
            "Phillion",
          ].map((val, index) => {
            return (
              <li
                key={val + index}
                ref={(i) => {
                  listRef[index] = i;
                }}
              >
                {val}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Fullpage;
