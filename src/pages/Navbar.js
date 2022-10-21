import React from "react";
import { NavLink } from "react-router-dom";

// Navigation to each individual page
function NavBar(props) {
  return (
    <div className="row navigation" id="navbar">
      <NavLink to="/about">About</NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/resume">Resume</NavLink>
    </div>
  );
}

export default NavBar;