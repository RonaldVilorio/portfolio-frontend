import React, { Component } from "react";
import styles from "./Projects.module.css";
import axios from "axios";

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
  componentDidMount() {
    axios
      .get(
        "https://photoslibrary.googleapis.com/v1/albums/APlRZ9VEphrEKWcTU1LVEmtKGzHhTLXG3TVk370RK4Sbf7yfwwaYg8GU1AZsz7HFb7thfR-c7jLd"
      )
      .then((resp) => {
        console.log(resp.data);
      });
  }
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
