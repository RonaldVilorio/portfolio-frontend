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
      },
      {
        name: "Mario Activate",
        imageUrl: `${mario}`,
        alt: "mario image",
      },
      {
        name: "NotFlix",
        imageUrl: `${notFlix}`,
        alt: "notFlix image",
      },
      {
        name: "NotFlix",
        imageUrl: `${underConstruction}`,
        alt: "NA image",
      },
      {
        name: "NotFlix",
        imageUrl: `${underConstruction}`,
        alt: "NA image",
      },
      {
        name: "NotFlix",
        imageUrl: `${underConstruction}`,
        alt: "NA image",
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
                    <div>{proj.name}</div>
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
