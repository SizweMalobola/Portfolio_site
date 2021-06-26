import React, { useEffect, useState } from "react";
import styles from "./slideshowStyle.module.css";
import { gsap, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [onHover, setOnHover] = useState(false);
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
  let divRef = null;

  const showSlide = (index) => {
    const slides = document.querySelectorAll(`.${styles["slides"]}`);
    const dots = document.querySelectorAll(`.${styles["dots"]}`);
    if (index > imagesArray.length) {
      return setSlideIndex(1);
    }
    if (index < 1) {
      return setSlideIndex(imagesArray.length);
    }
    slides.forEach((el) => {
      el.style.display = "none";
    });
    dots.forEach((el) => {
      el.classList.remove(`${styles["active"]}`);
    });

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add(`${styles["active"]}`);
  };

  const next = () => {
    setSlideIndex(slideIndex + 1);
  };

  const previous = () => {
    setSlideIndex(slideIndex - 1);
  };

  const current = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    gsap.from(divRef, {
      scrollTrigger: { trigger: divRef },
      duration: 0.8,
      y: 400,
      autoAlpha: 0,
    });
  }, []);

  useEffect(() => {
    showSlide(slideIndex);
    let interval = setInterval(() => {
      next();
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    // sideshow container
    <div
      ref={(div) => {
        divRef = div;
      }}
      onMouseEnter={() => {
        setOnHover(true);
      }}
      onMouseLeave={() => {
        setOnHover(false);
      }}
      className={styles["container"]}
    >
      {/* full-width images with number and caption text */}
      {imagesArray.map((val, index, array) => {
        return (
          <div
            key={val + index}
            className={`${styles["slides"]} ${styles["fade"]}`}
          >
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
      {onHover && (
        <>
          <button
            onClick={previous}
            className={`${styles["btn"]} ${styles["prev"]}`}
          >
            &#10094;
          </button>
          <button
            onClick={next}
            className={`${styles["btn"]} ${styles["next"]}`}
          >
            &#10095;
          </button>
        </>
      )}

      <div className={styles["dots-container"]}>
        {imagesArray.map((el, index) => {
          return (
            <span
              onClick={() => {
                current(index + 1);
              }}
              key={"dot" + (index + 1)}
              className={styles["dots"]}
            ></span>
          );
        })}
      </div>
    </div>
  );
}

export default Slideshow;
