import React, { useEffect } from "react";
import styles from "./fullpageStyle.module.css";
import ReactFullpage from "@fullpage/react-fullpage";
import { gsap } from "gsap";

const Fullpage = () => {
  useEffect(() => {
    gsap.to("#logo", { duration: 2, opacity: 0, scale: 8 });
    gsap.from(`.${styles["home"]} > div p`, {
      x: -500,
      duration: 2,
      opacity: 0,
      ease: "back",
    });
    gsap.from(`.${styles["home"]} > div button`, {
      y: -500,
      x: 500,
      delay: 3,
      duration: 2,
      rotate: 720,
      ease: "back",
      opacity: 0,
    });
    // gsap.registerPlugin(ScrollTrigger);
  }, []);
  return (
    <>
      <ReactFullpage
        //fullpage options
        licenseKey={null}
        scrollingSpeed={1000} /* Options here */
        navigation={true}
        navigationTooltips={["Home"]}
        controlArrows={false}
        slidesNavigation={true}
        render={({ state, fullpageApi }) => {
          console.log(state, fullpageApi);
          return (
            <ReactFullpage.Wrapper>
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
                  id="logo"
                >
                  <h1>Logo</h1>
                </div>
                <p>Section 1 (welcome to fullpage.js)</p>
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  Click me to move down
                </button>
              </div>
              <div className={`section ${styles["s2"]} ${styles["center"]}`}>
                <p>Section 2</p>
              </div>
              <div className={`section ${styles["s3"]}`}>
                <div className={`slide ${styles["sl1"]} ${styles["center"]}`}>
                  <h1>slide 1</h1>
                </div>
                <div className={`slide ${styles["sl2"]} ${styles["center"]}`}>
                  <h1>slide 2</h1>
                </div>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default Fullpage;
