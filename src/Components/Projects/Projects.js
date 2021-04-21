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
  componentDidMount(){
    // https://photos.google.com/share/AF1QipOYvuTyCKMU5RKtjKENFYJir-Hsf_fiuREUWz2oAbFc03I4N2Hx9aFyuNd1HyMwng?key=ODgxQzVMX0pseU5XMzA4T0N5Mi02ZTJLZFJFN1dR
    
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
