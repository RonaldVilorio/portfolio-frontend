import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/About">About Me</Link>
      <Link to="/Projects">Projects</Link>
    </div>
  );
};

export default Navbar;
