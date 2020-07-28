import React, { Component } from "react";

class Projects extends Component {
  state = {};

  componentDidMount() {}

  getAllProjects() {
    // fetch req
    let allProjects = [];
    for (let project of projects) {
      allProjects.push(<h1>{project.name}</h1>);
    }
    return allProjects;
  }

  render() {
    return (
      <>
        <h1> These are my projects</h1>
        
        <div>{this.getAllProjects()}</div>
      </>
    );
  }
}