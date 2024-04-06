import React from "react";

import styles from "./styles.module.css";

export default function HabilitySection() {
  return (
    <section className={styles.hability_section} id="hability">
      <h1>Habilidades</h1>
      <div className={styles.hability_wrapper}>
        <div className={styles.hability}>
          <p>Linguagens & Frameworks/Bibliotecas</p>
          <div className={styles.habilities_items_wrapper}>
            <div className={styles.hability_item} id={styles.orange}>
              <p>HTML</p>
            </div>
            <div className={styles.hability_item} id={styles.blue}>
              <p>CSS</p>
            </div>
            <div className={styles.hability_item} id={styles.pink}>
              <p>SASS</p>
            </div>
            <div className={styles.hability_item} id={styles.blue}>
              <p>Tailwind CSS</p>
            </div>
            <div className={styles.hability_item} id={styles.yellow}>
              <p>Javascript</p>
            </div>
            <div className={styles.hability_item} id={styles.blue}>
              <p>Typescript</p>
            </div>
            <div className={styles.hability_item} id={styles.purple}>
              <p>PHP</p>
            </div>
            <div className={styles.hability_item} id={styles.blue}>
              <p>MySQL</p>
            </div>
            <div className={styles.hability_item} id={styles.blue}>
              <p>React</p>
            </div>
            <div className={styles.hability_item} id={styles.blue}>
              <p>ReactNative</p>
            </div>
            <div className={styles.hability_item} id={styles.gray}>
              <p>Next</p>
            </div>
          </div>
        </div>
        <div className={styles.hability}>
          <p>Ferramentas</p>
          <div className={styles.habilities_items_wrapper}>
            <div className={styles.hability_item} id={styles.orange}>
              <p>GIT</p>
            </div>
            <div className={styles.hability_item} id={styles.blue}>
              <p>GitHub</p>
            </div>
            <div className={styles.hability_item} id={styles.pink}>
              <p>VSCode</p>
            </div>
            <div className={styles.hability_item} id={styles.blue}>
              <p>Visual Studio</p>
            </div>
            <div className={styles.hability_item} id={styles.yellow}>
              <p>Figma</p>
            </div>
            <div className={styles.hability_item} id={styles.blue}>
              <p>Vercel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
