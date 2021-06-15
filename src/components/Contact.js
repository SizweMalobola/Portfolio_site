import React from "react";
import styles from "./contactStyle.module.css";

function Contact() {
  return (
    <div className={styles["container"]}>
      <div className={styles["contact-top"]}>
        <div className={styles["map"]}>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1864263.8401115676!2d25.854856614886504!3d-24.131710078219147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eeab287cfbe2fa3%3A0x51044edbf66e6a3!2sBronkhorstspruit!5e0!3m2!1sen!2sza!4v1623752436625!5m2!1sen!2sza"
            allowfullscreen=""
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
    </div>
  );
}

export default Contact;
