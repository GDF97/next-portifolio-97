"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function Navbar() {
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollDistance(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.header_items_wrapper}>
        <a
          href="#home"
          className={
            scrollDistance < 900
              ? styles.header_items_active
              : styles.header_items
          }
        >
          Home
        </a>
        <a
          href="#projects"
          className={
            scrollDistance < 2100 && scrollDistance >= 900
              ? styles.header_items_active
              : styles.header_items
          }
        >
          Projetos
        </a>
        <a
          href="#hability"
          className={
            scrollDistance < 2800 && scrollDistance >= 2150
              ? styles.header_items_active
              : styles.header_items
          }
        >
          Habilidades
        </a>
      </div>
    </header>
  );
}
