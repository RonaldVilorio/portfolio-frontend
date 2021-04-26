import React, { Component } from "react";
import styles from "./Projects.module.css";
import calculator from "../../assets/calculator.jpg";
import mario from "../../assets/mario.jpg";
import notFlix from "../../assets/notFlix.jpg";

class Projects extends Component {
  state = {
    projects: [
      {
        name: "calculator",
        imageUrl: `${calculator}`,
        alt: "calculator image",
      },
      {
        name: "mario",
        imageUrl: `${mario}`,
        alt: "mario image",
      },
      {
        name: "notFlix",
        imageUrl: `${notFlix}`,
        alt: "notFlix image",
      },
    ],
  };
  componentDidMount() {}
  render() {
    return (
      <>
        <div className={`${styles.projectsContainer}`}>
          <div>
            {this.state.projects.length > 0 &&
              this.state.projects.map((proj, id) => {
                return (
                  <div key={id} className={styles.projectCard}>
                    <div>{proj.name}</div>
                    <img src={proj.imageUrl} width="300" height="200" alt={proj.alt} />
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
