import React from "react";
import styles from "./styles.module.css";

export default function HomeSection() {
  return (
    <section className={styles.home_section} id="home">
      <div className={styles.pedro}>
        <h1>Pedro</h1>
        <h1>Silva</h1>
      </div>
      <h1 className={styles.subtitle}>Olá Mundo! Eu sou</h1>
      <h1 className={styles.title}>Desenvolvedor FullStack</h1>
      <div className={styles.buttons_wrapper}>
        <a
          href="https://github.com/GDF97"
          target="_blank"
          className={styles.button}
        >
          GitHub
        </a>
        <a
          href="https://github.com/GDF97"
          target="_blank"
          className={styles.button}
        >
          Linkedin
        </a>
      </div>
    </section>
  );
}
