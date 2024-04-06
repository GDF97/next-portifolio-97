import React from "react";

import styles from "./styles.module.css";
import { StaticImageData } from "next/image";

type PropsType = {
  title: string;
  description: string;
  stacks: Array<string>;
  image: string;
};

export default function ProjectCard({
  title,
  description,
  stacks,
  image,
}: PropsType) {
  return (
    <div className={styles.card_body}>
      <div className={styles.classe_Teste}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>
          {stacks &&
            stacks.map((stack, index) => (
              <React.Fragment key={index}>
                {stacks[stacks.length - 1] != stack ? `${stack} -` : stack}{" "}
              </React.Fragment>
            ))}
        </p>
      </div>
      <img src={image} alt="" className={styles.image_project} />
    </div>
  );
}
