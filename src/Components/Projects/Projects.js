import React, { Component } from "react";
import styles from "./Projects.module.css";

class Projects extends Component {
  state = {
    projects: [],
    dataLoaded: false,
  };

  componentDidMount() {
    fetch("http://34.221.5.234:3030/projects")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        this.setState({
          projects: res,
          dataLoaded: true,
        });
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
                    <img src={proj.imageurl} width="300" alt="pics" />
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
