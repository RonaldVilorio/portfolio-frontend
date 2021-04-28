import React, { Component } from "react";
import styles from "./Home.module.css";
import image from "../../assets/ron2.jpg";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.homeContainer}>
        <div className={styles.topSide}>
          <div className={styles.profileImage}>
            <img src={image} alt="profile pic" />{" "}
          </div>
        </div>
        <div className={styles.bottomSide}>
          <p>
            Hey welcome to my personal site my name is Ronald Vilorio and I'm a
            Full Stack Web Developer
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
