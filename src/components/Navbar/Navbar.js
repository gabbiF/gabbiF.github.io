// Navbar.js
import React from "react";
// import { Link } from 'react-router-dom';
import "../../index.css";
import Toggle from "./../toggle";
import { Link } from "react-router-dom";

function Navbar() {
  const linkStyle = {
    textDecoration: "none",
    color: "hsl(var(--foreground))",
    fontSize: "1.2rem",
    transition: "color 0.3s ease",
    display: "flex",
  };

  return (
    <nav>
      <ul>
        <li style={{}}>
          <Toggle />
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li className="resume">
          <Link to="/resume" style={linkStyle}>
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
