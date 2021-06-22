import React from "react";
import styles from "./slideshowStyle.module.css";

function Slideshow() {
  const imagesArray = [
    "undraw_developer_activity_bv83.svg",
    "undraw_fixing_bugs_w7gi.svg",
    "undraw_mobile_development_8gyo.svg",
    "undraw_programming_2svr.svg",
    "undraw_react_y7wq.svg",
    "undraw_shared_workspace_hwky.svg",
    "undraw_static_assets_rpm6.svg",
    "undraw_work_together_h63l.svg",
  ];

  return (
    // sideshow container
    <div className={styles["container"]}>
      {/* full-width images with number and caption text */}
      {imagesArray.map((val, index, array) => {
        return (
          <div key={val + index} className={styles["slides fade"]}>
            <div className={styles["slide-number"]}>
              {index + 1} / {array.length}
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/assets/${val}`}
              alt="slideshow illustrations"
            />
          </div>
        );
      })}
      {/* next and previous buttons */}
      <button className={styles["btn prev"]}>&#10094;</button>
      <button className={styles["btn next"]}>&#10095;</button>
      <div className={styles["dots"]}>
        {imagesArray.map((el, index) => {
          return (
            <span key={"dot" + (index + 1)} className={styles["dot"]}></span>
          );
        })}
      </div>
    </div>
  );
}

export default Slideshow;
