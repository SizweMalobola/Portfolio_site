import React from "react";
import styles from "./fullpageStyle.module.css";
import ReactFullpage from "@fullpage/react-fullpage";

const Fullpage = () => (
  <>
    <ReactFullpage
      //fullpage options
      licenseKey={null}
      scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }) => {
        console.log(state, fullpageApi);
        return (
          <ReactFullpage.Wrapper>
            <div className={`section ${styles["home"]}`}>
              <p>Section 1 (welcome to fullpage.js)</p>
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button>
            </div>
            <div className={`section ${styles["s2"]}`}>
              <p>Section 2</p>
            </div>
            <div className={`section ${styles["s3"]}`}>
              <p>Section 3</p>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  </>
);

export default Fullpage;
