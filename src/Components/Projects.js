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

  getAllProjects() {
    // fetch req
    // let allProjects = [];
    // for (let project of projects) {
    //   allProjects.push(<h1>{project.name}</h1>);
    // }
    // return allProjects;
  }

  render() {
    return (
      <>
        <h1> These are my projects</h1>
        {/* add className projectCard */}
        {/* add classes for each individual ele */}
        {this.state.projects.length > 0 &&
          this.state.projects.map((proj, id) => {
            return (
              <div key={id} className="project-card">
                <div>{proj.name}</div>
                <img src={proj.imageurl} alt="pics" />
              </div>
            );
          })}
        
      </>
    );
  }
}
export default Projects;
