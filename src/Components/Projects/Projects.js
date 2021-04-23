import React, { Component } from "react";
import styles from "./Projects.module.css";
import createApi from "unsplash";
// import axios from "axios";
// uninstall axios

class Projects extends Component {
  state = {
    projects: [
      {
        name: "calculator",
        imageUrl: "",
        alt: "calculator picture",
      },
    ],
  };
  componentDidMount() {
    console.log(createApi, "HEHEEHE");
    const unsplash = createApi({
      accessKey: "",
      headers: { extrastring: "foo" },
    });

    // console.log(unsplash);
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
