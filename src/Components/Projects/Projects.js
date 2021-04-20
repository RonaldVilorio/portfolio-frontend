import React, { Component } from "react";
import styles from "./Projects.module.css";

class Projects extends Component {
  
  state = {
    projects: [
      {
        name: "calculator",
        imageUrl: "https://photos.app.goo.gl/Dgh2CHCtuVRxjCnA6",
        alt: "calculator picture",
      },
    ],
  };
  render() {
    return (
      <>
        <div className={`${styles.projectsContainer}`}>
          <h1> These are my projects</h1>
          <div>
            {this.state.projects.length > 0 &&
              this.state.projects.map((proj, id) => {
                return (
                  <div key={id} className={styles.projectCard}>
                    <div>{proj.name}</div>
                    {console.log("hey")}
                    <img src={proj.imageUrl} width="300" alt={proj.alt} />
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
