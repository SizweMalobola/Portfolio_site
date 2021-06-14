import React from "react";
import ReactDOM from "react-dom";
import styles from "./modalStyle.module.css";
import { Link } from "react-router-dom";

function ModalPortal({ closeModal }) {
  return ReactDOM.createPortal(
    <div onClick={closeModal} className={styles["container"]}>
      <main>
        <h3>MENU</h3>
        <Link to="/">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </main>
      <footer>
        <span>&copy; 2021 Sizwe Malobola.Go forth, be conquered.</span>
      </footer>
    </div>,
    document.getElementById("modal-root")
  );
}

export default ModalPortal;
