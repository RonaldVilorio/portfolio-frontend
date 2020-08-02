import React, { Component } from "react";
import "./Projects.css";

class Projects extends Component {
  state = {
    projects: [],
    dataLoaded: false,
  };

  componentDidMount() {
    fetch("http://localhost:3030/projects")
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
        <h1> These are my projects</h1>
        <div className="projectsContainer">
          {this.state.projects.length > 0 &&
            this.state.projects.map((proj, id) => {
              return (
                <div key={id} className="project-card">
                  <div>{proj.name}</div>
                  <img src={proj.imageurl} width="300" alt="pics" />
                </div>
              );
            })}
        </div>
      </>
    );
  }
}
export default Projects;
