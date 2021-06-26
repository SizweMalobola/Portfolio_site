import React, { useEffect } from "react";
import styles from "./contactStyle.module.css";
import Footer from "./Footer";
import { FaRegEnvelope } from "react-icons/fa";
import GoToTop from "./GoToTop";
import { gsap, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const sectionsRef = [];
  useEffect(() => {
    const letters = document.querySelectorAll(`.${styles["letter"]}`);
    if (letters) {
      gsap.from(letters, {
        duration: 0.8,
        autoAlpha: 0,
        y: "random(-40,40)",
        stagger: 0.25,
      });
    }
    gsap.from(sectionsRef[0], {
      scrollTrigger: {
        trigger: sectionsRef[0],
      },
      duration: 0.8,
      y: 200,
      autoAlpha: 0,
    });
    gsap.from(sectionsRef[1], {
      scrollTrigger: {
        trigger: sectionsRef[1],
      },
      duration: 0.8,
      y: 200,
      autoAlpha: 0,
    });
  }, []);

  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["contact-top"]}>
          <div className={styles["map"]}>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1864263.8401115676!2d25.854856614886504!3d-24.131710078219147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eeab287cfbe2fa3%3A0x51044edbf66e6a3!2sBronkhorstspruit!5e0!3m2!1sen!2sza!4v1623752436625!5m2!1sen!2sza"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <div className={styles["letters-grid"]}>
              <div className={styles["letter"]}>L</div>
              <div className={styles["letter"]}>E</div>
              <div className={styles["letter"]}>T'</div>
              <div className={styles["letter"]}>S</div>
              <div className={styles["letter"]}>W</div>
              <div className={styles["letter"]}>O</div>
              <div className={styles["letter"]}>R</div>
              <div className={styles["letter"]}>K</div>
              <div className={styles["letter"]}>T</div>
              <div className={styles["letter"]}>O</div>
              <div className={styles["letter"]}>G</div>
              <div className={styles["letter"]}>E</div>
              <div className={styles["letter"]}>T</div>
              <div className={styles["letter"]}>H</div>
              <div className={styles["letter"]}>E</div>
              <div className={styles["letter"]}>R</div>
            </div>
          </div>
        </div>
        <div className={styles["contact-info"]}>
          <div
            ref={(left) => {
              sectionsRef.push(left);
            }}
            className={styles["left"]}
          >
            <h3>CONTACT</h3>
            <h2>Get in touch - let's work together.</h2>
          </div>
          <div
            ref={(right) => {
              sectionsRef.push(right);
            }}
            className={styles["right"]}
          >
            <p>
              Got a project? Drop me a line if you want to work together on
              something exciting. Big or small. Mobile or web.
            </p>
            <form
              action="https://getform.io/f/ab080a1b-80d2-44a6-b9c6-b3e45de32231"
              method="POST"
            >
              <div className={styles["input-div"]}>
                <label htmlFor="#name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="What's your name?"
                  required
                />
              </div>
              <div className={styles["input-div"]}>
                <label htmlFor="#email">Your Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="What's your email address?"
                  required
                />
              </div>
              <div className={styles["input-div"]}>
                <label htmlFor="#dropdown1">CV/Resume</label>
                <select id="dropdown1" name="resume dropdown" required>
                  <option value="no">Want a copy of my resume?</option>
                  <option value="yes">Yes</option>
                  <option value="no">Yesn't</option>
                </select>
              </div>
              <div className={styles["input-div"]}>
                <label htmlFor="#dropdown2">Services</label>
                <select
                  id="dropdown2"
                  name="services dropdown"
                  placeholder="choose here"
                  required
                >
                  <option value="nothing">What are you interested in?</option>
                  <option value="once-off">
                    Need help with a once-off project
                  </option>
                  <option value="partnership">
                    Looking for a long term partnership
                  </option>
                  <option value="full-time">Want to hire me full-time</option>
                  <option value="hey!">Just wanted to say Hey!</option>
                </select>
              </div>
              <div className={styles["input-div"]}>
                <label htmlFor="#message">Message</label>
                <input
                  id="message"
                  type="text"
                  placeholder="What's your message?"
                  name="message"
                />
              </div>
              <button type="submit" name="submit" className={styles["button"]}>
                <FaRegEnvelope />
                Send message
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
      <GoToTop />
    </>
  );
}

export default Contact;
