import React from "react";
import styles from "./Home.module.css";
import image from "../../assets/ron2.jpg";

const Home = () => {
  return (
    <>
      <div className={styles.homeContainer}>
        <img src={image} alt="profile pic" />{" "}
        <p>
          Hey welcome to my personal site my name is Ronald Vilorio and I'm a
          Full Stack Web Developer
        </p>
      </div>
    </>
  );
};

export default Home;
