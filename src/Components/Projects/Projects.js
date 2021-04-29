import React, { Component } from "react";
import styles from "./Projects.module.css";
import calculator from "../../assets/calculator.jpg";
import mario from "../../assets/mario.jpg";
import notFlix from "../../assets/notFlix.jpg";
import underConstruction from "../../assets/under_construction.jpg";
class Projects extends Component {
  state = {
    projects: [
      {
        name: "Calculator C",
        imageUrl: `${calculator}`,
        alt: "calculator image",
        github: "https://github.com/RonaldVilorio/calculator",
      },
      {
        name: "Mario Activate",
        imageUrl: `${mario}`,
        alt: "mario image",
        github: "https://github.com/RonaldVilorio/mario",
        website: "https://www.ronviloriogames.xyz/",
      },
      {
        name: "NotFlix",
        imageUrl: `${notFlix}`,
        alt: "notFlix image",
        github: "https://github.com/RonaldVilorio/searchMovies",
      },
      {
        name: "NA",
        imageUrl: `${underConstruction}`,
        alt: "NA image",
        github: "",
      },
      {
        name: "NA",
        imageUrl: `${underConstruction}`,
        alt: "NA image",
        github: "",
      },
      {
        name: "NA",
        imageUrl: `${underConstruction}`,
        alt: "NA image",
        github: "",
      },
    ],
  };
  componentDidMount() {}
  render() {
    return (
      <>
        <div className={styles.projectsContainer}>
          <div className={styles.projectCardsContainer}>
            {this.state.projects.length > 0 &&
              this.state.projects.map((proj, id) => {
                return (
                  <div key={id} className={styles.projectCard}>
                    {}
                    <div>
                      {proj.name} | <a href={proj.github}>GitHub</a> |{" "}
                      <a href={proj.website}>Website</a>
                    </div>
                    <img src={proj.imageUrl} alt={proj.alt} />
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}
export default Projects;
