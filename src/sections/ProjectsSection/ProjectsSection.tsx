import React from "react";
import styles from "./styles.module.css";
import ProjectCard from "@/components/Project-card";

export default function ProjectsSection() {
  return (
    <section className={styles.projects_section} id="projects">
      <h1>Projetos</h1>
      <div className={styles.projects_wrapper}>
        <ProjectCard
          title="GoodMovies97"
          description="Um website que faz o display de filmes, consumindo a API do TMDB"
          stacks={["REACT", "TS", "SCSS", "API"]}
          image="https://raw.githubusercontent.com/GDF97/good-movie-97/main/public/image-1.png"
        />
        <ProjectCard
          title="REST Countries API"
          description="Um website que faz o display de países, consumindo uma API"
          stacks={["REACT", "TS", "SCSS", "API"]}
          image="https://raw.githubusercontent.com/GDF97/Rest-API-Countries/main/src/assets/design/desktop-design-home-dark.jpg"
        />
        <ProjectCard
          title="VintageFilmVault"
          description="Atividade Diagnostica de PW3/PAMII"
          stacks={[
            "REACT",
            "TS",
            "SCSS",
            "PHP",
            "MySQL",
            "ReactNative",
            "AXIOS",
            "StyledComponents",
          ]}
          image=""
        />
        <ProjectCard
          title="FrontEndMentor-Display"
          description="Display de alguns dos meus projetos que fiz do FrontEndMentor"
          stacks={["REACT", "CSS"]}
          image=""
        />
        <ProjectCard
          title="TodoList-FullStack"
          description="TodoList com React e PHP"
          stacks={["REACT", "TailwindCSS", "PHP", "MySQL"]}
          image="https://raw.githubusercontent.com/GDF97/React-com-PHP/main/TodoListRealApplication/images/imagem3.png"
        />
        <ProjectCard
          title="Japan Landing Page"
          description="Landing Page realizada quando eu estava no 2°ANO"
          stacks={["HTML", "CSS", "JS"]}
          image=""
        />
        <ProjectCard
          title="Projeto K31"
          description="Projeto do 2°ANO"
          stacks={["HTML", "CSS", "JS", "PHP", "MySQL"]}
          image=""
        />
      </div>
    </section>
  );
}
